import styles from "./layout.module.css"
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
            <section className={styles.background}>{children}</section>
        
    );
}

