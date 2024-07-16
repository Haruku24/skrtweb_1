document.addEventListener("DOMContentLoaded", function() {
    const jumlahPesertaInput = document.getElementById("jumlah_peserta");
    const hargaPesertaInput = document.getElementById("harga_peserta");
    const hargaElement = document.getElementById("harga");
    const totalElement = document.getElementById("total");
    const jumlahPesertaOutput = document.getElementById("jumlah_peserta_output");

    function updateHargaTotal() {
        const jumlahPeserta = parseInt(jumlahPesertaInput.value);
        const hargaPerPeserta = parseInt(hargaPesertaInput.value);
        const totalHarga = hargaPerPeserta * jumlahPeserta;
        jumlahPesertaOutput.textContent = `${jumlahPeserta} Peserta`;
        hargaElement.textContent = `Rp. ${hargaPerPeserta.toLocaleString()} x ${jumlahPeserta}`;
        totalElement.textContent = `Rp. ${totalHarga.toLocaleString()}`;
    }

    jumlahPesertaInput.addEventListener("input", updateHargaTotal);
    hargaPesertaInput.addEventListener("input", updateHargaTotal);
    updateHargaTotal(); // Initial call to set the values
});
