# 🛡️ ScamShield AI

### AI-Powered Scam Detection & Threat Intelligence Platform

**Authors:** Stuti & Nitin

---

🌐 Live Demo: <link>

🎥 Demo Video: <link>

📄 Presentation: <link>


## 🚨 The Problem

Digital scams are evolving faster than ever.

Every day, millions of users receive:

* Phishing messages
* Fake banking notifications
* Fraudulent job offers
* Lottery scams
* Delivery scams
* Social engineering attacks

Most people struggle to determine whether a message or screenshot is legitimate before it's too late.

A single click can result in:

* Financial loss
* Identity theft
* Account compromise
* Data leakage

ScamShield AI was built to help users identify threats before they become victims.

---

## 💡 Our Solution

ScamShield AI is an AI-powered cybersecurity assistant that analyzes suspicious messages and screenshots in real time.

Users can:

✅ Paste suspicious messages

✅ Upload screenshots

✅ Receive an instant threat assessment

✅ Understand scam indicators

✅ Get clear safety recommendations

✅ View confidence scores and risk levels

---

## ✨ Key Features

### 📝 Text-Based Scam Detection

Analyze:

* SMS messages
* Emails
* WhatsApp chats
* Social media messages
* Job offers
* Payment requests

---

### 🖼️ Screenshot Analysis

Upload screenshots and let AI:

* Extract visual context
* Detect phishing attempts
* Identify impersonation attacks
* Analyze suspicious links
* Flag social engineering tactics

---

### 🌎 Multi-Language Support

ScamShield AI automatically detects content language and generates:

* Explanations
* Recommendations
* Threat assessments

in the same language as the original content.

Supported examples include:

* English
* Hindi
* Japanese
* Spanish
* French
* German
* And many more

---

### 🎯 Threat Intelligence Engine

The platform evaluates:

* Suspicious URLs
* Credential theft attempts
* OTP requests
* Impersonation indicators
* Pressure tactics
* Social engineering patterns
* Financial fraud signals

---

### 📊 AI Risk Scoring

Every scan generates:

* Risk Score (0–100)
* Risk Level
* Confidence Score
* Threat Category
* Threat Indicators
* Detailed Explanation
* Recommended Actions

---

## 🏗️ System Architecture

```text
Frontend (React + TypeScript)
          │
          ▼
Backend API (Express + TypeScript)
          │
          ▼
 Gemini Threat Intelligence Engine
          │
          ▼
 Structured Security Analysis
```

---

## 🔒 Security First Design

Unlike many AI-powered applications that expose API credentials on the client side, ScamShield AI follows a secure architecture.

### Security Measures Implemented

* Backend API architecture
* Hidden Gemini API credentials
* Express Rate Limiting
* File Size Validation
* Prompt Injection Protection
* CORS Configuration
* Security Headers (Helmet)
* Input Validation

This ensures users cannot access sensitive API credentials through browser developer tools.

---

## 🧠 AI Workflow

### Vision Agent

Extracts and interprets screenshot content.

### Threat Agent

Identifies scam indicators and suspicious behavior.

### Pattern Agent

Compares content against known scam patterns.

### Risk Agent

Calculates threat severity and confidence.

### Safety Agent

Generates actionable recommendations for users.

---

## 🎮 Demo Scenarios Included

* Banking Phishing Scam
* Fake Job Offer
* Delivery Scam
* Lottery Scam

These scenarios allow judges and users to quickly test the platform.

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express
* TypeScript
* Helmet
* Express Rate Limit

### AI

* Google Gemini

---

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
cd ScamShieldAI
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000
GEMINI_API_KEY=YOUR_API_KEY
FRONTEND_URL=http://localhost:5173
```

Run Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

---

## 🎯 Future Scope

* Real-time URL scanning
* Browser extension
* Email integration
* Scam reporting network
* Community threat intelligence database
* Mobile application
* Voice scam detection
* Deepfake scam identification

---

## 🌍 Impact

ScamShield AI aims to make cybersecurity accessible to everyone.

By transforming complex scam analysis into clear, actionable guidance, the platform empowers users to recognize threats before they become victims.

---

## 👨‍💻 Authors

**Stuti**

**Nitin**

Built with a mission to make the digital world safer through AI-powered threat intelligence.
