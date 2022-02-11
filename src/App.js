import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Private,
  AuthWrapper
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <div>
      <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route exact path="/products">
            {" "}
            <Products />{" "}
          </Route>
          <Private exact path="/checkout">
            {" "}
            <Checkout />{" "}
          </Private>
          <Route exact path="/cart">
            {" "}
            <Cart />{" "}
          </Route>
          <Route exact path="/product/:id">
            {" "}
            {<SingleProduct />}
          </Route>
          <Route exact path="*">
            {" "}
            <Error />{" "}
          </Route>
        </Switch>
        <Footer />
      </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
