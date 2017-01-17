// This is where we define the view for the "About" page

(function(ctx) {
  const aboutView = {};
  console.log('YO ABOUT VIEW');

  aboutView.init = function() {
    console.log('INSIDE ABOUTVIEW INIT');
    document.getElementById('content').textContent = 'This is the dadgum About page!!!';
    $("#content").css('color', 'green');
  }

  ctx.aboutView = aboutView;
})(window);
