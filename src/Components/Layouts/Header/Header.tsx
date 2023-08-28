import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.scss";
import iconPizza from "./../../../assets/images/free-icon-pizza-599944.png";
import BasketPanel from "./BasketPanel/BasketPanel";
import Search from "./Search/Search.tsx";
import { HOME_ROUTE } from "../../../utils/consts";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.header}>
      <div onClick={() => navigate(HOME_ROUTE)} className={styles.start}>
        <img className={styles.img} src={iconPizza} alt="" />
        <div className={styles.text}>
          <h3 className={styles.title}>React pizza</h3>
          <p className={styles.subTitle}>Самая вкусная пицца во вселенной</p>
        </div>
      </div>
      {location.pathname !== "/basket" && <Search />}
      {location.pathname !== "/basket" && <BasketPanel />}
    </div>
  );
};

export default Header;
