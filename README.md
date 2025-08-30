# Smart AI Knowledge Server

A scalable backend service for the **Smart AI Knowledge Hub**, built with **Node.js, Express, MongoDB, and Redis**.  
This project provides authentication, rate limiting, and secure API endpoints for AI-powered knowledge management.

---

## 🚀 Features
- 🔐 **Authentication & Authorization** (JWT-based)
- 🗄 **MongoDB integration** for persistent storage
- ⚡ **Redis caching** for performance
- 🛡 **Rate Limiting & Error Handling**
- 🧩 Modular structure (controllers, services, middleware)
- 🐳 **Dockerized setup** with MongoDB & Redis
- 🧹 **Linting & Formatting** (ESLint + Prettier)

---

## 📂 Project Structure

miteshpr97-smartai_knowledge_server/
├── README.md
├── docker-compose.yml
├── Dockerfile
├── index.js
├── package.json
├── .env.example
├── .eslintrc.js
├── .prettierrc
│
├── config/ # Database, Redis, Logger configs
├── controllers/ # Request handlers
├── middleware/ # Middlewares (auth, error, rateLimiter)
├── models/ # MongoDB models
├── routes/ # API routes
├── services/ # Business logic
└── utils/ # Helper functions


2️⃣ Setup Environment Variables
cp .env.example .env


Edit .env with your local values.

3️⃣ Run with Docker (Recommended)
docker-compose up --build


Services:

Backend → http://localhost:5000

MongoDB → localhost:27017

Redis → localhost:6379

4️⃣ Run Locally without Docker
npm install
npm run start




🧹 Development Commands
npm run lint       # Check linting
npm run lint:fix   # Fix linting issues
npm run format     # Format code with Prettier
npm start          # Start server





🤝 Contributing

See CONTRIBUTING.md
 for guidelines.

📜 License

MIT License


---

## 📌 CONTRIBUTING.md

```markdown
# Contributing Guidelines

Thank you for your interest in contributing to **Smart AI Knowledge Server** 🎉  

We welcome contributions in the form of:
- Bug reports & fixes
- New features & enhancements
- Documentation improvements
- Test coverage

---

## 🚀 How to Contribute

1. **Fork the repo**
   ```bash
   git fork https://github.com/miteshpr97/smartai_knowledge_server.git
   cd smartai_knowledge_server


Create a new branch

git checkout -b feature/your-feature-name


Install dependencies

npm install


Run linting & formatting before pushing

npm run lint
npm run format


Commit your changes

git commit -m "feat: add new authentication middleware"


Push & Create Pull Request

git push origin feature/your-feature-name