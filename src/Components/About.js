import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/5091972.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre o Projeto</p>
        <h1 className="primary-heading">
          Café é o que nos mantém de pé
        </h1>
        <p className="primary-text">
          Este trabalho foi desenvolvido com o objetivo real de facilitar as escolhas de conhecer as melhores cafeterias de Betim.
        </p>
        <p className="primary-text">
          Para a disciplina de Power BI do curso de Sistemas de Informação na PUC MINAS Betim
          Todos os dados foram coletados com o auxílio do Google Maps.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Sobre nós</button>
          <button className="watch-video-button">
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
