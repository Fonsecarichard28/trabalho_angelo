export class Util{

    public static random(number:number, lastNumber:number): number{
        return number + Math.round(Math.random()*lastNumber);
       }

}