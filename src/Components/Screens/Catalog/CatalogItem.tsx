import React, { useState } from "react";
import styles from "../Catalog/Catalog.module.scss";
import CatalogBlock from "./CatalogBlock";
import { useDispatch } from "react-redux";
import { addItems } from "../../../redux/slices/basketSlice";

import { ICatalogItem } from "../../../types/catalogType";


const catalogTypes = ["Тонкое", "Традиционное"];
const catalogSizes = [26, 30, 40];



const CatalogItem: React.FC<ICatalogItem> = ({ item }) => {
  const [selectTypes, setSelectTypes] = useState<number>(0);
  const [selectSizes, setSelectSizes] = useState<number>(0);
  const [countItems, setCountItems] = useState<number>(0);
  const price = item.price;
  const dispatch = useDispatch();
  const addItemsBasket = () => {
    setCountItems(countItems + 1);
    const basketItem = {
      id: item.id,
      title: item.title,
      img: item.imageUrl,
      price: price,
      type: catalogTypes[selectTypes],
      size: catalogSizes[selectSizes],
      count: countItems,
    };
    dispatch(addItems(basketItem));
  };
  return (
    <div className={styles.item}>
      <img className={styles.img} src={item.imageUrl} alt="" />
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.under}>
        <div className={styles.types}>
          {item.types.map((type: number, index: number) => (
            <p
              key={index}
              onClick={() => setSelectTypes(index)}
              className={index === selectTypes ? styles.type : styles.typeNone}
            >
              {catalogTypes[type]}
            </p>
          ))}
        </div>
        <div className={styles.sizes}>
          {item.sizes.map((size: number, index: number) => (
            <p
              key={index}
              onClick={() => setSelectSizes(index)}
              className={index === selectSizes ? styles.size : styles.sizeNone}
            >
              {size}
            </p>
          ))}
        </div>
      </div>
      <CatalogBlock
        countItems={countItems}
        addItemsBasket={addItemsBasket}
        price={price}
      />
    </div>
  );
};

export default CatalogItem;
