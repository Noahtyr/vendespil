
$(document).ready(function() {
    var cardBackSide_URL =
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/494860/bagside.png";
    $("img").addClass("unturned");
    $(".unturned").attr("src", cardBackSide_URL);
    var upsideCards = [];
    var reset = false;
    $(".unturned").click(function() {
        if (reset) {
            var selector1 = "." + upsideCards[0];
            var selector2 = "." + upsideCards[1];
            $(selector1).attr("src", cardBackSide_URL).delay(1000);
            $(selector2).attr("src", cardBackSide_URL);
            upsideCards = [];
            reset = false;
        }
        var tileNumber = $(this).prop("class").slice(0,3);
        upsideCards.push(tileNumber);
        if (upsideCards.length <= 2) {
            var image = imageFilenameFromClass(tileNumber);
            $(this).attr("src", image);
        }
        if (upsideCards.length == 2) {
            if (upsideCards[0]==upsideCards[1]) {
                var selector = "." + upsideCards[0];
                console.log(selector  + " fundet.");
                $(selector).removeClass("unturned");
                $(selector).addClass("turned");
                upsideCards = [];

            } else {
                reset = true;
            }
        }
    });
});


function imageFilenameFromClass(classNumber) {
    var imageNumber = classNumber.slice(1, 2);
    // DEBUG
    console.log("Image clicked " + imageNumber);
    var imageFolderPath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/494860/";
    var imageURL = imageFolderPath + imageNumber + ".jpg";
    // DEBUG
    console.log("Image URL is: " + imageURL);
    return imageURL;
}
