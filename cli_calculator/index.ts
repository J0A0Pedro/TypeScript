import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';



function main(): void {

   const fisrtStr: string = question("Digite o primeiro numero:\n");
   const operator: string = question("Escolha o operador:\n");
   const secondStr: string = question("Digite o segundo numero:\n");

   
   const validInput: boolean = isNumber(fisrtStr) && isOperator(operator) && isNumber(secondStr);


   if(validInput){
       const firstNum: number = parseInt(fisrtStr);
       const secondNum: number = parseInt(secondStr);
       const result = calculate(firstNum, operator as Operator, secondNum);

       console.log(`A "${operator}" de ${firstNum} e ${secondNum} é: ${result}`);
   }else{
       console.log("\ninvalid input\n");
       main()
   }

}


function calculate(firstNum: number, operator: Operator, secondNum: number) {

    switch(operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}



function isOperator(operator: string): boolean {

    switch(operator){

        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}


function isNumber (str: string): boolean {

    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);

    return isNum;  
}

main();
