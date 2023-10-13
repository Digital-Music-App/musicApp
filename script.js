
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


const playButton1 = document.getElementById("icon1");
const audioNe3ma1 = document.getElementById("ne3ma1");
var isPlaying1 = false;

playButton1.addEventListener("click", function () {
    if (isPlaying1) {
        audioNe3ma1.pause();
        playButton1.src = "images/play.png";
    } else {
        audioNe3ma1.play();
        playButton1.src = "images/pause.png"; 
    }
    isPlaying1 = !isPlaying1;
});

const playButton2 = document.getElementById("icon2");
const audioNe3ma2 = document.getElementById("ne3ma2");
let isPlaying2 = false;

playButton2.addEventListener("click", function () {
    if (isPlaying2) {
        audioNe3ma2.pause();
        playButton2.src = "images/play.png";
    } else {
        audioNe3ma2.play();
        playButton2.src = "images/pause.png"; 
    }
    isPlaying2 = !isPlaying2;
});

const playButton3 = document.getElementById("icon3");
const audioJouini1 = document.getElementById("jouini1");
let isPlaying3 = false;

playButton3.addEventListener("click", function () {
    if (isPlaying3) {
        audioJouini1.pause();
        playButton3.src = "images/play.png";
    } else {
        audioJouini1.play();
        playButton3.src = "images/pause.png"; 
    }
    isPlaying3 = !isPlaying3;
});

const playButton4 = document.getElementById("icon4");
const audioJouini2 = document.getElementById("jouini2");
let isPlaying4 = false;

playButton4.addEventListener("click", function () {
    if (isPlaying4) {
        audioJouini2.pause();
        playButton4.src = "images/play.png";
    } else {
        audioJouini2.play();
        playButton4.src = "images/pause.png"; 
    }
    isPlaying4 = !isPlaying4;
});

    
    
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const items = [];
var songsName = document.getElementsByClassName("text")
        for (var i =0 ; i < songsName.length ; i++){
            items.push(songsName[i].innerHTML)
        }

// Function to filter and display search results
function updateSearchResults() {

    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));

    // Clear previous results
    searchResults.innerHTML = '';

    // Display filtered results
    filteredItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    searchResults.appendChild(listItem);
    });
}

function clearInput(){
if (searchInput.value.length === 0)
searchResults.innerHTML = '';
}

searchInput.addEventListener("keyup",clearInput);

// Event listener for input changes
searchInput.addEventListener('input', updateSearchResults);
