import React from "react";
import "./Home.css";
import Card from "../../componets/Cards/Card";
import JBL from "../../assets/images/JBL.png"
import philips from "../../assets/images/philips.png"
import hammer from "../../assets/images/hammer.png"
import soundcore from "../../assets/images/soundcore.png"

const Home = () => {
  const items = [
    {
      src: JBL,
      heading: "JBL Tune 510BT",
      price:"$50",
      description:
        "JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice Assistant .",
    },
    {
      src: hammer,
      heading: "HAMMER Bash",
      price:"$45",
      description:
        "HAMMER Bash Max Over The Ear Wireless Bluetooth Headphones with Mic, Touch Control, Deep Bass, Upto 18 Hours Playtime, Bluetooth 5.3, Workout/Travel (Apricot).",
    },
    {
      src: philips,
      heading: "Philiphs TAH850",
      price:"$52",
      description:
        "Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant.",
    },
    {
      src: soundcore,
      heading: "Soundcore",
      price:"$39",
      description:
        "Space One, Active Noise Cancelling Headphones, 2X Stronger Voice Reduction, 40H ANC Playtime, App Control, LDAC Hi-Res Wireless Audio, Comfortable Fit, Clear Calls",
    },
  ];

  return (
    <div className="outer-container">
      <h1 className="heading">Pick your favourite item here!</h1>
      <div className="continer">
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
  );
};

export default Home;
