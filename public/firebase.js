// Firebase configuration and initialization for KreditCars
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8IIXHHYZemvQC9SxxRJQKc2u03Z6o3Vs",
  authDomain: "kredit-dbb5b.firebaseapp.com",
  projectId: "kredit-dbb5b",
  storageBucket: "kredit-dbb5b.firebasestorage.app",
  messagingSenderId: "857700287694",
  appId: "1:857700287694:web:e9c3c1ad0364d67f6b7c9f",
  measurementId: "G-V9T449WRTG"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export db
export const db = getFirestore(app);

// Export firestore methods for modular consumption
export {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  onSnapshot
};

// Attach to global window object for convenience
if (typeof window !== 'undefined') {
  window.db = db;
  window.kreditFirebase = {
    db,
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    where,
    serverTimestamp,
    onSnapshot
  };
}
