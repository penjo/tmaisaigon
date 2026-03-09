import { Routes,Route } from "react-router-dom";
import React from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { MENU_DATA } from "./components/Layout/Header/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    
      <>
      <Header />
    
      <Routes>
      <Route path="/" element={<Home />} />

  {MENU_DATA.map((menu, index) => (
    <React.Fragment key={index}>

      {/* Trang đơn */}
      {menu.component && (
        <Route
          path={menu.path}
          element={React.createElement(menu.component)}
        />
      )}

      {/* Dropdown */}
      {menu.items?.map((sub, subIdx) => {
        const Page = sub.component;

        return (
          <Route
            key={subIdx}
            path={sub.path}
            element={Page ? <Page /> : <div>Trang đang cập nhật</div>}
          />
        );
      })}

    </React.Fragment>
  ))}
    </Routes>
    <Footer/>
    </>
  );
}
