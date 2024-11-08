const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.${e.key}`);
  key.childNodes[1].play();
  key.style.backgroundColor = "white";
  key.style.color = "black";
});
body.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.${e.key}`);
  key.style.backgroundColor = "black";
  key.style.color = "white";
  key.childNodes[1].pause();
  key.childNodes[1].load();
});
