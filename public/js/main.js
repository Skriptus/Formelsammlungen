
const Formeln=['Allgemeines','Chemie','Elektrotechnik','Gase','Grichisches Alphabet','Mathe','Physik','Stochastik','Thermodynamik'];
const Formelbutton = document.getElementById("Formelbutton");
const Formeltemp = document.getElementById("Formel");

const Main = document.getElementById("Main");

function AddFormel(Formel){
  var element =  document.getElementById(Formel+"Formel");
  if (element == null){
    const Formelb = document.getElementById(Formel);
    Formelb.style.display = "none";
    const cloneFormel = Formeltemp.content.cloneNode(true);
    const new_formel = cloneFormel.querySelector(".Formel");
    new_formel.src = "Formeln/"+Formel+".html";
    new_formel.id = Formel+"Formel";
    
    const x = cloneFormel.querySelector(".X");
    x.id = Formel+"x";
    Main.prepend(cloneFormel);
    x.addEventListener("click", function() {
      const i = x.id;
      const f = i.substring(0,i.length-1);
      document.getElementById(f).style.display = "";
      x.parentElement.remove(); // Call the pre-defined function
    });
    // Add event listener for touch events
    x.addEventListener("touchstart", function() {
      const i = x.id;
      const f = i.substring(0,i.length-1);
      document.getElementById(f).style.display = "";
      x.parentElement.remove();});
  }
};


for(let i=0; i<Formeln.length;i++){
  const clonebutton = Formelbutton.content.cloneNode(true);
  const new_button = clonebutton.querySelector(".Formelbutton");
  new_button.textContent = Formeln[i];
  new_button.id = Formeln[i];
  console.log(new_button.id);
  // Append the cloned content to the parent element
  Main.appendChild(new_button);
  // Add event listener for click events
  new_button.addEventListener("click", function() {
    AddFormel(Formeln[i]); // Call the pre-defined function
  });
  // Add event listener for touch events
  new_button.addEventListener("touchstart", function() {
    AddFormel(Formeln[i]); // Call the pre-defined function
  });
};


