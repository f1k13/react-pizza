import BasketManaging from "./BasketManaging/BasketManaging";
import styles from "../Basket/Basket.module.scss";
import BasketList from "./BasketList/BasketList";
import { useSelector } from "react-redux";
import BasketEmpty from "./BasketEmpty/BasketEmpty";
import { RootState } from "../../../redux/Store";


const Basket = () => {
  const items = useSelector((state:RootState) => state.basket.items);
  return (
    <div className={styles.wrapper}>
      {items.length > 0 ? (
        <>
          <BasketManaging /> <BasketList />
        </>
      ) : (
        <BasketEmpty />
      )}
    </div>
  );
};

export default Basket;
