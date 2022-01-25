// game-code generator
AFRAME.registerComponent("game-code", {
  schema: {},
  init: function () {
    // 5 random digits voor de code, String zodat je altijd 5 digits hebt
    const gameCode =
      String(Math.floor(Math.random() * 9)) +
      String(Math.floor(Math.random() * 9)) +
      String(Math.floor(Math.random() * 9)) +
      String(Math.floor(Math.random() * 9)) +
      String(Math.floor(Math.random() * 9));

    // zet gameCode in de html
    this.el.setAttribute("text", { value: gameCode });
  },
});
