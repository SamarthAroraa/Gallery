var main = $("#image-con");

function makeimg(url) {
  var img =
    '<div class="col-lg-4 col-sm-6"><img class="img-thumbnail" src=' +
    url +
    "></div>";

  console.log(img);
  main.append(img);
}

$.get(
  "https://api.unsplash.com/photos/random/?count=30&client_id=uwJGooC6akLgWR2vo1Ia_lRxm8YabugIbmpEz1Hu9W4",
  function (data) {
    for (let i = 0; i < data.length; i++) {
      let url = data[i].urls.regular;
      console.log(url);
      makeimg(url);
    }
  }
);
