const plusButtons = document.querySelectorAll('.plus-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');

plusButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Trouver l'élément d'entrée dans le même conteneur que le bouton
        const quantityInput = this.closest('.quantity').querySelector('input');
        
        // Augmenter la valeur de l'entrée
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.closest('.quantity').querySelector('input');        
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.item');
        if (productItem) {
            productItem.remove();
        }
    });
});

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('is-active')
    });
});