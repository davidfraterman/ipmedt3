// main.js
window.onload = function () {
  // scene objects
  const camera = document.getElementById("js--camera");
  let models = document.getElementsByClassName("js--printedmodels");
  let spheres = document.getElementsByClassName("js--sphere");
  const placeholder = document.getElementsByClassName("js--placeholder");
  let scene = document.getElementById("js--scene");

  // vars
  let hold = null;

  // add click (hover) listener to all pickup-able rebus images
  for (let i = 0; i < spheres.length; i++) {
    spheres[i].addEventListener("click", function (evt) {
      // if not holding anything, pick up the rebus image
      if (hold == null) {
        for (let j = 0; j < models.length; j++) {
          temp = evt.target;
          console.log(temp.outerHTML);
          camera.innerHTML +=
            '<a-sphere position="1 -2 -1" radius="0.5">' +
            temp.outerHTML +
            "</a-sphere>";
          this.remove();
          console.log(camera.innerHTML);
        }
        hold = "model";
      }
    });
  }
};
