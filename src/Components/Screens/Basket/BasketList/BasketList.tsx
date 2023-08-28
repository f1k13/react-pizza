import { useSelector } from "react-redux";
import BasketItem from "./BasketItems";
import styles from "../BasketList/BasketList.module.scss";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../utils/consts";

import { IBasketItem } from "../../../../types/basketType";
import { RootState } from "../../../../redux/Store";

const BasketList:React.FC<IBasketItem> = () => {
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  const totalCount = useSelector((state: RootState) => state.basket.totalCount);
  const navigate = useNavigate();
  console.log(basketItems);
  
  return (
    <>
      <ul className={styles.items}>
        {basketItems.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles.blockUnder}>
        <div className={styles.textUnder}>
          <h1 className={styles.countText}>
            Всего пицц:
            <p className={styles.countItems}>{totalCount} шт.</p>
          </h1>
          <h1 className={styles.priceText}>
            Сумма заказа:
            <p className={styles.totalPriceText}>{totalPrice} ₽</p>
          </h1>
        </div>
        <div className={styles.underBtn}>
          <button
            onClick={() => navigate(HOME_ROUTE)}
            className={styles.backBtn}
          >
            Вернутся назад{" "}
          </button>
          <button className={styles.sale}>Оплатить сейчас</button>
        </div>
      </div>
    </>
  );
};

export default BasketList;
