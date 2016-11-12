console.log("Sanity Check: JS is working!");
var template;
var allFrames = [];
var $frameList;


$(document).ready(function(){

    $frameList = $('#content');

    /* - - - handlebars  - - - */
    var source = $('#frame-display-template').html(); //pulling html structure
    template = Handlebars.compile(source); // telling the compiler how to structure output

    $.ajax({
      method: 'GET',
      url: '/api/frames',
      success: handleSuccess,
      error: handleError
    });

    /* - - - Submit new frame form  - - - */
    $('#newFrameForm').on('submit', function (e) {
      console.log('new frame', $(this).serializeArray());
      $.ajax ({
        method: 'POST',
        url: '/api/frames',
        data: $(this).serializeArray(),
        success: newFrameSuccess,
        error: function newFrameError() {
          console.log('Error creating new frame')
        }
      })
    })

});

function renderPage() {
    $frameList.empty();

      /* - - - Handlebars template variable  - - - */
    var frameResultHtml = template({ frames: allFrames });

      //Adding template output to page
    $('#content').append(frameResultHtml)

}

    /* - - - Success for ajax GET: Frames call - - - */
  function handleSuccess(json) {
    allFrames = json;
    console.log(json); // NOTE: temp to see what the output is
    renderPage();
}

    /* - - - Fail for ajax GET: Frames call - - - */
  function handleError(e) {
    console.log('uh oh');
    $('h2').text('Failed to load frames, is the server working?');
}

  function newFrameSuccess(json) {
    $('#newFrameForm input').val('');
    allFrames.push(json);
    renderPage();
  }
