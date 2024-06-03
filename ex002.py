# Linguagem: Python
lista = [5, 2, 9, 1, 6, 4]
menor_numero = lista[0]  # Inicializa o menor número com o primeiro elemento da lista
 
for numero in lista:
  if numero < menor_numero:
    menor_numero = numero
 
print(menor_numero)