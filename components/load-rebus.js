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
        let startIndex = 0;
        let endIndex = 7;

        // at start of game, remove all rebus parts
        const removeAllRebusParts = () => {
            allRebusParts.forEach((part) => {
                part.setAttribute("visible", false);
                part.removeAttribute("class", "clickable");
            });
        };
        removeAllRebusParts();

        // on api call, if puzzle is solved, corresponding rebus part is visible and clickable again
        const spawnRebusParts = () => {
            amtOfNewPieces = 0;
            // if text btn is pressed, only load text pieces, if image btn is pressed, only load image pieces
            if (el.dataset.id === "text") {
                startIndex = 4;
                endIndex = 8;
            } else if (el.dataset.id === "image") {
                startIndex = 0;
                endIndex = 4;
            }
            // if solved = false: dont load piece, if solved = true: load piece
            for (startIndex; startIndex < endIndex; startIndex++) {
                if (data_holder[allRebusPartsToString[startIndex]].solved === false) {
                    allRebusParts[startIndex].setAttribute("visible", false);
                    allRebusParts[startIndex].removeAttribute("class", "clickable");
                    console.log("false");
                } else if (data_holder[allRebusPartsToString[startIndex]].solved === true) {
                    allRebusParts[startIndex].setAttribute("visible", true);
                    allRebusParts[startIndex].setAttribute("class", "clickable");
                    console.log("true");
                }
            }
        };

        // clicklistener for buttons next to printers, API call
        el.addEventListener("click", () => {
            console.log(el.dataset.id);
            // Style (pressed)
            this.el.setAttribute("height", "0.4");
            this.el.setAttribute("color", "green");
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
