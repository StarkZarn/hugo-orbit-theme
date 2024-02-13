jQuery(document).ready(function($) {

    /*======= Skillset *=======*/

    // Calculate and set the final width directly:
    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');

        // Ensure valid percentage value:
        if (!/^\d+\%$/.test(itemWidth)) {
            console.error("Invalid 'data-level' value:", itemWidth);
            return; // Skip styling if value is invalid
        }

        $(this).css('width', itemWidth); // Set the width directly
    });

    /*======= target="_blank" on external links *=======*/
    // Use event delegation for efficiency:
    $(document).on('click', 'a[href^="http"]:not([href*="' + window.location.hostname + '"])', function() {
        $(this).attr('target', '_blank');
    });

});
