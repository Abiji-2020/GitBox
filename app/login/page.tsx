"use client";
import styles from "./login.module.css";
import Image from "next/image";

export default function Login() {
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
          <div className={styles.inputForm}>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Email</p>
              <input
                type="email"
                className={styles.input}
                placeholder="Example@email.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.label}>Password</p>
              <input
                type="password"
                className={styles.input}
                placeholder="Atleast 8 characters"
              />
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button}>Sign In</button>
            </div>
          </div>
          <div className={styles.noaccount}> Dont't have an account? <a href="/register">Sign up</a></div>
        </div>
      </div>
      <div style={{ paddingTop: 18}}>
        <Image src="/Signup.png" width={600} height={600} alt="Image" />
      </div>
    </main>
  );
}
