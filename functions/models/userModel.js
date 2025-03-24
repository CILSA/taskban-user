import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, doc } from "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_AUTH_DOMAIN,
    projectId: process.env.VITE_PROJECT_ID,
    storageBucket: process.env.VITE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_APP_ID,
    measurementId: process.env.VITE_MEASUREMENT_ID,
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener usuarios por ID del equipo
export const getUsersByTeamId = async (teamId) => {
    try {
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('teamId', '==', teamId));
        const usersSnapshot = await getDocs(q);
        return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// Obtener un usuario por ID
export const getUserById = async (userId) => {
    try {
        const userRef = doc(db, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            return { id: userSnapshot.id, ...userSnapshot.data() };
        }
        return null;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

// Obtener un usuario por UID
export const getUserByUID = async (uid) => {
    try {
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('userUID', '==', uid));
        const usersSnapshot = await getDocs(q);
        if (!usersSnapshot.empty) {
            const user = usersSnapshot.docs[0];
            return { id: user.id, ...user.data() };
        }
        return null;
    } catch (error) {
        console.error("Error fetching user by UID:", error);
        throw error;
    }
};

// Crear un nuevo usuario
export const createUser = async (user) => {
    try {
        const usersCollection = collection(db, 'users');
        const docRef = await addDoc(usersCollection, user);
        return docRef.id;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

// Actualizar un usuario existente
export const updateUser = async (userId, updatedUser) => {
    try {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

// Eliminar un usuario
export const deleteUser = async (userId) => {
    try {
        const userRef = doc(db, 'users', userId);
        await deleteDoc(userRef);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
