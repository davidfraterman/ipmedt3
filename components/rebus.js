window.onload = function () {
    const camera = document.getElementById("js--camera");
    let scene = document.getElementById("js--scene");
    const placeholdertext = document.getElementsByClassName("js-placeholderText");
    temphold = "";
    let hold = null;


    // To pick up rebus models
      AFRAME.registerComponent('pickuprebusmodel', {
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
      
      // To pick up rebus text hints
      AFRAME.registerComponent('pickuprebustext', {
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
                  '<a-sphere id="js--hold" material="transparent: true; opacity: 0" position="-2.8 -2.3 -2" radius="0.5">' +
                  temphold +
                  "</a-sphere>";
                  this.remove();
                  hold = "text";
                
                }   
            });
        }   
      });
      
      
      // To place rebus models into placeholders
      AFRAME.registerComponent('placeintomodelholder', {
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
                  y: -this.getAttribute("position").z-1.4,
                  z: -this.getAttribute("position").y+0.7,
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                document.getElementById("js--hold").remove();
                hold = null;
                temphold=""
              }
            });
        }
      });

      AFRAME.registerComponent('placeintotextholder', {
        schema: {
        },
        init: function () {
    
          var el = this.el;
    
            el.addEventListener('click', function() {
             // if the hold is a text, place it in the text placeholder
              if (hold == "text"){
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x-2.8,
                  y: -this.getAttribute("position").z-1.8,
                  z: -this.getAttribute("position").y+0.5, //change this to get out of wall --> + = out
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                document.getElementById("js--hold").remove();
                hold = null;
                temphold=""
              }
            });
        }
      });

      // To place Any into the table
      AFRAME.registerComponent('placeintotable', {
        schema: {
        },
        init: function () {
    
          var el = this.el;
    
            el.addEventListener('click', function() {
             // if the hold is a model place it on table with correct position
              if (hold == "model"){
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x,
                  y: -this.getAttribute("position").z-1,
                  z: -this.getAttribute("position").y,
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                document.getElementById("js--hold").remove();
                hold = null;
                temphold=""
              }
                           // if the hold is a text place it on table with correct position
              if (hold == "text"){
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x-2.8,
                  y: -this.getAttribute("position").z-1.4,
                  z: -this.getAttribute("position").y,
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                document.getElementById("js--hold").remove();
                hold = null;
                temphold=""
              }
            })
          }
      })
    }