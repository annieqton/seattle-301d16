// This is where we define the view for the "Contact" page

(function(ctx) {
  const contactView = {};
  console.log('YO CONTACT VIEW');

  contactView.init = function() {
    console.log('INSIDE CONTACTVIEW INIT');
    document.getElementById('content').textContent = 'These here would be my contacts if I had any friends';
    $("#content").css('color', 'red');
  }

  ctx.contactView = contactView;
})(window);
