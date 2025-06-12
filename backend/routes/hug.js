import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("hf_xxxxxxxxxxxxxxxxxxxxxxxx");

const chatCompletion = await client.chatCompletion({
    provider: "hf-inference",
    model: "HuggingFaceH4/zephyr-7b-beta",
    messages: [
        {
            role: "user",
            content: "What is the capital of France?",
        },
    ],
});

console.log(chatCompletion.choices[0].message);