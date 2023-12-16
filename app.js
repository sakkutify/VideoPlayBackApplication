
const API_KEY = "AIzaSyBdAAkI7sKy7Mker2N7IoKm8VwH9JTDBWk";
const VIDEO_ID = "XETTqjJ8mOE"; 


const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;



function onYouTubeIframeAPIReady() {
    try {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: VIDEO_ID,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'showinfo': 0,
                'rel': 0,
                'iv_load_policy': 3,
                'modestbranding': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    } catch (error) {
        console.error('Error initializing YouTube Player:', error);
    }
}



function onPlayerReady(event) {
    
}


function onPlayerStateChange(event) {
    
}
