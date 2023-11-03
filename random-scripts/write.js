var x = window.open("about:blank");
x.document.write('<head><title>wow haha</title></head>');
x.document.addEventListener("click", function() {
  x.close()
}
                           )
x.document.close();
