import { useNavigate } from "react-router-dom";
import cart from "../../../../assets/images/cart2 (2).svg";
import styles from "../../Header/Header.module.scss";
import { BASKET_ROUTE } from "../../../../utils/consts";
import { useSelector } from "react-redux";

const BasketPanel = () => {
  const navigate = useNavigate();
  const { totalPrice, totalCount } = useSelector((state) => state.basket);
  return (
    <div onClick={() => navigate(BASKET_ROUTE)} className={styles.basket}>
      <p className={styles.basketText}>{totalPrice} ₽</p>
      <div className={styles.border}></div>
      <img className={styles.cart} src={cart} alt="" />
      <p className={styles.basketText}>{totalCount}</p>
    </div>
  );
};

export default BasketPanel;
