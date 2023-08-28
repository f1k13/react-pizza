import styles from "./BasketEmpty.module.scss";
import emptyImg from "../../../../assets/images/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../utils/consts";

const BasketEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Корзина пустая <span>😕</span>
      </h1>
      <p className={styles.subTitle}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img className={styles.img} src={emptyImg} alt="" />
      <button onClick={() => navigate(HOME_ROUTE)} className={styles.btn}>
        Вернутся назад
      </button>
    </div>
  );
};

export default BasketEmpty;
