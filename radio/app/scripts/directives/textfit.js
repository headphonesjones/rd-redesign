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

		scope.$watch('show', function() {
			
			elem = elem[0];
			var oh = elem.offsetHeight;
			var ow = elem.offsetWidth;
			if( oh < elem.scrollHeight || ow < elem.scrollWidth){
				var originalSize = parseFloat(getStyle(elem, "font-size"));
				var newSize = originalSize;

				while (elem.scrollHeight > oh || elem.scrollWidth > ow) {
					
					newSize = newSize - 3;
					elem.style.fontSize = newSize + "px"
				}


			}
			else{
//			    console.log("I'm not overflowing");
			}

		});
	  }
	}
});
