import { useState } from "react";
import Popupitem from "./PopupItem";
import styles from "../Popup/Popup.module.scss";
import { useSelector } from "react-redux";
import { Isort } from "../../../../types/sortType";
import { RootState } from "../../../../redux/Store";



const Popup:React.FC<Isort> = () => {
  const popupList = [
    { name: "популярности по возрастанию", sortProperty: "rating" },
    { name: "популярности по убыванию", sortProperty: "-rating" },
    { name: "цене по возрастанию", sortProperty: "price" },
    { name: "цене по убыванию", sortProperty: "-price" },
    { name: "алфавиту по возрастанию", sortProperty: "title" },
    { name: "алфавиту по убыванию", sortProperty: "-title" },
  ];

  const sort = useSelector((state:RootState) => state.filter.sort);

  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setPopupOpen(!popupOpen)} className={styles.text}>
        <h3 className={styles.title}>Сортировка по:</h3>
        <p className={styles.subTitle}>{sort.name}</p>
      </div>
      {popupOpen && (
        <ul className={styles.list}>
          {popupList.map((item, index) => (
            <Popupitem
              item={item}
              name={item.name}
              indexSort={item.sortProperty}
              index={sort.sortProperty}
              key={index}
              setPopupOpen={setPopupOpen}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popup;
