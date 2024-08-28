"use strict";
// 100 Days Of Coding Challeng!
/** Question 93: Array - Find Index and Replace
Find the index of `Banana` in an array of fruits and replace it with `Mango`.*/
//------------------------------------------------------------------------------
// Array of favorite fruits
const favoriteFruits_ = ["Apple", "Orange", "Banana", "Grapes"];
// Array name changed from favoriteFruits to favoriteFruits_
const bananaIndex = favoriteFruits_.indexOf("Banana");
if (bananaIndex !== -1) {
    favoriteFruits_[bananaIndex] = "Mango";
    console.log("Updated array after replacing Banana with Mango:", favoriteFruits_);
}
else {
    console.log("Banana not found in the array.");
}
