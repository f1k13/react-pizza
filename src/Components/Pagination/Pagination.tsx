import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";

const Pagination:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={8}
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
