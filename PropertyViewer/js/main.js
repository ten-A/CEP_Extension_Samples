(function () {
	'use strict';
	var csInterface = new CSInterface();

	themeSynchronizer.init();
	$("#getInfo").click(function () {
		csInterface.evalScript('getProperties()',
			function(re){
				$("#message").val(re);
			});
	});
}());