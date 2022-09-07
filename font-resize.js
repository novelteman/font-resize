<script>
$(document).ready(function() { 
  var size = $('#container').css('font-size'); 
  $("#largeFont").click(function(){ 
      $('#container').css('font-size', '30px');
      return false; 
  });
  $("#resetFont").click(function(){ 
      $('#container').css('font-size', size);
      return false; 
  });
  $("#increaseFont").click(function() { 
      var size = $('#container').css('font-size');
      $('#container').css('font-size', parseInt(size)+2); 
      return false;
  });
  $("#decreaseFont").click(function() { 
      var size = $('#container').css('font-size');
      $('#container').css('font-size', parseInt(size)-2); 
      return false;
  }); 
  $("#smallFont").click(function(){ 
      $('#container').css('font-size', '10px');
      return false; 
  });
});

</script>