import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/base/Header";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import InfoChange from "./pages/InfoChange";
import PwChange from "./pages/PwChange";
import DropOut from "./pages/DropOut";
import Order from "./pages/Order";
import MenuContainer from "./components/menu/MenuContainer";
import Cart from "./pages/Cart";
import OrderListPage from "./pages/OrderListPage";
import OrderListDetail from "./pages/OrderListDetail";
import MyPage from "./pages/MyPage";
import MapPage from "./pages/MapPage";
import InfoChangeUpdate from "./pages/InfoChangeUpdate";
import FindInfoId from "./components/find/FindInfoId";
import FindInfoPw from "./components/find/FindInfoPw";
import OrderDone from "./pages/OrderDone";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<MenuContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route element={<Header />}>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/infoChange" element={<InfoChange />}></Route>
            <Route path="/infoChangeUpdate" element={<InfoChangeUpdate />}></Route>
            <Route path="/pwChange" element={<PwChange />}></Route>
            <Route path="/dropOut" element={<DropOut />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/orderSuccess" element={<OrderDone />}></Route>
            <Route path="/orderList" element={<OrderListPage />}></Route>

            <Route path="/mapPage" element={<MapPage />}></Route>

            <Route path="/orderListDetail" element={<OrderListDetail />}></Route>

            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/findinfoId" element={<FindInfoId />}></Route>
            <Route path="/findinfoPw" element={<FindInfoPw />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
