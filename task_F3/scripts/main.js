/* Test program to call Google Image API and return array of 8 images to display */

// using jQuery for ajax calls
$(document).ready( function() {

    // test url to call
    var oUrl = "https://ajax.googleapis.com/ajax/services/search/images";
    var oData = {
        v: "1.0",
        q: encodeURIComponent("giftcards.com"),
        rsz: 8
    }

    $.ajax({
        type: 'GET',
        url: oUrl,
        data: oData,
        dataType: "jsonp",
        success: function(result) {
            
            var truncated, s;

            for(var i = 0; i < 8; i++){

                // checks for extraneous chars at end of URI
                s = result.responseData.results[i].url;
                truncated = s.slice(0, s.lastIndexOf(".")+4);

                // add source URI to each image element
                $("#img" + i).attr("src", truncated);
            }
        },
    });
});
