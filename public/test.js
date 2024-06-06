
const Formeln = document.getElementById("Formeln");
const explosive = document.getElementById("explosive");
const hidden = document.getElementById("hidden");
var dataMap = 0;
var Variabelenmap = 0;
var Formelnarray = 0;
var Konstantenmap = 0;
var SImap = 0;
var hiddenarray = {};
const delayInMilliseconds = 1000;

function fillexplosive(variable){
  var vari = hiddenarray[variable];
  explosive.appendChild(vari);
}

function Fill(Formel){
  var Formula_div = document.createElement("div");
  Formula_div.classList = "Formel";
  var parts = Formel["Formel"].split(" ");
  var Variabelenarray =[];
  var Formula_l = Formel.Formel.replaceAll("?","\\");
  var Beschreibung = Formel.Beschreibung;
  var Formula_p = document.createElement("p");
  var alt_b = Formula_l.indexOf("~(");
  var alt_e = Formula_l.substring(alt_b,Formula_l.length).indexOf(")")+alt_b;
  var alt = Formula_l.substring(alt_b+2,alt_e);
  for (let i = 0; i < parts.length; i++) {
    if (Variabelenmap.has(parts[i])){
      Variabelenarray.push(parts[i]);
      var Variabele = Variabelenmap.get(parts[i]);
      if(document.getElementById(parts[i])==null){
        hiddenarray[parts[i]] = document.createElement("p");  
        hiddenarray[parts[i]].id = parts[i];
        hiddenarray[parts[i]].innerHTML=" \\( "+parts[i].replace("?","\\")+" \\)"+" = "+Variabele.Beschreibung+" \\( "+" ["+Variabele.Einheit.replace("?","\\")+" ]"+" \\)";
        hidden.appendChild(hiddenarray[parts[i]]);
        }
      } 
      };
    var Formula = "\\( "+ Formula_l.replace(Formula_l.substring(alt_b,alt_e+1),"") + " \\)";
    Formula_p.innerText = Formula;
    Formula_p.classList.add("p,"+Variabelenarray);
    Formula_div.appendChild(Formula_p);
    Formeln.appendChild(Formula_div);
    Formula_div.addEventListener("mouseenter", (event) => {
      
        var x = event.clientX,
            y = event.clientY;
            explosive.style.top = (y + 20) + 'px';
            explosive.style.left = (x + 20) + 'px';
            explosive.replaceChildren();
            var h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(Beschreibung));
            explosive.appendChild(h1);
            Variabelenarray.forEach((element) => fillexplosive(element));
    });
    Formula_div.addEventListener("mousemove", (event) => {
      var x = event.clientX,
          y = event.clientY;
          explosive.style.top = (y + 20) + 'px';
          explosive.style.left = (x + 20) + 'px';
  });}

fetch('Formeln.json')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
        dataMap = new Map(Object.entries(data));
        Variabelenmap = new Map(Object.entries(data["Variabelen"]));
        Formelnarray = new Map(Object.entries(data["Formeln"])); 
        Konstantenmap = new Map(Object.entries(data["Konstanten"]));
        SImap = new Map(Object.entries(data["SI-Einheiten"]));
        Formelnarray.forEach((Formel) => Fill(Formel))})
        
          

       

    
