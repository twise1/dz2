import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Examples from "./Examples";
import Contacts from "./Contacts";
import "./index.css";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Link className="link 1" to="/main">
            Главная
          </Link>
          <Link className="link 2" to="/about">
            О себе
          </Link>
          <Link className="link 3" to="/examples">
            Примеры работ
          </Link>
          <Link className="link 4" to="/contacts">
            Контактная информация
          </Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    );
  }
}
export default App;
