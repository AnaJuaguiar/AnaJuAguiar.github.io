import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/5824739.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const BiLink = "https://app.powerbi.com/groups/me/reports/cc8c6e07-01e4-4404-bd8f-03926c9cf1b3/ReportSection?ctid=14cbd5a7-ec94-46ba-b314-cc0fc972a161&experience=power-bi";
  const handleButtonClick = () => {
    window.open(BiLink, "_blank");
  };
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
          <button className="secondary-button"  onClick={handleButtonClick}>
            Acessar BI
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
