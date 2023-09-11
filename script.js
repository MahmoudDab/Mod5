// Define daily specials
const dailySpecials = [
  "Today's special: Grilled Salmon with Lemon Butter Sauce",
  "Enjoy our Chef's Pasta with Fresh Herbs today!",
  "Try our BBQ Ribs with Homemade Coleslaw!",
  "Indulge in a Chocolate Lava Cake for dessert!",
  "Sip on our Tropical Mango Mojito this evening."
];

// Function to toggle the menu visibility
function toggleMenu() {
  const menuContainer = document.getElementById("menuContainer");
  menuContainer.classList.toggle("hidden");
}

// Function to display a random daily special
function displayDailySpecial() {
  const specialContainer = document.getElementById("specialContainer");
  const dailySpecial = document.getElementById("dailySpecial");
  const randomSpecial = dailySpecials[Math.floor(Math.random() * dailySpecials.length)];
  dailySpecial.textContent = randomSpecial;
  specialContainer.classList.remove("hidden");
}

// Function to open Google Maps in a new tab/window
function showMap() {
  window.open('https://www.google.com/maps', '_blank');
}

// Function to open the reservation form
function openReservationForm() {
  const reservationForm = document.getElementById("reservationForm");
  reservationForm.classList.remove("hidden");
}

// Add event listeners for the buttons
document.querySelector(".tile.specials").addEventListener("click", displayDailySpecial);
document.querySelector(".tile.map").addEventListener("click", showMap);
document.querySelector(".tile.reservation").addEventListener("click", openReservationForm);
document.querySelector(".tile.menu").addEventListener("click", toggleMenu);
