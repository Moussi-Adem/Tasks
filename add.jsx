import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique document IDs
import { storage } from './firebase.js'; // Import storage from firebase.js
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Example function to upload image and store URL
const uploadImageAndStoreUrl = async (file) => {
    const imageRef = ref(storage, `images/${uuidv4()}_${file.name}`);
    try {
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);
        
        // Assuming a `patient` document and storing image URLs
        const patientDocRef = doc(db, "patient", "your-patient-id"); // Adjust document reference
        await setDoc(patientDocRef, { imageUrl: downloadURL }, { merge: true });
        
        console.log("Image uploaded and URL stored successfully");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};
