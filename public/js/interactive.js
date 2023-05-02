$(document).ready(function() {
  
    $("#klik").click(function() {
        $("#content").show(1800);
        $("#klik").hide(1000);
    });

  var jam = new Date().getHours();
  var pukul = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();;
	var pesan;
	var pagi = ('Selamat Pagiii');
	var siang = ('Selamat Sianggg');
	var sore = ('Selamat Soreee');
	var malam = ('Selamat Malammm');

	if (jam >= 3 && jam < 10) {
		pesan = pagi; 
	} else if (jam >= 10 && jam < 15) {
		pesan = siang;
  } else if (jam >= 15 && jam < 18) {
		pesan = sore;
	} else if (jam >= 18 jam < 3) {
		pesan = malam;
	}
	$('#waktu').append(pesan);
  $('#pukul').append(pukul);
  
});

