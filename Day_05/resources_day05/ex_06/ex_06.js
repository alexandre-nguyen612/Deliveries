document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('resize', function() {
        alert('Size matters');
        document.querySelectorAll('img').forEach(function(image) {
            image.addEventListener('mouseover', function() {
                alert('Pretty, isn\'t it?');
            });
        });
    });
});