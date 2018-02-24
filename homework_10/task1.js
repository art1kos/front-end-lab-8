/**
 * Your debounce function goes here
 * function(){}
 */

function callback(){
console.log("Hi, all!");
}
function debounce(callback,timer){
	let tm;
return function(){
if (tm) {
            clearTimeout(tm)
        }
        tm = setTimeout(callback, timer);
}
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'