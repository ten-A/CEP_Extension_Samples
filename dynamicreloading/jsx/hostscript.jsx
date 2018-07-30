var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';
$.evalFile(extensionPath + 'sub.jsx');

function testmain(){
	alert("alert from main.jsx");
}
