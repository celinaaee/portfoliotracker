function renderDashboard(req, res) {
    const username = "Celina";
    const totalVaerdi = 224543;
    const realiseretGevinst = 10241;
    const urealisaretGevinst = 25015;
  
    const topVaerdiListe = [];
    const topProfitListe = [];
  
    res.render("dashboard", {
      username,
      totalVaerdi,
      realiseretGevinst,
      urealisaretGevinst,
      topVaerdiListe,
      topProfitListe
    });
  }
  
  module.exports = { renderDashboard };
  