const tanggalTujuan = new Date('feb 1,2022 01:25:00').getTime();

const hitungMundur = setInterval(function () {
	const waktuSekarang = new Date();
	const selisih =  tanggalTujuan - waktuSekarang;
	// mencari hari
	const hari = Math.floor(selisih / (1000*60*60*24));
	// jam
	const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
	const menit = Math.floor(selisih % (1000*60*60) / (1000*60));
	const detik = Math.floor(selisih % (1000*60) / 1000);

	const teks = document.querySelector(".teks");
	// const ultah = document.querySelector(".ultah");
	const container = document.querySelector(".container");
	const cardUltah = document.querySelector(".cardUltah")

	teks.innerHTML = jam + ' : ' + menit +' : '+detik;
	if (selisih <= 0) {
		clearInterval(hitungMundur);
		teks.innerHTML = "Waktu Habis";
		container.style.display = "none";
		document.location.href = "message.html"


	}


})