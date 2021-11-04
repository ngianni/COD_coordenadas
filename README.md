# COD_coordenadas

Toma un csv con con un lugar en el mapa, y retorna las coordenadas indicadas en google maps.

Input: 
csv con los siguientes atributos: nombre,direccion,barrio

Output: 
csv con los siguientes atributos: nombre,direccion,barrio,lat,long,coincidencias,seleccion_final

 -  lat: latitud 

 -  long: longitud

 -  coincidencias: cantidad de lugares encontrados cuando se ingregan nombre, direccion y barrio (puede ocurrir que gmaps no ubique unicamente al lugar buscado)

 -  seleccion_final: el lugar que finalmente se selecciona, para validar posteriormente los resultados arrojados