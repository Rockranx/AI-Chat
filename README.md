# Mental Health Companion App

## Overview
The Mental Health Companion App is a comprehensive platform designed to provide emotional support, crisis resources, mood tracking, and community connection. Built with empathy and accessibility at its core, this application leverages AI-powered chat, geolocation services, and peer support to create a holistic mental wellness ecosystem.



## Key Features

### 1. AI-Powered Emotional Support
- **Intelligent Chat Companion**: Context-aware conversations with emotional intelligence
- **Sentiment Analysis**: Real-time mood detection during conversations
- **Therapeutic Techniques**: Guided exercises like 5-4-3-2-1 grounding method
- **Crisis Intervention**: Automatic detection of urgent needs and resource suggestions

### 2. Crisis Resource Management
- **Geolocated Help Centers**: Find nearby support services with interactive map
- **Emergency Contacts**: One-tap access to crisis hotlines and support networks
- **Resource Library**: Curated self-help materials and coping strategies
- **Safety Planning**: Personalized crisis prevention plans

### 3. Mood & Wellness Tracking
- **Emotional Journal**: Secure diary with sentiment analysis
- **Mood Visualization**: Circular timeline with emotional state gradients
- **Progress Insights**: Pattern recognition and wellness correlations
- **Biometric Integration**: Wearable device compatibility (future development)

### 4. Community Support Hub
- **Anonymous Forum**: Peer-to-peer support with identity protection
- **Moderation System**: AI-assisted content flagging and human moderation
- **Empathy Metrics**: Non-verbal reaction system beyond traditional likes
- **Support Groups**: Themed communities for specific mental health needs

### 5. Personalized User Experience
- **Adaptive Interface**: UI density control based on anxiety levels
- **Accessibility First**: WCAG 2.2 AA compliance with multiple access modes
- **Privacy Vault**: Granular control over data sharing
- **Session Management**: Active device tracking and security controls

## Technical Architecture

### Frontend Technologies
- **Framework**: React 18 with TypeScript
- **State Management**: Jotai/Zustand
- **Styling**: Emotion CSS with adaptive design system
- **Real-time Communication**: WebSockets with Socket.IO fallback
- **Accessibility**: React Aria, Focus Management, Screen Reader Support
- **Data Visualization**: D3.js and Chart.js
- **Maps Integration**: Mapbox GL with OpenStreetMap data

### Backend Technologies
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB Atlas (NoSQL)
- **Authentication**: JWT with session management
- **AI Services**: Hugging Face, OpenRouter API
- **Geocoding**: Geoapify API
- **Security**: Rate limiting, Input sanitization, RBAC
- **Testing**: Jest, Supertest, Postman

### Infrastructure
- **Hosting**: Railway.app (Backend), Vercel (Frontend)
- **Database**: MongoDB Atlas (Shared M0 Cluster)
- **Storage**: Cloudflare R2
- **Monitoring**: BetterStack (free tier)
- **CI/CD**: GitHub Actions

## Installation & Setup

### Backend Installation
```bash
# Clone repository
git clone https://github.com/your-username/mental-health-app.git
cd backend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

### Frontend Installation
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## API Endpoints

### Authentication
| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/register` | POST | Register new user | Public |
| `/api/auth/login` | POST | User login | Public |
| `/api/auth/me` | GET | Get current user | Authenticated |
| `/api/auth/verify-email/:token` | GET | Verify email | Public |

### Chat System
| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/chat/sessions` | POST | Create chat session | User |
| `/api/chat/sessions/:sessionId/messages` | POST | Send message | Session Owner |

### Crisis Resources
| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/crisis/centers` | GET | List crisis centers | Public |
| `/api/crisis/centers/nearby` | GET | Find nearby centers | Public |
| `/api/crisis/centers` | POST | Create crisis center | Admin |

### Community Hub
| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/community/posts` | GET | List posts | Public |
| `/api/community/posts` | POST | Create post | User |
| `/api/community/posts/:id/flag` | POST | Flag content | User |

### Mood Tracking
| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/mood/entries` | POST | Create mood entry | User |
| `/api/mood/entries` | GET | List entries | Owner |

## Frontend Interface

### Core Pages

1. **Dashboard**
   - Personalized greeting with time awareness
   - Mood input dial with pressure sensitivity
   - Quick access to support resources
   - Session continuity visualization

2. **AI Companion Chat**
   - Animated avatar with emotional responsiveness
   - Conversation history with sentiment coloring
   - Therapeutic toolkit sidebar
   - Session encryption indicator

3. **Crisis Resource Map**
   - 3D terrain visualization
   - Safety path routing
   - Emergency contact carousel
   - Interactive grounding exercises

4. **Mood Journal**
   - Voice-to-text journaling
   - Body map emotion tracker
   - Circadian rhythm heatmap
   - Pattern recognition insights

5. **Community Hub**
   - Anonymous identity selector
   - Content warning tagging system
   - Empathy reaction palette
   - Trust score visualization

6. **Profile & Settings**
   - Privacy control dashboard
   - Accessibility lab with UI testing
   - Security fort with session management
   - Integration hub for wearables

## Security Features

- **End-to-End Encryption**: Sensitive data protection
- **RBAC (Role-Based Access Control)**: User, Moderator, Admin tiers
- **Rate Limiting**: Protection against brute force attacks
- **Content Moderation**: AI-assisted flagging system
- **Session Validation**: Device-specific authentication
- **Data Anonymization**: PII protection in community features

## Deployment

### Backend Deployment to Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link project
railway link

# Deploy
railway up
```

### Frontend Deployment to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the [MIT License](LICENSE.md)

---

**Mental Health Companion App** - Providing compassionate support through technology. If you're in crisis, please contact your local emergency services or crisis hotline.