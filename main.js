var pageToken = "";
var isLoading = false;
$(document).ready(function () {
    $(document).keypress(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            var str = $('#keyword').val()
            // clear 
            $('#result-list').html('');
            // $('.lds-hourglass').css("opacity","1");
            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + str + "&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
                type: "GET",
                data: $("#search").serialize(),
                success: function (contentSearch) {


                    for (let i = 0; i < contentSearch.items.length; i++) {
                        var videoId = contentSearch.items[i].id.videoId;
                        var videoUrlImg = contentSearch.items[i].snippet.thumbnails.default.url
                        var videoTitle = contentSearch.items[i].snippet.title
                        var videoDescription = contentSearch.items[i].snippet.description
                        if (contentSearch.items[i].id.kind == "youtube#video") {
                            $("#result-list").append(`<a class="result col-md-12" href="https://youtube.com/watch?v=${videoId}&autoplay=true" target="_black">
                        <img src="` + videoUrlImg + `" alt="">
        <div class="video_info">
            <h2 class="title">` + videoTitle + ` </h2>
            <p class="description">` + videoDescription + ` </p>
            <span class="views">Click here to Watch Video</span>
        </div>
</a>`);
                        }

                    }


                },

                error: function (err) {
                    console.log(err);
                }
            })
        }

    });

    $('#keyword').on("input", () => {
      
        var str = $('#keyword').val()
        // clear 
       
        $('#result-list').html('');
        // $('.lds-hourglass').css("opacity","1");
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + str + "&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
            type: "GET",

            success: function (contentSearch) {

                for (let i = 0; i < contentSearch.items.length; i++) {
                    var videoId = contentSearch.items[i].id.videoId;
                    var videoUrlImg = contentSearch.items[i].snippet.thumbnails.default.url
                    var videoTitle = contentSearch.items[i].snippet.title
                    var videoDescription = contentSearch.items[i].snippet.description


                    $("#result-list").append(`<a class="result col-md-12" href="https://youtube.com/watch?v=${videoId}&autoplay=true" target="_black">
                                        <img src="` + videoUrlImg + `" alt="">
                        <div class="video_info">
                            <h2 class="title">` + videoTitle + ` </h2>
                            <p class="description">` + videoDescription + ` </p>
                            <span class="views">Click here to Watch Video</span>
                        </div>
                </a>`);

                }


            },
            error: function (err) {
                console.log(err);
            }
        });

    })


})

$(window).on("scroll", () => {
    if ($(document).height() - ($(window).height() + $(window).scrollTop()) <= 400) {
        console.log("Loading continue")
        
           
        var str = $('#keyword').val()
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + str + "&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
            type: "GET",

            success: function (contentSearch) {
                pageToken = contentSearch.nextPageToken ? contentSearch.nextPageToken : null;
                for (let i = 0; i < contentSearch.items.length; i++) {
                    var videoId = contentSearch.items[i].id.videoId;
                    var videoUrlImg = contentSearch.items[i].snippet.thumbnails.default.url
                    var videoTitle = contentSearch.items[i].snippet.title
                    var videoDescription = contentSearch.items[i].snippet.description


                    $("#result-list").append(`<a class="result col-md-12" href="https://youtube.com/watch?v=${videoId}&autoplay=true&pageToken=${pageToken}" target="_black">
                         <img src="` + videoUrlImg + `" alt="">
                        <div class="video_info">
                            <h2 class="title">` + videoTitle + ` </h2>
                            <p class="description">` + videoDescription + ` </p>
                            <span class="views">Click here to Watch Video</span>
                        </div>
                </a>`);

                }
               
                
            },
            error: function (err) {
                console.log(err);
            }
        });
        
    }
})

function search(keyword){
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + str + "&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
        type: "GET",

        success: function (contentSearch) {
            pageToken = contentSearch.nextPageToken ? contentSearch.nextPageToken : null;
            for (let i = 0; i < contentSearch.items.length; i++) {
                var videoId = contentSearch.items[i].id.videoId;
                var videoUrlImg = contentSearch.items[i].snippet.thumbnails.default.url
                var videoTitle = contentSearch.items[i].snippet.title
                var videoDescription = contentSearch.items[i].snippet.description


                $("#result-list").append(`<a class="result col-md-12" href="https://youtube.com/watch?v=${videoId}&autoplay=true&pageToken=${pageToken}" target="_black">
                     <img src="` + videoUrlImg + `" alt="">
                    <div class="video_info">
                        <h2 class="title">` + videoTitle + ` </h2>
                        <p class="description">` + videoDescription + ` </p>
                        <span class="views">Click here to Watch Video</span>
                    </div>
            </a>`);

            }
           
            
        },
        error: function (err) {
            console.log(err);
        }
    });
    
}