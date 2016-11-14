console.log("Sanity Check: JS is working!");
var template;
var allFrames = [];
var $frameList;
var rating;

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
      });
    });

    /* - - - Delete Button functionality - - - */
    $frameList.on('click', '.deleteBtn', function() {
      $.ajax ({
        method: 'DELETE',
        url: '/api/frames/' + $(this).attr('data-id'),
        success: frameDeletedSuccess,
        error: function (err){
            console.log(err);
        }
      });
    });

    /* - - - Updates rating - - - */
            // NOTE: not working. Commenting out to get what i do have working on heroku 
    // $frameList.on('click', '.ratingBtn', function (e) {
    //   // e.preventDefault();
    //   rating = prompt('Rate this frame: out of 5');
    //   console.log(rating + ' / 5');
    //     $.ajax({
    //       method: 'POST',
    //       url: '/api/frames/' +$(this).attr('data-id') + '/rating',
    //       data: $(this).serializeArray(),
    //       success: addRating,
    //       error: function () {
    //         console.log("error adding rating");
    //       }
    //     })
    //
    // })

    /* - - - Searches by brand - - - */ //NOT WORKING
    // $frameList.on('click', '.searchBtn', function () {
    //   console.log('search btn pressed');
    //   $.ajax ({
    //     method: 'GET',
    //     url: '/api/frames/' + $(this).attr('data-id'),
    //     success: handleSuccess,
    //     error: function (){
    //       console.log("Error performing search");
    //     }
    //   });
    // }); NOTE: Not working, WHY??

}); //End Document Ready Function

  function renderPage() {
    $frameList.empty();
      /* - - - Handlebars template variable  - - - */
    var frameResultHtml = template({ frames: allFrames });
      //Adding template output to page
    $('#content').append(frameResultHtml);
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
  /* - - - Frame Creation successful function - - - */
  function newFrameSuccess(json) {
    $('#newFrameForm input').val('');
    allFrames.push(json);
    renderPage();
  }

  /* - - - Frame deletion successful function - - - */
  function frameDeletedSuccess(json) {
    var frame = json;
    console.log(json);
    var frameId = frame._id;
    console.log('deleted frame', frameId);
    for (var i = 0; i < allFrames.length; i++) {
      if (allFrames[i]._id === frameId) {
        allFrames.splice(i, 1);
        break;
      }
    }
    renderPage();
  }

  /* - - - Add Rating Success - - - */
  function addRating (json) {
    var frame = json;
    var frameId = frame._id;
      for (var i = 0; i < allFrames.length; i++) {
        if (allFrames[i]._id === frameId) {
          allFrames[i].rating === rating;
          break;
      }
    }
    renderPage();
  }
