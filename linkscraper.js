

// (function(DOMParser) {
// 	"use strict";
//
// 	var
// 	  DOMParser_proto = DOMParser.prototype
// 	, real_parseFromString = DOMParser_proto.parseFromString
// 	;
//
// 	// Firefox/Opera/IE throw errors on unsupported types
// 	try {
// 		// WebKit returns null on unsupported types
// 		if ((new DOMParser).parseFromString("", "text/html")) {
// 			// text/html parsing is natively supported
// 			return;
// 		}
// 	} catch (ex) {}
//
// 	DOMParser_proto.parseFromString = function(markup, type) {
// 		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
// 			var
// 			  doc = document.implementation.createHTMLDocument("")
// 			;
// 	      		if (markup.toLowerCase().indexOf('<!doctype') > -1) {
//         			doc.documentElement.innerHTML = markup;
//       			}
//       			else {
//         			doc.body.innerHTML = markup;
//       			}
// 			return doc;
// 		} else {
// 			return real_parseFromString.apply(this, arguments);
// 		}
// 	};
// }(DOMParser));

var elements;
var htmlDATA = "";
function loadDoc(URL) {
  var xhttp = new XMLHttpRequest();
  var htmlReponseData = document.getElementById("htmlReponseData");
  htmlReponseData.innerHTML = ""; //clear textarea
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      responseHTML = xhttp.responseText;
      //console.log(responseHTML);
      //var responseHTML = responseHTML.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i);
      //console.log(xhttp);
      htmlReponseData.innerHTML = htmlReponseData.innerHTML + responseHTML;
			htmlDATA = htmlReponseData.innerHTML;
      //console.log(responseHTML);

      var doc = (new DOMParser()).parseFromString(responseHTML,"text/html");
      console.log(doc.body.outerHTML);
      var doc = (new DOMParser()).parseFromString(doc.body.outerHTML,"text/html");
      console.log(doc);

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
