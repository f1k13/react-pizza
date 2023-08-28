import basketImg from "../../../../assets/images/iconfinder_shopping-cart_2561279 1.svg";
import styles from "../BasketManaging/BasketManaging.module.scss";
import trashImg from "../../../../assets/images/iconfinder_trash-2_3324927 1.svg";
import { useDispatch } from "react-redux";
import { clearItems } from "../../../../redux/slices/basketSlice";

const BasketManaging = () => {

  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <img src={basketImg} alt="" />
        <h3 className={styles.title}>Корзина</h3>
      </div>
      <div onClick={() => dispatch(clearItems())} className={styles.basketClear}>
        <img className={styles.img} src={trashImg} alt="" />
        <p className={styles.subTitle}>Очистить корзину</p>
      </div>
    </div>
  );
};

export default BasketManaging;
