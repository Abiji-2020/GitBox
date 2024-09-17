import NavBar from "../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}
