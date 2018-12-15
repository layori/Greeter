var greetInstance;

Greeter.deployed().then(function(instance){
    greetInstance = instance;
});

greetInstance.setGreeting("Hello Yori Yori!!");

greetInstance.greet().then(function(response){
    console.log(response);
});