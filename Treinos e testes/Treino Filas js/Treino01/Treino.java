package Treino01;
class Treino {
    private int inicio;
    private int fim;
    private int qtd;
    private int[] elementos;

    // CONSTRUTOR
    public Treino(int capacidade) {
        this.elementos = new int[capacidade];
        this.inicio = 0;
        this.fim = -1;
        this.qtd = 0;
    }

    // verifica se está vazia
    public boolean isEmpty() {
        return qtd == 0;
    }

    // verifica se está cheia
    public boolean isFull() {
        return qtd == elementos.length;
    }

    // adiciona no final
    public void enqueue(int valor) {
        if (isFull()) {
            System.out.println("Fila cheia!");
            return;
        }

        fim++;
        elementos[fim] = valor;
        qtd++;
    }

    // remove do início
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Fila vazia!");
            return -1;
        }

        int valor = elementos[inicio];
        inicio++;
        qtd--;

        return valor;
    }

    // retorna o primeiro
    public int front() {
        if (isEmpty()) {
            System.out.println("Fila vazia!");
            return -1;
        }

        return elementos[inicio];
    }

    // quantidade de elementos
    public int size() {
        return qtd;
    }

    // imprime a fila
    public void print() {
        if (isEmpty()) {
            System.out.println("Fila vazia!");
            return;
        }

        for (int i = inicio; i <= fim; i++) {
            System.out.print(elementos[i] + " ");
        }
        System.out.println();
    }

    // MAIN (agora no lugar certo)
    public static void main(String[] args) {
        Treino fila = new Treino(5);

        fila.enqueue(10);
        fila.enqueue(20);
        fila.enqueue(30);

        fila.print(); // 10 20 30

        fila.dequeue();

        fila.print(); // 20 30

        System.out.println("Front: " + fila.front());
        System.out.println("Size: " + fila.size());
    }
}