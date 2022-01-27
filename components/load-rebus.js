AFRAME.registerComponent("load-rebus", {
    schema: {},

    init: function () {
        const image1 = document.getElementById("js--plaatje-1");
        const image2 = document.getElementById("js--plaatje-2");
        const image3 = document.getElementById("js--plaatje-3");
        const image4 = document.getElementById("js--plaatje-4");
        const txt1 = document.getElementById("js--text-1");
        const txt2 = document.getElementById("js--text-2");
        const txt3 = document.getElementById("js--text-3");
        const txt4 = document.getElementById("js--text-4");
        const printer1button = document.getElementById("js--desk-printers-button-1");
        const printer2button = document.getElementById("js--desk-printers-button-2");

        // all rebus parts in element and string (string = for searching the api response data, element = for visibility)
        const allRebusParts = [image1, image2, image3, image4, txt1, txt2, txt3, txt4];
        const allRebusPartsToString = [
            "image1",
            "image2",
            "image3",
            "image4",
            "txt1",
            "txt2",
            "txt3",
            "txt4",
        ];

        const el = this.el;
        let data_holder = {};
        // depending on what button is pressed, the correct data is loaded
        let startIndex;
        let endIndex;

        // at start of game, remove all rebus parts
        const removeAllRebusParts = () => {
            allRebusParts.forEach((part) => {
                part.setAttribute("visible", false);
                part.removeAttribute("class", "clickable");
            });
        };
        removeAllRebusParts();

        // on api call, if puzzle is solved, the right rebus part is visible and clickable again
        const loadPieces = (startIndex, endIndex) => {
            // if solved = false: dont load piece, if solved = true: load piece
            for (startIndex; startIndex < endIndex; startIndex++) {
                if (data_holder[allRebusPartsToString[startIndex]].solved === false) {
                    allRebusParts[startIndex].setAttribute("visible", false);
                    allRebusParts[startIndex].removeAttribute("class", "clickable");
                } else if (data_holder[allRebusPartsToString[startIndex]].solved === true) {
                    allRebusParts[startIndex].setAttribute("visible", true);
                    allRebusParts[startIndex].setAttribute("class", "clickable");
                }
            }
        };

        // checks if printers are turned on from the control center
        const spawnRebusParts = () => {
            if (printer1button.getAttribute("color") === "green" && el.dataset.id === "image") {
                loadPieces(0, 4);
                el.setAttribute("color", "green");
            } else if (printer1button.getAttribute("color") !== "green" && el.dataset.id === "image") {
                el.setAttribute("color", "red");
            }

            if (printer2button.getAttribute("color") === "green" && el.dataset.id === "text") {
                loadPieces(4, 8);
                el.setAttribute("color", "green");
            } else if (printer2button.getAttribute("color") !== "green" && el.dataset.id === "text") {
                el.setAttribute("color", "red");
            }
        };

        // clicklistener for buttons next to printers, API call
        el.addEventListener("click", () => {
            // Style (pressed)
            this.el.setAttribute("height", "0.4");

            setTimeout(() => {
                this.el.setAttribute("height", "1");
            }, 250);
            setTimeout(() => {
                this.el.setAttribute("color", "white");
            }, 1500);

            // API call
            const api_base_url = "https://ipmedt3-5d5a0-default-rtdb.europe-west1.firebasedatabase.app/";
            const api_args = "game";

            fetch(api_base_url + api_args + ".json")
                .then((response) => response.json())
                .then((data) => {
                    data_holder = data;
                })
                .then(() => {
                    spawnRebusParts();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    },
});
