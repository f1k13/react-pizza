import { useDispatch } from "react-redux";
import styles from "../BasketList/BasketList.module.scss";
import {
  removeItem,
  minusItem,
  plusItem,
} from "../../../../redux/slices/basketSlice";
import { IBasketItem } from "../../../../types/basketType";


const BasketItems: React.FC<IBasketItem> = ({
  title,
  img,
  type,
  size,
  id,
  count,
  price,
}) => {
  const dispatch = useDispatch();
  const plusCurrentItem = () => {
    dispatch(plusItem(id));
  };
  const minusCurrentItem = () => {
    dispatch(minusItem(id));
    if (count === 1) {
      dispatch(removeItem(id));
    }
  };
  const deleteItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subTitle}>
            {type}, {size}
          </p>
        </div>
      </div>
      <div className={styles.pizzaCount}>
        <span onClick={() => minusCurrentItem()} className={styles.counter}>
          -
        </span>
        <h3 className={styles.count}>{count}</h3>
        <span onClick={() => plusCurrentItem()} className={styles.counter}>
          +
        </span>
      </div>
      <p className={styles.price}>{count * price} ₽</p>
      <span onClick={() => deleteItem()} className={styles.delete}>
        x
      </span>
    </div>
  );
};

export default BasketItems;
