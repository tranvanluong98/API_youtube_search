$(document).ready(function () {
    $(document).keypress(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            var str = $('#keyword').val()
            // clear 
            $('#result-list').html('');
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
                        $("#result-list").append(`<a class="result col-md-12" href="https://youtube.com/watch?v=${videoId}&autoplay=true" target="_black">
                                            <img src="` + videoUrlImg + `" alt="">
                            <div class="video_info">
                                <h2 class="title">` + videoTitle + ` </h2>
                                <p class="description">` + videoDescription + ` </p>
                                <span class="views">Click here to Watch Video</span>
                            </div>
                    </a>`);

                    }

                    contentSearch.hide()

                },

                error: function (err) {
                    console.log(err);
                }
            })
        }

    });

    $('#search').on("submit", (event) => {
        event.preventDefault();
        var str = $('#keyword').val()
        // clear 
        $('#result-list').html('');

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