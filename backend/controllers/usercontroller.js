import { User } from './../model/userModel.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { appFirebase, auth, db } from '../firebase.js';
import { doc, setDoc } from 'firebase/firestore';

// Save user
export const saveUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username
        });
        console.log(req.body.username);
        res.status(200).json({
            status: "success",
            message: "User Registered"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Failed to register user"
        });
    }
}

// Get all users
export const allUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'username');
        res.status(200).json({
            status: "success",
            message: users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Failed to get all users"
        });
    }
}

// Register
export const register = async (req, res) => {
    console.log("here comes");
    try {
        const { email, password } = req.body;
        console.log(email);

        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        res.status(200).json({
            status: "success",
            message: "Signup Successful"
        });

    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: "failure",
            message: error.message
        });
    }
}

// Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        res.status(200).json({
            status: "success",
            message: `Login Successful for Username ${user.email}`
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: "failed",
            message: error.message
        });
    }
}

// Logout
export const logout = async (req, res) => {
    try {
        await signOut(auth);

        res.status(200).json({
            status: "success",
            message: "Logout Successful"
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: "failed",
            message: error.message
        });
    }
}

