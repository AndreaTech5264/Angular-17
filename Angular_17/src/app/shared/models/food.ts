 /* 
    !=  viene utilizzato per annullare gli errori
     del compilatore TypeScript relativi alla possibilità di valori
    nulli o undefined.
    ?= viene utilizzato per accedere in modo opzionale a membri di oggetti 
    che potrebbero essere nulli o undefined. */
    
    export class food{
  
    id!:number; 
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
    
}