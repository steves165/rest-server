(function tickTock() {
	$('#clock').text(moment().format('HH:mm:ss'));
	setTimeout(tickTock, 1000);
})();
