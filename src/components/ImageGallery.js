import React, { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, "images"), where("userId", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setImages(items);
    };
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "images", id));
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div>
      {images.map(img => (
        <div key={img.id}>
          <img src={img.url} alt={img.fileName} width="150" />
          <p>{img.fileName}</p>
          <button onClick={() => handleDelete(img.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
