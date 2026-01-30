const btnSave = document.getElementById("save-server");
const IP_serv = document.getElementById("ip-serv");

btnSave.onclick = async (e) => {
    e.preventDefault();
    const serverAddress = IP_serv.value.trim();

    if (!serverAddress) {
    console.log("Adresse serveur non renseignée");
    return;
  }

    try {
        const response = await fetch(`http://${serverAddress}/api/listPlayers`);

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status)
        }

        const data = await response.json();
        for (const id in data){
            loadPlayers(data, id);
            loadPlayerStats(data, id);
        }

        const players_kd = [...data].sort(
            (a, b) => b.kdRatio - a.kdRatio
        );

        loadRanking(players_kd);
        
    } catch(error) {
        console.log("Erreur lors du chargement : ", error);
    }
}

function loadPlayers(data, id){
    // console.log("name :", data[id].name);
}

function loadPlayerStats(data, id){
    // console.log("Game played :", data[id].gamesPlayed);
    // console.log("Kills", data[id].totalKills);
    // console.log("Deaths", data[id].totalDeaths);
    // console.log("K/D", data[id].kdRatio);
}

function loadRanking(players_kd){
    console.log(players_kd);
}
