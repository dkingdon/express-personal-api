console.log("Sanity Check: JS is working!");
var template;
var allFrames = [];
var $frameList;


$(document).ready(function(){

    $frameList = $('#frameDisplay');

    /* - - - handlebars  - - - */
    var source = $('#frame-display-template').html(); //pulling html structure
    template = Handlebars.compile(source); // telling the compiler how to structure output

    $.ajax({
      method: 'GET',
      url: '/api/frames',
      success: handleSuccess,
      error: handleError
    });

      // Thinks this is accomplished by using the $frameList variable.
    // $('#frameDisplay').append(frameResultHtml);

});

function render () {
    $frameList.empty();

      /* - - - Handlebars template variable  - - - */
    var frameResultHtml = template({ frames: allFrames });

      //Adding template output to page
    // $frameList.append(frameResultHtml);
    $('#frameDisplay').append(frameResultHtml)

}

    /* - - - Success for ajax GET: Frames call - - - */
  function handleSuccess(json) {
    allFrames = json;
    console.log(json); // temp to see what the
    render();
}

    /* - - - Fail for ajax GET: Frames call - - - */
  function handleError(e) {
    console.log('uh oh');
    $('#frameDisplay').text('Failed to load frames, is the server working?');
}
