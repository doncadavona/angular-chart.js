(function(){

angular.module("app", ["chart.js"])
  
  .controller("ChartController", function(){
    
    var chart = this;

    chart.data = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
    
    chart.labels = ["Label 1", "Label 2", "Label 3"];
    
    chart.series = ["Series 1", "Series 2", "Series 3"];
    
    chart.options = {
      legend: {
        display: true,
        onClick: function(event, legendItem){
          legendItem.text = "New Text";
          legendItem.strokeStyle = "#f00";

          // Manually hide or unhide legendItem
          if(legendItem.hidden){
            legendItem.hidden = false
          }
          else{
            legendItem.hidden = true
          }
        }
      }
    };
    
  });

})();