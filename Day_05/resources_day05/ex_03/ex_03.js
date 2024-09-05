document.addEventListener("DOMContentLoaded", function() {
    var p = document.createElement('p');
    p.innerHTML = 'Now featuring a headphone jack!';
    
    document.getElementById('description').appendChild(p);
});