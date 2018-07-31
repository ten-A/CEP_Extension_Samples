function getProperties(){
	var st = ""; 
	var tg;
	if (app.selection instanceof Array) {
		tg = app.selection[0];
		}
	 else{
		tg = app.selection;
		}
	try {
		for (var a in tg) {
			st = st + a + " : " + tg[a] + "\n";
			}
		} catch (e) {
			st = st + a + " : NA";
			}
	return st;
	}
