fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function findFruitIndex(fruitName) {
    const index = fruits.indexOf(fruitName);
    if (index !== -1) {
        displayResult(index);
    } else {
        displayResult(null);
    }
}

findFruitIndex("Apple");