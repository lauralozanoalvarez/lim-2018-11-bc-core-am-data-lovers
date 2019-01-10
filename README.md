
# Índice 
- [Sobre Pokémon GO](#pokémon-go)
- [Definición del producto](#definición-del-producto)
- [Entrevistas](#entrevistas)
- [Historias de usuario](#historias-de-usuario)
- [Proceso de diseño](#proceso-de-diseño)
- [Prototipo de baja fidelidad](#protobaja)
- [Prototipo de alta fidelidad](#protobaja)
- [Test de usabilidad](#protobaja)

# POKÉMON GO.

![Image of the game](/src/img/img-readme/pokemonGo-app.jpg)

Pokémon GO nació de una broma de día de los inocentes por Pokémon Company con ayuda de Google Maps y se hizo realidad gracias a la gran acogida del famoso Pokémon Challenge, que hablaba de poder encontrar los diferentes 720 pokémon según el bioma que se recorra con ayuda del Maps de Google. Y de esto se trató en adelante el juego: "El videojuego requiere que el jugador recorra las calles de su ciudad para descubrir toda clase de Pokémon, cuyas distintas especies aparecen dependiendo de la zona visitada. Las calles del mundo real aparecen representadas en Pokémon GO en forma de mapa, que muestra el lugar donde se encuentra el jugador. Además, los mapas de Pokémon GO integran diferentes Pokeparadas (Pokéstops) que permiten conocer museos, instalaciones artísticas, monumentos y lugares históricos, entre otros. Cuando el jugador o entrenador Pokémon enciende la cámara de su teléfono, se puede encontrar con una imagen virtual de un Pokémon, superpuesta sobre la escena real tras la lente. Para capturar las criaturas, se utilizan pokebolas. Esta es una de las características por la que se considera que el juego se basa en la realidad aumentada, ya que permite ver la realidad mezclada con elementos de ficción a través de un teléfono inteligente."

![Image of Pokémon GO gameplay](/src/img/img-readme/gameplay.jpg)


## Definición del producto.
Pokedash es una página web que es consciente de que hay usuarios nuevos de Pokémon GO quienes desean ampliar su conocimiento en el juego con fin de obtener los mejores resultados posibles. Por ello, se ha diseñado esta herramienta que ayuda al jugador a elaborar estrategias que le ayuden a crecer y mejorar su rendimiento en el.

Nuestro producto ayuda a mejorar la estrategia del usuario al manejar la información más requerida o relevante para ellos, de forma dinámica y gráfica. 

Para diseñar esta web nos basamos en las entrevistas que realizamos a jugadores habituales y nuevos de Pokémon GO indagando sobre sus problemas más frecuentes y preguntándoles como creían ellos que mejoraría su experiencia y desempeño al jugar.

Sus respuestas indicaron que necesitaban ver la información de pokemones presentada de cierta manera y sobre todo algunas características que ellos consideran más importantes para jugar mejor lo que se tradujo en nuestras historias de usuario.


![Image of players](/src/img/img-readme/players.jpg)

Para esta definición del producto se resuelven las siguientes preguntas:
1. ¿Quiénes son los principales usuarios de Pokedash? Principalmente, usuarios nuevos del juego Pokemon Go.
2. ¿Cuáles son los objetivos del usuario con respecto al producto? Conocer el detalle de cada pokémon para tomar desiciones estratégicas que optimicen su juego.
3. ¿Cuáles son los datos más importantes que debe mostrar en la interfaz y porqué? Debería poder visualizar cada uno de los pokemon y mostrar sus detalles como el nombre, su tipo, su huevo, sus debilidades, id, caramelos, entre otros. Además de filtro de tipo y huevos.   
4. ¿En qué momento o circunstancia se ve útil Pokedash? Cuando el usuario nuevo haya atrapado el pokemon, querrá saber más información del mismo y en pokedash podrá obtenerlo. Además, en la intefaz encontrará un filtro de tipo que le servirá cuando quiera conocer los posibles pokemon según tipo; y otro filtro que le ayude a saber qué pokemon puede eclosionar según el kilometraje del huevo. 
5. ¿Cómo resuelve, el producto, el problema del usuario? Pokedash es ese producto auxiliar de uno de los juegos estrellas que ayudará a cualquier jugador novato en convertirse en un gran maestro Pokémon.

## Entrevistas.
Las entrevistas fueron dirigidas a un público con poca experiencia en el juego; pero con interés de ser jugador y uno muy bueno. Se hicieron las siguientes preguntas al entrevistado:
1. ¿Alguna vez has jugado Pokemon GO!?
2. Como usuario/jugador, si hablamos en cuanto a algún nivel o gamer status, ¿cómo te consideras?
3. ¿Cúal es tu objetivo con el juego? ¿Qué buscas ser o hacer con Pokémon GO!?
4. ¿Qué necesitas para alcanzar ese objetivo? ¿Considerarías la información a detalle de cada Pokémon como herramienta para llegar a tu meta con respecto al juego?
5. ¿Cómo te gustaría que esa información sea mostrada en un dashboard para que sea lo más fácil, rápido y agradable posible de acceder?

## Historias de usuario.

```plain
Historia 1:

Como: Reciente usuario de Pokémon GO 
Quiero: Visualizar información de cada Pokémon 
Para: Tener una rápida capacitación, conocer la variedad e información básica y/o detalles de cada uno.
```

```plain
Historia 2:

Como: Jugador principainte de Pokémon GO
Quiero: Filtrar por tipo
Para: Tener en cuenta su clasificación y conocer qué posibles Pokémon puedo encontrar según el bioma y clima. 
```
```plain
Historia 3:

Como: Reciente usuario de Pokémon GO
Quiero: Poder filtrar por huevo (km) 
Para: Conocer la probabilidad de eclosión de cada Pokémon según la distancia. (km)
```

```plain
Historia 4

Como: Reciente usuario de Pokémon GO
Quiero: Ordenar por número ID 
Para Encontrar a mi Pokémon rápidamente.
```

## Proceso de diseño.

### Descubrimiento e investigación

![Descubrimiento e investigación](/src/img/img-readme/proceso_diseño_1.png)

Como muchos de nosotros seguramente ya sabemos, Pokémon GO fue un éxito sin precedentes durante su lanzamiento debido a que reunía la nostalgia de los fans de la franquicia en una jugabilidad sin precedentes a un nivel que solo Nintendo podría patrocinar.

El videojuego de descarga gratuita fue el juego revelación del 2016; teniendo acogida por público de varias generaciones y creando así un impacto en los menores que desconocían de uno de los animes más famosos y trascendentes hasta la actualidad para la generación que a día de hoy vienen a ser los jóvenes adultos de nuestra sociedad.

Desafortunadamente a pesar de sus millones de descargas, el 96% de los jugadores abandonó el barco luego de los primeros 4 meses, llegando a obtener una base de jugadores constantes del 4% de lo que una vez fue. Los grandes números que destacaban y anonadaban a toda la industria ha tenido un vacío en donde la cantidad de jugadores disminuyó y con ello la usabilidad de la app. Se cree que se debe a la falta de interactividad entre usuarios y la modalidad del juego en esos momentos: básicamente atrapar cuantos pokémon se pudiera, evolucionarlos y subirlos de nivel; sin la opción de batallar contra otro entrenador u otras que a la actualidad ya han sido implementadas.

Al tener esta funcionabilidad ya implementada actualmente, surge la necesidad de un usuario antiguo en re-conectarse o re-engancharse con el juego, pero se siente perdido por el tiempo que ha transcurrido sin usarlo, o de un jugador nuevo de Pokémon Go, el cual no sabe cómo hacer y optimizar el tiempo invertido en entender y optimizar su juego. 

### Sintesis y definición
![Descubrimiento e investigación](/src/img/img-readme/proceso_diseño_1.png)
### Problema a resolver: El poco conocimiento de Pokémon GO en algunos usuarios nuevos y antiguos y su relación con la falta de estrategias que optimicen su juego.

En esta fase usamos los datos coleccionados en la fase de investigación y descubrimiento buscando tendencias e insights valiosos para el desarrollo de Pokedash. Entendiendo los deseos y necesidades de nuestros usuarios, se desarrolló una plataforma simple y didactica en la cual muestre al usuario de manera ordenada, información más relevante acerca de cada Pokémon, además se colocaron filtros por Tipo y Huevo, la cual permita brindarle información concisa y relevante a nuestro usuario ayudando a mejorar su estrategia y habilidad en el juego.

### Ideación
![Ideación](/src/img/img-readme/ideación.png)
¡Se utilizaron sketches, y fluyeron las ideas! Se tuvo como propósito construir una web con diseño práctico, interfaz didáctica, fácil de usar y amigable, que permita al usuario acceder a la información relevante de una manera sencilla y sobre todo que cumpla con la funcionalidad y objetivo deseado, es decir, que ayude o contribuya a mejorar sus técnicas en el juego.

### Prototipado
![Prototipado](/src/img/img-readme/protitpado.png)

Se elaboró un prototipo práctico, se tuvo como finalidad cumplir con los siguientes objetivos:

- Muestra lista y/o tabla con datos y/o indicadores.
- Mostrar una lista al usuario con datos y/o indicadores relevantes
- Permitir al usuario filtrar por Tipo y Huevo para luego utilizar el conocimiento a su favor en las capturas de Pokémon.
- Permitir al usuario ordenar la data por uno o más campos (ID - Nombre Asc Desc)
- Contar con una interfaz agradable, práctica y fácil de usar.
- Que la funcionalidad sea del 100%
- Fácil. No hay nada donde tenga que iniciar sesión, y no hay ningún servicio nuevo al que tengan que unirse sus amigos o suscribirse.
- Didáctica
- Indicaciones de Uso
- Responsive

El primer prototipado en baja fidelidad pensó en una muy corta bienvenida y de frente pasar al dashboard con sus funcionalidades.

Se fue iterando en los siguientes prototipados de acuerdo a los test de usabilidad que se iban realizando, los cuales se decribirán líneas abajo. Como se puede observar varia en que se añada el botón flotante para los filtros, un buscador, íconos descriptivos, y estructura de la interfaz e información.

Primer Prototipo:

![Primer Prototipo](/src/img/img-readme/primerproto.png)

Segundo Prototipo (Escritorio): 

![Segundo Prototipo Escritorio](/src/img/img-readme/proto2.jpg)

Segundo Prototipo (Movil):

![Segundo Prototipo Movil](/src/img/img-readme/proto3.jpg)

Tercer Prototipo (Escritorio):

![Tercer Prototipo Escritorio](/src/img/img-readme/proto4.jpg)

Tercer Prototipo Movil:

![Tercer Prototipo Movil](/src/img/img-readme/proto5.jpg)

#### Prototipo de Alta Fidelidad:

El prototipado de alta fidelidad fue hecho en figma. Cuenta con un largo proceso de cambios gracias al feedback recibido, pero "e"n los detalles se encuentran las grandes maravillas" y gracias a ello creemos tener una muy bonita interfaz que satisfará al usuario en lo medido.

Pantalla de Bienvenida

![Alta Fidelidad - Pantalla de bienvenida](/src/img/img-readme/Desktop.png)

Pantalla General:

![Alta Fidelidad - Pantalla general](/src/img/img-readme/pantalla_general.png)

Pantalla Filtrar por:

![Alta Fidelidad - Pantalla general](/src/img/img-readme/pantalla_filtrar.png)

Pantalla Filtrar por tipo (Agua): 

![Alta Fidelidad - Pantalla general](/src/img/img-readme/filtro_agua.png)

Pantalla Filtrar por Huevo:
![Alta Fidelidad - Pantalla general](/src/img/img-readme/filtrar_huevos.png)


Pantalla Filtro de Huevo + Tipo Agua aplicado:
![Alta Fidelidad - Pantalla general](/src/img/img-readme/ha.png)


Pantalla Ordenar:
![Alta Fidelidad - Pantalla general](/src/img/img-readme/sort.png)

Link to ZEPLIT: [Pokedash](https://zpl.io/aByZ300)

### Planificación:

La planificación según los sprints fluyeron más de acuerdo al avance del producto que a metas fijas en sí. Cada semana se testeaba al menos una vez,lo que nos arrojaban pequeños cambios en la interfaz para una mejor experiencia y/o se descubrían bugs que limitaban al usuario en su búsqueda,y según cada feedback se buscaba mejorar el producto.

![Image of the us stories](/src/img/img-readme/us-stories.JPEG)

![Image of the us stories](/src/img/img-readme/us-stories2.JPEG)


### Test de usabilidad:
- 
