const container = document.getElementById("likeContainer");
const heart = document.getElementById("heart");

container.addEventListener("dblclick", handleDoubleClick);

function handleDoubleClick(e) {
  const rect = container.getBoundingClientRect();
  const x = Math.random() * (rect.width - 90);
  const y = Math.random() * (rect.height - 90);

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  heart.classList.add("show");

  setTimeout(function () {
    heart.classList.remove("show");
  }, 800);
}
