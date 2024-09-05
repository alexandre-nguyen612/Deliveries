document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((p, index) => { 
        p.innerText = index;
    });
});