// Amanda's Tech Test

// PER - "SECRET" should return 4
// const comparePER = (line) => {
//   let days = 0;
//   for (let i = 0; i < line.length; i++) {
//     if (i % 3 === 0 && line[i] !== "P") {
//       days++;
//     } else if (i % 3 === 1 && line[i] !== "E") {
//       days++;
//     } else if (i % 3 === 2 && line[i] !== "R") {
//       days++;
//     }
//   }
//   console.log(days);
//   return days;
// };

// Earth orbits the sun in 365 days. Mercury orbits the planet in 687 days. Given two numbers where the first is Earth's date and the second is Mercury's date, find the number of days until both planets are on day 0.
// Example: [364, 686] = 1

// const daysUntilZero = (array) => {
//   let earth = array[0];
//   let mercury = array[1];
//   let days = 0;
//   if (earth === 365) {
//     earth = 0;
//   }
//   if (mercury === 687) {
//     mercury = 0;
//   }
//   while (earth !== 0 && mercury !== 0) {
//     earth++;
//     mercury++;
//     days++;
//   }
//   console.log(days);
//   return days;
// };

// const daysUntilZero = (line) => {
//   let earth = line.split(" ")[0];
//   let mercury = line.split(" ")[1];
//   let days = 0;
//   if (earth === 365) {
//     earth = 0;
//   }
//   if (mercury === 687) {
//     mercury = 0;
//   }
//   while (earth !== 0 && mercury !== 0) {
//     earth++;
//     mercury++;
//     days++;
//   }
//   console.log(days);
//   return days;
// };

// Write a function that takes an array of artist names of unknown length and returns a string where the second artist is prefixed by "feat.", the rest of the artists are separated by a comma ", " and the last artist is prefixed by "&".
// Example: ["Artist 1", "Artist 2", "Artist 3", "Artist 4"] = "Artist 1 feat. Artist 2, Artist 3 & Artist 4"
// Example 2: ["Artist 1", "Artist 2", "Artist 3"] = "Artist 1 feat. Artist 2 & Artist 4"
// Example 3: ["Artist 1", "Artist 2", "Artist 3", "Artist 4", "Artist 5"] = "Artist 1 feat. Artist 2, Artist 3, Artist 4 & Artist 5"
// Example 4: ["Artist 1", "Artist 2"] = "Artist 1 feat. Artist 2"

// const feat = (array) => {
//   let string = "";
//   for (let i = 0; i < array.length; i++) {
//     if (i === array.length - 1) {
//       string += ` & ${array[i]}`;
//     } else if (i === array.length - 2) {
//       string += `${array[i]}`;
//     } else if (i !== array.length - 1 && i !== 0) {
//       string += `${array[i]}, `;
//     } else if (i === 0) {
//       string += `${array[i]} feat. `;
//     }
//   }
//   console.log(string);
//   return string;
// };

// Write a function that increments the index in an array, and at the end of the array, returns to element 0

// const incrementIndex = (array) => {
//     let index = array.length - 1;
//     array[index]++;
//     if (index === array.length) {
//         array[index] = 0;
//     }
//     return array;
//     }

// Write a function that takes an array of strings and returns a string where the items are separated by a comma

// const join = (array) => {
//     let string = "";
//     for (let i = 0; i < array.length; i++) {
//         if (i === array.length - 1) {
//             string += `${array[i]}`;
//         } else {
//             string += `${array[i]}, `;
//         }
//     }
