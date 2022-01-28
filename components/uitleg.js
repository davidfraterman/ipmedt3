
 // component om de intro tekst te veranderen
 AFRAME.registerComponent('nexttext', {
    schema: {
      
    },
  
    init: function () {
      let el = this.el
      let plane = document.getElementById("uitlegplane")
      let currentpage = 0
      el.addEventListener("click", function(){
        if(currentpage == 0){
          el.emit('expand') //animatie om plane groter te maken
          // timeout zodat de tekst de nieuwe width neemt van de plane
          setTimeout(function() {
            plane.setAttribute("text", "value", "Je bent hier voor een geheime missie, maar je bent niet de enige in de ruimte die ons signaal vanaf de aarde kan ontvangen. Om ervoor te zorgen dat anderen onze berichten niet zomaar kunnen onderscheppen, hebben we een speciaal communicatie systeem ontwikkeld.")
          }, 1501)
        }
        if(currentpage == 1){
          plane.setAttribute("text", "value", "Dit systeem is te gebruiken via de bunker naast je. Hierin vind je het control center en twee printers. Gebruik deze om ons bericht te ontvangen.")
        
        }
        if(currentpage == 2){
          plane.setAttribute("text", "value", "Om veiligheidsredenen gaat de deur alleen open wanneer ons bericht volledig is aangekomen.")
        }
        if(currentpage == 3){
          plane.setAttribute("text", "value", "Ga snel naar binnen door de deur links van je.")
        
        }
        if(currentpage == 4){
            el.emit('close') //animatie om uitleg te laten verdwijenen
          }
       currentpage += 1
      
      })
    },
  });
  