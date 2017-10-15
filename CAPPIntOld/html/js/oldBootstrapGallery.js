var imgList = [], file = "Gallery/Auction/Lrg/";
for (var i = 0; i < 300; i++) {                     /* Change limit based off number of img files -*/
  imgList.push(file+i+'.jpg');
};
function back() {
  if (document.getElementById('window').value > 0) {  /* change comparison value based off number of photos */
    var value = document.getElementById('window').value;
    value--;
    document.getElementById('wImg').src = imgList[value];
    document.getElementById('window').value = value;
  };
};
function next() {
  if (document.getElementById('window').value < 253) {  /* change comparison value based off number of photos (total number of photos -1)*/
    var value = document.getElementById('window').value;
    value++;
    document.getElementById('wImg').src = imgList[value];
    document.getElementById('window').value = value;
  };
};
function display(x) {
  var old = document.getElementById(x).src;
  var filepath = old.replace('Thumbs', 'Lrg');
  filepath = filepath.replace('thumbs', '');
  document.getElementById('wImg').src = filepath;
  document.getElementById('window').value = x;
  $("#viewport").show();
};
function generateGallery() {
  var row, newRow, i, iC = 0 /* Img Count */, img;

/* Function to create new row elements */
  function createRow(i) {
    newRow = "<div id='r"+i+"' class='row rowMarginTop'></div>";
    row = newRow;
  };

/* Function to create new img elements */       /* Use ' ' to contain HTML code */
  function newImg() {
    img = "<div class='col-xs-3'><img id="+iC+" onclick='display("+iC+")' src='Gallery/Auction/Thumbs/thumbs"+iC+".jpg'></div>";
    $("#r"+i).append(img);
    iC++;
  };

/* Loop to create 4 img elements per row */
  function imgLoop() {
    for (var a = 0; a < 4; a++) {
      newImg();
    };
  };

/* Put it all together */
    for (i = 0; i < 64; i++) {    /* Divide total number of images by 4 for end of loop number */
      createRow(i);
      $("#gallery").append(row);
      imgLoop();
    };
    $("#254, #255").remove();
};


var bodyHeight = $(window).height();
var bodyWidth = $(window).width();

$("#viewport").css({"height": bodyHeight, "width": bodyWidth});
