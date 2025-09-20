document.addEventListener("click", (e) => {
  const coconut = document.createElement("div");
  coconut.textContent = "🥥";
  coconut.style.position = "absolute";
  coconut.style.left = e.pageX + "px";
  coconut.style.top = e.pageY + "px";
  coconut.style.fontSize = "2rem";
  coconut.style.animation = "fall 2s linear forwards";
  document.body.appendChild(coconut);

  setTimeout(() => coconut.remove(), 2000);
});

const style = document.createElement("style");
style.textContent = `
@keyframes fall {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(200px); opacity: 0; }
}`;
document.head.appendChild(style);
