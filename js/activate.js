$(document).ready(function(){
    $('.event-countdown').countdown({
        until: $.countdown.UTCDate(
            -5, 2016, 5, 20, 17, 30, 0, 0
            // timezone, year, month-1, day, hour, min, sec, ms
        ),
        format: 'ydhms'
    });
});