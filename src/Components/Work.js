import React from "react";
import Bia from "../Assets/bia.png";
import Ana from "../Assets/ana.png";
import Clovis from "../Assets/clovis.png";

const Work = () => {
  const workInfoData = [
    {
      image: Bia,
      title: "Bianca Rangel",
      text: "Estudante do curso de Sistemas de Informação.",
    },
    {
      image: Ana,
      title: "Ana Júlia Aguiar",
      text: "Estudante do curso de Sistemas de Informação.",
    },
    {
      image: Clovis,
      title: "Clóvis Tavares",
      text: "Orientador do Projeto, Professor na PUC MINAS",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Pessoas Envolvidas</p>
        <h1 className="primary-heading">Quem Construiu Tudo</h1>
        <p className="primary-text">
          O trabalho realizado para a disciplina de Power BI do curso de Sistemas de Informação na PUC MINAS Betim. Entenda quem faz parte disso
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
