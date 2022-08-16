
    const promiseDemo = new Promise(function(Success, Failure) {
      Success(); 
      Failure();  
    });
    
  
    promiseDemo.then(
      function(value) { document.write("HELLO WORLD.") },
      function(error) { document.write("Fail.") }
    );



    let promiseDemo3 = new Promise(function(myResolve) {
    setTimeout(function() { myResolve("<h1><i>I AM JAY.</i></h1>"); }, 3000);
  });
  
  promiseDemo3.then(function(value) {
    document.write("<br/>"+value);
  });