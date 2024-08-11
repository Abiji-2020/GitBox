"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createCookies} from "../cookies/storeCookies";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errormessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const login = async () => {
    const response = await axios({
      url: "http://localhost:8080/login",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ email: email, password: password }),
    }).catch((err) => {
      console.log(err);
      if(err.response.status === 404){
        console.log("User does not exist");
        setErrorMessage("User does not exist");
        setError(true);
      }

      if(err.response.status === 401){
        console.log("Incorrect password");
        setErrorMessage("Incorrect password");
        setError(true);
      }
      if(err.response.status === 409){
        console.log("User already exists");
        setErrorMessage("User already exists");
        setError(true);
      }
      return err

    });
    if(response === undefined) return;
    console.log(response);
    if (response.status === 200) {
      const data = await response.data;
      console.log(data);
      createCookies(data);
      router.push("/");
    }
    
    const data = await response.data;
    console.log(data);
    router.push("/");
    
  };
  
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const isValidEmail = (email: any) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const isValidPassword = (password: string | undefined) => {
    if(password === undefined) return false;
    return password.length >= 8;
  };
  const passwordSpan = (
    <span className={styles.error}>*password must be atleast 8 characters</span>
  );

  const emailSpan = (
    <span className={styles.error}>*incorrect email format </span>
  );
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.form}>
          <div className={styles.intro}>
            <h1 className={styles.heading}>Welcome Back 👋</h1>
            <p className={styles.paragraph}>
              Today is a new day. Check your project and colab with your team on
              GitBox.
            </p>
          </div>
          <div className={styles.error}>
          {error? errormessage : null}
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
              {isValidEmail(email) || email === ""  || email==undefined? null : emailSpan}
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
              {isValidPassword(password) || password === "" ||password==undefined ? null : passwordSpan}
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={login}>Sign In</button>
            </div>
          </div>
          <div className={styles.noaccount}>
            {" "}
            Dont't have an account? <a href="/register">Sign up</a>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 18 }}>
        <Image src="/Signup.png" width={600} height={600} alt="Image" />
      </div>
    </main>
  );
}
