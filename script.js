
const apkUrl = "https://github.com/Alisia-EcoPoint/ecopoint/releases/download/v1.0.0/app-release.apk";

document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");
  const downloadStatus = document.getElementById("downloadStatus");
  const yearElement = document.getElementById("year");

  if (downloadBtn) {
    downloadBtn.href = apkUrl;

    downloadBtn.addEventListener("click", () => {
      if (downloadStatus) {
        downloadStatus.textContent = "Your download is starting...";
      }
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
