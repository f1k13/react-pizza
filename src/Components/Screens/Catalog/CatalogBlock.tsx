import styles from "../Catalog/Catalog.module.scss";
import plus from "../../../assets/images/Vector.svg";

interface Iprops {
  price: number;
  addItemsBasket: () => void;
  countItems: number;
}

const CatalogBlock: React.FC<Iprops> = ({
  price,
  addItemsBasket,
  countItems,
}) => {
  return (
    <div className={styles.block}>
      <p className={styles.price}>{`от ${price} ₽`}</p>
      <button onClick={() => addItemsBasket()} className={styles.button}>
        <img src={plus} alt="" />
        Добавить
        <p className={countItems > 0 ? styles.count : ''}>
          {countItems > 0 && countItems}
        </p>
      </button>
    </div>
  );
};

export default CatalogBlock;
