 $(document).ready(function() {

    $.ajax({
        url: "http://www.freecodecamp.com/stories/hotStories",
        type: "GET",
        dataType: "json",
        success: handleData,
        error: function(err) { alert(err); },
    });

    function handleData(data) {
        sectionGen();
        console.log(data);

        // // var description = data[i].description;
        // // var headline = data[i].headline;
        // // var link = data[i].link;
        // // var storyLink = data[i].storyLink;
        // // var likes = data[i].upVotes.length;
        // // var numComments = data[i].comments.length;
        // // var author = data[i].author.username;
        var linksArr = [];
        data.map(function(a) {
            linksArr.push("http://www.freecodecamp.com/news/" + a.storyLink);
        });
        var j = 0;
        /////////////////////////////////////////////////////////////////////
        console.log("BEGIN:" + j);
        for(var i = 1; i < 21; i ++) {
        for (j; j < (j+6); j++) {
        $('.a0-' + i).css('background-image', 'url(' + data[j].image + ')');
        $('.a0-' + i).append('<h1><a href="' + data[j].link + '">' + data[j].headline + '</a><p id="author"><i class="material-icons">account_circle</i>' + data[j].author.username + '</p></h1>');
        // $('.a0-' + i).append('<p>' + data[j].description + '</p>');
        $('.a0-' + i).append('<div class="info"></div>');
        // $('.a0-' + i + ' .info').append('<div class="comment"><a href="' + linksArr[j] + '"><i class="material-icons">comment</i> '+ data[j].comments.length.toString() +' </div>');
        $('.a0-' + i + ' .info').append('<div class="like"><i class="material-icons">thumb_up</i> ' + data[j].upVotes.length + ' </div');
        ///////
        $('.a1-' + i).css('background-image', 'url(' + data[j+1].image + ')');
        $('.a1-' + i).append('<h1><a href="' + data[j+1].link + '">' + data[j+1].headline + '</a><p id="author"><i class="material-icons">account_circle</i>' + data[j+1].author.username + '</p></h1>');
        // $('.a1-' + i).append('<p>' + data[j+1].description + '</p>');
        $('.a1-' + i).append('<div class="info"></div>');
        // $('.a1-' + i + ' .info').append('<div class="comment"><a href="' + linksArr[j+1] + '"><i class="material-icons">comment</i> '+ data[j+1].comments.length.toString() +' </div>');
        $('.a1-' + i + ' .info').append('<div class="like"><i class="material-icons">thumb_up</i> ' + data[j+1].upVotes.length + ' </div');
        ///////
        $('.a2-' + i).css('background-image', 'url(' + data[j+2].image + ')');
        $('.a2-' + i).append('<h1><a href="' + data[j+2].link + '">' + data[j+2].headline + '</a><p id="author"><i class="material-icons">account_circle</i>' + data[j+2].author.username + '</p></h1>');
        // $('.a2-' + i).append('<p>' + data[j+2].description + '</p>');
        $('.a2-' + i).append('<div class="info"></div>');
        // $('.a2-' + i + ' .info').append('<div class="comment"><a href="' + linksArr[j+2] + '"><i class="material-icons">comment</i> '+ data[j+2].comments.length.toString() +' </div>');
        $('.a2-' + i + ' .info').append('<div class="like"><i class="material-icons">thumb_up</i> ' + data[j+2].upVotes.length + ' </div');
        ///////
        $('.a3-' + i).css('background-image', 'url(' + data[j+3].image + ')');
        $('.a3-' + i).append('<h1><a href="' + data[j+3].link + '">' + data[j+3].headline + '</a><p id="author"><i class="material-icons">account_circle</i>' + data[j+3].author.username + '</p></h1>');
        // $('.a3-' + i).append('<p>' + data[j+3].description + '</p>');
        $('.a3-' + i).append('<div class="info"></div>');
        // $('.a3-' + i + ' .info').append('<div class="comment"><a href="' + linksArr[j+3] + '"><i class="material-icons">comment</i> '+ data[j+3].comments.length.toString() +' </div>');
        $('.a3-' + i + ' .info').append('<div class="like"><i class="material-icons">thumb_up</i> ' + data[j+3].upVotes.length + ' </div');
        ///////
        $('.a4-' + i).css('background-image', 'url(' + data[j+4].image + ')');
        $('.a4-' + i).append('<h1><a href="' + data[j+4].link + '">' + data[j+4].headline + '</a><p id="author"><i class="material-icons">account_circle</i>' + data[j+4].author.username + '</p></h1>');
        // $('.a4-' + i).append('<p>' + data[j+4].description + '</p>');
        $('.a4-' + i).append('<div class="info"></div>');
        // $('.a4-' + i + ' .info').append('<div class="comment"><a href="' + linksArr[j+4] + '"><i class="material-icons">comment</i> '+ data[j+4].comments.length.toString() +' </div>');
        $('.a4-' + i + ' .info').append('<div class="like"><i class="material-icons">thumb_up</i> ' + data[j+4].upVotes.length + ' </div');
        
        
        
        break;
        ///////
        }
        j  += 5;
        
        console.log("END:" + j);
        }

        /////////////////////////////////////////////////////////////////////

         $('#fullpage').fullpage({
            scrollingSpeed: 200
         });
    }

    function sectionGen() {
        for(var i = 1; i < 21; i++) {
        $("#fullpage").append('<div class="section page s' + i +'"><div class=news></div></div>');
        $(".s" + i).find('.news').prepend('<div class="article one a0-' + i +'"></div>');
        $(".s" + i).find(".news").append('<div class="article two a1-' + i +'"></div>');
        $(".s" + i).find(".news").append('<div class="article three a2-' + i +'"></div>');
        $(".s" + i).find(".news").append('<div class="article four a3-' + i +'"></div>');
        $(".s" + i).find(".news").append('<div class="article five a4-' + i +'"></div>');
        }
    }
});



