import { useDispatch } from "react-redux";
import styles from "../../Header/Header.module.scss";
import { setSearchItems } from "../../../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('')
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchItems(str));      
    }, 500),
    []
  );
  const OnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  }
  return (  
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => OnChangeInput(e)}
        placeholder="Поиск пиццы..."
      />
    </>
  );
};

export default Search;
