// ********MOVE SICO CODE HERE********


if(!String.linkify) {
    String.prototype.linkify = function() {

        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

        // www. sans http:// or https://
        var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

        // Email addresses *** here I've changed the expression ***
        var emailAddressPattern = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;

        return this
            .replace(urlPattern, '<a target="_blank" href="$&">$&</a>')
            .replace(pseudoUrlPattern, '$1<a target="_blank" href="http://$2">$2</a>')
            .replace(emailAddressPattern, '<a target="_blank" href="mailto:$1">$1</a>');
    };
}
var results = []

var clearResults = function() {
		results = null;
		results = [];
};

var upcValue = function() {
    // var str = document.getElementById("upc-value").innerHTML; 
    var str = document.getElementById("upc-value").value = "UPC:";
    var txt = str.replace("UPC:", ("UPC: " + results[0].UPC));
    document.getElementById("upc-value").innerHTML = txt;
};

var asinValue = function() {
    //var str = document.getElementById("asin-value").innerHTML; 
    var str = document.getElementById("asin-value").value = "ASIN:";
    var txt = str.replace("ASIN:", ("ASIN: " + results[0].ASIN));
    document.getElementById("asin-value").innerHTML = txt;
};

var asinLink = function() {
    // var str = document.getElementById("asin-link").innerHTML; 
    var str = document.getElementById("asin-link").value = "enter upc or asin";
    var txt = str.replace("enter upc or asin", "http://fcresearch-na.aka.amazon.com/LAX6/results?s="+results[0].ASIN).linkify();
    document.getElementById("asin-link").innerHTML = txt;
};

var notSioc = function() {
    // var str = document.getElementById("asin-link").innerHTML; 
    var str = document.getElementById("asin-link").value = "enter upc or asin";
    var txt = str.replace("enter upc or asin", "This Item is Not SIOC");
    document.getElementById("asin-link").innerHTML = txt;
    var asnstr = document.getElementById("upc-value").value = "";
    document.getElementById("upc-value").innerHTML = upcstr;
    var upcstr = document.getElementById("upc-value").value = "";
    document.getElementById("asin-value").innerHTML = asnstr;
};


function checkSioc(toSearch) {
   // var toSearch = $('#sioc-input').val()
for(var i=0; i<siocObjects.length; i++) {
  for(key in siocObjects[i]) {
    if(siocObjects[i][key].indexOf(toSearch)!=-1) {
      results.push(siocObjects[i]);
    }
  }
}
return results[0];
};

$('#check-sioc').click(function(event) {
   //alert(JSON.stringify(checkSioc($('#sioc-input').val().toString())));
   siocInput = $('#sioc-input').val().replace(/^0+/, '')
   checkSioc(siocInput);
   if (results.length == 0) {
   	notSioc();
   	$('#val-img').attr('src', 'images/no.png')
   } else {
   	asinLink();
   	upcValue();
   	asinValue();
   	$('#val-img').attr('src', 'images/yes.png')
   };
   	clearResults();
   		 //alert(results[0].UPC);
   	return false;
});
// 645729415164

