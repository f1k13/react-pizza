import {
  setCategoryId,
  setCategoriesItem,
} from "../../../../redux/slices/filterSlice";
import { Icategories } from "../../../../types/categoriesType";
import styles from "../Categories/Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";


const CategoriesItem: React.FC<Icategories> = ({ index, item }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const onChangeCategory = () => {
    dispatch(setCategoryId(index));
    dispatch(setCategoriesItem(item));
  };
  return (
    <li
      onClick={() => onChangeCategory()}
      className={categoryId === index ? styles.active : styles.item}
    >
      {item}
    </li>
  );
};

export default CategoriesItem;
