$(document).ready(function(){
    $.getJSON("https://us-east1-cloudresumechallenge-347920.cloudfunctions.net/resume-visitor-count", function(data){
        $("#visitor-count").text(data.current_visitor);
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });
    }).fail(function(){
        console.log("An error has occurred while fetching the visitor count.");
    });
});
