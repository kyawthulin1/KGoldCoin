// Telegram Mini App
const tg = window.Telegram.WebApp;

// Initialize
tg.ready();
tg.expand();

// Theme
document.body.style.backgroundColor = tg.themeParams.bg_color || "#111827";

// User Info
const user = tg.initDataUnsafe?.user;

if (user) {
  const username = document.getElementById("username");
  
  username.textContent =
    user.first_name +
    (user.last_name ? " " + user.last_name : "");
  
  console.log("Telegram ID:", user.id);
  console.log("Username:", user.username);
}

// Main Button (optional)
tg.MainButton.setText("Start Mining");
tg.MainButton.hide();

// Enable closing confirmation
tg.enableClosingConfirmation();