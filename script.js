
const apkUrl = "";

const downloadBtn = document.getElementById("downloadBtn");
const downloadStatus = document.getElementById("downloadStatus");

downloadBtn.addEventListener("click", (event) => {
  if (!apkUrl) {
    event.preventDefault();
    downloadStatus.textContent =
      "EcoPoint for Android is coming soon!";
    return;
  }

  downloadBtn.href = apkUrl;
});

document.getElementById("year").textContent =
  new Date().getFullYear();
