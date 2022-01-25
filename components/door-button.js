// knopje bij de deur om naar binnen en buiten te gaan
AFRAME.registerComponent("door-button", {
  schema: {},
  init: function () {
    // ------ ZET DEZE OP FALSE OF TRUE OM COMPLETION VAN SPEL TE SIMULEREN ------
    let isGameComplete = true;

    // scene objects
    const button = this.el;
    const camera = document.getElementById("camerarig");
    const fovReduction = document.getElementById("js--fov-reduction");
    const doorScreenInside = document.getElementById("js--door-screen-inside");

    // door screen inside style & txt
    const insideScreenTxt = (txt, color) => {
      doorScreenInside.setAttribute("text", { value: txt });
      doorScreenInside.setAttribute("text", { color: color });
    };

    // checkt of game is voltooid
    if (isGameComplete === true) {
      // knop groen, tekst OPEN en groen
      button.setAttribute("color", "green");
      insideScreenTxt("OPEN", "green");
    } else {
      insideScreenTxt("LOCKED", "red");
      if (button.dataset.loc === "inside") {
        button.setAttribute("color", "red");
      }
    }

    // flash scherm text als je op de knop drukt (bij error bijvoorbeeld)
    const flashScreenText = (el) => {
      el.setAttribute("visible", false);
      setTimeout(() => {
        el.setAttribute("visible", true);
      }, 150);
      setTimeout(() => {
        el.setAttribute("visible", false);
      }, 200);
      setTimeout(() => {
        el.setAttribute("visible", true);
      }, 350);
    };

    // maak listener voor deur knoppen (door-button)
    const teleportListener = (loc) => {
      button.addEventListener("click", () => {
        // clicked animation
        button.setAttribute("depth", "0.4");
        setTimeout(() => {
          button.setAttribute("depth", "1");
        }, 250);

        // check of game is voltooid of loc is outside (want outside kan altijd naar binnen)
        if (isGameComplete || loc === "outside") {
          // zet zwarte afbeelding voor je camera visible (moet aan en uit anders zie je sommige comp. niet)
          fovReduction.setAttribute("visible", true);

          // maak animatie voor de zwarte afbeelding
          let animation = document.createAttribute("animation");
          animation.value =
            "property: opacity; easing: easeInOutSine; dur: 1000; to: 1;";
          fovReduction.setAttribute("animation", animation.value);

          // na 1 sec (als het beeld helemaal zwart is) verander van positie
          setTimeout(() => {
            // checkt welke knop het is, om te bepalen waar heen te teleporten
            if (loc === "outside") {
              camera.setAttribute("position", "0 1.6 5");
            } else {
              camera.setAttribute("position", "0 1.6 11.2");
            }

            // animeer zwarte afbeelding tot opacity 0
            animation.value =
              "property: opacity; easing: easeInOutSine; dur: 1000; to: 0;";

            fovReduction.setAttribute("animation", animation.value);
          }, 1000);

          // na 2100ms zet afbeelding visible weer op false om bug te voorkomen
          setTimeout(() => {
            fovReduction.setAttribute("visible", false);
          }, 2000);
        } else if (!isGameComplete) {
          // spel nog niet klaar
          flashScreenText(doorScreenInside);
        }
      });
    };

    // depending on the location of the button, geef de juiste tp coords.
    teleportListener(button.dataset.loc);
  },
});
