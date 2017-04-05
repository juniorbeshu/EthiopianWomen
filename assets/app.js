var $overlay = $('<div id="overlay"></div>');

  var $image = $("<img>");
var $caption = $("<p></p>");
// Add an img to the overlay
$overlay.append($image);
// A caption to the overlay
$overlay.append($caption);

// Add an overlay
$("body").append($overlay);
  

$('#imageGallery a').click(function(event) {
  // Capture the click event on a link to an img
 event.preventDefault();
  var imageLocation = $(this).attr('href');
  
  // Update overlay with the img linked in the link
  $image.attr("src", imageLocation);
  // Show the overlay
  $overlay.show();
  // Get the child's alt attribute an dset caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
  

// When a user clicks on the overlay
$overlay.click(function() {
  $(this).hide();
});