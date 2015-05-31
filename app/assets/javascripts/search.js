$(document).ready(function(){

  var searchValue = $('#hobby_title').text();
  getData(searchValue)
  var input;

  function getData(searchValue){
    var params = {
      key: "AIzaSyBopyTlFe_JwyvQiCqq1Y08eUH1da_Mn-E",
      part: "snippet",
      type: 'video',
      q: searchValue
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", params, function(data){
        showData(data.items);
    });
  }

  function showData(data){
    var html = "";
    var num = Math.floor((Math.random() * data.length) + 1);
    var link = 'http://www.youtube.com/embed/' + data[num].id.videoId
    $('#iframe').attr('src', link)
  }
});