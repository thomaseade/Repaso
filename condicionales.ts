function zodiac(day: number, month: number): string 
{

    let signo = [  "Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];

    let fechas = [ 20, 19, 21, 20, 21, 21, 22, 23, 23, 23, 23, 22];

    let indiceSigno =  month -1;
    if (day>= fechas[indiceSigno]) 
    {
        indiceSigno++;
    }
    return signo[indiceSigno];
}

console.log(zodiac(16, 6));









function continent(country: string): string 
{
    let americaSur = ["argentina", "colombia", "chile"];

    let americaNorte = ["estaods unidos", "canada", ];

    let asia = ["china", "tailandia", "korea"];

    let europa = ["españa", "alemania", "grecia"];

    let africa = ["marruecos", "egipto", "somalia"];

    let oceania = ["nueva zelanda", "australia"];

  


    if (americaSur.includes(country))
     {
        return 'Sudamérica';

      } else if (americaNorte.includes(country)) 
      {
        return 'Norteamérica';

      } else if (asia.includes(country)) 
      {
        return 'Asia';

      } else if (europa.includes(country)) 
      {
        return 'Europa';

      } else if (africa.includes(country)) 
      {
        return 'África';

      } else if (oceania.includes(country))
      {
        return 'Oceanía';

      } else 
      {
        return 'Desconocido';
      }
    }

    let country = "marruecos"

    console.log(continent(country));










    export function isEven(number: number): void 
    {
        if (number % 2 === 0) 
        {
          console.log("es par");
        } else 
        {
          console.log("es impar");
        }
      }
      isEven(19);