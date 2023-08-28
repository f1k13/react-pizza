import styles from "../Filters/Filter.module.scss";
import Categories from "./Categories/Categories.tsx";
import Popup from "./Popup/Popup";

const Filter:React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Categories />
      <Popup />
    </div>
  );
};

export default Filter;
