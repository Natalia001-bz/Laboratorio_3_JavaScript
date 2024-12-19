const h5Elements = document.querySelectorAll('h5');
const colorsArray = ["Green", "Blue", "Red"];

h5Elements.forEach((element) => {
  element.onclick = () => {
    const colorAleatorio = colorsArray[(Math.floor)(Math.random() * colorsArray.length)];
    element.style.color = colorAleatorio;
  }
});