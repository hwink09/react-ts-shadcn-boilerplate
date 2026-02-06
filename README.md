# React + TypeScript + shadcn/ui Boilerplate

Modern, production-ready starter template for building scalable web applications with React 19, TypeScript, and Tailwind CSS v4.

**Created by:** [hwinkdev](https://github.com/hwink09) | [YouTube Channel](https://www.youtube.com/@hwinkdev.official)

---

## ✨ Tech Stack

- ⚡ **Vite** - Lightning-fast build tool with HMR
- ⚛️ **React 19.2.3** - Latest React with concurrent features
- 📘 **TypeScript 5.9** - Full type safety and IntelliSense
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible UI components
- 🔄 **Redux Toolkit** - State management (structure ready)
- 🚀 **SWC** - Super-fast React refresh
- 📏 **ESLint 9** - Code quality and consistency
- 🔍 **Path Aliases** - Clean imports with `@/` prefix

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd react-ts-shadcn-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint to check code quality
```

---

## 📁 Project Structure

```
react-ts-shadcn-boilerplate/
├── public/                    # Static assets
├── src/
│   ├── @types/               # TypeScript type definitions
│   │   └── auth.ts          # Authentication types
│   ├── api/                  # API integration layer
│   │   └── index.ts         # API client setup
│   ├── assets/              # Images, fonts, etc.
│   ├── components/
│   │   ├── forms/           # Form components
│   │   │   └── input.tsx    # Custom input component
│   │   ├── shared/          # Reusable shared components
│   │   │   ├── header.tsx   # App header
│   │   │   └── footer.tsx   # App footer
│   │   └── ui/              # shadcn/ui components
│   │       └── button.tsx   # Button component
│   ├── hooks/               # Custom React hooks
│   │   └── useAuth.ts       # Authentication hook
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper functions (cn, etc.)
│   ├── pages/               # Page components
│   │   ├── auth/
│   │   │   └── LoginPage.tsx
│   │   └── home/
│   │       └── HomePage.tsx
│   ├── redux/               # Redux state management
│   │   └── store.ts         # Redux store configuration
│   ├── routes/              # React Router setup
│   │   └── index.tsx        # Route definitions
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── components.json          # shadcn/ui configuration
├── eslint.config.ts         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript Node configuration
└── vite.config.ts           # Vite configuration
```

---

## 🎯 Features

### 🔧 Pre-configured Setup
- ✅ TypeScript strict mode enabled
- ✅ Path aliases configured (`@/` points to `src/`)
- ✅ ESLint with React and TypeScript rules
- ✅ Tailwind CSS v4 with Vite plugin
- ✅ shadcn/ui ready with `components.json`

### 🏗️ Architecture Ready
- ✅ Authentication structure (types, hooks, pages)
- ✅ Redux Toolkit store structure
- ✅ API layer foundation
- ✅ Routing structure
- ✅ Component organization (forms, shared, ui)
- ✅ Custom hooks setup

### 🎨 UI Components
- Built with **Radix UI** primitives
- Fully customizable with **Tailwind CSS**
- Accessible by default
- Dark mode ready
- TypeScript definitions included

---

## 👨‍💻 Author

**hwinkdev**
- GitHub: [@hwink09](https://github.com/hwink09)
- YouTube: [@hwinkdev.official](https://www.youtube.com/@hwinkdev.official)

---

Made with ❤️ using React + TypeScript + shadcn/ui

