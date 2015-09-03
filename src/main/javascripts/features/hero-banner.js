/*global angular*/
angular.module('mainApp')

	.directive('heroBannerFader', function() {
		return {
			link: function() {
				var $images = $('.hero-image-wrapper');
				var numImages = $images.length - 1;
				var interval = 6000;
				
				setTimeout(function() {
					(function fadeImages(currImage) {
						
						var nextImage;
						
						if (currImage === 0) {
							nextImage = numImages;
							$images.removeClass('hero-image-fade');
						} else {
							nextImage = currImage - 1;
							$($images[currImage]).toggleClass('hero-image-fade');
						}
						
						setTimeout(function() {
							fadeImages(nextImage);
						}, interval);
					})(numImages);
				}, interval);
				
			}
		};
	});