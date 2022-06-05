function obat(){
  var nama = (document.fform.nama.value);
  var tlp = (document.fform.notelp.value);
  var tanggal = (document.fform.tgl.value);
	var obat = (document.fform.iobat.value);
	var banyak = (document.fform.banyak.value);
	if(obat == "Promag"){
		var harga = 15000;
	}
	if(obat == "Procold"){
		var harga = 10000;
	}
	if(obat == "Amoxicilin"){
		var harga = 20000;
	}
	if(obat == "Paracetamol"){
		var harga = 25000;
	}
	var total = banyak*harga;
  document.fform.onama.value=(nama);
  document.fform.onotelp.value=(tlp);
  document.fform.otgl.value=(tanggal);
  document.fform.oobat.value=(obat);
  document.fform.obanyak.value=(banyak);
  document.fform.ototal.value=eval(total);
}