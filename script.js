document.addEventListener("DOMContentLoaded", function () {
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

document
  .getElementById("togglePaymentMethods")
  .addEventListener("click", function () {
    var paymentMethods = document.getElementById("paymentMethods");
    var toggleButton = document.getElementById("togglePaymentMethods");
    if (
      paymentMethods.style.display === "none" ||
      paymentMethods.style.display === ""
    ) {
      paymentMethods.style.display = "block";
      toggleButton.textContent = "Sembunyikan Metode Pembayaran ▲";
    } else {
      paymentMethods.style.display = "none";
      toggleButton.textContent = "Tampilkan Metode Pembayaran ▼";
    }
  });

document.getElementById("confirmOrder").addEventListener("click", function () {
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  if (paymentMethod && paymentMethod.value === "QRIS") {
    window.location.href = "QR.html"; // Ganti "qris.html" dengan nama file halaman QRIS Anda
  } else {
    // Lakukan tindakan lain jika metode pembayaran bukan QRIS
    // Misalnya: kirim formulir atau tampilkan pesan peringatan
    document.getElementById("paymentForm").submit();
  }
});
