import styles from "../Popup/Popup.module.scss";
import { useDispatch } from "react-redux";
import { setSortProreprty } from "../../../../redux/slices/filterSlice";
import { Isort } from "../../../../types/sortType";

const PopupItem: React.FC<Isort> = ({
  item,
  index,
  setPopupOpen,
  indexSort,
  name,
}) => {
  const dispatch = useDispatch();
  const currentItem = () => {
    dispatch(setSortProreprty(item));
    setPopupOpen();
  };

  return (
    <li
      onClick={() => currentItem()}
      className={index === indexSort ? styles.active : styles.item}
    >
      {name}
    </li>
  );
};

export default PopupItem;
