// Gaze based walking
window.onload = function () {
  let camera = document.getElementById("camera");
  let destinations = document.getElementsByClassName("destinations");

  for (var i = 0; i < destinations.length; i++) {
    const destination = destinations[i];
    destination.onclick = (event) => {
      console.log(event.target);
      // camera.setAttribute("position", event.target.getAttribute("position"));
      let att = document.createAttribute("animation");
      att.value = `property: position; easing: linear; dur: 1000; to: ${
        event.target.getAttribute("position").x
      } 0 ${event.target.getAttribute("position").z}`;
      camera.setAttribute("animation", att.value);
    };
  }
};
