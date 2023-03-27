function evenNumbers(num: number): void 
{
    for (let i = 2; i <= num; i += 2) 
    {
      console.log(i);
    }
  }


  evenNumbers(10)

  







  function myRevert<Arr>(myArr: Arr[]): Arr[] 
  {
    
    let ArrRevertido: Arr[] = [];
  
    for (let i = myArr.length - 1; i >= 0; i--) 
    {
      ArrRevertido.push(myArr[i]);
    }
  
    return ArrRevertido;
  }

  let myArr = [ 5, 8, 12, 15, 17, 20];

  let ArrRevertido = myRevert(myArr);

  console.log(ArrRevertido);









  function isRainbow(colors: string[]): void 
  {
    let colores: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];
  
    for (let i = 0; i < colors.length; i++) 
    {
      let color = colors[i];
  
      if (colores.includes(color)) 
      {
        console.log((color) +  "esta en el arcoiris");
      } 
      else 
      {
        console.log((color) +  "no esta en el arcoiris");
      }
    }
  };

  let colors = ["rojo", "naranja", "purpura"];

  isRainbow(colors);





  export function add(myWords: string[]): number 
  {
    let suma = 0;

    for (let i = 0; i < myWords.length; i++) 
    {
      suma += myWords[i].length;
    }

    return suma;
  }

  let palabras = ["pantalla", "teclado", "raton", "cable"];

  let sumaDeCaracteres = add(palabras);

  console.log(sumaDeCaracteres);
  

