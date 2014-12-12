function embedVid(videourl, titleanddes) {
	var video = "<iframe style='width:100%;' height='450' src='"+videourl+"' frameborder='0' allowfullscreen></iframe>";
	document.getElementById("static_video").innerHTML = video;
	document.getElementById("tandd").innerHTML = titleanddes;
}
function dothis() {
    $('.box').toggleClass("box-change");
}
function mainReset() {
    $('#main').get(0).scrollTop = 0;
}