#include <stdio.h>
#include <stdlib.h>
 
int main(){
    int numero;
 
    printf("Digite o valor do numero ");
    scanf("%d", &numero);
 
    switch(numero % 2){
    case 0:
        printf("O numero e par: ");
        break;
    default:
        printf("O numero e impar: ");
        break;
    }
    return 0;
}

// Por: Matheus Ventura
