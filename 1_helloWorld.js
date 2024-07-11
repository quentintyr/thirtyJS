var createHelloWorld = function() {
    return function sayHelloWorld() {
      return "Hello World"
    }
  }
  
  var output = createHelloWorld()();
  console.log(output)