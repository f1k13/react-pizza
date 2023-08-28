import Basket from "../../Components/Screens/Basket/Basket";
import styles from "../../styles/Main.module.scss";

const BasketPage:React.FC = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Basket />
      </div>
    </div>
  );
};

export default BasketPage;
