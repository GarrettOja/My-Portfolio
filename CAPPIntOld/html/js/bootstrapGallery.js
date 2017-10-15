
/* generateGallery(a, b, c, d, e, f, g, h, j)
    a) imgList array name
    b) filepath for large images
    c) total number of large images
    d) row letter for unique row Ids (any letter as a string)
    e) img letter for unique image IDs (any letter as a string)
    f) filepath for thumbnails
    g) gallery ID ex. "gallery1"
    h) "total number of images" / 4 for end of createRow() loop
    j) extra images to remove from last row (write as string) ex. "'#'+img letter+'254', '#'+img letter+'255'"
*/

/* Generate Img Array */
/*
  var lots = [];
  var file = "Gallery/Auction/LrgLot/";
  for (var num = 0; num < 61; num++) {             Change limit based off number of img files -
    lots.push(file+num+'.jpg');
};

var imgs = [];
var file = "Gallery/Auction/Lrg/";
for (var num = 0; num < 353; num++) {             Change limit based off number of img files -
  imgs.push(file+num+'.jpg');
};  */

function generateGallery(a, b, c, d, e, f, g, h, j) {
  var row, newRow, i, iC = 0 /* Img Count */, img;
/* Create array of images files */
/*  a = [];

  var file = b;
  for (var num = 0; num < c; num++) {        */           /* Change limit based off number of img files -*/
/*    a.push(file+num+'.jpg');
  };*/

/* Create gallery rows with images */

/* Function to create new row elements */
  function createRow(i) {
    newRow = "<div id="+d+i+" class='row rowMarginTop'></div>";
    row = newRow;
  };

/* Function to create new img elements */       /* Use ' ' to contain HTML code */
  function newImg() {
    var displayId = "'" + e + iC + "'";
    img = '<div class="col-xs-3"><img id="'+e+iC+'" class="'+a+'" onclick="display('+displayId+')" src="'+f+iC+'.jpg"></div>';
    $("#"+d+i).append(img);
    iC++;
  };

/* Loop to create 4 img elements per row */
  function imgLoop() { /* loopC == loopCount*/
    for (var loopC = 0; loopC < 4; loopC++) {
      newImg();
    };
  };


/* Put it all together */
    for (i = 0; i < h; i++) {    /* Divide total number of images by 4 for end of loop number */
      createRow(i);
      $(g).append(row);
      imgLoop();
    };
    $(j).remove();
};

function display(x) {
  /*document.getElementById("wImg").className = document.getElementById(x).className;*/
  var old = document.getElementById(x).src;
  var filepath = old.replace('Thumbs', 'Lrg');
  filepath = filepath.replace('thumbs', '');
  document.getElementById('wImg').src = filepath;
  document.getElementById('window').value = x.replace(/\D/g, "");
  $("#viewport").show();
};
/*function back() {
  if (document.getElementById('window').value > 0) {
    var value = document.getElementById('window').value;
    value--;
    if (document.getElementById('wImg').src.match(/^Gallery&sol;Auction&sol;LrgLot&sol;/))
      document.getElementById('wImg').src = lots[value];
    };
    if (document.getElementById('wImg').src.match(/^Gallery&sol;Auction&sol;Lot&sol;/)) {
      document.getElementById('wImg').src = imgs[value];
    };
    document.getElementById('window').value = value;
  };
};
function next() {
  if ((document.getElementById('wImg').src = "Gallery/Auction/LrgLot/*.jpg") &&
    (document.getElementById('window').value < lots.length)) {
      var value = document.getElementById('window').value;
      value++;
      document.getElementById('wImg').src = lots[value];
      document.getElementById('window').value = value;
  };
  if ((document.getElementById('wImg').src = "Gallery/Auction/Lrg/*.jpg") &&
    (document.getElementById('window').value < imgs.length)) {
      var value = document.getElementById('window').value;
      value++;
      document.getElementById('wImg').src = imgs[value];
      document.getElementById('window').value = value;
  };
};  */

var bodyHeight = $(window).height();
var bodyWidth = $(window).width();

$("#viewport").css({"height": bodyHeight, "width": bodyWidth});

/*  if ($(window).width() > 992) {
    generateGallery("", "", "", "cRow", "cImg", "Gallery/Auction/ThumbsAutoRing/Cars/thumbs", "#dGallery0", 102, "#cImg405, #cImg406, #cImg407");
    generateGallery("", "", "", "pRow",  "pImg", "Gallery/Auction/ThumbsAutoRing/Parts/thumbs", "#dGallery1", 106, "#pImg423");
    generateGallery("", "", "", "sRow", "sImg", "Gallery/Auction/ThumbsShopRing/thumbs", "#dGallery2", 40, "");
  } else {
    generateGallery("", "", "", "cRow", "cImg", "Gallery/Auction/ThumbsAutoRing/Cars/thumbs", "#gallery0", 102, "#cImg405, #cImg406, #cImg407");
    generateGallery("", "", "", "pRow",  "pImg", "Gallery/Auction/ThumbsAutoRing/Parts/thumbs", "#gallery1", 106, "#pImg423");
    generateGallery("", "", "", "sRow", "sImg", "Gallery/Auction/ThumbsShopRing/thumbs", "#gallery2", 40, "");
  };
};*/

function generate() {
    generateGallery("", "", "", "cRow", "cImg", "Gallery/Auction/ThumbsAutoRing/Cars/thumbs", "#dGallery0", 102, "#cImg405, #cImg406, #cImg407");
    generateGallery("", "", "", "pRow",  "pImg", "Gallery/Auction/ThumbsAutoRing/Parts/thumbs", "#dGallery1", 106, "#pImg423");
    generateGallery("", "", "", "sRow", "sImg", "Gallery/Auction/ThumbsShopRing/thumbs", "#dGallery2", 40, "");

    generateGallery("", "", "", "cRow", "cImg", "Gallery/Auction/ThumbsAutoRing/Cars/thumbs", "#gallery0", 102, "#cImg405, #cImg406, #cImg407");
    generateGallery("", "", "", "pRow",  "pImg", "Gallery/Auction/ThumbsAutoRing/Parts/thumbs", "#gallery1", 106, "#pImg423");
    generateGallery("", "", "", "sRow", "sImg", "Gallery/Auction/ThumbsShopRing/thumbs", "#gallery2", 40, "");
  };
