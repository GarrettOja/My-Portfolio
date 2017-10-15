/* Section 0 */

var imgList0 = [], file = "Gallery/Auction/LrgLot/";
for (var i = 0; i < 70; i++) {                     /* Change limit based off number of img files -*/
  imgList0.push(file+i+'.jpg');                     /* 61 images */
};

function back0() {
  if (document.getElementById('window0').value > 0) {  /* change comparison value based off number of photos */
    var value = document.getElementById('window0').value;
    value--;
    document.getElementById('wImg0').src = imgList0[value];
    document.getElementById('window0').value = value;
  };
};
function next0() {
  if (document.getElementById('window0').value < 60) {  /* change comparison value based off number of photos (total number of photos -1)*/
    var value = document.getElementById('window0').value;
    value++;
    document.getElementById('wImg0').src = imgList0[value];
    document.getElementById('window0').value = value;
  };
};
function display0(x) {
  var old = document.getElementById(x).src;
  var filepath = old.replace('ThumbsLot', 'LrgLot');
  filepath = filepath.replace('thumbs', '');
  document.getElementById('wImg0').src = filepath;
  document.getElementById('window0').value = x;
  $("#viewport0").show();
};
function generateGallery0() {
  var row, newRow, i, iC = 0 /* Img Count */, img;

/* Function to create new row elements */
  function createRow(i) {
    newRow = "<div id='r"+i+"' class='row rowMarginTop'></div>";
    row = newRow;
  };

/* Function to create new img elements */       /* Use ' ' to contain HTML code */
  function newImg() {
    img = "<div class='col-xs-3'><img id="+iC+" onclick='display0("+iC+")' src='Gallery/Auction/ThumbsLot/thumbs"+iC+".jpg'></div>";
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
    for (i = 0; i < 16; i++) {    /* Divide total number of images by 4 for end of loop number */
      createRow(i);
      $("#gallery0").append(row);
      imgLoop();
    };
    $("#61, #62, #63").remove();
};

/* Section 1 */

var imgList1 = [], file = "Gallery/Auction/Lot/";
for (var i = 0; i < 355; i++) {                     /* Change limit based off number of img files -*/
  imgList1.push(file+i+'.jpg');
};
function back1() {
  if (document.getElementById('window1').value > 0) {  /* change comparison value based off number of photos */
    var value = document.getElementById('window1').value;
    value--;
    document.getElementById('wImg1').src = imgList1[value];
    document.getElementById('window1').value = value;
  };
};
function next1() {
  if (document.getElementById('window1').value < 352) {  /* change comparison value based off number of photos (total number of photos -1)*/
    var value = document.getElementById('window1').value;
    value++;
    document.getElementById('wImg1').src = imgList1[value];
    document.getElementById('window1').value = value;
  };
};
function display1(x) {
  var old = document.getElementById(x).src;
  var filepath = old.replace('Thumbs', 'Lrg');
  filepath = filepath.replace('thumbs', '');
  document.getElementById('wImg1').src = filepath;
  document.getElementById('window1').value = x;
  $("#viewport1").show();
};
function generateGallery1() {
  var row, newRow, i, iC = 0 /* Img Count */, img;

/* Function to create new row elements */
  function createRow(i) {
    newRow = "<div id='r"+i+"' class='row rowMarginTop'></div>";
    row = newRow;
  };

/* Function to create new img elements */       /* Use ' ' to contain HTML code */
  function newImg() {
    img = "<div class='col-xs-3'><img id="+iC+" onclick='display1("+iC+")' src='Gallery/Auction/Thumbs/thumbs"+iC+".jpg'></div>";
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
    for (i = 0; i < 89; i++) {    /* Divide total number of images by 4 for end of loop number */
      createRow(i);
      $("#gallery1").append(row);
      imgLoop();
    };
    $("#353, #354, #355").remove();
};
