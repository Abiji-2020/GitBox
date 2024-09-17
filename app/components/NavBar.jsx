import style from "./styles/NavBar.module.css";
import { VscAccount } from "react-icons/vsc";
const NavBar = () => {
  return (
    <nav className={style.background}>
      <div className={style.container}>
        <h1 className={style.logo}>GitBox</h1>
      </div>
      <div className={style.iconContainer}>
        <div className={style.icon}>
          <VscAccount />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
