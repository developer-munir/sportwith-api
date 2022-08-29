// https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England
const allLeagues = (countrieName) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${countrieName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getLeague(data.countries))
    .catch((error) => console.log(error));
};
const getLeague = (leauges) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = ``;
  leauges.forEach(leauge => {
    // console.log(leauge);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100 hover-shadow " onclick = getTeams(${
          leauge.strLeague
        })>
      <div class = "p-2">
        <img src="${leauge.strBadge}" class="card-img-top" alt="...">
      </div>
      <div class="card-body" >
        <h5 class="card-title" id="card-body">${leauge.strLeague}</h5>
        <p class="card-text">${leauge.strDescriptionEN.slice(0, 180)}</p>
      </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
};
const searchBtn = () => {
  const searchInputField = document.getElementById("searchField");
  const searchFieldValue = searchInputField.value;
  allLeagues(searchFieldValue);
  searchInputField.value = "";
};

const getTeams = (teamName) => {
  console.log(teamName)
  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${teamName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.teams))
    .catch((error) => console.log(error))
};

const teamData = (teams) => {
  const ol = document.getElementById("ol");
  ol.textContent = ``;
  teams.forEach(team => {
    // console.log(team.strTeam);
    const li = document.createElement("li");
    li.innerText = `${team.strTeam}`;
    ol.appendChild(li);
  });
};

// strTeam
// allLeagues('');
// idLeague
// https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League
