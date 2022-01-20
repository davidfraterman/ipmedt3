// js check
window.onload = () => {
  console.log("Main.js loaded");
  const text = document.getElementById("text");
  console.log(text);
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

// red button
AFRAME.registerComponent("red-button", {
  events: {
    //   remove text on click (test)
    click: function () {
      console.log("This entity was clicked!");
      this.el.setAttribute("position", "0 0.95 0.2");
      text.setAttribute("visible", false);
      setTimeout(() => {
        this.el.setAttribute("position", "0 1 0.2");
      }, 500);
    },
  },
});
