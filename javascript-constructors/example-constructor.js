function ExampleConstructor() {
}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var ExampleInstance = new ExampleConstructor();
console.log('ExampleInstance:', ExampleInstance);

var isInstance = ExampleInstance instanceof ExampleConstructor;
console.log('Is ExampleInstance an instance of ExampleConstructor?', isInstance);
