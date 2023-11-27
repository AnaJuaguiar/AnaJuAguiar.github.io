import React from "react";

const BiIntegration = () => {
  const embedUrl =
    "https://app.powerbi.com/reportEmbed?reportId=cc8c6e07-01e4-4404-bd8f-03926c9cf1b3&autoAuth=true&ctid=14cbd5a7-ec94-46ba-b314-cc0fc972a161";
    const BiLink = "https://app.powerbi.com/groups/me/reports/cc8c6e07-01e4-4404-bd8f-03926c9cf1b3/ReportSection?ctid=14cbd5a7-ec94-46ba-b314-cc0fc972a161&experience=power-bi";
    const handleButtonClick = () => {
      window.open(BiLink, "_blank");
    };
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Dashboard</p>
        <h1 className="primary-heading">Dados das Cafeterias</h1>
      </div>
    <div className="power-bi-embed-container">
    <iframe
      title="Cafeterias Betim"
      width="100%"
      height="541.25"
      src={embedUrl}
      allowFullScreen
    ></iframe>
    <button className="secondary-button"  onClick={handleButtonClick}>
            Acessar BI Completo
    </button>
  </div>
  
  </div>
   
  );
};

export default BiIntegration;
