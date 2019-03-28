var num = 1111;
var arr = [3,0,5];

function sumArray(arr){
  
  let sum = 0;
  arr.forEach(el => {
    sum = sum + el;
  });
  return sum;
}

function sumArray2(arr){
  let sum = 0;
  for(let i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function mulArray(arr){
  
  let sum = 0;
  
  for(let i=0; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;
}


function reductora(arr, fx, memo){
  let sum = memo;
  for(let i=0; i < arr.length; i++){
    sum = fx(sum, arr[i]);
  }
  return sum;
}
  
function suma(memo, el){
  return memo + el;
}
  
function mul(memo, el){
  return memo * el;
}
    
//Server s = new Server();

var ob = {
  
  nombre:'Matias',
  apellido:'Noriega'
};

var s = 'hola "mundo"';

//Declaracion alternativa de una funcion
var serverFactory = function(spec){
  // el operador || evalua ambos lados, si alguno de los dos es verdadero, retorna 
  // ese mismo. En este caso su spec no fue pasada como argumento, sería 
  // null, por lo tanto daría falso, lo cual haría que quede declarado como spec
  // {}. Asigna un "algo" o un valor default
  // ALGO || VALOR DEFAULT
  spec = spec || {};
  let obj = {};
  
  //Funcion PRIVADA (encapsulamiento)
  function reductora(arr, fx, memo){
    let sum = memo;
    var array = [];
    for(let i=0; i < arr.length; i++){
      sum = fx(sum, arr[i]);
    }
    return sum;
  }
  
  //metodo PUBLICO
  obj.setArray = function(arr){
    array = arr;
  }
  
  obj.reduce = function(f,memo){
    return reductora(array,f,memo);
  }
  
  obj.nombre = spec.nombre || '';
  obj.apellido = spec.apellido || 's/d';
  return obj;
}
