import Header from "../Header/Header";
import "../../../styles/App.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
