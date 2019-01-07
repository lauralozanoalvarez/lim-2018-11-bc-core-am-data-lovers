# Data dashboard: Pokémon GO
Índice
¡Regresa al mundo de los Pokémon!
Pokémon Go Dashboard
Definición del producto
Entrevistas
Historias de usuario
Prototipo de baja fidelidad o Sketch
Prototipo de alta fidelidad o Diseño de la interfaz de usuario
Test de usabilidad

Al año actual, ¿quién no ha escuchado del videojuego de realidad aumentada que, no solo revive parte de nuestra infancia, sino también hace realidad el gran sueño de ser un entrenador Pokémon?
El videojuego de descarga gratuita confeccionado únicamente para dispositivos iOS y Android fue el juego revelación del 2016; teniendo acogida por público de varias generaciones y creando así un impacto en los menores que desconocían de uno de los animes más famosos y trascendentes hasta la actualidad para la generación que a día de hoy vienen a ser los jóvenes adultos de nuestra sociedad.

![Image of the game](/src/img/img-readme/app-pokemon.jpg)

Sin embargo, los grandes números que destacaban y anonadaban a toda la industria ha tenido un vacío en donde la cantidad de jugadores disminuyó y con ello la usabilidad de la app. Se cree que se debe a la modalidad del juego en esos momentos: básicamente atrapar cuantos pokémon se pudiera, evolucionarlos y subirlos de nivel; sin la opción de batallar contra otro entrenador u otras que a la actualidad ya han sido implementadas.

![Image of the map of the game](/src/img/img-readme/pokemon-players.jpg)

Pokémon GO nació de una broma de día de los inocentes por Pokémon Company con ayuda de Google Maps y se hizo realidad gracias a la gran acogida del famoso Pokémon Challenge, que hablaba de poder encontrar los diferentes 720 pokémon según el bioma que se recorra con ayuda del Maps de Google. Y de esto se trató en adelante el juego: "El videojuego requiere que el jugador recorra las calles de su ciudad para descubrir toda clase de Pokémon, cuyas distintas especies aparecen dependiendo de la zona visitada. Las calles del mundo real aparecen representadas en Pokémon GO en forma de mapa, que muestra el lugar donde se encuentra el jugador. Además, los mapas de Pokémon GO integran diferentes Pokeparadas (Pokéstops) que permiten conocer museos, instalaciones artísticas, monumentos y lugares históricos, entre otros. Cuando el jugador o entrenador Pokémon enciende la cámara de su teléfono, se puede encontrar con una imagen virtual de un Pokémon, superpuesta sobre la escena real tras la lente. Para capturar las criaturas, se utilizan pokebolas. Esta es una de las características por la que se considera que el juego se basa en la realidad aumentada, ya que permite ver la realidad mezclada con elementos de ficción a través de un teléfono inteligente."

![Image of Pokémon GO gameplay](/src/img/img-readme/gameplay.jpg)

## RESUMEN DEL PROYECTO
Si bien Pokémon GO es jugado por personas de diferentes edades, se debe reconocer que el juego es más aprovechado por jovenes adultos (20 años a más) puesto a que son ellos quienes crecieron viendo el anime, siguiendo las películas y jugando la saga de videojuegos de Pokémon. Entonces, podemos decir que es este grupo de individuos quienes entienden el verdadero significado de Pokémon GO, que es convertirse en un gran maestro Pokémon.

![Image of human Ash](/src/img/img-readme/pokemon-go.jpg)

### Definición del producto:
Pokedash es una página web que es consciente de que hay usuarios de Pokémon GO que no conocen tanto la region de Kanto y si tuvieran conocimiento de ciertos detalles de cada pokémon, esto optimizaría su juego. Por lo tanto, para aquellos que quisieran saber el detalle de tipo, debilidad, kilometraje o, simplemente, aprender de sus siguientes evoluciones; podrían apoyarse en este dashboard para encontrar ese tipo de información.

