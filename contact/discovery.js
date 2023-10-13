var genreCards = document.querySelectorAll('.genre-card');
var songLists = document.querySelectorAll('.songs-list');

function addEventListenersToGenreCards() {
    for (var i = 0; i < genreCards.length; i++) {
        genreCards[i].addEventListener('click', createEventListener(genreCards[i]));
    }
}

function createEventListener(genreCard) {
    return function() {
        var genre = genreCard.getAttribute('data-genre');

        for (var j = 0; j < songLists.length; j++) {
            songLists[j].style.display = 'none';
        }

        var targetSongList = document.getElementById(genre + '-songs');
            targetSongList.style.display = 'block';

    };
}

addEventListenersToGenreCards();