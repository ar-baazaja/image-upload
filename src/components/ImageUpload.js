import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");
    setLoading(true);
    try {
      
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Imagepreset"); 

      const response = await fetch("https://api.cloudinary.com/v1_1/dk3eu4gtc/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const url = data.secure_url;

      // Save metadata in Firestore
      await addDoc(collection(db, "images"), {
        url,
        fileName: image.name,
        userId: auth.currentUser.uid,
        timestamp: serverTimestamp(),
      });

      alert("Upload successful");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: "10px" }}>
          <img src={preview} alt="preview" width="150" style={{ borderRadius: "6px" }} />
        </div>
      )}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ImageUpload;