Primero se investigó a nuestros usuarios. Esto nos permitió plantear la forma de resolver sus necesidades. Para la investigación, aplicamos entrevistas en profundidad a usuarios y expertos. Y cuando obtuvimos esa información, creamos un user persona para que los represente.

- Principales usuarios de producto: Jugador nuevo de Pokémon Go.

- Objetivos de los usuarios en relación al producto: Conocer el detalle de cada pokémon para tomar desiciones estratégicas que optimicen su juego.

- Datos más relevantes que quieren ver en la interfaz: Filtrar huevos por distancia para conocer probabilidad de eclosión de cada pokémon.

- Cómo nuestro producto resuelve sus problemas: Nuestra interfaz facilita la información relevante a nuestro usuario de forma dinámica y gráfica, ayudando a incrementar su conocimiento y habilidad en el juego.


![Image of players](/src/img/img-readme/players.jpg)

Nuestro usuario es un jugador sin mucho conocimiento del juego; no es fan de la serie, pero juega por moda o pura curiosidad de la app del momento. Sin embargo, como todos los jugadores, por simple instinto humano, desea no solo jugar por pasar el tiempo, sino ser verdaderamente competente en el área; por lo cual necesitaría tener más información que le puedan dar ventaja a la hora de jugar y lucirse ante los demás.

#### Entrevistas

![Image of young freaky players](/src/img/img-readme/players2.jpg)

Para las entrevistas, escogimos a usuarios nuevos y frecuentes de Pokémon Go para que nos respondan las siguientes preguntas:

1.	¿Qué información te sería relevante ver sobre un Pokémon?
2.	¿De qué manera capturas un Pokémon?
3.	¿Qué datos te serían interesantes comparar / filtrar para mejorar tu habilidad en el juego?

Las entrevistas arrojaron las siguientes respuestas como requerimientos de nuestra web:

- En primer lugar, que se puedan visualiar todos los pokémon para una rápida captación de información básica de cada uno.

- Una vez que se sabe de la gran variedad de los pokémon, se pueden clasificar por diferentes categorías. La primera manera de filtrar los pokémon es según el tipo ya que agiliza su localización según bioma.

- Gracias a las últimas actualizaciones del juego, la opción de batalla ya está disponible. Para mayor probabilidades que el maestro pokémon gane, este debe saber debilidades de su oponente. Conocer la debilidad le da esa oportunidad.

- Filtrar por huevos o kilometraje para que el maestro conozca mejor sus más viables eclosiones. 

- Sabiendo que los particulares seres de Kanto tienen un id, se ve necesitaria la alternativa de ordenar según ese número e incluso los nombres por orden alfabético,sea ascendente y descendentemente.

- Buscar un Pokémon por ID o Nombre, facilitaría encontrarlos rápidamente.

#### Historias de Usuario

##### Historia 1:

Yo como: Reciente jugador de Pokémon Go

Quiero: Visualizar información de cada Pokémon 

Para: Tener una rápida capacitación, conocer la variedad e información básica de cada uno

##### Historia 2: 

Yo como: Jugador nuevo de Pokémon GO

Quiero: Filtrar por tipo

Para: Tener una forma de clasificación y conocer el tipo de cada Pokémon, lo cual me ayudaría a tener una idea de su localización.

##### Historia 3: 

Yo como: Jugador nuevo de Pokémon Go

Quiero: Conocer las debilidades de los pokemones

Para: Poder tener ventaja en conocimiento para las batallas.

##### Historia 4: 

Yo como: Jugador nuevo de Pokémon Go

Quiero: Poder filtrar Huevos por distancia

Para: Conocer las probabildades de eclosión de Pokémon

##### Historia 5: 

Yo como: Jugador nuevo de Pokémon Go

Quiero: Buscar por ID y nombre para encontrar rápidamente a mi pokémon.

##### Historia 6: 

Yo como: Jugador nuevo de Pokémon Go

Quiero: Ordenar por ID y nombre Ascendente y descendentemente, para poder ubicarlo fácilmente.

### Prototipo de baja fidelidad o Sketch
