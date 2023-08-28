import { Route, Routes } from "react-router-dom";
import { routers } from "../routes.ts";
import NotFoundPage from "../Pages/NotFoundPages/NotFoundPage.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {routers.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default AppRouter;
