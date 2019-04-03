document.getElementById('sav').onchange = function () {
	var reader = new FileReader();
	reader.onload = function () {
		save = new Uint8Array(reader.result)
		vc = new Uint8Array(0x8010)
		for (var i = 0x00; i < 0x8010; i++){
			vc[i] = save[i]
		}
		downloadFile(vc)
	
	}
	reader.readAsArrayBuffer(this.files[0]);
  };


function downloadFile(byte){
	var blob = new Blob([byte], { type: "application/x-spss-sav" });
	var download = document.createElement("a");
	download.href = window.URL.createObjectURL(blob);
	var name = "sav.dat"
	download.download = name
	document.body.appendChild(download);
	download.click();
	download.remove();
  }
