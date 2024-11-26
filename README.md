# Docs Pro - Real-time Collaborative Text Editor

A real-time collaborative text editor built with React, TypeScript, and Firebase. This application allows multiple users to edit documents simultaneously with changes syncing in real-time.

## 🚀 Features

- Real-time collaborative editing
- Rich text formatting
- Anonymous authentication
- Auto-saving
- Google Docs-like interface
- Cursor position preservation during updates

## 🛠️ Technologies

- React 18
- TypeScript
- Firebase (Authentication & Firestore)
- Vite
- React Quill
- Lodash

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- Firebase account with a new project

## ⚙️ Environment Setup

1. Create a `.env` file in the root directory
2. Add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/pahancha/docs-pro.git
cd docs-pro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Building for Production

```bash
npm run build
```

### Real-time Collaboration
The application uses Firebase Firestore for real-time synchronization. Changes are throttled and synchronized across all connected clients.

### Text Editor
Built using React Quill with custom styling. The editor supports:
- Rich text formatting
- Real-time updates
- Automatic saving
- Cursor position preservation

