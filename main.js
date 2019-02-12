/*
* Demostración de uso de Promise en JS Vanilla. La demo tiene como objetivo obtener datos
* de una API de forma asincrona.

* @author Jesús Mejías Leiva
*/

{

let init = function(){

    // demostración fetchApi
    //fetchApi();


    // Espera que la promise envie la respuesta y la muestra por el then() cuando sea correcta
    // o por el catch() cuando sea incorrecta.
    apiRequest().then((resolve)=>{
          console.log(resolve.results[0]);
        }).catch((error)=>{
          console.log(error);
        });

    // Asigno un texto a un elemento html mientra recibo los datos de la API.
    setTimeout(function(){
      document.getElementById("show").textContent = "Mostrando h1";
    },1500);


}

/*
* Realizando una Promise para obtener un recurso mediante $.getJSON()
*/
let apiRequest = function(){
  // creamos una Promise con su objeto predefinido y sus parámetros resolve y reject.
  return new Promise((resolve, reject)=>{

    // utilizamos la variable para probar el resolve y reject, y poder capturarlos con then y catch.
    let isError = false;

    if (!isError){
      console.log("Realizando petición");
      setTimeout(function(){
        // realizamos la petición a la API con $.getJSON.
          resolve($.getJSON("https://randomuser.me/api/"));// Resultado que se enviará cuando la Promise sea correcta.


      },3500);
    }else{
       // Resultado que se enviará cuando la Promise sea incorrecta.
       reject("Error, entrando en el catch.");
    }

  });
}

/*
* Realizando petición a un recurso mediante la fetch Api.
*/
let fetchApi = function(){
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData.results[0]))
}

$(init);

}
