window.onload = function () {
    const camera = document.getElementById("js--camera");
    let scene = document.getElementById("js--scene");
    const placeholdertext = document.getElementsByClassName("js-placeholderText");
    temphold = "";
    let hold = null;

    AFRAME.registerComponent('pickuprebusparts', {
        schema: {
        },
    
        init: function () {
          
          var el = this.el;  
    
            el.addEventListener('click', function () {
             // if there is no current hold, set hold to the clicked element
                if(hold == null){
                  temp = el;
                  temphold = temp.outerHTML;
                  camera.innerHTML +=
                  '<a-sphere id="js--hold" material="transparent: true; opacity: 0" position="0 -2 -2" radius="0.5">' +
                  temphold +
                  "</a-sphere>";
                  this.remove();
                  hold = "model";
                
                }   
            });
        }   
      });
    
      AFRAME.registerComponent('placeintoplaceholder', {
        schema: {
        },
        init: function () {
    
          var el = this.el;
    
            el.addEventListener('click', function() {
             // if the hold is a model, place it in the image placeholder
              if (hold == "model"){
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x,
                  y: 2.1,
                  z: -6,
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                document.getElementById("js--hold").remove();
                hold = null;
              }
            });
        }
      });
    
}