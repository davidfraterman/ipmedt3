// main.js
window.onload = function () {
  // scene objects
  const camera = document.getElementById("js--camera");
  let spheresmodel = document.getElementsByClassName("js--spheremodel")
  let scene = document.getElementById("js--scene");
  const placeholdermodel = document.getElementsByClassName("js-placeholderModel")
  const placeholdertext = document.getElementsByClassName("js-placeholderText")
  temphold = ''
  

  // vars
  let hold = null;

  for (var i = 0; i < spheresmodel.length; i++) {
    spheresmodel[i].addEventListener('click', function (evt) {
      if (hold == null) {
        temp = evt.target
        temphold = temp.outerHTML
        camera.innerHTML += '<a-sphere id="js--hold" material="transparent: true; opacity: 0" position="1 -2 -1" radius="0.5">' + temphold + '</a-sphere>'
        this.remove();
        hold = "model"
      };
    });
  };

  for (var i = 0; i < placeholdermodel.length; i++) {
    placeholdermodel[i].addEventListener('click', function (evt) {
      if (hold == "model") {
        var sphere = document.createElement('a-sphere')
        sphere.setAttribute('material',"transparent: true; opacity: 0")
        sphere.setAttribute('position', {x: -(this.getAttribute('position').x), y:2.6,z:-6.5});
        sphere.innerHTML += temphold
        console.log(sphere)
        scene.appendChild(sphere);
        document.getElementById("js--hold").remove();
        hold=null;

        // entity = camera.innerHTML - '<a-entity animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1" animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1" animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1" cursor="fuse: true; fuseTimeout: 1500" material="color: black; shader: flat" position="0 0 -0.5" geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.01" raycaster="objects: .clickable"> </a-entity>'
        // console.log(entity)
        
      };
    });
  };
};
