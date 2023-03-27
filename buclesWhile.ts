function hasEven(myNums: number[]): boolean {
    let i = 0;

    while (i < myNums.length) 
    {
      if (myNums[i] % 2 === 0) 
      {
        return true;
      }
      i++;
    }
    return false;
  }

let numeros = [2, 3, 5, 7, 9, 11];

let hasEvenNum = hasEven(numeros);

console.log(hasEvenNum);








function startWithM(myNames: string[]): boolean 
{
    for (let i = 0; i < myNames.length; i++) 
    {
      if (!myNames[i].startsWith("M")) 
      {
        return false;
      }
    }

    return true;
  }
let nombres = ["Maria", "Marta", "Muriel"];

let nombresM = startWithM(nombres);

console.log(nombresM);