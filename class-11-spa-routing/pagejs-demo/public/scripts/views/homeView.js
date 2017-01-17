// This is where we define the view for the "Home" page, in other words, the default view

(function(ctx) {
  const homeView = {};
  console.log('YO HOME VIEW');

  homeView.init = function() {
    console.log('INSIDE HOMEVIEW INIT');
    document.getElementById('content').textContent = 'Hello world, from the home page!!!';
  }

  ctx.homeView = homeView;
})(window);
