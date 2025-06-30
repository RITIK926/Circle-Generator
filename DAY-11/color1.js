let circles = [];
let redoStack = [];

document.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") return;

  let circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = (e.clientX - 20) + "px";
  circle.style.top = (e.clientY - 20) + "px";
  circle.style.backgroundColor = getRandomColor();

  document.body.appendChild(circle);
  circles.push(circle);
  redoStack = [];
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("undo").addEventListener("click", function() {
  if (circles.length > 0) {
    let last = circles.pop();
    document.body.removeChild(last);
    redoStack.push(last);
  }
});

document.getElementById("redo").addEventListener("click", function() {
  if (redoStack.length > 0) {
    let circle = redoStack.pop();
    document.body.appendChild(circle);
    circles.push(circle);
  }
});

document.getElementById("reset").addEventListener("click", function() {
  circles.forEach(c => document.body.removeChild(c));
  circles = [];
  redoStack = [];
});