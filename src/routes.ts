import HomePage from "./Pages/HomePage/HomePage";
import BasketPage from "./Pages/BasketPage/BasketPage";
import { HOME_ROUTE, BASKET_ROUTE } from "./utils/consts";

export const routers = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
];
