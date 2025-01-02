"use strict";

const input = 52;
const abRatio = 0.9;
let cdRatio = 1.65;
let efRatio = 8.83;

const square = (v) => v * v;
const double = (v) => v * 2;
const triple = (v) => v * 3;

// assignment instead of comparison:
if (abRatio === 0.1) {
  console.log(input * abRatio);
}

// redeclarations:
cdRatio = 1.7;
efRatio = 8.63;

console.log(`test ${input}`);

/**
 * 1. Prefer const, then let
 * 2. Use individual statements to create variables
 * 3. Create descriptive variable names (camelcase)
 * 4. Standardize acronym case
 * 5. Remove unused variables
 * 6. Don't assign variables in chains
 * 7. Standardize quotes
 * 8. Create objects and arrays using literal notation
 * 9. Use quotes around property names only where needed
 * 10. Type cast strings with the String wrapper 
 * 11. Type cast numbers with the Number wrapper 
 * 12. Type cast Booleans using double negation (!!) 
 * 13. Rely on implicit Boolean values in conditionals
 * 14. Use tripple-character equality operators (===, !==)
 * 15. Don't use Yoda conditions
 * 16. Compare appropriately for the data type
 * 17. Use ternary statements judiciously
 * 18. Add parentheses to clarify logic
 */
