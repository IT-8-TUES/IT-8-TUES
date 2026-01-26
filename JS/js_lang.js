/* --- VARIABLES & BASICS --- */
// 1. const: Block-scoped constant (cannot be reassigned)
const pi = 3.14;
// 2. let: Block-scoped variable (recommended for values that change)
let score = 0;
// 3. var: Older version, function-scoped, lacks modern security checks
var legacy = "old style";
// 4. console.log(): Prints data to the browser console for debugging
console.log(pi);

/* --- COMPARISONS & LOGIC --- */
// 5. === : Strict equality (checks value AND type)
if (score === 0) {
  /* do something */
}
// 6. !== : Strict inequality
if (score !== 10) {
  /* do something */
}

/* --- LOOPS --- */
// 7. for: Standard loop with counter
for (let i = 0; i < 5; i++) {
  /* repeat */
}
// 8. while: Runs while a condition is true
while (score < 1) {
  score++;
}
// 9. do...while: Always runs at least once
do {
  score--;
} while (score > 0);
