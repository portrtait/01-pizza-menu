import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS styles
import "./index.css";

// Data about pizzas - 6 pizzas
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Main UI Skeleton here
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering with ternary = render pizzas if there are pizzas in the array. Otherwise, notify user with plain text. */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from out stone ovenm all organic, all delicicious{" "}
          </p>

          <ul className="pizzas">
            {/* For every array element, render the Pizza component*/}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later ;)</p>
      )}
    </main>
  );
}

// Component Pizza
// {pizzaObj} need to match the name of the prop that's being passed in
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // early return: if pizza is sold out, don't show it
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>

      {/* /.pizza */}
    </li>
  );
}

// Footer component
function Footer() {
  // Lecture 39:  JavaScript Logic in Components
  const hour = new Date().getHours();
  const openHour = 8;
  // const openHour = 21;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("isOpen", isOpen);
  // Lecture 39:  JavaScript Logic in Components

  return (
    <footer className="footer">
      {/* Conditional rendering with ternary = render the Order component if we're open. Otherwise, notify user with plain text. */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// Component Order
function Order({ closeHour, openHour }) {
  console.log(openHour, closeHour);

  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>

      {/* /.order */}
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
