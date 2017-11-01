Array.prototype.notIncludes = function(key) {
  return !Array.prototype.includes.call(this, key)
}

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.notIncludes(newName)) {
  allNames.push(newName)
}

console.log(allNames)