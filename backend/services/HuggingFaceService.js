import { InferenceClient } from "@huggingface/inference";
import { analyzeSentiment } from "./sentimentServices.js";
import logger from "../utils/logger.js";

class HuggingFaceService {
  constructor() {
    this.client = new InferenceClient(process.env.HF_TOKEN);
    this.MODEL = "HuggingFaceH4/zephyr-7b-beta";
    this.CONTEXT_WINDOW = 3; // Last 3 user+assistant pairs
  }

  async generateResponse(messages) {
    try {
      const { contextMessages, lastMessage } = this.prepareContext(messages);

      const response = await this.client.chatCompletion({
        model: this.MODEL,
        messages: [
          {
            role: "system",
            content: `You are a compassionate mental health companion. Follow these rules:
1. Focus on the user's emotional state
2. Reference previous context naturally
3. Ask open-ended questions
4. Never give medical advice

5. Comprehensive, detailed responses
6. Complete explanations
7. Natural paragraph breaks
8. Full sentence structures
9. In-depth support when needed
Current context: ${contextMessages.map((m) => m.content).join(" | ")}`,
          },
          { role: "user", content: lastMessage },
        ],
        parameters: {
          max_new_tokens: 120,
          temperature: 0.7,
          repetition_penalty: 1.5,
          stop_sequences: ["\n", "###"],
        },
      });

      return this.validateResponse(response, messages);
    } catch (error) {
      logger.error("HF API Error:", error);
      return this.contextualFallback(messages);
    }
  }

  prepareContext(messages) {
    const validMessages = messages.filter((m) => m?.content?.trim());
    const contextMessages = validMessages.slice(-this.CONTEXT_WINDOW * 2);
    const lastMessage = validMessages[validMessages.length - 1]?.content || "";

    return {
      contextMessages,
      lastMessage: lastMessage.trim() || "I'm here to listen",
    };
  }

  validateResponse(response, messages) {
    const rawText = response.choices[0]?.message?.content || "";
    let cleaned = rawText
      .replace(/<\/?s>/g, "")
      .replace(/<\|.*?\|>/g, "")
      .replace(/[^a-zA-Z0-9 .,!?'-]/g, "")
      .trim();

    if (!cleaned) {
      logger.warn("Empty response from API");
      return this.contextualFallback(messages);
    }

    // Ensure response ends with proper punctuation
    if (!/[.!?]$/.test(cleaned)) {
      cleaned = cleaned.replace(/[,;]$/, "") + ".";
    }

    return {
      text: cleaned.substring(0, 500),
      raw: rawText,
    };
  }

  contextualFallback(messages) {
    const lastUserMessage =
      messages.filter((m) => m.role === "user").slice(-1)[0]?.content || "";

    const keywords = analyzeSentiment(lastUserMessage).keywords.slice(0, 2);
    const fallback =
      keywords.length > 0
        ? `Let's focus on ${keywords.join(" and ")}. How has this been affecting you?`
        : "Could you share more about what's been on your mind?";

    return {
      text: fallback,
      raw: "Fallback response",
    };
  }
}

export default new HuggingFaceService();
