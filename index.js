$(document).ready(()=>{
    $("input[name=inlineRadios][value=titleradio]").prop('checked', true);
    $("#formyear").hide();
    $("#formid").hide();
    $("#formtitle").show();
    $("#load").hide();
	$("#radiotitle").click(()=>{    
	      $("#formyear").hide();
          $("#formid").hide();
          $("#formtitle").show();});
    $("#radioyear").click(()=>{
    	  $("#formtitle").hide();
	      $("#formyear").show();
          $("#formid").hide();});
    $("#radioid").click(()=>{    	  
    	  $("#formtitle").hide();
	      $("#formyear").hide();
          $("#formid").show();;});    
    $("#error").hide();
    $("#details").hide();



formtitlee= ()=> {     
   let title=$("#title").val();     
   $("#moviecards").empty();
        $.ajax({
        	type: 'GET',
        	dataType: 'json',
        	async:true,
        	url: "http://www.omdbapi.com/?s="+title+"&apikey=daae9546",
        	success: (response)=>{
        		console.log(response);
        		$("#load").hide();
        		$("#error").hide();
                if(response.Response=="False"){
                	$("#error").show();
                }       		 

                for(let m in response.Search){
                	let movie=response.Search[m];
                	let image="image.png"
                	if(movie.Poster=="N/A"){
                 var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+image+"'  class='img-fluid img-thumbnail' <h6 class='card-title mt-1 py-1'>"+movie.Title+"</h6> <a href='#exampleModalCenter'  id='"+movie.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0' data-toggle='modal' data-target='#exampleModalCenter'>Details</a></div> "); 		
                	}else{
                		var id=movie.imdbId;
                var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+movie.Poster+"' class='img-fluid imgg img-thumbnail' <h6 class='card-title mt-1 py-1'>"+movie.Title+"</h6> <a href='#'  id='"+movie.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0'>Details</a></div> ");              	
               }
                $("#moviecards").append(div);
                };
        	},
        	error:()=>{
        		alert("error");
        	},
        	beforeSend: ()=>{
        		$("#load").show();
 
        	}
        });
}



formyeartitlee=()=>{
   let yeartitle=$("#yeartitle").val();
   let year=$("#year").val();  
   $("#moviecards").empty();	
         $.ajax({
        	type: 'GET',
        	dataType: 'json',
        	async:true,
        	url: "http://www.omdbapi.com/?s="+yeartitle+"&y="+year+"&apikey=daae9546",
        	success: (response)=>{
        		console.log(response);
        	    $("#load").hide();
        	    $("#error").hide();
                if(response.Response=="False"){
                	$("#error").show();
                }       		 
                for(let m in response.Search){
                	let movie=response.Search[m];
                	let image="image.png"
                	if(movie.Poster=="N/A"){
                 var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+image+"'  class='img-fluid img-thumbnail' <h6 class='card-title mt-1 py-1'>"+movie.Title+"</h6> <a href='#'  id='"+movie.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0'>Details</a></div> "); 		
                	}else{
                var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+movie.Poster+"'  class='img-fluid imgg img-thumbnail' <h6 class='card-title mt-1 py-1'>"+movie.Title+"</h6> <a href='#'  id='"+movie.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0'>Details</a></div> ");              	
               }
                $("#moviecards").append(div);
                };
        	},
        	error:()=>{
        		alert("opps");
        	},
        	beforeSend: ()=>{
        		$("#load").show();
        	}
        });
    }
formid=()=>{
   let id=$("#id").val();
   $("#moviecards").empty();	    	
        $.ajax({
        	type: 'GET',
        	dataType: 'json',
        	async:true,
        	url: "http://www.omdbapi.com/?i="+id+"&apikey=daae9546",
        	success: (response)=>{
        		console.log(response);
                $("#load").hide();
                $("#error").hide();
                if(response.Response=="False"){
                	$("#error").show();
                }else{	
                	let image="image.png"
                	if(response.Poster=="N/A"){
                 var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+image+"'  class='img-fluid img-thumbnail' <h6 class='card-title mt-1 py-1'>"+response.Title+"</h6> <a href='#'  id='"+response.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0'>Details</a></div> "); 		
                	}else{
                var div=$("<div>").html(" <div class=' text-white text-center card bg-dark'> <img src='"+response.Poster+"'  class='img-fluid imgg img-thumbnail' <h6 class='card-title mt-1 py-1'>"+response.Title+"</h6> <a href='#'  id='"+response.imdbID+"' onClick='myFunction(this.id);' class='btn btn-primary m-1 b-0'>Details</a></div> ");              	
               }
                $("#moviecards").append(div);
               
              }
        	},
        	error:()=>{
        		alert("opps");
        	},
        	beforeSend: ()=>{
                $("#load").show();
        	}
        }); 	
}
});

    function myFunction(id) {
    	

        $.ajax({
        	type: 'GET',
        	dataType: 'json',
        	async:true,
        	url: "http://www.omdbapi.com/?i="+id+"&apikey=daae9546",
        	success: (response)=>{
        		console.log(response);
                $("#load").hide();
                $("#error").hide();
                $("#modalbody").empty();
                $("#exampleModalLongTitle").html("Movie Name :"+response.Title);
                let paragraph1=$("<p>")
                paragraph1.html("Year :"+response.Year+", Rated :"+response.Rated);
                $("#modalbody").append(paragraph1);
                let paragraph2=$("<p>");
                paragraph2.html("Released :"+response.Released+", imdbID :"+response.imdbID);
                $("#modalbody").append(paragraph2);
                let paragraph3=$("<p>");
                paragraph3.html("Actors :"+response.Actors);
                $("#modalbody").append(paragraph3);
                let paragraph4=$("<p>");
                paragraph4.html("Director :"+response.Director);
                $("#modalbody").append(paragraph4);
                let paragraph5=$("<p>");
                paragraph5.html("Genre :"+response.Genre+". Language: "+response.Language);
                $("#modalbody").append(paragraph5);
                let paragraph6=$("<p>");
                paragraph6.html("Production: "+response.Production);
                $("#modalbody").append(paragraph6);                                                                
        	},
        	error:()=>{
        		alert("opps");
        	},
        	beforeSend: ()=>{
                $("#load").show();
        	}
        }); 	   	       
    	$("#details").click();        
    }