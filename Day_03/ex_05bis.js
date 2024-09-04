function getBasketContent(selectedFruits) {
    const fruits = [
        "strawberry", "strawberry", "strawberry",
        "apple", "apple",
        "lime", "lime",
        "peach",
        "pear", "pear"
    ];

    if (selectedFruits > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return [];
    } else {
        console.log(fruits.length + " fruit(s) available");
        return fruits.splice(0, selectedFruits);
    }
}