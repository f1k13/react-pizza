import CatalogItem from "./CatalogItem";
import styles from "../Catalog/Catalog.module.scss";
import Loading from "../../ui/Loading/Loading.tsx";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchCatalog } from "../../../redux/slices/catalogSlice";
import { useEffect } from "react";
import { RootState, UseAppDispatch } from "../../../redux/Store.ts";

interface Iitems {
  item: []
}

const Catalog: React.FC<Iitems> = () => {
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sortType = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const searchValue = useSelector((state: RootState) => state.filter.search);
  const items = useSelector((state: RootState) => state.catalog.items);
  const status = useSelector((state: RootState) => state.catalog.status);
  const page = useSelector((state: RootState) => state.filter.page);
  const navigate = useNavigate();
  const sort = sortType.replace("-", "");
  const order = sortType.includes("-") ? "desc" : "asc";
  const dispatch = UseAppDispatch();
  const category = categoryId > 0 ? `category=${categoryId}` : "";

  useEffect(() => {
    dispatch(
      fetchCatalog({
        sort,
        order,
        category,
        searchValue,
        page,
      })
    );
    const queryString = qs.stringify({
      sortType,
      categoryId,
      order,
      page,
    });
    navigate(`?${queryString}`);
  }, [category, page, sortType, searchValue]);

  return (
    <div className={styles.catalog}>
      {status === "loading" ? (
        <Loading />
      ) : (
        items.map((item) => <CatalogItem item={item} key={item.id} />)
      )}
    </div>
  );
};

export default Catalog;
