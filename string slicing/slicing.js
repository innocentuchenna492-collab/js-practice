let phonenumber = "805-228-8592";

phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);


let username = "yellowstone";
let result = username.padStart(15, "o");
console.log(result);


let name = "yellowston uchenna";

let firstname = name.slice(0, name.indexOf(" "));
let lastname = name.slice( name.indexOf(" ") +1);
console.log(firstname);
console.log(lastname);

let mail = "innocentuchenna492@gmail.com";
yourmail = mail.slice(0, 3);
let ending = mail.indexOf("@");
let domain = mail.slice(ending);
let email = yourmail + "***" + domain;
console.log(email);