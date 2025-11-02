# 💬 Real-Time Chat Application

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Platform-FFCA28?logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

A modern, real-time chat application built with React, Vite, and Firebase.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Configuration](#-configuration) • [Usage](#-usage)

</div>

---

## 📖 About

A sleek and responsive real-time chat application that enables instant messaging with a modern user interface. Built with React and powered by Firebase for real-time synchronization, secure authentication, and cloud storage.

## ✨ Features

### 💬 Core Chat Features
- **Real-time Messaging** - Instant message delivery and synchronization using Firebase Firestore
- **User Authentication** - Secure login and registration with Firebase Authentication
- **Persistent Sessions** - Browser local persistence for seamless user experience
- **Modern UI** - Clean and intuitive interface with responsive design
- **Message History** - All conversations stored and retrievable in real-time

### 🔐 Security Features
- Firebase Authentication integration
- Secure API key management with environment variables
- Browser local persistence for authenticated sessions
- Protected routes and user authorization

## 🛠️ Tech Stack

### Frontend
- **React 18.x** - UI library for building interactive interfaces
- **Vite 5.x** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling and responsive design

### Backend & Services
- **Firebase Authentication** - User authentication and management
- **Firebase Firestore** - Real-time NoSQL database
- **Firebase Storage** - Cloud file storage (if applicable)

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite HMR** - Hot Module Replacement for fast development
- **@vitejs/plugin-react** - Official Vite plugin for React with Fast Refresh

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.x or higher)
- **npm** or **yarn**
- **Firebase Account** - Create a project at [Firebase Console](https://console.firebase.google.com/)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/noireflakes/chatapp.git
   cd chatapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable **Authentication** (Email/Password or your preferred method)
   - Enable **Firestore Database**
   - Get your Firebase configuration

4. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_A_AUTHDOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_A_PROJECT_ID=your-project-id
   VITE_FIREBASE_A_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_A_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_A_APP_ID=your-app-id
   VITE_FIREBASE_A_MEASUREMENT_ID=your-measurement-id
   ```

   **⚠️ Security Note:** 
   - Never commit `.env` files to version control
   - Ensure `.env` is listed in your `.gitignore`
   - Use environment variables for all sensitive data

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
chatapp/
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Reusable React components
│   ├── App.css          # Main application styles
│   ├── App.jsx          # Root React component
│   ├── firebase.js      # Firebase configuration and initialization
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore rules
├── .eslintrc.js         # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🔧 Configuration

### Firebase Setup

The Firebase configuration is located in `src/firebase.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_A_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_A_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_A_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_A_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_A_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_A_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
```

### Vite Configuration

The project uses Vite for fast development and optimized builds. Key features:
- **Fast Refresh** - Instant updates during development
- **Optimized Builds** - Production-ready bundles
- **Environment Variables** - Secure configuration management

## 🚀 Usage

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test the production build locally**
   ```bash
   npm run preview
   ```

3. **Deploy to hosting**
   - Firebase Hosting (recommended)
   - Vercel
   - Netlify
   - Any static hosting service

### Deployment to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Hosting
firebase init hosting

# Deploy
firebase deploy
```

## 🔒 Security Best Practices

### Environment Variables
- ✅ Use `.env` for all sensitive data
- ✅ Add `.env` to `.gitignore`
- ✅ Never commit API keys to version control
- ✅ Use different Firebase projects for dev/staging/production

### Firebase Security Rules
Configure Firestore security rules to protect your data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }
    
    // Users can only edit their own profile
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
  }
}
```

## 🐛 Troubleshooting

### Common Issues

**Issue: `Failed to set persistence` error**
- Solution: Check your Firebase configuration and ensure authentication is enabled

**Issue: Environment variables not loading**
- Solution: Ensure your `.env` file is in the root directory and variables start with `VITE_`
- Restart the development server after creating/modifying `.env`

**Issue: Firebase connection errors**
- Solution: Verify your Firebase project settings and API keys
- Check Firebase console for any service outages

**Issue: Build fails**
- Solution: Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes**
4. **Commit with descriptive messages**
   ```bash
   git commit -m "Add: Description of your feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Submit a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Team** - For the blazing-fast build tool
- **Firebase** - For real-time database and authentication services
- **Community Contributors** - Thank you for your support!

## 📧 Contact

For questions or support:
- **GitHub Issues**: [Create an issue](https://github.com/noireflakes/chatapp/issues)
- **Repository**: [chatapp](https://github.com/noireflakes/chatapp)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ using React + Vite + Firebase

</div>
