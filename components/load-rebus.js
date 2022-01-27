AFRAME.registerComponent("load-rebus", {
    schema: {},

    init: function () {
        let data_holder = {};

        this.el.addEventListener("click", () => {
            // Style (pressed)
            this.el.setAttribute("color", "green");
            this.el.setAttribute("height", "0.4");
            setTimeout(() => {
                this.el.setAttribute("height", "1");
            }, 250);
            setTimeout(() => {
                this.el.setAttribute("color", "white");
            }, 1500);

            // API
            const api_base_url = "https://ipmedt3-5d5a0-default-rtdb.europe-west1.firebasedatabase.app/";
            const api_args = "game";

            fetch(api_base_url + api_args + ".json")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    data_holder = data;
                })
                .then(() => {
                    // TRUE OF FALSE KOMT HIER UIT
                    console.log(data_holder.image1.solved);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    },

    update: function () {
        // Do something when component's data is updated.
    },
});
