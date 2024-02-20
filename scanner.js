var changeCount = 0;
var totalQRcount;
var scannedQRs = [];

function onScanSuccess(msg) {
  document.getElementById("result").append(msg + "\n");

  currentQRindex = msg.substring(msg.indexOf("<") + 1, msg.indexOf("/"));
  totalQRcount = msg.substring(msg.indexOf("/") + 1, msg.indexOf(">"));

  if (scannedQRs.indexOf(currentQRindex) < 0) scannedQRs.push(currentQRindex);

  var prog = (scannedQRs.length / totalQRcount) * 100;
  document.getElementById("bar1").style.width = prog + "%";
  document.getElementById("bar2").style.width = prog + "%";

  setTimeout( function () {
    if (prog == 100) {
      document.getElementById("bar1").classList.add("progress-bar-striped");
      document.getElementById("bar2").classList.add("progress-bar-striped");
      document.getElementById("bar1").classList.add("progress-bar-animated");
      document.getElementById("bar2").classList.add("progress-bar-animated");
    }
  }, 620);
}

// When scan is unsuccessful fucntion will produce error message
function onScanError(errorMessage) {
  // TO-DO: Handle scan Error
  console.log("error");
}

var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

html5QrCodeScanner.render(onScanSuccess, onScanError);

document.getElementById("reader__dashboard_section_swaplink").innerText = "Upload Image of QR";

document.getElementById("reader__scan_region").addEventListener('DOMNodeInserted', function () {
  changeCount++;

  if (changeCount >= 5 && screen.width < 500) {
    document.getElementById("hideMob").style.display = "block";
    document.getElementById("showMob").style.display = "block";
    document.getElementById("reader").style.marginTop = "30px";
    document.getElementById("header").style.display = "none";
  }
}, false);