const filter = document.querySelector(".filter-container select");
const boxes = document.querySelectorAll(".box");
console.log(filter);
// console.log(categories);
filter.addEventListener("click", function (option) {
    boxes.forEach(function (box) {
        if (!box.classList.contains(filter.value)) box.classList.add("hide");
        else box.classList.remove("hide");
        if (filter.value === "all")
            box.classList.remove("hide")
    });
});