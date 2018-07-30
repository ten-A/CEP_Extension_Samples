(function(){
	'use strict';
	var CSLibrary = new CSInterface();
	themeSynchronizer.init(); 
	var mainJSX =  CSLibrary.getSystemPath(SystemPath.EXTENSION) + '/jsx/hostscript.jsx';
	var script = '$.evalFile("' + mainJSX + '");';
	CSLibrary.evalScript(script);
	
	$("#aply").click(function () {
		var str = $("input#str").val();
		CSLibrary.evalScript('testcall("' + str + '")',
			function(re){
				alert("alert from CEP side : " + re);
			});
		});
})();