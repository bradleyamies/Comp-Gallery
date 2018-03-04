$('#myModal').on('show.bs.modal', function () {
  $('#myInput').focus()
})


$('#imageLarge').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var imgSrc = button.data('large') 
  var modal = $(this)
  modal.find('.largeImg').attr('src', imgSrc)
})

$('#imageLarge').on('hidden.bs.modal', function (event) {
  var modal = $(this)
  modal.find('.largeImg').attr('src', "")
})


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


// Rotating Collapsed navbar button
$('#navArrow').on('click', function () {
  $(this).toggleClass("rotate")
})

// Lazy load
$(window).scroll(function(){
  if  ($(window).scrollTop() == $(document).height() - $(window).height()){
   loadImages(2);
 }
});    

//Preload
document.addEventListener("DOMContentLoaded", loadImages(8));

function loadImages(amt) {
	var i=0,length=amt;
	for(i; i<=length;i++)
	{	
		image = Math.floor(Math.random() * 1000);
    // $('#images').append($('<div class="col-lg-4 col-sm-6 col-xs-12 center"><div class="thumbnail" data-toggle="modal" data-target="#imageLarge" data-src="https://loremflickr.com/350/200/scenery?random=' + imageCount + '"><img src="https://loremflickr.com/350/200/scenery?random=' + imageCount + '"></div></div>')); 
    $('#images').append($('<div class="col-lg-4 col-sm-6 col-xs-12 center divider"><div class="thumbnail" data-toggle="modal" data-target="#imageLarge" data-large="https://picsum.photos/700/400?image=' + image + '"><img src="https://picsum.photos/350/200?image=' + image + '"></div></div>')); 

  }
}

