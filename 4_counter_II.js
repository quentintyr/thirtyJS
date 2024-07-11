/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let int = init;
    let object = {};
        object.increment = function() {
            return ++int;
        };

        object.decrement = function() {
            return --int;
        };

        object.reset = function() {
            int = init;
            return init;
        };

        return object;

    }

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
