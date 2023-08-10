import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";
import Footer from "./Components/Footer";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      {cards}
      <Footer />
    </>
  );
}
