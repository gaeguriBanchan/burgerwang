/** @format */

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/base/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import InfoChange from './pages/InfoChange';
import PwChange from './pages/PwChange';
import DropOut from './pages/DropOut';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Cart from './pages/Cart';
import OrderList from './pages/OrderList';
import OrderListDetail from './pages/OrderListDetail';
import Mypage from './pages/Mypage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route element={<Header />}>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/infoChange" element={<InfoChange />}></Route>
            <Route path="/pwChange" element={<PwChange />}></Route>
            <Route path="/dropOut" element={<DropOut />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/orderList" element={<OrderList />}></Route>
            <Route
              path="/orderListDetail"
              element={<OrderListDetail />}
            ></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
