console.log('main.js is connected!');
$(document).ready(function() {
  console.log('script loaded')

 $("#submit").click(makeCall)

  function makeCall(){
    let corsproxy ="https://cors-anywhere.herokuapp.com/";
    let url = "http://nbc.vanmason.web.id/service/kodepos/";
    let zip = $('#zip').val();
    let total = corsproxy + url + zip; 

    $.getJSON(total, function(data) {
      getData(data)
    });
  }
  var getData = function (data){
    var kec=data.kodepos[0].kecamatan;
    var kab =data.kodepos[0].kabupaten;
    var prov = data.kodepos[0].provinsi;

      manipulateDom( kec, kab, prov)
  }
  var manipulateDom = function( kec, kab, prov){
    $('#kec').html("<h4>Kodepos <i class='text-danger'>"+ $('#zip').val() +"</i> untuk wilayah :</h4>");
    $('#kab').html("<h1 align='center'>"+kec+"</h1>");
    $('#prov').html("<p align='center'>"+ kab +"&nbsp"+ prov + "</p>");
  }

  $( "#submit" ).click(function() {
    $(".navlarge").addClass("navsmall", 5000, "easeOut");
  });

  $(document).on('keyup', function(e){
      var key = e.which;
      if(key == 13)
      {
         $("#submit").click();
      }
  });
  })




