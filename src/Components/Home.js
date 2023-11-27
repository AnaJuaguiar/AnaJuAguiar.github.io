import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/5824739.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            As melhores cafeterias de Betim estão aqui...
          </h1>
          <p className="primary-text">
            Para você saber onde ir, quais as melhores opções, avaliações e  horários de funcionamento sempre em mãos, tão rápido quanto um expresso!
          </p>
          <button className="secondary-button">
            Acessar BI <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
