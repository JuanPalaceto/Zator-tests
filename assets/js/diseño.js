const Player = videojs("my-video", { 
    "controls": true,
    // controlBar: {
    //     pictureInPictureToggle: false,
    // },
    "preload": "none" ,
    //"poster": "http://vjs.zencdn.net/v/oceans.png",
    "fluid": true,
    "language": "es",
    // sources: [
    //     { src: 'https://www.youtube.com/watch?v=Wikz02b3mqY', type: 'video/youtube'},
    //     // { src: '/assets/img/344124035_1412613889542260_6276821794803856151_n.mp4', type: 'video/mp4'},
    // ],
    "youtube": {
        "ytControls": 2,
    }
});

Player.controlBar.hide();

Player.playlist([
    {
        name: 'No gastes de más',
        description: 'Desc de prueba',
        duration: 171,           
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=Wikz02b3mqY', 
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                srcset: '../assets/img/bg/bg-navbar.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            {
                src: '../assets/img/bg/bg-servicio-diseno.jpg'
            }
        ],
        // poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    },
    {
        name: 'Ahorra en tu cimentación',
        description: 'Desc de prueba',
        duration: 165,           
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=TKo8igacFUY', 
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                srcset: '../assets/img/bg/bg-navbar.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            {
                src: '../assets/img/bg/bg-servicio-diseno.jpg'
            }
        ],
        // poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    },
    {
        name: 'Tipos de cimentación',
        description: 'Desc de prueba',
        duration: 147,           
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=G6HXi5g0ip4', 
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                srcset: '../assets/img/bg/bg-navbar.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            {
                src: '../assets/img/bg/bg-servicio-diseno.jpg'
            }
        ],
        // poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }
]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
Player.playlistUi();

// Iniciarlo en horizontal
// Player.playlistUi({horizontal: true});
// Play through the playlist automatically.
// chance y después
// Player.playlist.autoadvance(0);

// Add a listener to handle changes in screen width
window.addEventListener("resize", handleResize);

// Function to handle changes in screen width
function handleResize() {
  const playlistContainer = document.querySelector(".vjs-playlist");
  if (window.innerWidth <= 767) {
    playlistContainer.classList.remove("vjs-playlist-vertical");
    playlistContainer.classList.add("vjs-playlist-horizontal");
  } else {
    playlistContainer.classList.remove("vjs-playlist-horizontal");
    playlistContainer.classList.add("vjs-playlist-vertical");
  }
}

// Call the function initially to apply the appropriate class
handleResize();
