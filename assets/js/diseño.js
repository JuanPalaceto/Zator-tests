const Player = videojs("my-video", { 
    "controls": true,
    // controlBar: {
    //     pictureInPictureToggle: false,
    // },
    "preload": "none" ,
    //"poster": "http://vjs.zencdn.net/v/oceans.png",
    "fluid": true,
    "language": "es",
    sources: [
        { src: 'https://www.youtube.com/watch?v=Wikz02b3mqY', type: 'video/youtube'},
        // { src: '/assets/img/344124035_1412613889542260_6276821794803856151_n.mp4', type: 'video/mp4'},
    ],
    "youtube": {
        "ytControls": 2,
    }
});

Player.controlBar.hide();