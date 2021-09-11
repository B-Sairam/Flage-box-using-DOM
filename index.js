

let container = document.createElement('div');
container.className ='container';
document.body.append(container);

let countriesInfo = [{name: "India",population: " 1,394,975,829",region: "Asia",flag:"https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",capital: "New delhi"},{name: "Germany",population: "81,770,900",region: "Europe",flag:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",capital: "Berlin"},{name: "United states",population: "323,947,000",region: "Americas",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",capital: "Washington D.C"},{name: "Brazil",population: "206,135,893",region: "Americas",flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",capital: "Brasilia"}];


for(i=0;i<countriesInfo.length;i++){
   // let box = document.createElement('div');
   // box.className ='box';
   // container.append(box);
   container.innerHTML += ` <div class="box"> <img src=${countriesInfo[i].flag} class="img" alt="map">
   <div>
    <h2>${countriesInfo[i].name}</h2>
    <p>Population :${countriesInfo[i].population}</p>
    <p>Region : ${countriesInfo[i].region}</p>
    <p>Capital : ${countriesInfo[i].capital}</p>
   </div>
   </div>
   `;
}



