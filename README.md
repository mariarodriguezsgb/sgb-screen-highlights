## SGB-screen-Highlights

### Propósito 

Esta pantalla es una vista que permite visualizar titulares sobre información importante. Puede ser usado para hacer énfasis en eventos, noticias, productos, etc. En esta se utilizan imágenes representativas, un texto descriptivo y detalles informativos.

### Datos esperados

Se espera recibir un arreglo de categorías (categoría que será parte de las especificaciones de la información), y cada categoría tiene a su vez un arreglo de información relevante. De cada titular relevante, se incluyen los detalles y la imagen que le acompaña en pantalla.

### Datos obligatorios

* **channel**: Categoría de los anuncios relevantes
* **shows**: Arreglo de información resaltante
    *  **name**: Titular
    *  **trendingimg**: URL de la imagen que acompaña el titular

### Datos opcionales

* **shows**
    * **time**: Especificación del titular

###Ejemplo JSON
```json
data = [
		{
			'channel':'ESPN',
			'shows': [
				{
					'name':'Court Central',
					'time':0.5,
					'trendingimg':'http://s3.amazonaws.com/vnn-aws-sites/2871/files/2014/06/tennis.jpg'
				},
								{
					'name':'Balón Dividido',
					'time':3.5,
					'trendingimg':'http://lloydsoccer.com/news_images/org_3064/Image/soccer-scholarships.jpg'
				}
			]
		},
		{
			'channel':'ESPN2',
			'shows': [
				{
					'name':'PGA Tour Golf. Presidents Cup',
					'time':21.5,
					'trendingimg':'http://golfmino.com/wp-content/uploads/2014/03/golfligasenior.jpg'
				}
			]
		}
];
```

### Diseño 
La pantalla muestra una lista de elementos que resaltan por contener una imagen que acompaña cada titular.

![alt text](http://i325.photobucket.com/albums/k362/gbsojo/Important%20-%20Plain_zpsk1mxuy6h.png "Highlights")