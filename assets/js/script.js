var myKeys = ["AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY","AIzaSyA4dpfufukRsnCNBYczWDLSkXX3iPfFH3Q","AIzaSyApymRb4-0SGDMfgVgqTGPj1TyLxDtvLXA","AIzaSyBsPJIa4Sut3yHlHpbJChNKUUA7UY8QejI","AIzaSyBc-iXWRHwYc4UHFxKcqPhc9DwZmrXQ2Zs","AIzaSyASZuqWAdJOcQvJ5dm_1rHODBzPkOBFtcw","AIzaSyDY_3PDTiIW451bBxwHlyNiz8lLFrkwgx0","AIzaSyDw02S2fHH7WjXtCH-SfRrzyeMGLGbsXzw","AIzaSyDLfowqkDy_W7vDJXfbR6QuG1iQmwhcAUg"];
var key = myKeys[Math.floor(Math.random() * myKeys.length)];



$(document).ready( function() {

    var chanName = "";
    loadChannel('UCAW-NpUFkMyCNrvRSSGIvDQ');
    function loadChannel(name) {

        chanName = name;

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+name+'&key='+ key;
        $.getJSON(url, function(data) {
            $('#ytSubs').html(data.items[0].statistics.subscriberCount);
            $('#ytVideo').html(data.items[0].statistics.videoCount);
            $('#ytView').html(data.items[0].statistics.viewCount);
        });

        var url1 = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+name+'&key='+key;
        $.getJSON(url1, function (data1) {
            $('#ytName').html(data1.items[0].snippet.title);
            $('#ytImage').html('<img src="' + data1.items[0].snippet.thumbnails.medium.url + '">');
            $('#ytLink').html('<a href=\"https://www.youtube.com/channel/' +name+'?sub_confirmation=1">Subscribe</a>');
        });
    }

    setInterval(function () {
        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+chanName+'&key='+keyManager.key;
        $.getJSON(url, function (data) {
            $('#ytSubs').html(data.items[0].statistics.subscriberCount);
            $('#ytVideo').html(data.items[0].statistics.videoCount);
            $('#ytView').html(data.items[0].statistics.viewCount);
        });

    }, 5000);

    $('#change').click(function () {
        loadChannel($('#chnlName').val());
    });

});
