var Herbivores = (function() {
  var herbivores = [];
  return {
    loadHerbivores: function(callbackInvoked) {
      var myRequest = new XMLHttpRequest();

      myRequest.addEventListener("load", function(){
        herbivores = JSON.parse(this.responseText);
        showHerbivores(herbivores);
      });
      myRequest.open("GET", "herbivores.JSON");
      myRequest.send();
    }
  }
})();
