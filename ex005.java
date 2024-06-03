public class Main /VerificarConjuntos/ {
    public static boolean verificarConjuntosIguais(int[] conjunto1, int[] conjunto2) {
        if (conjunto1.length != conjunto2.length) {
            return false;
        }
        ordenarArray(conjunto1);
        ordenarArray(conjunto2);
        // Comparar os elementos dos dois conjuntos
        for (int i = 0; i < conjunto1.length; i++) {
            if (conjunto1[i] != conjunto2[i]) {
                return false;
            }
        }
        return true;
    }
    //ordenar um array usando bubble sort
    private static void ordenarArray(int[] array) {
        int n = array.length;
        boolean trocou;
        do {
            trocou = false;
            for (int i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    int temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    trocou = true;
                }
            }
        } while (trocou);
    }
    //Método principal
    public static void main(String[] args) {
        int[] conjunto1 = {11, 2, 3, 4, 5};
        int[] conjunto2 = {5, 4, 3, 2, 11};
        if (verificarConjuntosIguais(conjunto1, conjunto2)) {
            System.out.println("Os conjuntos são iguais.");
        } else {
            System.out.println("Os conjuntos são diferentes.");
        }
    }
}