var x = window.open("about:blank");
var html = `
<head>
  <title>wow haha</title>
</head>
<body>
  <div>
    <button onclick = "func()">HHAHAHAHAHHAHAHAHAHHAHA</button>
    <script>
       function func() {
            window.close
            }
    </script>
  </div>
</body>

`;
x.document.write(html);
x.document.close();
