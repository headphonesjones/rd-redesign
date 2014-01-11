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
			if( elem.offsetHeight < elem.scrollHeight){
				var originalSize = parseFloat(getStyle(elem, "font-size"));
				var newSize = originalSize;
				elem.style.fontSize = 10 + "px"
				//while (elem.scrollHeight > elem.offsetHeight) {
				//	console.log(newSize);
				//	newSize = originalSize - 1;
				//	elem.style.fontSize = newSize + "px"
				//}

			}
			else{
//			    console.log("I'm not overflowing");
			}

		});
	  }
	}
});
