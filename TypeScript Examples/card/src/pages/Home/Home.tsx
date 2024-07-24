import React from "react";
import "./Home.css";
import Card from "../../componets/Cards/Card";
import sony from "../../assets/images/sony.png"
import philips from "../../assets/images/philips.png"
import hammer from "../../assets/images/hammer.png"
import soundcore from "../../assets/images/soundcore.png"

const Home = () => {
  const items = [
    {
      src: sony,
      heading: "Sony WH-CH520",
      description:
        "Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Blue).",
    },
    {
      src: hammer,
      heading: "HAMMER Bash",
      description:
        "HAMMER Bash Max Over The Ear Wireless Bluetooth Headphones with Mic, Touch Control, Deep Bass, Upto 18 Hours Playtime, Bluetooth 5.3, Workout/Travel (Apricot).",
    },
    {
      src: philips,
      heading: "Philiphs TAH850",
      description:
        "Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant.",
    },
    {
      src: soundcore,
      heading: "Soundcore",
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
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
