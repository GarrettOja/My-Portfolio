<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <title>Capp Int. Gallery</title>
  <meta charset="UTF-8">
  <link rel='stylesheet prefetch' href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="bootstrapGallery.css">
</head>

<body>
  <div  class="container-fluid">
    <div class="row">
      <div class="col-xs-12" align="center">
        <div class="" style="
          width: 100%;
          height: 1000px;
          margin-top: 30px;
          padding-bottom: 15px;

          text-align: center;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;"> <!-- http://stackoverflow.com/questions/26046373/iframe-scrolling-ios-8 -->
          <div class="btn-group btn-group-lg">
            <button class="btn btn-primary" id="b0">Lotted Items</button>
            <button class="btn btn-primary" id="b1">Other items</button>
          </div>
          <div style="text-align: center;" id="galleryBody"> <!-- temporary -->
            <div class="container-fluid" id="gallery0" style="display: none;">
              <!-- generateGallery() will add elements here -->
            </div>
            <div class="container-fluid" id="gallery1"  style="display: none;">
              <!-- generateGallery() will add elements here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid modal modal-fullscreen" id="viewport" style="text-align: center; display: none">
    <div class="row vertical-center">
      <div class="col-xs-1">
        <a onclick="back()"><h1><span class="glyphicon glyphicon-menu-left icons"></span></h1></a>
      </div>
      <div class="col-xs-10">
        <ul>
          <li id="window" value="0"><img id="wImg" src=""></li>
        </ul>
      </div>
      <div class="col-xs-1">
        <a onclick="next()"><h1><span class="glyphicon glyphicon-menu-right icons"></span></h1></a>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button id="hide" class="btn btn-primary btn-lg" style="background-color: #f45844; border: 1px solid white">Close</button>
      </div>
    </div>
  </div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="js/newBootstrapGallery.js"></script>

<script>generateGallery("lots", "Gallery/Auction/LrgLot", 61, "lRow", "lImg", "Gallery/Auction/ThumbsLot/thumbs", "gallery0", 16, "#lImg61, #lImg62, #lImg63");
        generateGallery("imgs", "Gallery/Auction/Lrg", 353, "iRow",  "iImg", "Gallery/Auction/Thumbs/thumbs", "gallery1", 89, "#iImg353, #iImg354, #iImg355");
        $("#hide").click(function(){
          $("#viewport").hide();
        });
        $("#b0").click(function(){
          $("#gallery0").show();
          $("#gallery1").hide();
        });
        $("#b1").click(function(){
          $("#gallery1").show();
          $("#gallery0").hide();
        });
</script>
</html>
