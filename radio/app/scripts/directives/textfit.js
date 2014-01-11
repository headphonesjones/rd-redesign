angular.module('radioApp')

.directive('textFit', function () {
	return {
	  restrict: 'A',
	  link: function (scope, elem, attrs) {
		function getStyle(oElm, strCssRule){
			var strValue = "";
			if(document.defaultView && document.defaultView.getComputedStyle){
				strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
			}
			else if(oElm.currentStyle){
				strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
					return p1.toUpperCase();
				});
				strValue = oElm.currentStyle[strCssRule];
			}
			return strValue;
		}
		scope.getWidth = function() {
			return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		};

		scope.$watch(scope.getWidth, function(newValue, oldValue) {
			if (newValue != oldValue) {
				
			console.log(newValue + " " + oldValue);
			}
		});

		scope.$watch('show', function() {
			
			elem = elem[0];
			var oh = elem.offsetHeight;
			var ow = elem.offsetWidth;
			if( oh < elem.scrollHeight || ow < elem.scrollWidth){
				var originalSize = parseFloat(getStyle(elem, "font-size"));
				var newSize = 30;
				if (elem.length < 10) {
				  newSize = 40;
				}
				elem.style.fontSize = newSize + "px"


				while (elem.scrollHeight <= oh) {

					newSize = newSize + 1;
					elem.style.fontSize = newSize + "px"
				}

				while (elem.scrollHeight > oh || elem.scrollWidth > ow) {
					
					newSize--;
					
					elem.style.fontSize = newSize + "px"

				}
				//console.log(newSize/elem.innerHTML.length);
			}
			else{
//			    console.log("I'm not overflowing");
			}

		});
	  }
	}
});
