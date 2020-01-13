import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./shop/component/headder/nav";
import Gridcomponent from "./shop/component/gridcomponent"
import Listcomponent from "./shop/component/listcomponent"
import Detailcomponent from "./shop/component/detailcomponent"

function Main() {
  return (
    <Router>
      <Nav />
        
        <Route exact path="/" component={ Gridcomponent } />
        <Route path="/list" component={ Listcomponent } />
        <Route path="/detail/:id" component={ Detailcomponent } />
      
    </Router>
  );
}


export default Main;