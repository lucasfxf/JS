class fila {
    #inicio;
    #fim;
    #qtd;
    #elementos;

    constructor(tamanho = 10){
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array[tamanho];
    }

    isFull (){
        if(this.#qtd == this.#elementos.length){
            return true;

        } else { 
            return this.#qtd == this.#elementos.length;
         }// fim else

    } // fim isFull

    ifEmpty(){
        return this.#qtd === 0;            
        } // fim isEmpty

        enqueue(elemento){
            if(!this.isFull()){
            if(this.#elementos.length - 1 === this.#fim){ //inserir o fim na ultima posição
                return this.#fim = 0;
            } else {
                return this.#fim++;

                
      this.#elementos[this.#fim] = elemento;
      this.#qtd++;
      console.log(
        `enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      return true;
    } // fim else
    return false;
            }//fim !isFull
        }//fim enqueue

        
    }// fim Main(fila)

