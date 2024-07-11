function createCounter(n) {
    return function() {
        return n++;
    };
}

const counter = createCounter(10);


