AFRAME.registerComponent("load-rebus", {
    schema: {},

    init: function () {
        this.el.addEventListener("click", () => {
            const api_base_url = "https://ipmedt3-5d5a0-default-rtdb.europe-west1.firebasedatabase.app/";
            const api_args = "game";

            fetch(api_base_url + api_args + ".json")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
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
