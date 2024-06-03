def calcular_aumento(salario_atual, porcentagem_aumento):
    aumento = salario_atual * (porcentagem_aumento / 100)
    novo_salario = salario_atual + aumento
    return novo_salario
 
def prin():
    nome = input("Por favor, insira seu nome: ")
    cargo = input("Por favor, insira seu cargo: ")
 
    salario_atual = float(input("Por favor, insira seu salário atual: "))  # Insira o salário atual
    porcentagem_aumento = 25  # Porcentagem atual de aumento
 
    novo_salario = calcular_aumento(salario_atual, porcentagem_aumento)
 
    print(nome)
    print(cargo)
    print(f'O novo salário é: {novo_salario:.2f}')  # Arredondado para duas casas decimais
 
if _name_ == "_main_":
    prin()