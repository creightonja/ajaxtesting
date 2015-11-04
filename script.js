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
        modify.innerHTML = request.responseText;
    }
}
request.send();
