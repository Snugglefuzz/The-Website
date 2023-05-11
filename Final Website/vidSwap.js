function vidSwap(vidURL) {
    let myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = vidURL;
    myVideo.load();
    myVideo.play();
    }