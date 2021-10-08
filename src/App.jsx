import "./App.css";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import CartWidget from "./component/CartWidget";
import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import Cart from "./component/Cart";
import CartContextProvider from "./context/cartContext";

const { Header, Content, Footer } = Layout;

function App() {
  const { pathname } = useLocation();
  return (
    <CartContextProvider>
      <Layout>
        <Header
          id="components-layout-demo-fixed"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <Link to="/">
            {" "}
            <div className="logo" />
          </Link>
          <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
            <Menu.Item key="/category/adornos">
              <Link to="/category/adornos">Adornos</Link>
            </Menu.Item>
            <Menu.Item key="/category/sahumerios">
              <Link to="/category/sahumerios">Sahumerios</Link>
            </Menu.Item>
            <Menu.Item key="/category/humificadores">
              <Link to="/category/humificador">Humificadores</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <CartWidget />
            </Menu.Item>
          </Menu>
        </Header>
        <Switch>
          <Content className="site-layout">
            <Route
              exact
              path="/"
              component={() => <ItemListContainer gretting="Bienvenidos" />}
            />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/detail/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
          </Content>
        </Switch>
        <Footer className="footer">
          Amor por los Aromas ©2021 Created by JF
        </Footer>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
