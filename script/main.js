// js check
window.onload = () => {
  console.log("Main.js loaded");
};

// rocket-ship test component
AFRAME.registerComponent("rocket-ship", {
  events: {
    //   verander kleur als raket wordt geklikt met cursor
    click: function () {
      console.log("This entity was clicked!");
      this.el.setAttribute("material", "color", "red");
    },
  },
});
