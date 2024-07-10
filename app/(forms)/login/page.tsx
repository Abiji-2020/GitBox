"use client";
import { redirect } from "next/navigation";
import styles from "./login.module.css";
function login(){
    onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById("Username")?.nodeValue;
        const password = document.getElementById("password")?.nodeValue;
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            redirect( "/");
        }
    }
}


export default function Login(){
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.heading}>Login</h1>
                <form className={styles.form}>
                    <input type="text" className={styles.input} placeholder="Username/Email" id="Username" />
                    <input type="password" className={styles.input} placeholder="Password" id="password" />
                    <button className={styles.button} onClick={login}>Login</button>
                </form>
            </div>
            
        </div>
    );
}