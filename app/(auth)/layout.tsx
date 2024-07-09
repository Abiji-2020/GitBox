import style from "./layout.module.css";

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className={style.container}></div>

      {children}
    </main>
  );
}
