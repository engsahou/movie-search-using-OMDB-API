$('document').ready(function(ev){
  
  $("#submit").click(function(e){
     e.preventDefault();
  var MODbURL = "http://www.omdbapi.com/?apikey=1ed3a151";
  var search = $("#search").val();
  var year = $("#year").val();   
  var options = {
    s: search,
    y: year
  };
  //Object {Title: "No Country for Old Men", Year: "2007", imdbID: "tt0477348", Type: "movie", Poster: "https://images-na.ssl-images-amazon.com/images/M/M…jM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"}
  function show(data){
    var html ="";
    if(data.Search){
    $.each(data.Search,function(index,video){
      
      html +=`<li><div class=poster-wrap>
              <a href=../description.html?imdbID=${video.imdbID} alt=${video.Title} >
              <img class=movie-poster src=${video.Poster}>
               </a>
              </div>
              <span class= movie-title>${video.Title}</span>

              <span class= movie-year>${video.Year}</span>

              </li>`                                 
    });              
    
    }
 //end if 
  else{
    var className ="material-icons" + " icon-help";
    html +=`<li class=no-movies>
            <i>help_outline</i>No movies found that match:${search}.
          </li>`;
  }
     $("#movies").html(html);
    $(".no-movies").find("i").addClass(className);
    $('[src="N/A"]').replaceWith("<i class='material-icons poster-placeholder'>crop_original</i>");
}//end show
  $.getJSON(MODbURL,options,show);

  });
});//end ready method






//
//$('document').ready(function(ev){
//  
//  $("#submit").click(function(e){
//     e.preventDefault();
//  var MODbURL = "http://www.omdbapi.com/?apikey=1ed3a151";
//  var search = $("#search").val();
//  var year = $("#year").val();   
//  var options = {
//    s: search,
//    y: year
//  };
//  //Object {Title: "No Country for Old Men", Year: "2007", imdbID: "tt0477348", Type: "movie", Poster: "https://images-na.ssl-images-amazon.com/images/M/M…jM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"}
//  function show(data){
//    var html ="";
//    if(data.Search){
//    $.each(data.Search,function(index,video){
//      
//      html +=`<li><div class=poster-wrap>
//              <a href=http://www.imdb.com/title/${video.imdbID} alt=${video.Title} target=_blank>
//              <img class=movie-poster src=${video.Poster}>
//               </a>
//              </div>
//              <span class= movie-title>${video.Title}</span>
//
//              <span class= movie-year>${video.Year}</span>
//
//              </li>`                                 
//    });              
//    
//    }
// //end if 
//  else{
//    var className ="material-icons" + " icon-help";
//    html +=`<li class=no-movies>
//            <i>help_outline</i>No movies found that match:${search}.
//          </li>`;
//  }
//     $("#movies").html(html);
//    $(".no-movies").find("i").addClass(className);
//    $('[src="N/A"]').replaceWith("<i class='material-icons poster-placeholder'>crop_original</i>");
//}//end show
//  $.getJSON(MODbURL,options,show);
//
//  });
//});//end ready method