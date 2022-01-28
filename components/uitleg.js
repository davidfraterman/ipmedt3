
  AFRAME.registerComponent('nexttext', {
    schema: {
      
    },
  
    init: function () {
      let el = this.el
      let plane = document.getElementById("uitlegplane")
      let currentpage = 0
      el.addEventListener("click", function(){
        if(currentpage == 0){
          el.emit('expand')
          setTimeout(function() {
            plane.setAttribute("text", "value", "Je bent nu op de planeet 3T-DEMPI. Je bent hier voor een geheime missie, maar je bent niet de enige in de ruimte die ons signaal vanaf de aarde kan ontvangen, om ervoor te zorgen dat anderen onze berichten niet zomaar kunnen onderscheppen hebben we een speciaal communicatie systeem ontwikkeld. Dit systeem is te gebruiken via de bunker naast je. ")
          }, 1501)
        }
        if(currentpage == 1){
          plane.setAttribute("text", "value", "Hierin vind je het control center, je gebruikt deze om alle systemen aan te zetten, zoals de printers. Deze printers geven je letters of afbeeldingen, deze moet je naar het rebus gedeelte verplaatsen om ons bericht te ontcijferen. Bewegen doe je door op de rode waypoints in de kamer te klikken.")
        
        }
        if(currentpage == 2){
          plane.setAttribute("text", "value", "Om veiligheidsredenen gaat de deur alleen open wanneer je de rebus opgelost hebt.")
        }
        if(currentpage == 3){
          plane.setAttribute("text", "value", "Ga snel naar binnen door op de startknop bij de deur te drukken.")
        
        }
        if(currentpage == 4){
            el.emit('close')
          }
       currentpage += 1
      
      })
    },
  });
  