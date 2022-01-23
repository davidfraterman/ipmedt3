AFRAME.registerComponent('walker', {
    schema: {},
    init: function () {
        const camera = document.getElementById('js--camera')
        // const audio = new Audio("assets/footsteps-4.mp3")

        var walker = this.el

        this.goWalk = function(){
            // audio.play()

            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
            camera.setAttribute('animation', att.value);
        }

        walker.addEventListener('click', this.goWalk)
    }
});
