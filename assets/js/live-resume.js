$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 75;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);

document.getElementById('share-button').addEventListener('click', function() {
    // Get the current URL
    const url = window.location.href;
    
    // Create a temporary input element to hold the URL
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Select the input value
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, you can alert the user that the URL has been copied
    alert('URL copied to clipboard!');
});