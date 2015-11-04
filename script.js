var request;

//Checking for browser compatibility
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

//Getting data from data source
request.open('GET', 'data.txt');

//Event handler for action
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        console.log(request);
        var modify = document.getElementById('update');
        var modified = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
        var theText = request.responseText;
        modify.innerHTML = theText;
        for (var i = 0; i < modified.length; i++) {
            modified[i].innerHTML = theText + i;
        }

    }
}
request.send();
