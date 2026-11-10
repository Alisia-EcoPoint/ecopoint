
const apkUrl = "https://github.com/Alisia-EcoPoint/ecopoint/releases/download/v1.0.0/app-release.apk";

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
