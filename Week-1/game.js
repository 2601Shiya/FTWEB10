var a = true && false && !(true) || false;
console.log(a);

var a = true || !(false) && (true || false)
console.log(a);

var a = false || (true && false) || true 
console.log(a);

var a = true || (false && true || true)
console.log(a);
