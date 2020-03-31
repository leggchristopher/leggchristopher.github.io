function myFunction(x) {
    x.classList.toggle("change");
}

function toggleNav(){
    var myNav = document.getElementById('mb-nav');
    var displaySetting = myNav.style.display;
    var navButton = document.getElementById('hamburger');
    var navBackground = document.getElementById('navbar-holder');
    
    if (displaySetting == 'block') {
        myNav.style.display = 'none';
        navBackground.style.background = 'none';
    } else {
        myNav.style.display = 'block';
        navBackground.style.background = '#6f6f6f';
    }
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".transparent");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });