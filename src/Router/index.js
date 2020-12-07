import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Header } from "../Components/Header";
import { CategoryResult } from "../Pages/CategoryResult";
import { SearchResult } from "../Pages/SearchResult";
import { DetailsProduct } from "../Pages/DetailsProduct";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/category/:idCategory" component={CategoryResult} />
        <Route path="/search/:keyWord" component={SearchResult} />
        <Route path="/details/:idProduct" component={DetailsProduct} />
      </Switch>
    </Router>
  );
}
