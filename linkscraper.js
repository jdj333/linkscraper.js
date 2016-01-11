var elements;
function loadDoc(URL) {
  var xhttp = new XMLHttpRequest();
  var htmlReponseData = document.getElementById("htmlReponseData");
  htmlReponseData.innerHTML = ""; //clear textarea
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      responseHTML = xhttp.responseText;
      htmlReponseData.innerHTML = htmlReponseData.innerHTML += responseHTML;
      console.log(responseHTML);
    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}
function scrapeLinks(domid) {
  var xhttp = new XMLHttpRequest();
  elements = document.getElementById(domid).getElementsByTagName("a");
    for (var i = 0; i < elements.length; i++) {
      loadDoc(elements[i].href);
  }
}
