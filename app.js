document.getElementById("seemorebtn").onclick = function() {
    var moreLines= document.querySelector('.increasepara');
    if (moreLines.style.display === "none") {
      moreLines.style.display = "block";
      document.getElementById("seemorebtn").innerText = "See Less";
    } else {
      moreLines.style.display = "none";
      document.getElementById("seemorebtn").innerText = "See More";
    }
  };
  
