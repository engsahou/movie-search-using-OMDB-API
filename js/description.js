$("document").ready(function(){
  
//<a href=../description.html?imdbID=${video.imdbID}
  //we will take the data as the folowing pattern imdbID=${video.imdbID}
  var URL = "http://www.omdbapi.com/?apikey=1ed3a151";
  var queryString = location.href.split('?')[1].split('&');
  var imdbID = queryString[0].split('=')[1];//=>${video.imdbID}
     $(".site-link").attr("href","http://www.imdb.com/title/" + imdbID + "/");   
 
  var data = {
    i: imdbID,
    Plot: 'full'
  };

  $.getJSON(URL,data,showData);
                                   
  function showData(data){
   $(".title-year").html(data.Title + " (" + data.Year + ")");
    if ( data.imdbRating == "N/A" )
   $(".rating").html("IMDB Rating: No Rating");
    else
   $(".rating").html("IMDB Rating:" + data.imdbRating);
   $(".plot").html(data.Plot);
   $(".poster").attr("src",data.Poster);

  }
  
  $('.search-button').on('click',function(e){
    e.preventDefault(); 
    var data1 ={
            t:$('#search').val()
                  }  
    $.getJSON(URL,data1,showData);
  });
  $('.return-a').on('click',function(e){
  
    parent.history.back();
   
  })
  
});//ready function