import "./App.less";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import CartWidget from "./component/CartWidget";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import CartContainer from "./containers/CartContainer";
import CartContextProvider from "./context/cartContext";
import PurchaseResultContainer from "./containers/PurchaseResultContainer";
import Logo from "./component/Logo";

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
          <Logo />

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
              component={() => <ProductListContainer gretting="Bienvenidos" />}
            />
            <Route path="/category/:id" component={ProductListContainer} />
            <Route path="/detail/:id" component={ProductDetailContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <Route path="/gracias/:id" component={PurchaseResultContainer} />
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
