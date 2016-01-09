jQuery(document).ready(function($){
   $('.hello_world').pwstabs({

      // scale / slideleft / slideright / slidetop / slidedown / none
      effect: 'scale',

      // The tab to be opened by default
      defaultTab: 1,

      // Set custom container width
      // Any size value (1,2,3.. / px,pt,em,%,cm..)
      containerWidth: '100%',

      // Tabs position: horizontal / vertical
      tabsPosition: 'horizontal',

      // Tabs horizontal position: top / bottom
      horizontalPosition: 'top',

      // Tabs vertical position: left / right
      verticalPosition: 'left',

      // BETA: Make tabs container responsive: true / false (!!! BETA)
      responsive: false,

      // Themes available: default: '' / pws_theme_violet / pws_theme_green / pws_theme_yellow / pws_theme_gold /
      // pws_theme_orange / pws_theme_red / pws_theme_purple / pws_theme_grey
      theme: '',

      // Right to left support: true/ false
      rtl: false

   });
});

//Scrollify configuration

//Twitter login
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//For horizontal scroll
//   $('#right-button').click(function() {
//      event.preventDefault();
//      $('#content').animate({
//        marginLeft: "+=200px"
//      }, "fast");
//   });















