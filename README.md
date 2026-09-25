# 🏋️ FitLog — Workout Library

> **Train with intent. Log every set.**

A dark, no-nonsense gym companion that helps you browse workouts, build your daily plan, and track your training — all in one clean, modern interface.

**🔗 Live Demo:** [https://b14-a06-fit-log-zeta.vercel.app](https://b14-a06-fit-log-zeta.vercel.app)

---

## 📖 Description

FitLog is a full-featured workout management app built with **Next.js 16** and **Tailwind CSS**. Users can explore a library of 12 curated strength-training exercises, view detailed instructions with key specs, and build a personalized daily plan (capped at 5 lifts). Plan and saved data persist across page reloads via **localStorage**, and every action gives instant visual + toast feedback.

The interface follows a bold dark aesthetic with neon-green accents (`#C2F800`), Oswald display headings, and Inter body text — giving it a modern, high-energy gym feel.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router)** | React framework with server components, file-based routing, and optimized builds |
| **React 19** | UI library with modern hooks (`useState`, `useEffect`, `useMemo`, `useContext`) |
| **TypeScript** | Type-safe code with strict mode |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Context API** | Global state for plan + saved workouts |
| **React Toastify** | Elegant toast notifications for user actions |
| **Lucide React** | Clean, consistent icon set |
| **localStorage** | Client-side data persistence |
| **Vercel** | Deployment platform with automatic CI/CD |

---

## ✨ Features (8 Key Features)

### 1. 🎯 Workout Library with API Integration
Browse **12 carefully curated workouts** (Bench Press, Deadlift, Pull-Up, etc.) fetched live from a REST API. Each card shows the workout's image, muscle group tags (CHEST, ARMS, LEGS, CORE...), equipment, duration, calories, and rating.

### 2. 🔍 Detailed Workout Pages
Click any card to view a **two-column detail layout** featuring:
- Large workout image
- Description + muscle group badges
- **7-row spec table** (Equipment, Difficulty, Sets, Reps, Duration, Calories, Rating)
- **Numbered instruction steps** (4 steps per workout)
- Add-to-plan + Save-for-later actions

### 3. 📋 "My Plan" with Live Stats
A dedicated plan page with:
- **Live stats bar** showing total Exercises, Minutes, and Calories
- **Two tabs**: Today's Plan and Saved
- **Sort dropdown** (Duration / Calories / Rating)
- **Action buttons** per item — View Details, Mark as Done, Remove

### 4. 💾 Persistent State (localStorage)
Your plan, saved workouts, and completed workouts **survive page reloads**. No backend login needed — everything is stored client-side and restored on mount.

### 5. 📊 Dynamic Navbar Badges
Two counter badges in the navbar update in real-time:
- **Plan badge** (filled neon-green pill)
- **Saved badge** (outlined pill)
Both link to `/my-plan` for quick access.

### 6. ⚡ Real-Time Toast Notifications
Every action — adding to plan, saving, marking done, removing — triggers a **contextual toast** with dark theme styling (`react-toastify`).

### 7. 🎨 Responsive Design (Mobile-First)
Fully responsive across **mobile (375px), tablet (768px), and desktop (1280px+)**. Grids collapse gracefully, the hero stacks on small screens, and the navbar stays usable everywhere.

### 8. 🚫 5-Lift Cap & Empty States
- Plan is capped at **5 lifts** (per the app's tagline) — Add button disables with a "Plan Full" state
- **Empty states** for My Plan and Saved tabs ("NOTHING HERE YET" with CTA back to library)
- **404 page** for invalid routes with a "Back to Home" button

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/fitlog.git

# Navigate to the project
cd fitlog

# Install dependencies
npm install

# Run development server
npm run dev