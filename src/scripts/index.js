var instance = new vidbg('.video', {
    mp4: './src/video/world.mp4', // URL or relative path to MP4 video
    webm: './src/video/world.webm', // URL or relative path to webm video
    poster: './src/img/earth.jpg', // URL or relative path to fallback image
    overlay: false
  });

var rellax = new Rellax('.rocket-img');

new WOW().init();