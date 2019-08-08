function ivkMnu(comm) {
	var csi = new CSInterface();
	//alert(comm);
	csi.evalScript("executeMenuCommand('" + comm + "')");
	}

