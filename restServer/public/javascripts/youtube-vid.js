function showVideo(response) {
        if(response.data && response.data.items) {
	            var items = response.data.items;
	            if(items.length > 0) {
		                var item = items[0];
		                var videoid = "http://www.youtube.com/embed/"+item.id;
		                console.log("Latest ID: '"+videoid+"'");
		                var video = "<iframe style='width:100%;' height='450px' src='"+videoid+"' frameborder='0' allowfullscreen></iframe>";
		                $('#static_video').html(video);
		// var title = item.title;
		// var description = item.description;
		// var titleanddes = "<strong>" + title + "</strong><p>" + description + "</p>";
		// $('#tandd').html(titleanddes);
		// var i = 0;
		// var flag2 = 0;
		// for (i = 0; i < items.length; ++i) {
			
		// 	var item = items[i];
		// 	var videoid = item.id;
		// 	console.log(i + videoid);
		// 	var videourl = "'http://www.youtube.com/embed/" + videoid + "'";
		// 	var title = item.title;
		// 	var description = item.description;
		// 	var style1 = 'style="color:#fff;"';
		// 	var titleanddes = "'<strong>" + title + "</strong><p>" + description + "</p>'";
		// 	var titleanddes1 = "<strong style='font-size:14px; color:white;'>" + title + "</strong>";
		// 	// document.getElementById("static_video1").innerHTML += '<a href="javascript:void(0);" class="gallery" value="' + title + '" onclick="mainReset(); embedVid(' + videourl + ', ' + titleanddes + ')"><div style=" background-color:rgb(85,85,85); color:white; overflow:hidden; display:block; width:600px; border-style:solid; border-color:black; border-width:1px;"><img id="hi" src="http://img.youtube.com/vi/' + videoid + '/default.jpg" alt=""/><span style="color:white;">' + titleanddes1 + '</span></div></a><br/>';											
		// }
	            }
        }
    }