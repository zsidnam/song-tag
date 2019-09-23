import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Content from "./components/layout/Content";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import "./layout.scss";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <header>Header</header>
        <Navbar />
        <div id="main-content">
          <Content />
          <Sidebar />
        </div>
        <footer>Footer</footer>
      </Fragment>
    </Provider>
  );
}

export default App;
