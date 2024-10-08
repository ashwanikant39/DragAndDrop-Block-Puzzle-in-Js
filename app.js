let cells = document.querySelectorAll(".cell");
let puzzle = document.querySelector(".puzzle");

let dragged;
cells.forEach((cell) => {
  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log(cell);
  });
  cell.addEventListener("dragenter", () => {
    // cell.classList.add("clicked-cell");
  });
  cell.addEventListener("dragleave", () => {
    // cell.classList.remove("clicked-cell");
  });
  cell.addEventListener("drop", (e) => {
    // e.preventDefault();
    e.target.appendChild(dragged);
    puzzle.setAttribute("draggable", "false");
    // cell.classList.add("clicked-cell");
  });
});

puzzle.addEventListener("dragstart", (e) => {
  //   puzzle.classList.add("dragging");
  //   puzzle.classList.add("dragging");
  //   puzzle.classList.remove("puzzle");
  dragged = e.target;
});

puzzle.addEventListener("drag", (e) => {
  //   puzzle.classList.add("dragging");
  //   puzzle.classList.remove("puzzle");
});

puzzle.addEventListener("dragend", (e) => {
  //   puzzle.classList.add("puzzle");
  dragged = "";
});

let checkPattern = () => {
  for (let pattern of patterns) {
    console.log(
      cells[pattern[0]].innerHTML,
      cells[pattern[1]].innerHTML,
      cells[pattern[2]].innerHTML
    );
  }
  console.log("hello");
};
let patterns = [
  // horizontal
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], //Vertical
  [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
  [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
  [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
  [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
  [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
  [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
  [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
  [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
  [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
];
