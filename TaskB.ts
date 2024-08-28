// 100 Days Of Coding Challeng!

/** Question 92: Array - Remove Last Element
Write a function to remove the last element from an array and return the removed element.*/

//------------------------------------------------------------------------------------------

// Array of favorite fruits
const favorite_Fruits: string[] = ["apple", "orange", "grape", "kiwi"];
// Array name changed to avoid conflict with built-in Array class
const removedFruit = favorite_Fruits.pop(); // Removes "kiwi" and returns it
console.log("Removed fruit:", removedFruit); // "kiwi"
console.log("Updated array:", favorite_Fruits); // ["apple", "orange", "grape"]
