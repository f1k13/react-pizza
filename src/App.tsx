import AppRouter from "./Components/AppRouter";
import "./styles/reset.scss";
import MainLayout from "./Components/Layouts/MainLayouts/MainLayout.tsx";

const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
