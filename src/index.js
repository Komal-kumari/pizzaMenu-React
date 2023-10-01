import React from "react";
import ReactDom from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Our Pizza Menu</h1>
    </div>
  );
};
const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
};
const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredient}</p>
      <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
    </li>
  );
};

const Footer = () => {
  const currentTime = new Date().getHours();
  const openHour = 12;
  const closeHours = 24;
  const isOpen = currentTime >= openHour && currentTime <= closeHours;
  return (
    <footer>
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {closeHours}:00 hrs, visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
