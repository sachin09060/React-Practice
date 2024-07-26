import React from "react";
import Header from "../../components/Header/Header";
import "./Shop.css";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Cards/Card";
import pizza from "../../assets/images/pizza.png"
import hamburger from "../../assets/images/hamburger.png"
import donut from "../../assets/images/donut.png"
import kfc from "../../assets/images/kfc.png"
import icecream from "../../assets/images/ice-cream2.png"
import coffee from "../../assets/images/latte-coffee.png"
import friedrice from "../../assets/images/fried-rice.png"
import noodles from "../../assets/images/noodles.png"
import samosa from "../../assets/images/samosa.png"
import chickenrice from "../../assets/images/rice-chicken.png"

const Shop = () => {
  const items = [
    {
      src: pizza,
      heading: "Italian Margherita",
      price: "₹499",
      description:
        "The Marinara uses tomatoes oregano, extra virgin olive oil and if preferred, basil.",
    },
    {
      src: hamburger,
      heading: "Hamburger",
      price: "₹299",
      description:
        "A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll.",
    },
    {
      src: donut,
      heading: "Choco-Doughnut",
      price: "₹99.00",
      description:
        "Soft and fluffy doughnuts coated in a rich chocolate glaze.",
    },
    {
      src: kfc,
      heading: "Fried Chicken",
      price: "₹299.00",
      description:
        "Crispy chicken consists of chicken pieces that are coated with seasoned flour or batter and then fried.",
    },
    
    {
      src: icecream,
      heading: "Ice Cream Waffles",
      price: "₹199",
      description:
        "A waffle is a leavened batter or dough cooked between two hot plates of a waffle iron.",
    },
    {
      src: coffee,
      heading: "Latte Coffee",
      price: "₹99",
      description:
        "A true latte will be made up of one or two shots of espresso, steamed milk.",
    },
    {
      src: friedrice,
      heading: "Fried rice",
      price: "₹149.00",
      description:
        "Soft and fluffy doughnuts coated in a rich chocolate glaze.",
    },
    {
      src: noodles,
      heading: "Fried Chicken",
      price: "₹299.00",
      description:
        "Crispy chicken consists of chicken pieces that are coated with seasoned flour or batter and then fried.",
    },
    {
      src: samosa,
      heading: "Samosa",
      price: "₹99.00",
      description:
        "Soft and fluffy doughnuts coated in a rich chocolate glaze.",
    },
    {
      src: chickenrice,
      heading: "Fried Chicken",
      price: "₹299.00",
      description:
        "Crispy chicken consists of chicken pieces that are coated with seasoned flour or batter and then fried.",
    },
  ];
  return (
    <>
      <Header />
      <div className="shop-container">
        <div className="shop-inner-container">
          <div className="shop-heading">
            <h1>Our Featured Food</h1>
          </div>
          <div className="shop-body">
          {items.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            heading={item.heading}
            price={item.price}
            description={item.description}
          />
        ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
