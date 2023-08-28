import CategoriesItem from "./CategoriesItem";
import styles from "../Categories/Categories.module.scss";
import { Icategories } from "../../../../types/categoriesType";



const Categories:React.FC<Icategories> = () => {
  const list = [
    "Все",
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <ul className={styles.wrapper}>
      {list.map((item, index) => (
        <CategoriesItem item={item} key={index} index={index} />
      ))}
    </ul>
  );
};

export default Categories;
