class Stack {
    constructor() {
        this.piece = {}
        this.size = 0;
    }

    insert(element) {
        this.size++;
        this.piece[this.size] = element;
    }
    
    remove() {
        if(this.size > 0) {
            const piece = this.piece[this.size];

            delete this.piece[this.size];
            this.size--;

            return piece;
        } else {
            console.log('Não há elementos na pilha');
        }
    }

    peek() {
        return this.piece[this.size];
    }

    sliceMathOperation(mathOperation) {
        /*
            Casos especiais:
            - Primeiro
            - Ultimos
            - Não numeros seguidos
        */
        
        let number_acumulation = '';
        let slicedMathOperation = [];

        for(let i = 0; i < mathOperation.length; i++) {
            let isNumber = false;

            if(String(mathOperation).charCodeAt(i) >= 48 && String(mathOperation).charCodeAt(i) <= 57) {
                isNumber = true;
                number_acumulation += mathOperation[i];
            };
            
            if(isNumber === false && number_acumulation.length > 0) {
                slicedMathOperation.push(number_acumulation);
                slicedMathOperation.push(mathOperation[i]);

                number_acumulation = '';
            } else if (isNumber === false) {
                slicedMathOperation.push(mathOperation[i]);
            };

            if(isNumber === true && mathOperation.length - 1 === i) { 
                slicedMathOperation.push(number_acumulation);
                number_acumulation = '';
            };
        };

        return slicedMathOperation;
    };


    transformReversePolishNotation(mathOperation) {
        const slicedOperation = this.sliceMathOperation(mathOperation);
        let reversedPolishNotation = [];

        for(let i = 0; i < slicedOperation.length; i++) {
            if (slicedOperation[i] === '+') {
                if(this.size > 0 && this.peek() != '(') { 
                    while(this.size > 0) {
                        reversedPolishNotation.push(this.remove());
                        if(this.peek() === '(') { break }
                    }
                }
                this.insert('+');
            } 
            else if (slicedOperation[i] === '-') {
                if(this.size > 0 && this.peek() != '(') { 
                    while(this.size > 0) {
                        reversedPolishNotation.push(this.remove());
                        if(this.peek() === '(') { break }
                    }
                }
                this.insert('-');
            } 
            else if (slicedOperation[i] === '*') {
                if(this.peek() === '*' || this.peek() === '/') { reversedPolishNotation.push(this.remove()) }
                this.insert('*');                
            } 
            else if (slicedOperation[i] === '/') {
                if(this.peek() === '*' || this.peek() === '/') { reversedPolishNotation.push(this.remove()) }
                this.insert('/');                
            } else if (slicedOperation[i] === '(') {
                this.insert('(');
            }
            else if(slicedOperation[i] === ')') {
                while(this.peek() !== '(') {
                    reversedPolishNotation.push(this.remove());
                }
                this.remove();
            } else {
                reversedPolishNotation.push(slicedOperation[i]);
            }
        }

        while(this.size > 0) {
            reversedPolishNotation.push(this.remove());
        }

        return reversedPolishNotation;
    }
}

// Regras:
// Se tiver + ou - antes de * e dividir, resolve todos os * e / em sequência depois os * e -
// Se tiver parêntesis depois de * e /, continua a empilhar
// Se tiver + ou - depois de * ou /, desempilha

let mathOperation = 'A+B+C';
let stack = new Stack();
let resposta = stack.transformReversePolishNotation(mathOperation);