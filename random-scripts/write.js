var x = window.open("about:blank");
var html = `
<head>
  <title>wow haha</title>
</head>

`;
x.document.write(html);
x.document.addEventListener("click", function () {
  x.close()
}
                           )
x.document.close();
