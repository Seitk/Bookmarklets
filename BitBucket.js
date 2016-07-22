/** 
 * Jump to the next comment
 **/

// Minified
var currentTop=$(window).scrollTop(),done=!1;$(".comment-thread-container").each(function(){0==done&&$(this).offset().top>currentTop&&($(window).scrollTop($(this).offset().top),done=!0)});

// Source
var currentTop = $(window).scrollTop();
var done = false;
$('.comment-thread-container').each(function() {
   if (done == false && $(this).offset().top > currentTop) {
      $(window).scrollTop($(this).offset().top);
      done = true;
   }
});

/** 
 * Jump to the previous comment
 **/

// Minified
var currentTop=$(window).scrollTop(),done=!1;$(".comment-thread-container").each(function(){0==done&&$(this).offset().top<currentTop&&($(window).scrollTop($(this).offset().top),done=!0)});

// Source
var currentTop = $(window).scrollTop();
var done = false;
$('.comment-thread-container').each(function() {
   if (done == false && $(this).offset().top < currentTop) {
      $(window).scrollTop($(this).offset().top);
      done = true;
   }
});