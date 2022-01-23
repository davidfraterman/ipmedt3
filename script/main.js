// Lopen door te kliken op voeten
window.onload = function () {
  const camera = document.getElementById("js--camera");
  let cursor = document.getElementById("js--cursor");
  let destinations = document.getElementsByClassName("js--destinations");
  let models = document.getElementsByClassName("js--printedmodels");
  let spheres = document.getElementsByClassName("js--sphere")
  const placeholder = document.getElementsByClassName("js--placeholder")
  let scene = document.getElementById("js--scene");
  

  let hold = null;

  for (var i = 0; i < destinations.length; i++) {
    const destination = destinations[i];
    destination.onclick = (event) => {
      console.log(event.target);
      // camera.setAttribute("position", event.target.getAttribute("position"));
      let att = document.createAttribute("animation");
      att.value = `property: position; easing: easeInOutSine; dur: 2000; to: 
        ${event.target.getAttribute("position").x} 0 ${event.target.getAttribute("position").z}`;
      camera.setAttribute("animation", att.value);
    };
  }

  for (var i = 0; i < spheres.length; i++) {
    spheres[i].addEventListener('click', function (evt) {
      if (hold == null) {
        for (var j = 0; j < models.length; j++) {
          temp = evt.target
          console.log(temp.outerHTML)
          camera.innerHTML += '<a-sphere position="1 -2 -1" radius="0.5">' + temp.outerHTML + '</a-sphere>'
          this.remove();
          console.log(camera.innerHTML)
        };
        hold = "model"
      };
    });
  };
};