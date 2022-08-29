// https://www.thesportsdb.com/api/v1/json/2/all_sports.php
const allSports = () => {
  const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";
  fetch(url)
    .then((res) => res.json())
    .then((data) => sport(data.sports))
    .catch((error) => console.log(error));
};

const sport = (sports) => {
  const colContainer = document.getElementById("col-container");
  sports.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="p-3 border bg-light hover-shadow">
        <img src =" ${element.strSportIconGreen} " alt =" images not found">
        </div>
        <h5>${element.strSport}</h5>
        `;
    colContainer.appendChild(div);
  });
};

allSports();
