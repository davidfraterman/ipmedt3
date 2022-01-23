// dit component zorgt ervoor dat je kunt lopen door de map
AFRAME.registerComponent("walker", {
  schema: {},
  init: function () {
    const camera = document.getElementById("js--camera");
    // const audio = new Audio("assets/footsteps-4.mp3")
    let walker = this.el;

    // loop naar positie van een waypoint
    this.goWalk = function () {
      // audio.play()
      let att = document.createAttribute("animation");
      att.value =
        "property: position; easing: easeInOutSine; dur: 2500; to: " +
        this.getAttribute("position").x +
        " 1.6 " +
        this.getAttribute("position").z;
      camera.setAttribute("animation", att.value);
    };

    // voeg bij elke waypoint een walk event toe
    walker.addEventListener("click", this.goWalk);
  },
});
