/**
 * Toán tử logic
 * 1. && - And
 * 2. || - or
 * 3. ! - not
 */
let a = 1;
let b = 2;
let c = 3;

if (a > 0 && b > 0 && c > 0) {
  console.log("Điều kiện đúng.");
}

if (a > 0 || (b > 0 && c > 0)) {
  console.log("Điều kiện đúng.");
}

if (!(a < 0)) {
  console.log("Điều kiện đúng.");
}
