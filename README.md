# PrepAI 🚀

AI-Powered Placement Preparation Platform

PrepAI is a modern full stack web application designed to help students prepare for placements using AI-powered tools including aptitude practice, coding challenges, resume analysis, interview preparation, and analytics dashboards.

---

# 🌐 Live Demo

🔗 Live Website: https://your-vercel-app.vercel.app

---

# 🔗 Repository

GitHub Repo: https://github.com/yourusername/prepai

---

# ✨ Features

## 🔐 Authentication
- Secure login/signup using Clerk
- Google authentication
- Protected dashboard routes
- Session management

## 🧠 Aptitude Preparation
- Timed quizzes
- Multiple categories
- Score tracking
- Performance analytics
- Interactive quiz interface

## 💻 Coding Challenges
- Integrated Monaco code editor
- DSA problem solving
- Coding playground
- Syntax highlighting
- Multiple programming language support

## 📄 AI Resume Analyzer
- ATS score generation
- Skill gap analysis
- Resume improvement suggestions
- AI-generated feedback using Gemini API

## 🎤 AI Mock Interview
- AI-generated interview questions
- Answer evaluation
- Interview readiness tracking

## 📊 Analytics Dashboard
- Performance charts
- Quiz analytics
- Coding statistics
- User progress tracking
- Data visualization using Recharts

## ⚡ Modern UI/UX
- Fully responsive design
- Dark theme
- Glassmorphism cards
- Smooth animations using Framer Motion
- Modern dashboard layout
- Interactive components

---

# 🛠️ Tech Stack

## Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Recharts

## Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL

## Authentication
- Clerk Authentication

## AI Integration
- Gemini API

## Database
- Supabase PostgreSQL

## Deployment
- Vercel

---

# 📂 Folder Structure

```bash
placement-platform/
│
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── sign-in/
│   ├── sign-up/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── charts/
│   ├── shared/
│   ├── dashboard/
│   └── ui/
│
├── lib/
│   ├── prisma.ts
│   ├── gemini.ts
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
├── hooks/
├── store/
├── types/
│
├── middleware.ts
├── package.json
├── tsconfig.json
└── README.md