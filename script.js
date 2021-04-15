let mediaPop = document.querySelector("#popout");
var Airtable=require("airtable");


var base = new Airtable({apiKey: "keygEINsXOj57TR6b"}).base(
	"appQWG6WKrK9Fmenw"
);


base("media").select({}).eachPage(gotPageOfMedia, gotAllMedia);

const media=[];

function gotPageOfMedia(records, fetchNextPage) {
  console.log("gotPageOfMedia()");
  console.log("There are"+ records.length+"item in records");

  media.push(...records);
  fetchNextPage()
}

function gotAllMedia(err) {
  console.log("gotAllMedia()");
	
	if (err) {
	  console.log("error loading media");
	  console.error(err);
	  return;
	}

  showMedia();
}


function showMedia() {
  console.log("showMedia()");

  const mediaContainer = document.querySelector("#container");

  media.forEach((item) => {

   console.log("SHOWING THE ITEM")
   console.log(item.fields);

   let mediaShelf= document.createElement("div");
   mediaShelf.classList.add("mediagrid-item");
   document.querySelector("#grid").append(mediaShelf);

   let mediaCover=document.createElement("img");
   mediaCover.classList.add("image-container");
   mediaCover.src=item.fields.cover_image[0].url;
   mediaShelf.appendChild(mediaCover);


//Filter in Archive Container//
let genreList=item.fields.genre;

   genreList.forEach(function(genre){
   	const genreElement=document.createElement("span");
   	genreElement.classList.add("genreTag");
   	genreElement.innerText=genre;
   	mediaShelf.appendChild(genreElement);
console.log(genre)
	mediaShelf.classList.add(genre);
console.log(genre)
   })

let filterMovies = document.querySelector("#movie");
filterMovies.addEventListener("click",function(){

	if (mediaShelf.classList.contains("movie")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}
});

let filterShows = document.querySelector("#tv_show");
filterShows.addEventListener("click",function(){

	if (mediaShelf.classList.contains("tv_show")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}
});

let filterBooks = document.querySelector("#book");
filterBooks.addEventListener("click",function(){

	if (mediaShelf.classList.contains("book")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}
});

let filterMusic = document.querySelector("#music");
filterMusic.addEventListener("click",function(){

	if (mediaShelf.classList.contains("music")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}
});

let filterGadget = document.querySelector("#gadget");
filterGadget.addEventListener("click",function(){

	if (mediaShelf.classList.contains("gadget")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}
});

let filterGames = document.querySelector("#games");
filterGames.addEventListener("click",function(){

	if (mediaShelf.classList.contains("games")){
	mediaShelf.style.display="block";
	}else{
	mediaShelf.style.display="none"
	}

let filterReset = document.querySelector("#reset");
     filterReset.addEventListener("click", function(){
         mediaShelf.style.display = "block";
     });

     mediaShelf.appendChild(mediaShelf);
});




  mediaShelf.addEventListener("click",function(){
  	
  	mediaPop.style.display="block";

  	  const mediaTitle=document.querySelector("#title");
  	  mediaTitle.innerText=item.fields.title;

  	  /*const mediaImg=document.querySelector("#image_box");
  	  mediaImg.src=item.fields.cover_image[0].url;
  	  mediaImg.innerText=item.fields.cover_image

  	   let mediaImg=document.createElement("img");
   	   mediaImg.classList.add("image_box");
   	   mediaImg.src=item.fields.cover_image[0].url;*/

  	    let mediaImg=document.createElement("img");
		mediaImg.classList.add("image_box");
		mediaImg.src=item.fields.cover_image[0].url;
   	 

  	  const mediaBio=document.querySelector("#bio");
  	  mediaBio.innerText=item.fields.description;

	

  });
  /*mediaInfo.appendChild(mediaTitle);

  const mediaDescription = document.createElement("p");
  mediaDescription.textContent = item.fields.description;
  mediaInfo.appendChild(mediaDescription);


  const mediaCart = document.createElement("aside");
    cart.classList.add("cart");
    mediaShelf.append(cart);

    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-items");
    cart.append(cartItem);
*/


});
 };


let mediaClose = document.querySelector("#close");
mediaClose.addEventListener("click",function(){
	mediaPop.style.display="none";

});

