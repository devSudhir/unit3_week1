async function myFunction() {
    try {
        let response = await fetch("http://jsonplaceholder.typicode.com/posts")
        let data = await response.json();
    } catch (e) {
        console.log("err:", e);
    } finally {
        console.log("completed");
    }
    
    console.log("data:", data);
}

/*fetch("http://jsonplaceholder.typicode.com/posts")
  .then(function (res) {
    //res.json() - collect data
    return res.json();
  })
  .then(function (res) {
    console.log("res:", res);
  })
  .catch(function (err) {
    console.log("we have an error", err);
  })
  .finally(function () {
    console.log("my promise is settled");
  });

//async await version of above code

//settled promise vs resolved promise

async function makeRequest() {
  //error handling in async await

  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/posts");

      var data = await response.json();
      console.log("data:", data);

  } catch (e) {
    console.log("e:", e);
  }
  finally {
      
      console.log('completed')
   } 

}

makeRequest();

*/
