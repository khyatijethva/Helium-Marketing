$(document).ready(function () {
    if ($('#location-map')) {
        $('#location-map area').each(function () {
            var id = $(this).attr('id');
            $(this).mouseover(function () {
                $('#overlay' + id).addClass("activeimg");
            });

            $(this).mouseout(function () {
                var id = $(this).attr('id');
                $('#overlay' + id).removeClass("activeimg");
            });
        });
    }
});