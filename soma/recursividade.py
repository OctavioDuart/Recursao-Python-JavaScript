def soma_array(lista):
    if len(lista) == 1:
        return lista[0]
    else:
        return lista[0] + soma_array(lista[1:])
        
print(soma_array([10, 3, 8, 5])) # 26
