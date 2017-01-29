jQuery(document).ready(function($) {

      $('#myCarousel').carousel({
              interval: 5000
      });

      $('#carousel-text').html($('#slide-content-0').html());

      //Handles the carousel thumbnails
     $('[id^=carousel-selector-]').click( function(){
          var id = this.id.substr(this.id.lastIndexOf("-") + 1);
          var id = parseInt(id);
          $('#myCarousel').carousel(id);
      });


      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
               var id = $('.item.active').data('slide-number');
              $('#carousel-text').html($('#slide-content-'+id).html());
      });

      /* scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink" */
      $('.scrollLink').click( function() {
          $('html, body').animate({
              scrollTop: $('#scrollToThis').offset().top
          }, 400);
      });

      /* scroll to the top of the page */
      if ($('.scrollToTop')[0]){
          $('.scrollToTop').click(function(){
              $('html,body').animate({ scrollTop: 0 }, 400);
          });
    }

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
