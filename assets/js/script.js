$(document).ready( function() {
        
    var chanName = "";
    loadChannel("UCq-Fj5jknLsUf-MWSy4_brA");
    function loadChannel(name) {

        chanName = name;

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+name+'&key=AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY';
        $.getJSON(url, function(data) {
            $('#ytSubs').html(data.items[0].statistics.subscriberCount);
            $('#ytVideo').html(data.items[0].statistics.videoCount);
            $('#ytView').html(data.items[0].statistics.viewCount);
        });

        var url1 = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + name + '&key=AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY';
        $.getJSON(url1, function (data1) {
            $('#ytName').html(data1.items[0].snippet.title);
            $('#ytImage').html('<img src="' + data1.items[0].snippet.thumbnails.medium.url + '">');
            $('#ytLink').html('<a href=\"https://www.youtube.com/channels' + data1.items[0].snippet.id + '\">Link</a>');
        });
    }

    setInterval(function () {
        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + chanName + '&key=AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY';
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