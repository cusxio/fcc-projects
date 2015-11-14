$(function () {
    reAjax();
    $("#button").on("click", reAjax);
    $(".tweet-share").on("click", function(e){
        var tweetQuote = escape($(this).attr('data-quote'));
        var tweetAuthor = escape($(this).attr('data-author'));
        var tweetUrl = $(this).attr('data-href');
        window.open('http://twitter.com/share?url=' + tweetUrl + '&text=' + "\""+ tweetQuote + "\"" + " Quote from:" + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });

    function reAjax() {
        $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=Famous",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $(".quote").find("h1").text("\" "+ data.quote + " \"");
            $(".author").find("p").text(data.author);
            $(".tweet-share").attr("data-quote", data.quote);
            $(".tweet-share").attr("data-author", data.author);
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "cHQbsIrgGNmshHkEtzIGhaCR41mpp1FW9odjsnj5cXxMLWsC1I");

    }
    });
    }

});


