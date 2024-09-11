/**Method that uses JQuery to show or hide content in div when using the read more/read less button */
$(document).ready(function() {
    $(".read-more-portfolio").click(function() {
        var content = $(this).siblings(".portfolio-content");
        if (content.is(":visible")) {
            content.slideUp();
            $(this).text("Read more");
        } else {
            content.slideDown();
            $(this).text("Read less");
        }
    });

    // Initially hide the content
    $(".portfolio-content").hide();
});