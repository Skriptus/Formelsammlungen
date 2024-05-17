
const Formeln = {'Allgemein':['Allgemein','Grichisches Alphabet','Konstanten'],'Chemie':['Chemie'],
'Elektrotechnik':['Elektrotechnik'],'Mathe':['Mathe','Stochastik'],
'Physik': ['Physik','Gase','Thermodynamik']}
const Formelcard = document.getElementById("Formelcard");
const Formelbutton = document.getElementById("Formelbutton");
const Formeltemp = document.getElementById("Formel");

const Main = document.getElementById("Main");
const Main2 = document.getElementById("Main2");
const title = document.getElementById("title");

function countVisibleChildren(element) {
  let visibleCount = 0;
  for (const child of element.children) {
    const style = window.getComputedStyle(child);
    if (style.display !== 'none' && style.visibility !== 'hidden') {
      visibleCount++;
    }
  }
  return visibleCount;
}

function AddFormel(FolderandFormel){
  var Formel = FolderandFormel.split(",");
  var element =  document.getElementById(Formel[1]+"Formel");
  if (element == null && Main2.children.length < 3){
    const Formelb = document.getElementById(FolderandFormel);
    Formelb.style.display = "none";
    if(countVisibleChildren(Formelb.parentElement) == 0){
      Formelb.parentElement.style.display = "none";
    }
    title.style.display = "none";
    const cloneFormel = Formeltemp.content.cloneNode(true);
    const new_formel = cloneFormel.querySelector(".Formel");
    new_formel.src = "Formeln/"+Formel[0]+"/"+Formel[1]+".html";
    new_formel.id = Formel[1]+"Formel";
    
    const x = cloneFormel.querySelector(".X");
    x.id = Formel+"x";
    Main2.prepend(cloneFormel);
    var styleSheet = document.createElement("style")
    styleSheet.src = "css/table.css"
    console.log(document.getElementById(Formel[1]+"Formel").innerHTML);
    x.addEventListener("click", function() {
      const i = x.id;
      const f = i.substring(0,i.length-1);
      document.getElementById(f).style.display = "";
      document.getElementById(f).parentElement.style.display = "";
      setTimeout(() => {
        x.parentElement.remove(); // Call the pre-defined function
      if (Main2.children.length == 1){
        title.style.display = "";
      };
      }, 20);
      
    });
    // Add event listener for touch events
    x.addEventListener("touchend", function() {
      const i = x.id;
      const f = i.substring(0,i.length-1);
      document.getElementById(f).style.display = "";
      document.getElementById(f).parentElement.style.display = "";
      setTimeout(() => {
        x.parentElement.remove(); // Call the pre-defined function
      if (Main2.children.length == 1){
        title.style.display = "";
      };
      }, 250);
    });
    
  }
};


for(var key in Formeln){
  const clonecard = Formelcard.content.cloneNode(true);
  const new_card = clonecard.querySelector(".Formelcard");
  new_card.id = Formeln[key][0];
  // Append the cloned content to the parent element
  Main.appendChild(new_card);
  for (let ii=0; ii<Formeln[key].length;ii++){
    
  const clonebutton = Formelbutton.content.cloneNode(true);
  const new_button = clonebutton.querySelector(".Formelbutton");
  new_button.textContent = Formeln[key][ii];
  new_button.id = Formeln[key][0]+","+Formeln[key][ii];
  // Append the cloned content to the parent element
  document.getElementById(key).appendChild(new_button);
  // Add event listener for click events
  new_button.addEventListener("click", function() {
    setTimeout(() => {
      AddFormel(new_button.id);
    }, 20);
  });
  // Add event listener for touch events
  new_button.addEventListener("touchend", function() {
    setTimeout(() => {
      AddFormel(new_button.id);
    }, 250);
  });
};};


