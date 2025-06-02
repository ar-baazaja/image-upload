# 📷 Image Upload Web App

A full-stack web application that allows users to **sign up**, **log in**, **upload**, **view**, and **delete images**. All images are stored securely using **Cloudinary**, and user authentication is handled via **Firebase Auth**.

### 🌐 Live Demo

👉 [Click here to visit the app](https://image-uploads-zeta.vercel.app)

---

## 🚀 Features

- 🔐 User Authentication (Email & Password)
- 🖼 Upload images with live preview
- 🧾 Store image metadata (URL, filename, timestamp, user ID)
- 📂 Cloudinary integration for scalable image storage
- 🧹 Delete uploaded images
- 🎨 Responsive and clean dashboard UI

---

## 🛠 Tech Stack

### Frontend:

- **React.js** (Create React App)
- **React Router**
- **CSS** (custom styling)

### Backend Services:

- **Firebase Authentication**
- **Firestore** (for metadata)
- **Cloudinary** (for image storage)

---

## 🧰 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/ar-baazaja/scriptxtask.git
   cd scriptxtask
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase and Cloudinary**

   - Create a file `src/firebaseConfig.js` and add your Firebase credentials.
   - Inside the app, make sure `CLOUDINARY_URL` and `UPLOAD_PRESET` are set for Cloudinary in `ImageUpload.js`.

4. **Run the app**
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
├── src
│   ├── components
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── ImageUpload.js
│   │   └── ImageGallery.js
│   ├── firebaseConfig.js
│   ├── PrivateRoute.js
│   ├── App.js
│   └── index.js
├── public
├── package.json
└── README.md
```

---

## 🌟 Bonus Features

- ✅ Live image preview before upload
- ✅ Protected routes using `PrivateRoute.js`
- ✅ Alerts and loading states for better UX

---

## 📧 Contact

If you have any questions or want to collaborate:

[GitHub](https://github.com/ar-baazaja)

