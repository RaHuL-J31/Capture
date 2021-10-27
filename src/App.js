import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import OurWork from "./page/OurWork";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./page/MovieDetail";

import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route>
            <MovieDetail path="/work/:id" exact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
