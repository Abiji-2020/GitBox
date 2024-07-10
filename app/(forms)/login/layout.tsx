import styles from "./login.module.css"


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={styles.background}>{children}</body>
        </html>
    );
}

