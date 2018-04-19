	$('#colorsBtn').click(function(){

  	$.getJSON('js/colors.json',function(result){
  		
     for(var i = 0; i < result.colors.length; i++ ){
      
       $('#swatchPanel').append('<h1 style="background-color:'+ result.colors[i].code.hex +'" class="colorSwatch">' + result.colors[i].color.toUpperCase() + '<div class="categ">'+result.colors[i].category+'</div>' + '</div>');
    
      }
 
  });

});

