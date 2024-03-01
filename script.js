document.getElementById('imageInput1').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    console.log(file);
    reader.onload = function(e) {
        var imageUrl = e.target.result;
        document.getElementById('shirtbg').style.backgroundImage = 'url(' + imageUrl + ')';
      };

    reader.readAsDataURL(file);
  });

  document.getElementById('imageInput2').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    console.log(file);
    reader.onload = function(e) {
        var imageUrl = e.target.result;
        document.getElementById('pantbg').style.backgroundImage = 'url(' + imageUrl + ')';
      };

    reader.readAsDataURL(file);
  });