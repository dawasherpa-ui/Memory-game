const image = document.querySelectorAll(".image");
const pic = document.querySelectorAll("img");
let count = 0;
let match = 0;
let firstItem;
let lock = false;
let secondItem;
function flipcard() {
    count++;
    if (lock) return;
    if (this === firstItem) return;
    if (count == 1) {
        firstItem = this;
        firstItem.className = "flipflop";
        console.log(firstItem);
        console.log("first");
        count = 1;
    } else {
        secondItem = this;
        secondItem.className = "flipflop";
        console.log(secondItem);
        console.log("second");
        if (firstItem.dataset.value === secondItem.dataset.value) {
            firstItem.removeEventListener("click", flipcard);
            secondItem.removeEventListener("click", flipcard);
            match++;
            console.log(match);
            reset();
        } else {
            lock = true;
            setTimeout(
                function remover() {
                    firstItem.className = "flipflip";
                    secondItem.className = "flipflip";
                    lock = false;
                    console.log("no match");
                    reset();
                }, 1600);
        }
    }
    // Function To solve the double click match
    function reset() {
        [count, lock] = [0, false];
        [firstItem, secondItem] = [null, null];
    };
};
function shuffleImages() {
    var parent = document.querySelector('figure');
    var images = Array.from(parent.querySelectorAll('.image'));

    // Randomize the order of images
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        parent.appendChild(images[j]);
    }
} shuffleImages();
pic.forEach((item) => item.addEventListener("click", flipcard));
