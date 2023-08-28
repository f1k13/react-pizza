type Sort = {
  name: string;
  sortProperty: string;
};

export interface Isort {
  item: Sort;
  index: string;
  setPopupOpen: () => void;
  indexSort: string;
  name: string;
}
