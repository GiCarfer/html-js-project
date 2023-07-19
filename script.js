const btn = document.querySelector("button");
const text = document.querySelector(".hide-text");

btn.addEventListener("click", function () {
  if (text.classList.contains("show")) {
    text.classList.remove("show");
    btn.innerHTML = "Mostrar conteúdo";
  } else {
    text.classList.add("show");
    btn.innerHTML = "Ocultar conteúdo";
  }
});


 