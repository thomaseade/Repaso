// Clase Point //


export class Point {

    private x: number;

    private y: number;
  
    constructor(x: number, y: number) 
    {
      this.x = x;

      this.y = y;
    }
  
    getX(): number 
    {
      return this.x;
    }
  
    getY(): number 
    {
      return this.y;
    }
  
    setX(x: number): void 
    {
      this.x = x;
    }
  
    setY(y: number): void 
    {
      this.y = y;
    }
  
    toString(): string 
    {
      return `(${this.x},${this.y})`;
    }

    // Método de Distancias //

    distanceToOrigin(): number 
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }



    calculateDistance(anotherPoint: Point): number 
    {
        let dx = this.x - anotherPoint.getX();

        let dy = this.y - anotherPoint.getY();

        return Math.sqrt(dx * dx + dy * dy);
      }


    // calcular cuadrante //

    calcularQuadrant(): number {
        if (this.x === 0 || this.y === 0) 
        {
          return 0;
        } 
        else if (this.x > 0 && this.y > 0) 
        {
          return 1;
        } 
        else if (this.x < 0 && this.y > 0) 
        {
          return 2;
        } 
        else if (this.x < 0 && this.y < 0) 
        {
          return 3;
        }
         else 
        {
          return 4;
        }
      }

    // Punto cercano // 

    calculateNearest(points: Point[]): Point {

        let puntocercano = points[0];

        let distanciacorta = this.calculateDistance(puntocercano); 

      
        for (let i = 1; i < points.length; i++)
         {
          let distance = this.calculateDistance(points[i]);
          if (distance < distanciacorta) {
            
            distanciacorta = distance;
            puntocercano = points[i];
          }
        }
      
        return puntocercano;
      }
}

    
    










   







  
























