function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens}
function destructivelyPrependKitten(name){
  kittens.unshift(name);}
function destructivelyRemoveLastKitten(){
  kittens.pop();}
function destructivelyRemoveFirstKitten(){
  kittens.shift();}
function appendKitten(name){
     var newkittens = [...kittens, name];
     return newkittens}
function prependKitten(name){
       var newkittens = [name, ...kittens];
       return newkittens}
function removeLastKitten(){
  var newkittens = kittens.slice(0,2);
  return newkittens}
  function removeFirstKitten(){
    var newKittens = kittens.slice(1)
    return newKittens
  }