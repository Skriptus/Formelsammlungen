
const Formeln = document.getElementById("Formeln");
var dataMap = 0;
var Variabelenmap = 0;
var Formelnarray = 0;
var Konstantenmap = 0;
var SImap = 0;
const delayInMilliseconds = 1000;

function createhead(Bereich){
  if(document.getElementById(Bereich) == null){
    var headdiv = document.createElement("div");
    headdiv.id = Bereich + "h1";
    var head = document.createElement("h1");
    head.innerText = Bereich;
    headdiv.appendChild(head);
    Formeln.appendChild(headdiv);
    var fdiv = document.createElement("div");
    fdiv.id = Bereich;
    fdiv.classList = "fdiv";
    headdiv.appendChild(fdiv);
  }
}

function Fill(Formel){
  Formel.Bereiche.forEach((Bereich) => createhead(Bereich));
  var Formula_div = document.createElement("div");
  Formula_div.classList = "Formel";
  var parts = Formel["Formel"].split(" ");
  var Variabelenarray =[];
  var Konstarray = [];
  var Formula_l = Formel.Formel.replaceAll("?","\\");
  var Formula_p = document.createElement("p");
  var h2 = document.createElement("h3");
  h2.classList = "head2";
  h2.innerText = Formel.Beschreibung;
  Formula_div.appendChild(h2);
  var alt_b = Formula_l.indexOf("~(");
  var alt_e = Formula_l.substring(alt_b,Formula_l.length).indexOf(")")+alt_b;
  var alt = Formula_l.substring(alt_b+2,alt_e);
 
  var Formula = "\\( "+ Formula_l.replaceAll(Formula_l.substring(alt_b,alt_e+1),"") + " \\)";
  Formula_p.innerText = Formula;
  Formula_p.classList.add("p"+Variabelenarray);
  Formula_div.appendChild(Formula_p);
  var hidbox = document.createElement("div");
  hidbox.classList = "hidbox";
  var unit = document.createElement("p");
  unit.classList = "unit";
  unit.innerText = " \\( " + Formel.Einheit.replaceAll("?","\\")+" \\) ";
  hidbox.appendChild(unit)
  Formula_div.appendChild(hidbox);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i][0] == "~" && parts[i][1] != "("){
      var Ko = parts[i].substring(1);
      Konstarray.push(parts[i]);
      var Kon = Konstantenmap.get(Ko);
      var hid  = document.createElement("p");  
      hid.classList = "hidden";
      hid.innerHTML= Kon.Beschreibung + " \\( "+ Kon.Symbol.replaceAll("?","\\") + "=" + Kon.Wert.replaceAll("?","\\") + Kon.Einheit.replaceAll("?","\\") +  " \\) ";
      hidbox.appendChild(hid);
    }
    else if (parts[i][0] == "~" && parts[i][1] == "("){
      var Ko = parts[i].substring(2,parts[i].length-1);
      Konstarray.push(parts[i]);
      var Kon = Konstantenmap.get(Ko);
      var hid  = document.createElement("p");  
      hid.classList = "hidden";
      hid.innerHTML= "gängig für " +" \\( "+parts[i-1].replaceAll("?","\\")+ " :" +  "\\)" +"<br>"+ Kon.Beschreibung + " \\( "+ Kon.Symbol.replaceAll("?","\\") + "=" + Kon.Wert.replaceAll("?","\\") + Kon.Einheit.replaceAll("?","\\") +  " \\) ";
      hidbox.appendChild(hid);
    }
    else if (Variabelenmap.has(parts[i]) && !(Variabelenarray.includes(parts[i]))){
      Variabelenarray.push(parts[i]);
      var Variabele = Variabelenmap.get(parts[i]);
      console.log(" ["+" \\( "+Variabele.Einheit.replaceAll("?","\\")+" \\)"+" ]");
      var hid  = document.createElement("p");  
      hid.classList = "hidden"
      hid.innerHTML=" \\( "+parts[i].replaceAll("?","\\")+" = "+Variabele.Beschreibung+" \\)";
      hidbox.appendChild(hid);
      } 
      };
  Formel.Bereiche.forEach((Bereich) => document.getElementById(Bereich).appendChild(Formula_div));
}

function fillK(Konstante){
  Konstante.Bereiche.forEach((Bereich) => createhead(Bereich));
  var Konst = document.createElement("div");
  Konst.classList = "konstdiv";
  var konsthead = document.createElement("h2");
  konsthead.classList = "konsthead"
  konsthead.innerText =  Konstante.Beschreibung;
  Konst.innerText = "\\( "+ Konstante.Symbol.replaceAll("?","\\") + "=" + Konstante.Wert.replaceAll("?","\\") + Konstante.Einheit.replaceAll("?","\\") +  " \\) ";
  Konst.prepend(konsthead);
  Konstante.Bereiche.forEach((Bereich) => document.getElementById(Bereich).prepend(Konst));
}

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
        Formelnarray.forEach((Formel) => Fill(Formel))
        Konstantenmap.forEach((Konstante) => fillK(Konstante));});
        
          

       

    
