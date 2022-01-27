window.onload = function () {
    const camera = document.getElementById("js--camera");
    let scene = document.getElementById("js--scene");
    const placeholdertext = document.getElementsByClassName("js-placeholderText");
    const plaatje1 = document.getElementById("js--plaatje-1");
    const plaatje2 = document.getElementById("js--plaatje-2");
    const plaatje3 = document.getElementById("js--plaatje-3");
    const plaatje4 = document.getElementById("js--plaatje-4");
    const text1 = document.getElementById("js--text-1");
    const text2 = document.getElementById("js--text-2");
    const text3 = document.getElementById("js--text-3");
    const text4 = document.getElementById("js--text-4");
    temphold = "";
    let hold = null;
    let ismodel1correct = false
    let ismodel2correct = false
    let ismodel3correct = false
    let ismodel4correct = false
    let istext1correct= false
    let istext2correct= false
    let istext3correct= false
    let istext4correct= false


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
                  if (temphold.includes("#rebus_2_plaatje_1")){
                    hold = "model1"
                  }
                  if (temphold.includes("#rebus_2_plaatje_2")){
                    hold = "model2"
                  }
                  if (temphold.includes("#rebus_2_plaatje_3")){
                    hold = "model3"
                  }
                  if (temphold.includes("#rebus_2_plaatje_4")){
                    hold = "model4"
                  }
                  this.remove();
                
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
                  if (temphold.includes("#rebus_2_text_1")){
                    hold = "text1"
                  }
                  if (temphold.includes("#rebus_2_text_2")){
                    hold = "text2"
                  }
                  if (temphold.includes("#rebus_2_text_3")){
                    hold = "text3"
                  }
                  if (temphold.includes("#rebus_2_text_4")){
                    hold = "text4"
                  }
                  this.remove();
                
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
              if (hold.includes("model")){
                let answer = ""
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x,
                  y: -this.getAttribute("position").z-1.4,
                  z: -this.getAttribute("position").y+0.7,
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                setTimeout(function() {
                  answer = sphere.object3D.position.x
                  if (hold.includes("1")){
                    if(String(answer) === String(plaatje1.dataset.id)){
                      ismodel1correct = true
                      console.log("ismodel1correct " + ismodel1correct)
                    } else {
                      ismodel1correct = false
                      console.log("ismodel1correct " + ismodel1correct)
                    }
                  }
                  if (hold.includes("2")){
                    if(String(answer) === String(plaatje2.dataset.id)){
                      ismodel2correct = true
                      console.log("ismodel2correct " + ismodel2correct)
                    } else {
                      ismodel2correct = false
                      console.log("ismodel2correct " + ismodel2correct)
                    }
                  }
                  if (hold.includes("3")){
                    if(String(answer) === String(plaatje3.dataset.id)){
                      ismodel3correct = true
                      console.log("ismodel3correct " + ismodel3correct)
                    } else {
                      ismodel3correct = false
                      console.log("ismodel3correct " + ismodel3correct)
                    }
                  }
                  if (hold.includes("4")){
                    if(String(answer) === String(plaatje4.dataset.id)){
                      ismodel4correct = true
                      console.log("ismodel4correct " + ismodel4correct)
                    } else {
                      ismodel4correct = false
                      console.log("ismodel4correct " + ismodel4correct)
                    }
                  }
                  document.getElementById("js--hold").remove();
                  temphold=""
                  hold = null;
                },1)
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
              if (hold.includes("text")){
                let sphere = document.createElement("a-sphere");
                sphere.setAttribute("material", "transparent: true; opacity: 0");
                sphere.setAttribute("position", {
                  x: -this.getAttribute("position").x-2.8,
                  y: -this.getAttribute("position").z-1.8,
                  z: -this.getAttribute("position").y+0.5, //change this to get out of wall --> + = out
                });
                sphere.innerHTML += temphold;
                scene.appendChild(sphere);
                setTimeout(function() {
                  answer = sphere.object3D.position.x
                  if (hold.includes("1")){
                    if(String(answer) === String(text1.dataset.id)){
                      istext1correct = true
                      console.log("istext1correct " + istext1correct)
                    } else {
                      istext1correct = false
                      console.log("istext1correct " + istext1correct)
                    }
                  }
                  if (hold.includes("2")){
                    if(String(answer) === String(text2.dataset.id)){
                      istext2correct = true
                      console.log("istext2correct " + istext2correct)
                    } else {
                      istext2correct = false
                      console.log("istext2correct " + istext2correct)
                    }
                  }
                  if (hold.includes("3")){
                    if(String(answer) === String(text3.dataset.id)){
                      istext3correct = true
                      console.log("istext3correct " + istext3correct)
                    } else {
                      istext3correct = false
                      console.log("istext3correct " + istext3correct)
                    }
                  }
                  if (hold.includes("4")){
                    if(String(answer) === String(text4.dataset.id)){
                      istext4correct = true
                      console.log("istext4correct " + istext4correct)
                    } else {
                      istext4correct = false
                      console.log("istext4correct " + istext4correct)
                    }
                  }
                document.getElementById("js--hold").remove();
                hold = null;
                temphold="" 
              },1)
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