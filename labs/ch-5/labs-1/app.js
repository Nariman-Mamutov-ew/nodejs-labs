"use strict";
const prefixer = (param) => (name) => `${param.trim()} ${name.trim()}`;

const sayHiTo = prefixer("Hello ");
const sayByeTo = prefixer("Goodbye ");
console.log(sayHiTo("Dave")); // prints 'Hello Dave'
console.log(sayHiTo("Annie")); // prints 'Hello Annie'
console.log(sayByeTo("Dave")); // prints 'Goodbye Dave'
