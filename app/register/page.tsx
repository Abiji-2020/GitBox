"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const router = useRouter();
  const register = async () => {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });
    if (response.status === 400) {
      alert("Invalid email or password");
    }
    if (response.status === 201) {
      router.push("/");
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  const checkPassword = (
    password: string | undefined,
    confirmPassword: string | undefined
  ) => {
    if (password === undefined || confirmPassword === undefined) return false;
    return password === confirmPassword;
  };

  const isValidEmail = (email: any) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const isValidPassword = (password: string | undefined) => {
    if (password === undefined) return false;
    return password.length >= 8;
  };
  const passwordSpan = (
    <span className={styles.error}>*password must be atleast 8 characters</span>
  );

  const emailSpan = (
    <span className={styles.error}>*incorrect email format </span>
  );
  const confirmPasswordSpan = (
    <span className={styles.error}>*passwords do not match</span>
  );
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.form}>
          <div className={styles.intro}>
            <h1 className={styles.heading}>Hello 👋</h1>
            <p className={styles.paragraph}>
              Let's get started with GitBox. A team collaboration tool for the
              software development process.
            </p>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Email</p>
              <input
                type="email"
                onChange={handleEmailChange}
                value={email}
                className={styles.input}
                placeholder="Example@email.com"
              />
              {isValidEmail(email) || email === "" || email == undefined
                ? null
                : emailSpan}
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Username</p>
              <input
                type="text"
                onChange={handleUsernameChange}
                value={username}
                className={styles.input}
                placeholder="Username"
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Password</p>
              <input
                type="password"
                onChange={handlePasswordChange}
                value={password}
                className={styles.input}
                placeholder="Atleast 8 characters"
              />
              {isValidPassword(password) ||
              password === "" ||
              password == undefined
                ? null
                : passwordSpan}
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Confirm Password</p>
              <input
                type="password"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                className={styles.input}
                placeholder="Confirm Password"
              />
              {checkPassword(password, confirmPassword) ||
              confirmPassword === "" ||
              confirmPassword == undefined
                ? null
                : confirmPasswordSpan}
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={register}>
                Sign In
              </button>
            </div>
          </div>
          <div className={styles.noaccount}>
            {" "}
            Already have an Account? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 16 }}>
        <Image src="/Signup.png" width={600} height={600} alt="Image" />
      </div>
    </main>
  );
}
