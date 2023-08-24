const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];

function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

setInterval(changeBackgroundColor, 3000);
