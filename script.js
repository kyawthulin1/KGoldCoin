// Elements
const coinsEl = document.getElementById("coins");
const energyEl = document.getElementById("energy");
const tapButton = document.getElementById("tapButton");

// Load saved data
let coins = Number(localStorage.getItem("kgc_coins")) || 0;
let energy = Number(localStorage.getItem("kgc_energy")) || 100;

// Update screen
function updateUI() {
  coinsEl.textContent = coins;
  energyEl.textContent = energy;
}

// Save data
function saveData() {
  localStorage.setItem("kgc_coins", coins);
  localStorage.setItem("kgc_energy", energy);
}

// Tap event
tapButton.addEventListener("click", () => {
  
  if (energy <= 0) {
    alert("⚡ Energy is empty!");
    return;
  }
  
  coins += 1;
  energy -= 1;
  
  updateUI();
  saveData();
});

// Energy recovery
setInterval(() => {
  if (energy < 100) {
    energy++;
    updateUI();
    saveData();
  }
}, 5000);

// Start
updateUI();