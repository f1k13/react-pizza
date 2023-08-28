import Catalog from "../../Components/Screens/Catalog/Catalog";
import Filter from "../../Components/Screens/Filters/Filter.tsx";
import styles from "../../styles/Main.module.scss";
import Pagination from "../../Components/Pagination/Pagination.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store.ts";

const HomePage:React.FC = () => {
  const categoriesList = useSelector((state:RootState) => state.filter.categoriesList);
  const status = useSelector((state:RootState) => state.catalog.status);
  return (
    <>
      <div className={styles.wrapper}>
        <Filter />
        <h3 className={styles.title}>{categoriesList} пиццы</h3>
        <Catalog />  
      </div>  
      {status === 'loading' ? <></> : <Pagination />}
    </>
  );
};

export default HomePage;
