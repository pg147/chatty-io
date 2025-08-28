# 💬 Chatty-io – Real-Time Chat Application

A **full-stack real-time chat application** built with **React.js (frontend)** and **Express + MongoDB (backend)**.
Chatty-io delivers an engaging **WhatsApp-like experience** with real-time messaging, authentication, and media sharing.

---

## ✨ Features

* 💬 **Real-Time Messaging** – Instant communication powered by **Socket.io**
* 👤 **Authentication** – Secure login & signup with **JWT + bcrypt**
* 🖼️ **Media Uploads** – Store and manage media via **Cloudinary**
* 🗄️ **Database** – **MongoDB + Mongoose** for persistence
* 🔔 **Notifications** – Smooth alerts with **React Hot Toast**
* 🎨 **Modern UI** – Built with **React, Zustand, Lucide Icons**
* 📡 **API Communication** – Via **Axios**

---

## 📂 Project Structure

```bash
chatty-io/
├── backend/   # Express.js server
│   ├── src/
│   │   ├── controllers/   # API controllers
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── middlewares/   # Auth & utility middleware
│   │   └── db/            # Database connection
│   └── package.json
│
├── frontend/  # React.js client
│   ├── public/   # Static assets
│   ├── src/      # React components & pages
│   └── package.json
│
└── README.md
```

---

## ⚡ Tech Stack

### 🖥️ Frontend

* React 18
* React Router DOM
* Zustand (state management)
* Axios
* React Hot Toast (notifications)
* Lucide React (icons)
* Socket.io-client (real-time communication)

### 🛠️ Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT + bcryptjs (authentication)
* Cloudinary (media storage)
* Socket.io (real-time communication)
* dotenv, CORS, cookie-parser (middleware)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/chatty-io.git
cd chatty-io
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend` with the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App will be running at:

* 👉 **Frontend**: `http://localhost:5173`
* 👉 **Backend**: `http://localhost:5000`

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request 🚀

---

## ⭐ Show Your Support

If you like **Chatty-io**, please:

* 🌟 Give it a **star** on GitHub
* 📢 Share it with fellow developers and friends!

---

<p align="center">  
💬 Built with ❤️ by <a href='https://www.prathmesh.dev'>Prathmesh Gaidhane</a>  
</p>
