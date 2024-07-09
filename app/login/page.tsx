import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.star}>
    <main className={styles.main}>
      <div className={styles.containter} id="container">
        <div className={styles.SignupformContainer}>
          <form>
            <h1>Create Account</h1>

            <span></span>
            <input type="text" placeholder="UserId" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className={styles.LoginformContainer}>
          <form>
            <h1>Sign In</h1>

            <span></span>
            <input type="email/text" placeholder="Email or UserId" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={styles.toggleLeft}>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your Credentials
                  </p>
                  <button id="login" className={styles.hidden}>Sign In</button>
            </div>
            <div className={styles.toggleRight}>
                <h1>Hello, Coders!</h1>
                <p>
                    Enter your personal details and start your journey with us.
                  </p>
                  <button id="register" className={styles.hidden}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
