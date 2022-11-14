const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset-btn");

const tip = document.getElementById("tip");
const total = document.getElementById("total");

const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const customBtn = document.getElementById("custom");
const customRange = document.querySelector(".custom-range");

function unselectAll() {
  btns.forEach(btn=> btn.style.background = "var(--Very-dark-cyan)")
}

let numberOfPeople = 1;
let percentage = 0;

resetBtn.disabled = true;

function updateSum() {
  let tipAmount = (Number(billInput.value)/100) * percentage;
  tip.textContent = (tipAmount / numberOfPeople).toFixed(2),
  total.textContent = ((Number(billInput.value) + tipAmount) / numberOfPeople).toFixed(2)

  tip.animate([
    // keyframes
    { opacity: .3 },
    { opacity: 1 }
  ], {
    // timing options
    duration: 200
  });

  total.animate([
    // keyframes
    { opacity: .3 },
    { opacity: 1 }
  ], {
    // timing options
    duration: 200
  });

}

btns.forEach(btn => btn.addEventListener("click", function() {
    unselectAll(),
    this.style.background = "var(--Strong-cyan)",

      percentage = parseInt(btn.textContent),
      updateSum()
      }));
    

      // INPUTS
billInput.addEventListener("input", function() {
  if (billInput.value == "") {
    billInput.value == 0;
  }
    updateSum(),
    resetBtn.disabled = false
  })

peopleInput.addEventListener("input", function() {
  if (peopleInput.value === "") {
    peopleInput.value == 1;
  }
    numberOfPeople = Number(peopleInput.value),
    updateSum(),
    resetBtn.disabled = false
  })
    ////////////////


    // SELECT CUSTOM TIP %
customBtn.addEventListener("click", function() {
  if (!customBtn.classList.contains("display")) {
    customBtn.textContent = "Custom"
  }
  customRange.classList.toggle("display"),
  resetBtn.disabled = false
})

customRange.addEventListener("input", function() {
  customBtn.textContent = customRange.value + "%",
  percentage = customRange.value,
  updateSum()
})


resetBtn.addEventListener("click", function() {
  tip.textContent = 0;
  total.textContent = 0;
  billInput.value = "";
  peopleInput.value = "";
  resetBtn.disabled = true;
  customRange.classList.remove("display");
  customBtn.textContent = "Custom";
  btns.forEach(btn=> btn.style.background = "var(--Very-dark-cyan)")
})


let r = document.querySelector(":root");
const clrs = [
  ["#e8c547", "#30323D", "#4D5061"],
  ["#26c0ab", "#c5e4e7", "#00494d"],
  ["#38023B;", "#A288E3", "#BBD5ED"],
  ["#FDFFFC;", "#235789", "#C1292E"],
  ["#FDFFFC", "#235789", "#C1292E"],
  ["#F7B2B7","#F7717D","#DE639A"],
  ["#7C6A0A","#BABD8D","#662400"],
  ["#006992","#EAF8BF", "#ECA400"]];
let randomNum = Math.floor(Math.random() * clrs.length)
function colorOnLoad() {
    r.style.setProperty("--Strong-cyan", clrs[randomNum][0]);
    r.style.setProperty("--Light-grayish-cyan", clrs[randomNum][1]);
    r.style.setProperty("--Very-dark-cyan", clrs[randomNum][2]);
    
}
