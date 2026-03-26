const QUESTIONS_DATA = {

  teoria: [
    {
      id: "T01",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22 & 22/23 & 23/24 & 24/25",
      pregunta: `<strong>A. Alternativas a Android – Parte 1:</strong><br>
Indica las alternativas existentes hoy en día a una app nativa dando una pequeña idea de en qué consiste cada una de ellas. Indica también la ventaja más destacada, específica de cada una de ellas.`,
      respuesta: `Las alternativas a una app nativa son:<br><br>
<strong>1. Apps Web:</strong> Se accede desde el navegador del dispositivo usando tecnologías web estándar (HTML, CSS, JavaScript). Ventaja destacada: <em>acceso universal y actualizaciones automáticas desde el servidor</em>, sin necesidad de instalación.<br><br>
<strong>2. Apps Híbridas:</strong> App web alojada dentro de un contenedor nativo (ej: Apache Cordova, Ionic Capacitor, PhoneGap). Se escribe en tecnologías web pero se instala como app nativa, pudiendo acceder a funcionalidades del hardware. Ventaja destacada: <em>multiplataforma con acceso a recursos del dispositivo</em> (cámara, GPS, contactos, etc.).<br><br>
<strong>3. Apps Cross-Platform (Flutter / Kotlin Multiplatform):</strong> Permiten escribir una base de código única que compila a código nativo para múltiples plataformas. Ventaja destacada: <em>rendimiento nativo con código compartido</em>, mayor eficiencia que híbridas y mejor experiencia de usuario.`
    },
    {
      id: "T02",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22",
      pregunta: `<strong>A. Alternativas a Android – Parte 2:</strong><br>
Dentro de las apps nativas, indica también las alternativas a una app Android, indicando los aspectos favorables y desfavorables más destacados de cada una de ellas.`,
      respuesta: `Las alternativas nativas a Android son:<br><br>
<strong>iOS (Objective-C / Swift):</strong><br>
✅ Favorables: App Store más grande, interfaz refinada, usuarios más fieles/gastos.<br>
❌ Desfavorables: Solo se puede desarrollar en Mac; apps solo instalables via App Store (muy restrictivo); requiere aprobación estricta para publicar.<br><br>
<strong>Android (Java / Kotlin):</strong><br>
✅ Favorables: Desarrollo multiplataforma (Mac, PC, Linux); instalación flexible (USB, email, web, Google Play); mercado creciente; Open Source; sin restricciones para apps corporativas.<br>
❌ Desfavorables: Fragmentación de dispositivos y versiones de API; ecosistema Google con dependencia de sus servicios.<br><br>
<strong>Kotlin Multiplatform (KMP):</strong><br>
✅ Favorables: Código de negocio compartido entre Android e iOS; rendimiento nativo; UI puede ser nativa o compartida con Compose Multiplatform.<br>
❌ Desfavorables: Ecosistema más reciente y en evolución.`
    },
    {
      id: "T03",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22 & 22/23",
      pregunta: `<strong>B. Gestión de recursos – Parte 1:</strong><br>
¿Qué dos buenas prácticas se han estudiado en clase relacionadas con los recursos que acompañan a un proyecto Android? Justifica qué beneficios aporta poner cada una de ellas en práctica.`,
      respuesta: `Las dos buenas prácticas sobre recursos en Android son:<br><br>
<strong>1ª Buena práctica: Externalizar recursos</strong> (separar recursos del código fuente).<br>
Los recursos (cadenas de texto, imágenes, layouts, etc.) se separan del código Kotlin/Java y se colocan en la carpeta <code>res/</code>.<br>
<em>Beneficio:</em> Se pueden mantener y modificar de forma independiente sin tocar el código. Favorece la internacionalización, el cambio de tema visual, y la mantenibilidad general del proyecto.<br><br>
<strong>2ª Buena práctica: Proporcionar recursos alternativos</strong> para configuraciones específicas del dispositivo.<br>
Se crean carpetas de recursos con calificadores (ej: <code>values-es</code>, <code>drawable-xhdpi</code>, <code>layout-land</code>) para adaptarse a diferentes configuraciones.<br>
<em>Beneficio:</em> Android selecciona automáticamente el recurso más apropiado en tiempo de ejecución según la configuración actual del dispositivo (idioma, densidad de pantalla, orientación, tamaño de pantalla, etc.), sin necesidad de código adicional.`
    },
    {
      id: "T04",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22 & 22/23",
      pregunta: `<strong>B. Gestión de recursos – Parte 2:</strong><br>
Relacionado con la primera buena práctica (externalizar recursos), ¿qué tipos de recursos recuerdas?`,
      respuesta: `Los principales tipos de recursos en un proyecto Android son:<br><br>
<strong>Recursos en la carpeta <code>res/</code>:</strong><br>
• <code>res/layout/</code> – Ficheros XML que definen la interfaz gráfica de las actividades.<br>
• <code>res/values/</code> – Ficheros XML con valores (strings, colores, dimensiones, estilos). El más importante es <code>strings.xml</code>.<br>
• <code>res/drawable/</code> – Imágenes (PNG, JPG, SVG vectoriales).<br>
• <code>res/mipmap/</code> – Iconos del lanzador de la app (para diferentes densidades).<br>
• <code>res/menu/</code> – Definición de menús.<br>
• <code>res/anim/</code> – Animaciones.<br>
• <code>res/raw/</code> – Ficheros de cualquier tipo (ej: audio).<br>
• <code>res/xml/</code> – Ficheros XML de propósito general.<br><br>
Se accede a ellos en código mediante la clase <code>R</code>: <code>R.&lt;tipo&gt;.&lt;nombre&gt;</code> (ej: <code>R.string.app_name</code>). En XML se usan como <code>@string/app_name</code>.`
    },
    {
      id: "T05",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22 & 22/23",
      pregunta: `<strong>B. Gestión de recursos – Parte 3:</strong><br>
Relacionado con la segunda buena práctica (proporcionar recursos alternativos), para hacer referencia a los recursos alternativos de un proyecto se utilizan calificadores específicos para cada configuración contemplada en la app. ¿Qué configuraciones y calificadores recuerdas?`,
      respuesta: `Los calificadores siguen el patrón: <code>&lt;tipo_recurso&gt;-&lt;calificador&gt;</code><br><br>
<strong>Configuraciones y calificadores más importantes:</strong><br>
• <strong>Densidad de pantalla</strong> (para drawables/iconos): <code>ldpi</code>, <code>mdpi</code>, <code>hdpi</code>, <code>xhdpi</code>, <code>xxhdpi</code>.<br>
  Ejemplo: <code>drawable-xhdpi</code>, <code>mipmap-hdpi</code>.<br><br>
• <strong>Idioma/Localización</strong> (para strings e iconos): código de idioma ISO 639 + opcional región.<br>
  Ejemplo: <code>values-es</code>, <code>values-ca</code>, <code>values-en-rUS</code>.<br><br>
• <strong>Orientación de pantalla</strong> (para drawables y layouts): <code>port</code> (portrait), <code>land</code> (landscape).<br>
  Ejemplo: <code>drawable-land</code>, <code>layout-land</code>.<br><br>
• <strong>Tamaño de pantalla</strong> (para layouts): <code>small</code>, <code>normal</code>, <code>large</code>, <code>xlarge</code>.<br>
  Ejemplo: <code>layout-large</code>.<br><br>
Se pueden combinar múltiples calificadores separándolos con guión: <code>drawable-en-rUS-land</code>.`
    },
    {
      id: "T06",
      exam: "REC 1r Parcial – Curso 20/21",
      pregunta: `<strong>B. Ciclo de vida de Activity – Parte 1 (versión 20/21):</strong><br>
Dibuja con detalle el esquema del ciclo de vida de una activity, en el que queden plasmados los métodos callback implicados, así como los posibles escenarios que se pueden producir.`,
      respuesta: `El ciclo de vida de una Activity tiene 3 bucles principales:<br><br>
<strong>• Entire Lifetime:</strong> desde <code>onCreate()</code> hasta <code>onDestroy()</code><br>
<strong>• Visible Lifetime:</strong> desde <code>onStart()</code> hasta <code>onStop()</code><br>
<strong>• Foreground Lifetime:</strong> desde <code>onResume()</code> hasta <code>onPause()</code><br><br>
<strong>Secuencia de callbacks:</strong><br>
<code>onCreate()</code> → <code>onStart()</code> → <code>onResume()</code> ← <em>RUNNING (estado estático)</em><br><br>
<strong>Estados estáticos:</strong><br>
• <em>Resumed</em>: Activity en primer plano, el usuario puede interactuar.<br>
• <em>Paused</em>: Parcialmente visible (cubierta por un diálogo), sin foco. Puede ser destruida por el sistema con poca memoria.<br>
• <em>Stopped</em>: Completamente oculta. Instancia y estado se conservan en memoria, pero es más propensa a ser destruida.<br><br>
<strong>Escenarios desde Paused:</strong><br>
→ Vuelve al primer plano: <code>onResume()</code><br>
→ Otra activity la cubre completamente: <code>onStop()</code><br>
→ Sistema la destruye: <code>onDestroy()</code><br><br>
<strong>Escenarios desde Stopped:</strong><br>
→ Usuario vuelve a la app: <code>onRestart()</code> → <code>onStart()</code> → <code>onResume()</code><br>
→ Activity finalizada: <code>onDestroy()</code>`
    },
    {
      id: "T07",
      exam: "REC 1r Parcial – Curso 20/21",
      pregunta: `<strong>B. Ciclo de vida de Activity – Parte 2 (versión 20/21):</strong><br>
Describe qué implica para la activity alcanzar el estado destruido. El método callback <code>onDestroy()</code> deberá realizar una serie de acciones especialmente indicadas para cuando se alcanza este estado. ¿Cuáles son este tipo de acciones? Pon un ejemplo.`,
      respuesta: `<strong>Alcanzar el estado Destroyed</strong> significa que la instancia de la Activity es completamente eliminada de memoria. Es el estado definitivo del ciclo de vida.<br><br>
<strong>Circunstancias que provocan la destrucción:</strong><br>
1. El usuario presiona el botón "atrás".<br>
2. La Activity ha finalizado su operación y se apaga.<br>
3. La Activity se destruye programáticamente con <code>finish()</code>.<br>
4. Cambio de configuración (rotación de pantalla, cambio de idioma) → el sistema la destruye y recreará.<br>
5. El sistema mata la app por necesitar más recursos.<br><br>
<strong>Acciones especialmente indicadas en <code>onDestroy()</code>:</strong><br>
• <strong>Dar de baja (unregister) un BroadcastReceiver</strong> dinámico que fue registrado en <code>onCreate()</code>. Esto evita fugas de memoria.<br>
• <strong>Detener y liberar hilos en segundo plano</strong> o recursos de larga duración creados en <code>onCreate()</code>.<br><br>
<strong>Ejemplo:</strong><br>
Si en <code>onCreate()</code> se registró un BroadcastReceiver dinámicamente con <code>registerReceiver()</code>, en <code>onDestroy()</code> se debe llamar a <code>unregisterReceiver()</code> para liberarlo.`
    },
    {
      id: "T08",
      exam: "REC 1r Parcial – Curso 20/21",
      pregunta: `<strong>B. Ciclo de vida de Activity – Parte 3 (versión 20/21):</strong><br>
¿Qué tipo de acciones no están especialmente indicadas para incluir en <code>onDestroy()</code>? ¿Por qué? Indica alguna acción de ejemplo en la que sea más apropiado recurrir a otro método callback del ciclo de vida, distinto al método <code>onDestroy()</code>.`,
      respuesta: `<strong>Acciones NO indicadas en <code>onDestroy()</code>:</strong><br><br>
No es el lugar adecuado para guardar datos críticos del usuario ni liberar la mayoría de los recursos, porque:<br>
• La mayoría de la limpieza ya debería haberse realizado en <code>onPause()</code> y <code>onStop()</code>.<br>
• <code>onDestroy()</code> no está garantizado: en condiciones de muy poca memoria, el sistema puede matar el proceso de la app <em>sin llamar a <code>onDestroy()</code></em>.<br><br>
<strong>Ejemplos de acciones y su callback más apropiado:</strong><br>
• <strong>Guardar datos no guardados del usuario</strong> (ej: texto escrito en un formulario): mejor en <code>onPause()</code>, ya que es el último callback garantizado antes de que la activity pueda ser destruida.<br>
• <strong>Liberar recursos relacionados con la visibilidad</strong> (ej: parar una animación, detener el acceso a la cámara): mejor en <code>onStop()</code> o <code>onPause()</code>.<br>
• <strong>Escribir en base de datos</strong> operaciones pesadas: mejor en <code>onStop()</code>, donde se pueden realizar operaciones más intensivas de CPU sin afectar la experiencia del usuario.`
    },
    {
      id: "T09",
      exam: "REC 1r Parcial – Curso 21/22 & 22/23 & 23/24 & 24/25",
      pregunta: `<strong>C. Ciclo de vida de Activity – Pregunta sobre estado detenido:</strong><br>
¿Qué acciones relacionadas con el ciclo de vida son recomendables para evitar perder el estado de la app cuando ésta pasa a estado detenido (método <code>onStop()</code>)?`,
      respuesta: `Cuando la app pasa a estado <em>Stopped</em>, las acciones recomendadas para no perder el estado son:<br><br>
<strong>1. Guardar datos persistentes en <code>onStop()</code>:</strong><br>
Realizar operaciones más pesadas de escritura en base de datos u otras formas de almacenamiento persistente. Por ejemplo, guardar el progreso del usuario, datos del formulario, etc.<br><br>
<strong>2. Usar <code>onSaveInstanceState()</code>:</strong><br>
Para preservar el estado de la UI ante recreaciones de la activity (rotación de pantalla, cambio de idioma). Guarda pares clave-valor en un Bundle que luego se puede recuperar en <code>onCreate()</code> o <code>onRestoreInstanceState()</code>.<br><br>
<strong>3. Usar ViewModel (método moderno):</strong><br>
Los datos almacenados en un ViewModel sobreviven a los cambios de configuración, ya que el ViewModel no se destruye cuando la Activity se recrea. Es la forma moderna y recomendada de gestionar el estado de la UI.<br><br>
<em>Nota:</em> El estado en memoria (variables miembro) se conserva mientras el proceso esté activo, pero si el sistema mata el proceso (estado Stopped prolongado), estos datos se pierden si no se han guardado persistentemente.`
    },
    {
      id: "T10",
      exam: "REC 1r Parcial – Curso 21/22 & 22/23",
      pregunta: `<strong>C. Ciclo de vida de Activity – Pregunta sobre <code>onPause()</code> – Parte 2:</strong><br>
¿Qué acciones son las que se recomienda realizar específicamente en el método <code>onPause()</code>? ¿Alguna de ellas es a modo preventivo? En caso afirmativo, especifica qué situaciones exactamente se trataría de prevenir, y de qué acciones concretas se trata (acciones supuestamente no resueltas en otros métodos callback del ciclo de vida).`,
      respuesta: `<strong>Acciones recomendadas en <code>onPause()</code>:</strong><br><br>
1. <strong>Detener animaciones u otras acciones en curso</strong> que consuman CPU.<br>
2. <strong>Liberar recursos del sistema</strong> (como sensores, GPS, cámara) que puedan afectar a la batería mientras la activity está en pausa.<br>
3. <strong>A modo preventivo: hacer commit de cambios no guardados</strong> para persistirlos de forma persistente.<br><br>
<strong>¿Qué se trata de prevenir?</strong><br>
Se trata de prevenir la <em>pérdida de datos críticos</em> en situaciones extremas donde el sistema podría destruir la activity sin llamar a otros métodos callback. Específicamente:<br>
• Si el sistema necesita memoria urgentemente, puede destruir la activity directamente desde el estado Paused sin llamar a <code>onStop()</code> ni <code>onDestroy()</code>.<br>
• Por tanto, si hay datos no guardados que <em>no han sido tratados en <code>onStop()</code></em>, deben guardarse en <code>onPause()</code>.<br><br>
<strong>Importante:</strong> <code>onPause()</code> debe ejecutarse <em>rápidamente</em> (es el último callback garantizado antes de que el usuario perciba la transición a otra activity). Las operaciones pesadas deben ir en <code>onStop()</code>.`
    },
    {
      id: "T11",
      exam: "REC 1r Parcial – Curso 21/22 & 22/23",
      pregunta: `<strong>C. Ciclo de vida de Activity – Parte 3 (onPause vs otros callbacks):</strong><br>
Indica alguna acción de ejemplo en la que sea más apropiado recurrir a otro método callback del ciclo de vida de la activity que al método <code>onPause()</code>. ¿Qué método sería más apropiado?`,
      respuesta: `<strong>Ejemplos de acciones más apropiadas en otro callback distinto a <code>onPause()</code>:</strong><br><br>
• <strong>Guardar datos en base de datos o ficheros (operaciones costosas):</strong><br>
  → Más apropiado en <code>onStop()</code>, ya que permite operaciones más intensivas de CPU sin bloquear la transición visual. <code>onPause()</code> debe ser rápido.<br><br>
• <strong>Liberar un BroadcastReceiver dinámico:</strong><br>
  → Más apropiado en <code>onDestroy()</code> si fue registrado en <code>onCreate()</code>, o en <code>onStop()</code> si fue registrado en <code>onStart()</code>.<br><br>
• <strong>Reinicializar recursos que se liberaron al dejar de ser visible</strong> (ej: reanudar animaciones, reconectar listeners de UI):<br>
  → Más apropiado en <code>onResume()</code> (el par de <code>onPause()</code>) o en <code>onStart()</code> (el par de <code>onStop()</code>).<br><br>
• <strong>Detener el playback de un MediaPlayer y liberar la instancia:</strong><br>
  → Más apropiado en <code>onStop()</code>, ya que la activity ya no es visible. En <code>onPause()</code> la activity puede seguir parcialmente visible.`
    },
    {
      id: "T12",
      exam: "REC 1r Parcial – Curso 23/24",
      pregunta: `<strong>B. Ciclo de vida de Activity – Representación en pirámide escalonada:</strong><br>
1. Dibuja la representación del ciclo de vida de activity basada en una pirámide escalonada.<br>
2. ¿Qué ideas quedan reflejadas en la representación basada en una pirámide escalonada para el estudio del ciclo de vida de activity? Explica qué significan y por qué son importantes de conocer por parte del desarrollador.<br>
3. ¿Cuáles son las principales garantías que debe ofrecer el desarrollador en sus apps a través de la gestión de los métodos callback del ciclo de vida?`,
      respuesta: `<strong>1. Pirámide escalonada (representación conceptual):</strong><br>
Los estados se apilan como escalones de una pirámide, de abajo a arriba:<br>
<code>Destroyed → Created → Started → Resumed (cima)</code><br>
Los callbacks de subida: <code>onCreate → onStart → onResume</code><br>
Los callbacks de bajada: <code>onPause → onStop → onDestroy</code><br><br>
<strong>2. Ideas reflejadas:</strong><br>
• <em>Simetría de callbacks:</em> Cada método de "subida" tiene su correspondiente de "bajada": <code>onCreate/onDestroy</code>, <code>onStart/onStop</code>, <code>onResume/onPause</code>. Los recursos creados en uno deben liberarse en su par.<br>
• <em>Duración de cada estado:</em> La cima (Resumed) es la que más interesa prolongar. Los estados inferiores son transitorios o de espera.<br>
• <em>Profundidad de destrucción:</em> Cuanto más abajo en la pirámide, más recursos se liberan. El sistema puede destruir la app en cualquier estado bajo la cima.<br><br>
<strong>3. Principales garantías del desarrollador:</strong><br>
• La app no falla si el usuario recibe una llamada o cambia de app.<br>
• No consume recursos del sistema cuando el usuario no la usa activamente.<br>
• No pierde el progreso del usuario si el sistema mata la app o se rota la pantalla.<br>
• Se recupera correctamente cuando el usuario vuelve a ella.`
    },
    {
      id: "T13",
      exam: "REC 1r Parcial – Curso 24/25",
      pregunta: `<strong>B. Plataforma Android:</strong><br>
¿Android es una plataforma libre? Explica con detalle qué aspectos cumple para ser considerado libre y/o cuáles para no serlo (si es el caso), así como las implicaciones derivadas de todos ellos. Indica también la licencia que tiene, e implicaciones de la misma.`,
      respuesta: `<strong>Android como plataforma libre:</strong><br><br>
<strong>Aspectos que SÍ la hacen libre/open source:</strong><br>
• Android Open Source Project (AOSP) está publicado bajo licencia <strong>Apache 2.0</strong> (licencia permisiva).<br>
• Garantiza libertades de uso, modificación y redistribución del software.<br>
• Mejora la mantenibilidad, seguridad y fomenta una comunidad sólida.<br>
• Permite herramientas de desarrollo multiplataforma.<br>
• Los fabricantes pueden usarlo libremente, lo que abarata los dispositivos.<br><br>
<strong>Aspectos que la hacen NO completamente libre:</strong><br>
• Los servicios de Google (Gmail, Maps, Play Store, etc.) son gratuitos pero <em>no son software libre</em>. No se conoce qué tratamiento hacen de los datos privados.<br>
• Dependencia de Google: requiere cuenta Google, intercambio constante de datos con Google, envío de localización por defecto.<br>
• En la práctica, el acceso al código fuente es básico e incompleto para las versiones más recientes.<br><br>
<strong>Implicación de la licencia Apache 2.0:</strong><br>
Permite usar, modificar y redistribuir el software (incluso en productos comerciales) sin obligar a publicar las modificaciones. A diferencia de GPL, no es "copyleft".`
    },
    {
      id: "T14",
      exam: "Examen 1r Parcial – Curso 24/25",
      pregunta: `<strong>B. Android Runtime:</strong><br>
Indica la diferencia principal que introdujo la máquina virtual de Android ART sobre su predecesora, Dalvik. Indica las ventajas e inconvenientes que supone esta novedad.`,
      respuesta: `<strong>Diferencia principal: Compilación AOT (Ahead-Of-Time)</strong><br><br>
• <strong>Dalvik:</strong> Usaba compilación JIT (Just-In-Time): compilaba el código bytecode (.dex) a código nativo <em>durante la ejecución</em> de la app, cada vez que se ejecutaba.<br><br>
• <strong>ART:</strong> Introduce la compilación <strong>AOT (Ahead-Of-Time)</strong>: compila el código de la app a código máquina nativo (formato OAT) en el momento de la <em>instalación</em> de la app en el dispositivo.<br><br>
<strong>Ventajas de ART/AOT:</strong><br>
✅ Mayor rendimiento en ejecución (el código ya está compilado, no hay overhead de compilación en tiempo de ejecución).<br>
✅ Menor consumo de batería durante el uso de la app.<br>
✅ Ejecución más fluida y rápida de la app.<br><br>
<strong>Inconvenientes de ART/AOT:</strong><br>
❌ La instalación de la app es más lenta (necesita compilar todo el código).<br>
❌ Ocupa más espacio en disco (se almacena el código compilado).<br><br>
<em>Nota:</em> ART es compatible con Dalvik (usa el mismo formato bytecode .dex). Desde Android 7, se usa compilación híbrida (AOT + JIT + interpretación).`
    },
    {
      id: "T15",
      exam: "Examen 1r Parcial – Curso 24/25",
      pregunta: `<strong>C. Ciclo de vida de activity – Estado Stopped y onDestroy():</strong><br>
3. ¿Qué implicaciones tiene que una Activity esté en estado detenido (stopped)?<br>
4. Pon un ejemplo de acción adecuada a realizar en el método <code>onDestroy()</code>. ¿Por qué es conveniente incluirlo en este método callback?`,
      respuesta: `<strong>3. Implicaciones del estado Stopped:</strong><br>
• La activity está activa pero <em>no está en primer plano</em> (completamente oculta por otra activity).<br>
• No puede ejecutar ningún código.<br>
• La instancia y toda su información de estado se conserva en memoria (variables miembro, etc.).<br>
• Es más probable que el sistema la destruya para liberar recursos (más que en estado Paused).<br>
• Si el usuario navega de vuelta, se invoca <code>onRestart()</code> → <code>onStart()</code> → <code>onResume()</code>.<br>
• Causas: llamada de teléfono, el usuario presiona Home, cambio a otra app, el dispositivo duerme.<br><br>
<strong>4. Ejemplo de acción en <code>onDestroy()</code> y por qué:</strong><br>
<strong>Ejemplo:</strong> Llamar a <code>unregisterReceiver(myReceiver)</code> para dar de baja un BroadcastReceiver que fue registrado dinámicamente en <code>onCreate()</code>.<br><br>
<strong>Por qué en <code>onDestroy()</code>:</strong><br>
Porque la pareja natural de <code>onCreate()</code> es <code>onDestroy()</code>. Los recursos creados al inicio del ciclo de vida completo de la activity (Entire Lifetime) deben liberarse al final de ese mismo ciclo. Además, si hay hilos en segundo plano creados en <code>onCreate()</code>, también deben detenerse aquí para evitar fugas de memoria.`
    },
    {
      id: "T16",
      exam: "Examen 1r Parcial – Curso 23/24 & 22/23",
      pregunta: `<strong>A. Desarrollo móvil – Opciones Cross-Platform:</strong><br>
¿Qué otras opciones (dos o más) existen hoy en día para el desarrollo de apps móviles, más allá de apps nativas, apps web y app híbridas? ¿Cuáles son los aspectos que distinguen a esta otra categoría de las apps híbridas, y que las convierte en una opción atractiva? ¿Qué elemento/s son clave para conseguir dichas ventajas?<br>
Indica los puntos que tienen en común entre sí las opciones mencionadas en clase de esta categoría, así como también sus puntos distintivos.`,
      respuesta: `<strong>La categoría: Apps Cross-Platform (nativas compiladas)</strong><br><br>
<strong>Opciones:</strong><br>
• <strong>Flutter</strong> (Google): usa Dart, compilado a nativo para Android, iOS, web y escritorio.<br>
• <strong>Kotlin Multiplatform (KMP)</strong> (JetBrains): usa Kotlin, compila a nativo para iOS, Android y otras plataformas sin VM.<br><br>
<strong>Diferencias con apps híbridas:</strong><br>
• Las híbridas son apps web en un contenedor nativo → bajo rendimiento, UI no nativa.<br>
• Cross-platform compila a <em>código nativo</em> → rendimiento nativo real, mejor UX.<br><br>
<strong>Elemento clave:</strong> El compilador que traduce el código compartido a código máquina nativo para cada plataforma.<br><br>
<strong>Puntos en común (Flutter y KMP):</strong><br>
✅ Código base compartido (reducción de duplicidad).<br>
✅ Rendimiento nativo.<br>
✅ Se dirigen a Android e iOS.<br><br>
<strong>Puntos distintivos:</strong><br>
• <em>Flutter:</em> "write once, run anywhere" para la UI (widgets propios de Flutter). La UI puede no sentirse 100% nativa.<br>
• <em>KMP:</em> Comparte lógica de negocio pero permite UI nativa por plataforma. Con Compose Multiplatform se puede también compartir la UI. La UI se siente más nativa.`
    },
    {
      id: "T17",
      exam: "Examen 1r Parcial – Curso 23/24",
      pregunta: `<strong>B. El fichero AndroidManifest:</strong><br>
2. Indica cuál es la/s misión/es del archivo AndroidManifest.xml, que justifican su importancia.<br>
3. ¿Qué indica el tag <code>&lt;data&gt;</code> en la declaración de una componente (e.g. en una activity)? ¿Qué valores puede tener? Pon un ejemplo explicando qué información proporciona.`,
      respuesta: `<strong>2. Misiones del AndroidManifest.xml:</strong><br>
Es el fichero de configuración esencial de toda app Android. Sus misiones son:<br>
• <strong>Declarar todos los componentes</strong> de la app (Activities, Services, BroadcastReceivers, ContentProviders).<br>
• <strong>Declarar los permisos</strong> que la app necesita (acceso a internet, contactos, cámara, etc.).<br>
• <strong>Declarar las capacidades hardware y software</strong> requeridas (filtrado en Google Play con <code>&lt;uses-feature&gt;</code>).<br>
• <strong>Especificar las API mínima y objetivo</strong> (min/targetSdkVersion, aunque hoy en <code>build.gradle</code>).<br>
• <strong>Declarar la actividad principal</strong> (MAIN action + LAUNCHER category) y los intent-filters de cada componente.<br><br>
<strong>3. El tag <code>&lt;data&gt;</code>:</strong><br>
Dentro de un <code>&lt;intent-filter&gt;</code>, indica el <em>tipo de datos</em> que el componente puede manejar. Se expresa:<br>
• Como un <strong>MIME type</strong>: <code>android:mimeType="image/*"</code><br>
• Como una <strong>URI</strong> con scheme: <code>android:scheme="http"</code>, <code>android:scheme="geo"</code><br>
• Combinación de ambos.<br><br>
<strong>Ejemplo:</strong><br>
<code>&lt;data android:scheme="http" /&gt;</code><br>
Indica que la activity puede manejar URIs con el esquema HTTP (como un navegador web). Si una app lanza un implicit intent con una URL, esta activity aparecerá en el chooser.`
    },
    {
      id: "T18",
      exam: "Examen 1r Parcial – Curso 21/22 – Pregunta 1C",
      pregunta: `<strong>C. Ciclo de vida de activity (versión examen ordinario 21/22):</strong><br>
6. ¿Qué transiciones entre estados (o transición de estado a alguna otra circunstancia concreta), a los que se hizo referencia en clase, no quedan reflejados en la representación detallada del ciclo de vida de activity (la que incluye los tres posibles bucles del ciclo de vida)? Se pide únicamente mencionarlos.<br>
8. ¿Qué particularidades tiene el método <code>onCreate()</code>?`,
      respuesta: `<strong>6. Transiciones no reflejadas en la representación detallada:</strong><br>
• La posibilidad de que el sistema <strong>mate el proceso de la app directamente</strong> sin llamar a <code>onDestroy()</code> (en condiciones de memoria extremadamente baja desde estado Paused o Stopped).<br>
• La <strong>recreación de la Activity</strong> (onDestroy seguido de onCreate) ante cambios de configuración como la rotación de pantalla o cambio de idioma, que en el diagrama se muestra como una flecha que va de Destroyed directamente de vuelta a Created.<br><br>
<strong>8. Particularidades de <code>onCreate()</code>:</strong><br>
• Se llama <strong>solo una vez</strong> durante el ciclo de vida completo de la instancia de la Activity (salvo recreación).<br>
• Es el lugar donde se debe realizar la <strong>inicialización básica</strong>: establecer la interfaz de usuario (<code>setContentView()</code> o <code>setContent { }</code>), declarar variables miembro, vincular datos, etc.<br>
• Recibe un <strong>Bundle</strong> (<code>savedInstanceState</code>) que puede contener el estado guardado previamente (si la activity fue destruida y recreada). Si es la primera vez, el Bundle es <em>null</em>.<br>
• <strong>Siempre debe llamarse a <code>super.onCreate()</code></strong> como primera línea.`
    },
    {
      id: "T19",
      exam: "Examen 1r Parcial – Curso 21/22 – Pregunta 1B",
      pregunta: `<strong>B. Componente ContentProvider:</strong><br>
1. ¿Qué propósito tiene este tipo de componente? ¿Por qué resulta interesante optar por un ContentProvider para resolver dicho propósito? Pon algún ejemplo conocido de ContentProvider.<br>
2. Indica las particularidades de la misma, las cuales al mismo tiempo suponen una ventaja para el desarrollador.<br>
3. ¿Qué atributo del elemento <code>&lt;provider/&gt;</code> en su declaración en el AndroidManifest se utiliza para dar a conocer la Uri de acceso?`,
      respuesta: `<strong>1. Propósito del ContentProvider:</strong><br>
Permite <strong>compartir datos entre diferentes aplicaciones</strong> de forma controlada y segura, sin desvelar el mecanismo interno de almacenamiento (SQLite, ficheros, etc.).<br>
Es interesante porque ofrece una <em>interfaz estándar</em> para acceder a datos, independientemente de cómo estén almacenados.<br>
<strong>Ejemplos conocidos:</strong> Contactos del dispositivo (<code>ContactsContract</code>), Galería de imágenes (<code>MediaStore</code>), Calendario, SMS.<br><br>
<strong>2. Particularidades / ventajas:</strong><br>
• <strong>Abstracción del almacenamiento:</strong> Otras apps no necesitan saber si los datos están en SQLite, ficheros, o en red.<br>
• <strong>API estándar uniforme:</strong> Siempre se accede con URIs y métodos CRUD (<code>query</code>, <code>insert</code>, <code>update</code>, <code>delete</code>).<br>
• <strong>Control de permisos:</strong> El desarrollador puede controlar qué apps tienen acceso de lectura/escritura.<br>
• Facilita la integración con los widgets del sistema (ej: CursorAdapter, ListView).<br><br>
<strong>3. Atributo para la URI de acceso:</strong><br>
<code>android:authorities</code><br>
Ejemplo: <code>&lt;provider android:name=".MyProvider" android:authorities="com.example.myapp.provider" /&gt;</code>`
    },
    {
      id: "T20",
      exam: "Examen 1r Parcial – Curso 21/22",
      pregunta: `<strong>C. Ciclo de vida de activity – Recreación:</strong><br>
1. ¿En qué consiste una situación de recreación de una activity? Indica las distintas circunstancias que pueden provocar una situación de este tipo. ¿Cuáles son las posibles consecuencias?<br>
2. Para evitar ese tipo de consecuencias, ¿qué valores conviene guardar en los casos de recreación?<br>
3. ¿De qué forma debe gestionarse a nivel de código? Proporciona todos los detalles necesarios, indicando de qué forma: a) se guardan los valores; y b) se restauran dichos valores.`,
      respuesta: `<strong>1. Recreación de una Activity:</strong><br>
La recreación ocurre cuando el sistema llama a <code>onDestroy()</code> seguido inmediatamente de <code>onCreate()</code> sobre la misma activity. Circunstancias:<br>
• <strong>Cambio de configuración:</strong> rotación de pantalla, cambio de idioma, cambio de teclado disponible.<br>
• <strong>El sistema mata la app</strong> por falta de memoria y el usuario navega de vuelta a ella.<br>
<strong>Consecuencias:</strong> Se pierde el estado de la UI (texto escrito, posición de scroll, datos cargados) si no se gestiona correctamente.<br><br>
<strong>2. Valores a guardar:</strong><br>
Datos transitorios de la UI: texto introducido en campos de texto, posición de scroll, estado de selección, datos calculados que no provienen de almacenamiento persistente.<br>
<strong>Ejemplo:</strong> Si el usuario escribió un nombre en un EditText, ese valor debe guardarse.<br><br>
<strong>3. Gestión en código:</strong><br>
<strong>a) Guardar:</strong> Sobreescribir <code>onSaveInstanceState(outState: Bundle)</code> y añadir pares clave-valor:<br>
<code>outState.putString("KEY_TEXT", editText.text.toString())</code><br><br>
<strong>b) Restaurar (dos alternativas):</strong><br>
• En <code>onCreate(savedInstanceState)</code>: comprobar si el bundle no es null y recuperar:<br>
  <code>savedInstanceState?.getString("KEY_TEXT")?.let { editText.setText(it) }</code><br>
• En <code>onRestoreInstanceState(savedInstanceState)</code>: siempre recibe un Bundle no nulo.`
    }
  ],

 fill_in_blanks: [
    {
      id: "F02",
      exam: "REC 1r Parcial – API moderna (Activity Result) – Pregunta Intents",
      pregunta: `<strong>Intents implícitos (API moderna) – Completa las líneas de código incompletas:</strong><br><br>
El siguiente código utiliza la nueva Activity Result API para lanzar un intent implícito y gestionar el resultado.<br>
Completa TODOS los espacios en blanco:<br><br>
<pre>
ActivityResultLauncher<Intent> ___[1]___ = registerForActivityResult(
        new ___[2]___(),
        result -> {
            if (result.___[3]___() == RESULT_OK) {
                Intent data = result.___[4]___();
                if (data != null) {
                    Uri uImage = data.___[5]___();
                    if (uImage != null) {
                        selectedImage.___[6]___(uImage);
                    }
                }
            }
        }
);

@Override
public void onClick(View v) {
    Intent in;

    switch (v.getId()) {
        case R.id.button1:
            in = new Intent(Intent.___[7]___,
                    android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
            ___[1]___.___[8]___(in);
            break;
    }
}
</pre>`,
      respuesta: `<strong>Solución:</strong><br>
<strong>[1]</strong> <code>imageLauncher</code><br>
<strong>[2]</strong> <code>ActivityResultContracts.StartActivityForResult</code><br>
<strong>[3]</strong> <code>getResultCode</code><br>
<strong>[4]</strong> <code>getData</code><br>
<strong>[5]</strong> <code>getData</code><br>
<strong>[6]</strong> <code>setImageURI</code><br>
<strong>[7]</strong> <code>ACTION_PICK</code><br>
<strong>[8]</strong> <code>launch</code><br><br>

<strong>Código completo:</strong><br>
<pre>
ActivityResultLauncher<Intent> imageLauncher = registerForActivityResult(
        new ActivityResultContracts.StartActivityForResult(),
        result -> {
            if (result.getResultCode() == RESULT_OK) {
                Intent data = result.getData();
                if (data != null) {
                    Uri uImage = data.getData();
                    if (uImage != null) {
                        selectedImage.setImageURI(uImage);
                    }
                }
            }
        }
);

@Override
public void onClick(View v) {
    Intent in;

    switch (v.getId()) {
        case R.id.button1:
            in = new Intent(Intent.ACTION_PICK,
                    android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
            imageLauncher.launch(in);
            break;
    }
}
</pre>`
    }
]
    },
    {
      id: "F02",
      exam: "Examen 1r Parcial – Curso 23/24 – Pregunta 2",
      pregunta: `<strong>Obteniendo resultados de actividades (Kotlin / ActivityResultContracts):</strong><br><br>
Completa los espacios en blanco del siguiente código:<br><br>
<pre>
// Línea 39:
startForResult = registerForActivityResult(ActivityResultContracts.___[1]___()
{ result: ActivityResult ->
    // Línea 41:
    if (result.resultCode == Activity.___[2]___) {
        // Línea 42:
        val intent = result.___[3]___
        // Línea 44:
        intent?.getStringExtra(name: "TEXT")?.let { ___[4]___.setGreetingMssg(it) }
        ed1.text.clear()
        ed2.text.clear()
        ed1.requestFocus()
    }
}
</pre>`,
      respuesta: `<strong>Solución:</strong><br>
<strong>[1]</strong> <code>StartActivityForResult</code><br>
<strong>[2]</strong> <code>RESULT_OK</code><br>
<strong>[3]</strong> <code>data</code><br>
<strong>[4]</strong> Un objeto miembro de la Activity (ViewModel o similar). En la línea 44, el tipo de componente es un <strong>ViewModel</strong> (Jetpack Architecture Component). La declaración sería algo como:<br>
<code>private val viewModel: MyViewModel by viewModels()</code><br><br>
<strong>Código completo:</strong><br>
<pre>
startForResult = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result: ActivityResult ->
    if (result.resultCode == Activity.RESULT_OK) {
        val intent = result.data
        intent?.getStringExtra("TEXT")?.let { viewModel.setGreetingMssg(it) }
        ed1.text.clear()
        ed2.text.clear()
        ed1.requestFocus()
    }
}
</pre>`
    },
    {
      id: "F03",
      exam: "REC 1r Parcial – Curso 24/25 – Pregunta 3a",
      pregunta: `<strong>Intents implícitos – Enviar un SMS al número 666666666:</strong><br><br>
Completa el siguiente código para enviar un SMS al número 666666666.<br>
El hueco grande puede consistir en una única línea de código, o bien de tres líneas. ¡Solo se pide resolverlo de una forma!<br><br>
<pre>
intent = Intent(Intent.___[1]___)

___HUECO GRANDE___

intent.type = ___[2]___
intent.putExtra(name: "Intent.EXTRA_TEXT", value: "This is my text to send")
startActivity(intent)
</pre>`,
      respuesta: `<strong>Solución (opción con URI directa - 1 línea en el hueco):</strong><br>
<strong>[1]</strong> <code>ACTION_SENDTO</code><br>
<strong>[2]</strong> <code>"vnd.android-dir/mms-sms"</code> (o en algunos casos se omite el type)<br><br>
<strong>Hueco grande - opción 1 (una sola línea):</strong><br>
<code>intent.data = Uri.parse("smsto:666666666")</code><br><br>
<strong>Hueco grande - opción 2 (tres líneas):</strong><br>
<code>val phoneNumber = "666666666"</code><br>
<code>val uri = Uri.parse("smsto:$phoneNumber")</code><br>
<code>intent.data = uri</code><br><br>
<strong>Código completo:</strong><br>
<pre>
intent = Intent(Intent.ACTION_SENDTO)
intent.data = Uri.parse("smsto:666666666")
intent.type = "vnd.android-dir/mms-sms"
intent.putExtra("sms_body", "This is my text to send")
startActivity(intent)
</pre>`
    },
    {
      id: "F04",
      exam: "REC 1r Parcial – Curso 24/25 – Pregunta 3b",
      pregunta: `<strong>Intents implícitos – Obtener un contacto de la agenda (Kotlin):</strong><br><br>
Completa el siguiente código para obtener un contacto de la agenda de contactos en un EditText (editT). El método <code>showContact()</code> es el invocado al pulsar el botón.<br><br>
<pre>
lateinit var contactsForResult: ___[1]___&lt;Void?&gt;

contactsForResult = registerForActivityResult(ActivityResultContracts.___[2]___()
{ it: Uri?
    ___[3]___
        editT.setText(retrieveContactName(___[4]___))
}

private fun showContact() {
    Toast.makeText(context: this, getString(R.string.opcion9), Toast.LENGTH_LONG).show()
    contactsForResult.___[5]___
}
</pre>`,
      respuesta: `<strong>Solución:</strong><br>
<strong>[1]</strong> <code>ActivityResultLauncher</code><br>
<strong>[2]</strong> <code>PickContact</code><br>
<strong>[3]</strong> <code>if (it != null)</code><br>
<strong>[4]</strong> <code>it</code> (la Uri del contacto seleccionado)<br>
<strong>[5]</strong> <code>launch(null)</code> (PickContact no necesita input, se lanza con null)<br><br>
<strong>Código completo:</strong><br>
<pre>
lateinit var contactsForResult: ActivityResultLauncher&lt;Void?&gt;

contactsForResult = registerForActivityResult(ActivityResultContracts.PickContact()
) { it: Uri? ->
    if (it != null) {
        editT.setText(retrieveContactName(it))
    }
}

private fun showContact() {
    Toast.makeText(this, getString(R.string.opcion9), Toast.LENGTH_LONG).show()
    contactsForResult.launch(null)
}
</pre>`
    },
    {
      id: "F05",
      exam: "Examen 1r Parcial – Curso 22/23 – Pregunta 2b (Kotlin)",
      pregunta: `<strong>Intents implícitos – Obtener y mostrar un contacto (versión Kotlin completa):</strong><br><br>
Completa el siguiente código para obtener y mostrar un contacto de la agenda de contactos en un EditText (editT). Se supone que <code>retrieveContactName()</code> extrae el nombre del contacto.<br><br>
<pre>
lateinit var contactsForResult: ___[1]___&lt;Void?&gt;

contactsForResult = registerForActivityResult(ActivityResultContracts.___[2]___()
) { it: Uri?
    ___[3]___
        editT.setText(retrieveContactName(___[4]___))
}

private fun showContact() {
    Toast.makeText(context: this, getString(R.string.opcion9), Toast.LENGTH_LONG).show()
    contactsForResult.___[5]___
}
</pre>`,
      respuesta: `<strong>Solución idéntica a F04:</strong><br>
<strong>[1]</strong> <code>ActivityResultLauncher</code><br>
<strong>[2]</strong> <code>PickContact</code><br>
<strong>[3]</strong> <code>if (it != null)</code><br>
<strong>[4]</strong> <code>it</code><br>
<strong>[5]</strong> <code>launch(null)</code><br><br>
<strong>Código completo:</strong><br>
<pre>
lateinit var contactsForResult: ActivityResultLauncher&lt;Void?&gt;

contactsForResult = registerForActivityResult(ActivityResultContracts.PickContact()) { it: Uri? ->
    if (it != null) {
        editT.setText(retrieveContactName(it))
    }
}

private fun showContact() {
    Toast.makeText(this, getString(R.string.opcion9), Toast.LENGTH_LONG).show()
    contactsForResult.launch(null)
}
</pre>`
    },
    {
      id: "F06",
      exam: "Examen 1r Parcial – Curso 22/23 – Pregunta 2c (ACTION_PICK genérico)",
      pregunta: `<strong>ACTION_PICK genérico – Mostrar texto obtenido de otra activity en un EditText:</strong><br><br>
Completa el siguiente código encargado de mostrar en un EditText (editT) el texto obtenido a partir de otra app o activity invocada a través de un ACTION_PICK. El método <code>ownPickText()</code> es el invocado al pulsar el botón.<br><br>
<pre>
private lateinit var startForResult: ActivityResultLauncher&lt;___[1]___&gt;

startForResult = registerForActivityResult(ActivityResultContracts.___[2]___()
) { result: ActivityResult ->
    if (result.resultCode == Activity.RESULT_OK) {
        val intent = result.___[3]___
        if (intent != null) {
            editT.setText(intent.___[4]___(name: "MESSAGE"))
        }
    }
}

private fun ownPickText() {
    Toast.makeText(context: this, getString(R.string.opcion10), Toast.LENGTH_LONG).show()
    val intent = Intent(Intent.ACTION_PICK)
    startForResult.___[5]___
}
</pre>`,
      respuesta: `<strong>Solución:</strong><br>
<strong>[1]</strong> <code>Intent</code> (StartActivityForResult toma Intent como input)<br>
<strong>[2]</strong> <code>StartActivityForResult</code><br>
<strong>[3]</strong> <code>data</code><br>
<strong>[4]</strong> <code>getStringExtra</code><br>
<strong>[5]</strong> <code>launch(intent)</code><br><br>
<strong>Código completo:</strong><br>
<pre>
private lateinit var startForResult: ActivityResultLauncher&lt;Intent&gt;

startForResult = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result: ActivityResult ->
    if (result.resultCode == Activity.RESULT_OK) {
        val intent = result.data
        if (intent != null) {
            editT.setText(intent.getStringExtra("MESSAGE"))
        }
    }
}

private fun ownPickText() {
    Toast.makeText(this, getString(R.string.opcion10), Toast.LENGTH_LONG).show()
    val intent = Intent(Intent.ACTION_PICK)
    startForResult.launch(intent)
}
</pre>`
    },
    {
      id: "F07",
      exam: "Examen 1r Parcial – Curso 21/22 – Pregunta 2",
      pregunta: `<strong>Intents explícitos para obtener resultado – Activity2 (Java):</strong><br><br>
En la MiniActiv-2 hay dos activities: saludo (MainActivity) y despedida (Activity2). Activity2 debe retornar un String a MainActivity.<br><br>
Se presentan 4 opciones de código para Activity2. ¿Cuál es la correcta?<br><br>
<pre>
// Opción 1:
Intent intent = new Intent();
intent.putExtra(name: "TEXT", ss);
setResult(RESULT_OK, intent);

// Opción 2:
Intent intent = new Intent();
intent.putExtra(name: "TEXT", ss);
setResult(RESULT_OK, intent);
finish();

// Opción 3:
Intent intent = new Intent(packageContext: this, MainActivity.class);
intent.putExtra(name: "TEXT", ss);
setResult(RESULT_OK, intent);
startActivity(intent);

// Opción 4:
Intent intent = new Intent(packageContext: this, MainActivity.class);
intent.putExtra(name: "TEXT", ss);
setResult(RESULT_OK, intent);
startActivity(intent);
finish();
</pre>
a. ¿Cuál de ellas es la correcta para retornar el resultado a MainActivity?<br>
b. ¿En qué parte de Activity2 se encontrará dicho código?<br>
d. ¿Qué efecto producen en la ejecución el resto de las opciones?`,
      respuesta: `<strong>a) La opción correcta es la OPCIÓN 2.</strong><br><br>
Pasos correctos para retornar resultado:<br>
1. Crear un Intent vacío (sin especificar destino).<br>
2. Añadir el resultado como Extra.<br>
3. Llamar a <code>setResult(RESULT_OK, intent)</code>.<br>
4. Llamar a <code>finish()</code> para cerrar Activity2 y volver a MainActivity.<br><br>
<strong>b) Localización del código:</strong><br>
Se encontrará en el método que gestiona el clic del botón "GO BACK" en Activity2. La cabecera del método:<br>
<code>override fun onClick(v: View) { ... }</code> o dentro del lambda del botón en Compose.<br><br>
<strong>d) Efectos del resto de opciones:</strong><br>
• <em>Opción 1:</em> Falta <code>finish()</code>. Activity2 no se cierra, el usuario se queda en ella. MainActivity no recibe el resultado hasta que Activity2 se cierre.<br>
• <em>Opción 3:</em> Crea un intent explícito hacia MainActivity y lanza <code>startActivity()</code>. Esto crea una <em>nueva instancia</em> de MainActivity en la pila (back stack). Se acumulan activities en la pila. No se usa el mecanismo de resultado.<br>
• <em>Opción 4:</em> Igual que la 3, pero además llama a <code>finish()</code>. Se destruye Activity2 y se crea una nueva MainActivity en lugar de volver a la existente. Se pierden los datos de la MainActivity original.`
    },
    {
      id: "F08",
      exam: "Examen 1r Parcial – Curso 22/23 – Pregunta 2a",
      pregunta: `<strong>Enviar un SMS – Completa el código (Kotlin, versión ACTION_SENDTO):</strong><br><br>
Completa el código siguiente para enviar un SMS al número 666666666.<br>
El hueco grande puede ser una o tres líneas. ¡Solo se pide una forma!<br><br>
<pre>
intent = Intent(Intent.___[1]___)

___HUECO GRANDE___

intent.type = ___[2]___
intent.putExtra(name: "Intent.EXTRA_TEXT", value: "This is my text to send")
startActivity(intent)
</pre>`,
      respuesta: `<strong>Solución:</strong><br>
<strong>[1]</strong> <code>ACTION_SENDTO</code><br>
<strong>[2]</strong> <code>"vnd.android-dir/mms-sms"</code><br><br>
<strong>Hueco grande - opción 1 línea:</strong><br>
<code>intent.data = Uri.parse("smsto:666666666")</code><br><br>
<strong>Hueco grande - opción 3 líneas:</strong><br>
<code>val phoneNumber = "666666666"</code><br>
<code>val smsUri = Uri.parse("smsto:$phoneNumber")</code><br>
<code>intent.data = smsUri</code><br><br>
<strong>Código completo:</strong><br>
<pre>
intent = Intent(Intent.ACTION_SENDTO)
intent.data = Uri.parse("smsto:666666666")
intent.type = "vnd.android-dir/mms-sms"
intent.putExtra("sms_body", "This is my text to send")
startActivity(intent)
</pre>`
    },
    {
      id: "F09",
      exam: "Examen 1r Parcial – Curso 24/25 – Pregunta 5",
      pregunta: `<strong>Obteniendo resultados de activities propias – MiniActiv-5 (Kotlin Compose):</strong><br><br>
El siguiente es el @Composable principal de la segunda activity (despedida), que muestra el mensaje y un botón para retornar a la activity del saludo.<br>
Rellena el hueco correspondiente al botón para navegar de vuelta retornando el mensaje de despedida (<code>farewallMssg</code>):<br><br>
<pre>
@Composable
fun Farewall(mess: String?, rep: Int, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var farewallMssg = ""
    if (rep < 1) farewallMssg = stringResource(R.string.defaultfarew)
    else {
        for (i in 1 .. rep) { farewallMssg += mess }
    }
    Column {
        Text(text = farewallMssg, modifier = modifier.padding(vertical = 24.dp))
        ElevatedButton(
            modifier = Modifier.padding(vertical = 34.dp),
            elevation = ButtonDefaults.elevatedButtonElevation(5.dp),
            onClick = {
                ___HUECO___
            }) {
            Text(stringResource(R.string.boton2))
        }
    }
}
</pre>
Explica una a una las líneas que has escrito y el motivo de hacerlo así.`,
      respuesta: `<strong>Solución del hueco (onClick):</strong><br>
<pre>
val resultIntent = Intent()
resultIntent.putExtra("MESSAGE", farewallMssg)
(context as Activity).setResult(Activity.RESULT_OK, resultIntent)
(context as Activity).finish()
</pre><br>
<strong>Explicación línea por línea:</strong><br>
1. <code>val resultIntent = Intent()</code> – Crea un Intent vacío (sin destino explícito). No se especifica la activity destino porque el mecanismo de resultado se encarga de enviarlo a quien lanzó esta activity.<br>
2. <code>resultIntent.putExtra("MESSAGE", farewallMssg)</code> – Añade el mensaje de despedida como dato extra del intent, con la clave "MESSAGE".<br>
3. <code>(context as Activity).setResult(Activity.RESULT_OK, resultIntent)</code> – Establece el resultado de esta activity como OK y adjunta el intent con los datos.<br>
4. <code>(context as Activity).finish()</code> – Cierra esta activity (FarewellActivity) y vuelve a la activity que la lanzó (MainActivity), que recibirá el resultado.<br><br>
<strong>Motivo de hacerlo así:</strong><br>
Si se usara <code>startActivity(Intent(context, MainActivity::class.java))</code>, se crearía una <em>nueva instancia</em> de MainActivity en lugar de volver a la existente. Esto acumularía activities en la pila y no se transferiría el resultado correctamente.`
    }
  ],

  hacer_codigo: [
    {
      id: "C01",
      exam: "REC 1r Parcial – Curso 22/23 & 20/21 – Pregunta 2 (BroadcastReceiver custom intent)",
      pregunta: `<strong>Componentes BroadcastReceiver – Código de envío de broadcast personalizado:</strong><br><br>
Observa las siguientes líneas de código (Java):<br>
<pre>
33: Intent in = new Intent();
34: intent.setAction("oat.tutorialsudl.CUSTOM_INTENT");
35: context.sendBroadcast(in);
</pre>
<strong>a.</strong> ¿De qué se encargan estas líneas? ¿De qué tipo de intent (explícito o implícito) se trata? ¿Por qué?<br>
Indica en qué consiste la línea 34. ¿Qué objetivo tiene el método <code>setAction()</code>? ¿Qué crees que es el String que se le pasa como argumento?<br><br>
<strong>b.</strong> Suponiendo que nuestra componente BroadcastReceiver responde también al evento del sistema ACTION_BOOT_COMPLETED. Escribe el código de su método callback (incluyendo su cabecera). La acción a realizar para ambos eventos es mostrar un toast indicando la acción que ha despertado el BroadcastReceiver.<br><br>
<strong>c.</strong> Escribe la declaración en el AndroidManifest de esta componente.`,
      respuesta: `<strong>a) Análisis del código:</strong><br>
Estas líneas crean y envían un broadcast con un intent <strong>implícito</strong>. Es implícito porque no se especifica un componente concreto receptor (no se usa el constructor <code>Intent(context, Class)</code>), sino solo una acción String.<br>
La línea 34: <code>setAction()</code> asigna la acción del intent. La cadena <code>"oat.tutorialsudl.CUSTOM_INTENT"</code> es un <strong>identificador personalizado de acción</strong> (una constante String única que define este tipo de broadcast). Por convención, sigue el formato de nombre de paquete para evitar colisiones con otras apps.<br><br>
<strong>b) Código del método callback (Java):</strong><br>
<pre>
@Override
public void onReceive(Context context, Intent intent) {
    String action = intent.getAction();
    String message = "Acción recibida: " + action;
    Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
}
</pre><br>
<strong>c) Declaración en AndroidManifest (Escenario 1 - ACTION_BOOT_COMPLETED):</strong><br>
<pre>
&lt;receiver android:name=".ElReceptorbis"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="oat.tutorialsudl.CUSTOM_INTENT" /&gt;
        &lt;action android:name="android.intent.action.BOOT_COMPLETED" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;
</pre>
<em>Nota:</em> BOOT_COMPLETED requiere el permiso <code>&lt;uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/&gt;</code>`
    },
    {
      id: "C02",
      exam: "REC 1r Parcial – Curso 20/21 & 21/22 & 22/23 & 23/24 & 24/25 – AndroidManifest BroadcastReceiver",
      pregunta: `<strong>AndroidManifest – BroadcastReceiver (pregunta recurrente en TODOS los exámenes):</strong><br><br>
Considera estas dos declaraciones de componentes BroadcastReceiver en el AndroidManifest:<br><br>
<strong>Declaración 1 – Implicit broadcast exception:</strong><br>
<pre>
&lt;receiver android:name="com.android.mdw.reproductor.ElReceptorbis"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.BATTERY_LOW" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;
</pre>
<strong>Declaración 2 – Protected intent:</strong><br>
<pre>
&lt;receiver android:name="com.android.mdw.reproductor.ElReceptorbis"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.HEADSET_PLUG" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;
</pre>
<strong>¿Son correctas estas declaraciones? ¿Por qué? Justifica la respuesta.</strong><br>
¿Qué debe hacerse en el/los caso/s en que la declaración no sea correcta? Escribe el código XML y/o Java correspondiente para registrar correctamente el/los BroadcastReceiver.`,
      respuesta: `<strong>DECLARACIÓN 1 (BATTERY_LOW) – SÍ es CORRECTA:</strong><br>
<code>android.intent.action.BATTERY_LOW</code> es un <strong>implicit broadcast exception</strong>. A partir de Android 8.0 (API 26), la mayoría de los implicit broadcasts no pueden registrarse estáticamente en el Manifest. Sin embargo, <code>BATTERY_LOW</code> es una de las excepciones explícitamente permitidas. Por tanto, la declaración en el Manifest es válida y funciona correctamente.<br><br>
<strong>DECLARACIÓN 2 (HEADSET_PLUG) – NO es CORRECTA:</strong><br>
<code>android.intent.action.HEADSET_PLUG</code> es un <strong>protected intent</strong>, lo que significa que solo puede ser enviado por el sistema (no por apps de terceros). Además, no está en la lista de implicit broadcast exceptions, por lo que no puede registrarse estáticamente en el Manifest desde Android 8.0+.<br><br>
<strong>Solución correcta para HEADSET_PLUG (registro dinámico en Java):</strong><br>
<pre>
// En el método onResume() o onCreate() de la Activity:
IntentFilter filter = new IntentFilter();
filter.addAction(Intent.ACTION_HEADSET_PLUG);
registerReceiver(elReceptorbis, filter);

// En el método onPause() o onDestroy():
unregisterReceiver(elReceptorbis);
</pre>
<br>
<strong>Solución en Kotlin:</strong><br>
<pre>
// En onResume():
val filter = IntentFilter(Intent.ACTION_HEADSET_PLUG)
registerReceiver(elReceptorbis, filter)

// En onPause():
unregisterReceiver(elReceptorbis)
</pre>`
    },
    {
      id: "C03",
      exam: "REC 1r Parcial – Curso 20/21 – Pregunta 3 – Escenario 2",
      pregunta: `<strong>BroadcastReceiver – Escenario 2 (ACTION_HEADSET_PLUG):</strong><br><br>
El mismo BroadcastReceiver del código anterior también responde al evento del sistema ACTION_HEADSET_PLUG (en lugar de ACTION_BOOT_COMPLETED del escenario 1).<br><br>
<strong>d.</strong> Escribe las líneas de código necesarias para registrar esta componente BroadcastReceiver para este otro escenario (ACTION_HEADSET_PLUG).<br><br>
<strong>e.</strong> ¿Existen diferencias respecto a cómo registraste el BroadcastReceiver en el escenario 1 (BOOT_COMPLETED)? ¿Por qué?<br><br>
<strong>f.</strong> ¿Qué otra acción es adecuada llevar a cabo también para este segundo escenario? ¿Por qué? Escribe el código correspondiente. ¿En qué método se llevaría a cabo dicho paso?`,
      respuesta: `<strong>d) Registro dinámico para ACTION_HEADSET_PLUG:</strong><br>
<pre>
// En onResume() de la Activity:
IntentFilter filter = new IntentFilter(Intent.ACTION_HEADSET_PLUG);
registerReceiver(elReceptorbis, filter);
</pre><br>
<strong>e) Diferencias con el escenario 1:</strong><br>
<strong>SÍ existen diferencias:</strong><br>
• En el <strong>Escenario 1 (BOOT_COMPLETED)</strong>: se puede (y es más apropiado) registrar estáticamente en el AndroidManifest, ya que BOOT_COMPLETED es una implicit broadcast exception (permitida en Manifest desde Android 8.0).<br>
• En el <strong>Escenario 2 (HEADSET_PLUG)</strong>: debe registrarse <em>dinámicamente</em> en código porque HEADSET_PLUG es un protected intent que no puede declararse en el Manifest desde Android 8.0+.<br><br>
<strong>f) Acción adicional necesaria – Dar de baja (unregister):</strong><br>
Es necesario <strong>desregistrar el BroadcastReceiver</strong> cuando ya no se necesita escuchar el evento, para evitar fugas de memoria y comportamiento inesperado.<br>
<pre>
// En onPause() de la Activity:
unregisterReceiver(elReceptorbis);
</pre>
<strong>¿Por qué?</strong> Porque si el BroadcastReceiver se registra en <code>onResume()</code>, debe desregistrarse en su par <code>onPause()</code>. Si no se desregistra, el receiver seguirá activo incluso cuando la activity no esté en primer plano, consumiendo recursos y potencialmente causando errores si la activity es destruida.`
    },
    {
      id: "C04",
      exam: "Examen 1r Parcial – Curso 22/23 – Pregunta 3",
      pregunta: `<strong>Componentes de una app Android – App con BOOT_COMPLETED y ACTION_POWER_CONNECTED:</strong><br><br>
Se quiere desarrollar una app que resuelva dos acciones automáticamente al detectar que se emiten dos eventos del sistema:<br>
1. Cuando el sistema completa el arranque (<code>android.intent.action.BOOT_COMPLETED</code>): poner en marcha un Service definido en la clase <code>mediaPlayerService.kt</code>.<br>
2. Cuando se conecta el cargador de batería (<code>android.intent.action.ACTION_POWER_CONNECTED</code>): detener el reproductor de música controlado por el Service anterior.<br><br>
<strong>a.</strong> ¿Qué componentes hay implicadas, además de la activity principal? Escribe la declaración de cada una de ellas en el AndroidManifest.xml.<br><br>
<strong>b.</strong> Escribe el código Kotlin completo de la/s componente/s encargada/s de resolver los puntos 1 y 2. ¿Será necesario uno o dos componentes para resolverlos?<br><br>
<strong>c.</strong> ¿De qué componente/s debe encargarse de instanciar la activity, si es el caso? ¿Por qué se hace vía código en lugar de hacerlo de forma estática a través del AndroidManifest?`,
      respuesta: `<strong>a) Componentes implicadas y declaración en AndroidManifest:</strong><br>
Son necesarios: 1 BroadcastReceiver + 1 Service (+ la Activity principal).<br>
<pre>
&lt;!-- Activity principal --&gt;
&lt;activity android:name=".MainActivity"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.MAIN" /&gt;
        &lt;category android:name="android.intent.category.LAUNCHER" /&gt;
    &lt;/intent-filter&gt;
&lt;/activity&gt;

&lt;!-- BroadcastReceiver para BOOT_COMPLETED (sí puede ir en Manifest) --&gt;
&lt;receiver android:name=".MediaEventReceiver"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.BOOT_COMPLETED" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;

&lt;!-- Service --&gt;
&lt;service android:name=".mediaPlayerService" /&gt;
</pre>
<em>Nota:</em> ACTION_POWER_CONNECTED NO es implicit broadcast exception → debe registrarse dinámicamente.<br><br>
<strong>b) Código Kotlin del BroadcastReceiver (UN solo componente):</strong><br>
<pre>
class MediaEventReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        when (intent.action) {
            Intent.ACTION_BOOT_COMPLETED -> {
                val serviceIntent = Intent(context, mediaPlayerService::class.java)
                context.startService(serviceIntent)
            }
            Intent.ACTION_POWER_CONNECTED -> {
                val serviceIntent = Intent(context, mediaPlayerService::class.java)
                context.stopService(serviceIntent)
            }
        }
    }
}
</pre><br>
<strong>c) Instanciación dinámica de ACTION_POWER_CONNECTED en la Activity:</strong><br>
La Activity debe registrar dinámicamente el BroadcastReceiver para POWER_CONNECTED porque este evento es un implicit broadcast NO exception → no puede declararse en el Manifest desde Android 8.0+.<br>
<pre>
// En onResume():
val filter = IntentFilter(Intent.ACTION_POWER_CONNECTED)
registerReceiver(mediaEventReceiver, filter)
// En onPause():
unregisterReceiver(mediaEventReceiver)
</pre>`
    },
    {
      id: "C05",
      exam: "REC 1r Parcial – Curso 23/24 & 24/25 – Pregunta 4 (Feeds Service)",
      pregunta: `<strong>Componentes de una app Android – App de feeds con Service y ContentProvider:</strong><br><br>
Se quiere desarrollar una app que ponga en marcha un servicio lector de feeds, accediendo de manera prolongada a distintas fuentes de noticias. Al finalizar la descarga de cada noticia, el sistema emite un evento personalizado que despierta a la app. Al pasar a primer plano, la app mostrará la noticia descargada.<br>
Además, las noticias deben almacenarse persistentemente y otras apps del dispositivo también deben poder acceder a ellas.<br><br>
<strong>a.</strong> Enumera qué componentes consideras necesarias para resolver la funcionalidad descrita (además de la Activity principal). Indica la misión de cada una.<br><br>
<strong>b.</strong> ¿Qué ocurre si la app no se encuentra ejecutándose en el momento de finalizar la descarga?<br><br>
<strong>c.</strong> Escribe el tag declarativo en el AndroidManifest para cada componente, indicando el atributo o subelemento más relevante de cada uno.`,
      respuesta: `<strong>a) Componentes necesarias:</strong><br>
• <strong>Service</strong>: Para el acceso prolongado a las fuentes de noticias (lector de feeds). Un Service iniciado (started service) es ideal para tareas de larga duración en segundo plano.<br>
• <strong>BroadcastReceiver</strong>: Para escuchar el evento personalizado emitido al finalizar la descarga de cada noticia y despertar/notificar a la app.<br>
• <strong>ContentProvider</strong>: Para almacenar las noticias de forma persistente (abstrayendo el mecanismo interno) y permitir que otras apps del dispositivo accedan a ellas mediante una URI estándar.<br><br>
<strong>b) Si la app no está ejecutándose:</strong><br>
El BroadcastReceiver puede despertar la app incluso si no está en ejecución (si está declarado en el Manifest con el evento personalizado). Sin embargo, para que el BroadcastReceiver pueda iniciar la UI (la Activity), deberá lanzar un Intent explícito hacia la MainActivity, que mostrará la noticia.<br><br>
<strong>c) Tags en el AndroidManifest:</strong><br>
<pre>
&lt;!-- Activity --&gt;
&lt;activity android:name=".MainActivity"&gt;
    &lt;intent-filter&gt;...&lt;/intent-filter&gt;
&lt;/activity&gt;

&lt;!-- Service: atributo más relevante: android:name --&gt;
&lt;service android:name=".FeedReaderService" /&gt;

&lt;!-- BroadcastReceiver: subelemento más relevante: intent-filter --&gt;
&lt;receiver android:name=".NewsReceiver"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="com.ejemplo.NEWS_DOWNLOADED" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;

&lt;!-- ContentProvider: atributo más relevante: android:authorities --&gt;
&lt;provider
    android:name=".NewsProvider"
    android:authorities="com.ejemplo.newsprovider"
    android:exported="true" /&gt;
</pre>`
    },
    {
      id: "C06",
      exam: "Examen 1r Parcial – Curso 24/25 – Pregunta 3 (Activity tipo Galería)",
      pregunta: `<strong>Intents implícitos – Declarar una Activity tipo Galería en AndroidManifest:</strong><br><br>
Imagina que implementas una Activity con funcionalidad similar a la Galería de imágenes, que presenta tanto imágenes como vídeos en cualquier formato. Debe poder responder tanto a peticiones para <em>visualizar</em> el contenido, como para <em>recuperar</em> alguna de esas piezas. Al lanzar implicit intents de ese tipo, entra a competir con la Galería preinstalada.<br>
Cada pieza (foto o vídeo) se identifica mediante una Uri. Además, es la activity principal.<br><br>
<strong>1.</strong> Escribe la declaración de dicha activity en el AndroidManifest.<br>
<strong>2.</strong> En el código Kotlin, ¿qué línea/s se usarían para distinguir si se está pidiendo visualización o recuperación de una pieza?<br>
<strong>3.</strong> ¿Qué líneas de código son necesarias para retornar la Uri de la foto/vídeo seleccionada?<br>
<strong>4.</strong> ¿Y si además la activity ha de ser capaz de renderizar páginas web? ¿Qué tags se añadirían?`,
      respuesta: `<strong>1. Declaración en AndroidManifest:</strong><br>
<pre>
&lt;activity android:name=".GalleryLikeActivity"&gt;
    &lt;!-- Activity principal --&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.MAIN" /&gt;
        &lt;category android:name="android.intent.category.LAUNCHER" /&gt;
    &lt;/intent-filter&gt;
    &lt;!-- Para visualizar imágenes y vídeos --&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.VIEW" /&gt;
        &lt;category android:name="android.intent.category.DEFAULT" /&gt;
        &lt;data android:mimeType="image/*" /&gt;
        &lt;data android:mimeType="video/*" /&gt;
    &lt;/intent-filter&gt;
    &lt;!-- Para recuperar (PICK) imágenes y vídeos --&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.PICK" /&gt;
        &lt;category android:name="android.intent.category.DEFAULT" /&gt;
        &lt;data android:mimeType="image/*" /&gt;
        &lt;data android:mimeType="video/*" /&gt;
    &lt;/intent-filter&gt;
&lt;/activity&gt;
</pre><br>
<strong>2. Distinguir entre VIEW y PICK en Kotlin:</strong><br>
<pre>
val action = intent.action
when (action) {
    Intent.ACTION_VIEW -> { /* mostrar el contenido */ }
    Intent.ACTION_PICK -> { /* permitir selección y retornar Uri */ }
}
</pre><br>
<strong>3. Retornar la Uri seleccionada:</strong><br>
<pre>
val resultIntent = Intent()
resultIntent.data = selectedUri  // Uri de la foto/vídeo
setResult(Activity.RESULT_OK, resultIntent)
finish()
</pre>
Motivo: se usa <code>setResult()</code> + <code>finish()</code> y no <code>startActivity()</code> para volver a la activity llamante sin duplicarla en la pila.<br><br>
<strong>4. Tags adicionales para renderizar páginas web:</strong><br>
<pre>
&lt;intent-filter&gt;
    &lt;action android:name="android.intent.action.VIEW" /&gt;
    &lt;category android:name="android.intent.category.DEFAULT" /&gt;
    &lt;category android:name="android.intent.category.BROWSABLE" /&gt;
    &lt;data android:scheme="http" /&gt;
    &lt;data android:scheme="https" /&gt;
&lt;/intent-filter&gt;
</pre>`
    },
    {
      id: "C07",
      exam: "Examen 1r Parcial – Curso 23/24 – Pregunta 2 (AndroidManifest – Service PdfDownloader)",
      pregunta: `<strong>AndroidManifest – Declaración de Service PdfDownloader:</strong><br><br>
Observa el siguiente código que prepara un intent para activar un Service:<br>
<pre>
Intent i = new Intent(this, PdfDownloader.class);
i.setData(Uri.parse("http://commonsware.com/Android/excerpt.pdf"));
i.putExtra(Downloader.EXTRA_MESSENGER, new Messenger(handler));
startService(i);
</pre>
<strong>a.</strong> Indica de qué forma se declararía dicha componente Service en el AndroidManifest. Incluye también una etiqueta que sirva para identificarlo en un chooser entre todas las componentes disponibles en el dispositivo capaces de resolver dicha funcionalidad.<br><br>
<strong>b.</strong> Interpreta qué proceso es capaz de resolver este Service y de qué elementos dispone para la ejecución del mismo.`,
      respuesta: `<strong>a) Declaración en AndroidManifest:</strong><br>
<pre>
&lt;service
    android:name=".PdfDownloader"
    android:label="@string/pdf_downloader_label"
    android:exported="false"&gt;
    &lt;intent-filter android:label="@string/pdf_downloader_label"&gt;
        &lt;action android:name="android.intent.action.VIEW" /&gt;
        &lt;data android:scheme="http" /&gt;
        &lt;data android:mimeType="application/pdf" /&gt;
    &lt;/intent-filter&gt;
&lt;/service&gt;
</pre>
El atributo <code>android:label</code> en el <code>&lt;intent-filter&gt;</code> sirve para identificarlo en el chooser del sistema.<br><br>
<strong>b) Interpretación del proceso:</strong><br>
El Service <strong>PdfDownloader</strong> es capaz de:<br>
• <strong>Descargar un fichero PDF</strong> desde una URL HTTP. La URI pasada (<code>http://commonsware.com/Android/excerpt.pdf</code>) indica la URL de descarga.<br><br>
<strong>Elementos disponibles para la ejecución:</strong><br>
• <code>intent.getData()</code>: obtiene la URI del PDF a descargar.<br>
• <code>intent.getExtra(Downloader.EXTRA_MESSENGER)</code>: obtiene un objeto <code>Messenger</code> que permite al Service comunicarse de vuelta con la Activity que lo inició (para notificar el progreso o la finalización de la descarga).<br>
• El Service corre en segundo plano independientemente del ciclo de vida de la Activity.`
    },
    {
      id: "C08",
      exam: "Examen 1r Parcial – Curso 24/25 – Pregunta 2 (BroadcastReceiver personalizado)",
      pregunta: `<strong>BroadcastReceiver personalizado – Interpretación y activación:</strong><br><br>
Se presenta la declaración de un BroadcastReceiver en el AndroidManifest:<br>
<pre>
&lt;receiver android:name=".ElReceptorbis"
    android:enabled="true"
    android:exported="true"
    android:permission="CALL_PHONE"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="com.dev.example.MyReceiver.CUSTOM_BROADCAST_ACTION" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;
</pre>
donde <code>"com.dev.example.MyReceiver.CUSTOM_BROADCAST_ACTION"</code> es una constante de la app.<br><br>
<strong>a.</strong> Interpreta la misión que puede tener este BroadcastReceiver.<br><br>
<strong>b.</strong> Se trata de un BroadcastReceiver personalizado que debe iniciarse vía código. ¿Crees que puede iniciarse de diversas formas? Escribe el/las línea/s de código para activarlo de tantas formas como veas posible. Indica de qué tipo de activación se trata cada una.`,
      respuesta: `<strong>a) Interpretación de la misión:</strong><br>
• Responde a un <strong>broadcast personalizado</strong> (custom action) definido por la propia app (<code>CUSTOM_BROADCAST_ACTION</code>).<br>
• El atributo <code>android:exported="true"</code> indica que <em>otras apps también pueden activarlo</em>.<br>
• El atributo <code>android:permission="CALL_PHONE"</code> indica que solo apps que tengan el permiso <code>CALL_PHONE</code> pueden enviarle broadcasts. Esto sugiere que el receiver puede estar relacionado con funcionalidades de llamadas telefónicas.<br>
• Su misión es reaccionar a un evento personalizado, quizás para iniciar o controlar una llamada telefónica o alguna funcionalidad específica de la app.<br><br>
<strong>b) Formas de activarlo:</strong><br><br>
<strong>Forma 1: Intent implícito (por acción)</strong><br>
<pre>
val intent = Intent("com.dev.example.MyReceiver.CUSTOM_BROADCAST_ACTION")
context.sendBroadcast(intent)
</pre>
Tipo: activación implícita (por acción definida).<br><br>
<strong>Forma 2: Intent explícito (especificando el componente directamente)</strong><br>
<pre>
val intent = Intent(context, ElReceptorbis::class.java)
intent.action = "com.dev.example.MyReceiver.CUSTOM_BROADCAST_ACTION"
context.sendBroadcast(intent)
</pre>
Tipo: activación explícita (especificando el BroadcastReceiver por nombre).<br><br>
<strong>Forma 3: Con permiso requerido</strong><br>
<pre>
val intent = Intent("com.dev.example.MyReceiver.CUSTOM_BROADCAST_ACTION")
context.sendBroadcast(intent, Manifest.permission.CALL_PHONE)
</pre>
Tipo: activación implícita con comprobación de permiso.`
    }
  ],

  teoria_codigo: [
    {
      id: "TC01",
      exam: "Pregunta 2 MiniActiv-3 – REC Curso 20/21 & 21/22",
      pregunta: `<strong>Intents implícitos – Análisis de código existente:</strong><br><br>
A partir del código de la MiniActiv-3 (el de <code>onClick</code> y <code>onActivityResult</code> con ACTION_PICK para imágenes y contactos):<br><br>
<strong>b.</strong> Explicar de qué se encarga el código.<br><br>
<strong>c.</strong> ¿Se requiere de algún permiso para ejecutarlo?<br><br>
<strong>d.</strong> Las componentes de una app propia (de terceros) pueden también responder a un intent con action PICK. ¿Qué requisito/s debe cumplir?<br><br>
<strong>e.</strong> ¿Qué otra etiqueta podría aparecer en las líneas del <code>startActivityForResult(in, 2)</code> y <code>startActivityForResult(in, 1)</code>? ¿Qué cambios supondría que apareciera esa otra etiqueta? Indica cuáles serían esos cambios.`,
      respuesta: `<strong>b) De qué se encarga el código:</strong><br>
El código gestiona dos funcionalidades mediante implicit intents con <code>ACTION_PICK</code>:<br>
• <strong>Button1:</strong> Abre la Galería de imágenes del sistema para seleccionar una imagen. Al volver, la imagen seleccionada se muestra en un ImageView (<code>selectedImage</code>).<br>
• <strong>Button2:</strong> Abre la agenda de Contactos del sistema para seleccionar un contacto. Al volver, el nombre del contacto se muestra en un EditText (<code>ed</code>).<br>
El mecanismo usado es <code>startActivityForResult()</code> + <code>onActivityResult()</code> (versión deprecada, funcional en Java).<br><br>
<strong>c) Permisos requeridos:</strong><br>
• Para acceder a imágenes externas: puede requerirse <code>READ_EXTERNAL_STORAGE</code> (dependiendo de la versión de Android y si las imágenes están en almacenamiento externo).<br>
• Para acceder a contactos: generalmente se requiere el permiso <code>READ_CONTACTS</code>.<br>
Estos permisos deben declararse en el Manifest y solicitarse en tiempo de ejecución desde Android 6.0+.<br><br>
<strong>d) Requisitos para que una componente propia responda a ACTION_PICK:</strong><br>
Debe declararse en el AndroidManifest con un <code>&lt;intent-filter&gt;</code> que incluya:<br>
1. <code>&lt;action android:name="android.intent.action.PICK" /&gt;</code><br>
2. <code>&lt;category android:name="android.intent.category.DEFAULT" /&gt;</code> (imprescindible para recibir implicit intents)<br>
3. (Opcional) <code>&lt;data&gt;</code> especificando el tipo de datos que maneja.<br><br>
<strong>e) Otra etiqueta posible:</strong><br>
En lugar de <code>startActivityForResult(in, requestCode)</code>, podría usarse <strong><code>startActivity(in)</code></strong> (sin solicitar resultado).<br>
Cambios que supondría:<br>
• No habría <code>requestCode</code> ni <code>onActivityResult()</code>.<br>
• No se podría recuperar la imagen seleccionada ni el contacto elegido.<br>
• La app solo abriría la Galería/Contactos sin hacer nada con la selección.`
    },
    {
      id: "TC02",
      exam: "REC 1r Parcial – Curso 21/22 & 22/23 – Pregunta 1C.2",
      pregunta: `<strong>AndroidManifest – Tag &lt;meta-data&gt; para API Keys:</strong><br><br>
¿Qué elemento se utiliza para declarar ciertos aspectos de configuración como por ejemplo la API key para utilizar una librería externa? ¿En qué nivel de la estructura XML se suele incluir (application, activity, etc.)?`,
      respuesta: `<strong>El elemento utilizado es:</strong> <code>&lt;meta-data&gt;</code><br><br>
<strong>Sintaxis:</strong><br>
<pre>
&lt;meta-data
    android:name="com.google.android.maps.v2.API_KEY"
    android:value="TuApiKeyAqui" /&gt;
</pre><br>
<strong>Nivel de la estructura XML donde se incluye:</strong><br>
• Para APIs que afectan a toda la aplicación (como Google Maps API Key), se incluye <em>dentro del elemento <code>&lt;application&gt;</code></em>:<br>
<pre>
&lt;application&gt;
    ...
    &lt;meta-data
        android:name="com.google.android.maps.v2.API_KEY"
        android:value="TuApiKeyAqui" /&gt;
&lt;/application&gt;
</pre><br>
• También puede colocarse a nivel de <code>&lt;activity&gt;</code>, <code>&lt;service&gt;</code>, o <code>&lt;receiver&gt;</code> si la configuración es específica de ese componente.<br><br>
<strong>Nota de seguridad:</strong> Para producción, se recomienda no incluir API keys directamente en el Manifest. En su lugar, usar el archivo <code>local.properties</code> + <code>build.gradle</code> o variables de entorno para evitar exponer las claves en el repositorio.`
    },
    {
      id: "TC03",
      exam: "Examen 1r Parcial – Curso 22/23 – Pregunta 2c (declaración en Manifest de componente PICK de terceros)",
      pregunta: `<strong>ACTION_PICK – Declaración en AndroidManifest de componente de terceros:</strong><br><br>
En el caso de que sea una componente de terceros (no una app instalada de serie en el dispositivo) la que responde a este intent implícito ACTION_PICK, ¿cómo estará declarada en el archivo AndroidManifest.xml la componente invocada mediante el intent?<br><br>
La constante de la API para un action PICK en el AndroidManifest.xml es <code>"android.intent.action.PICK"</code>`,
      respuesta: `<strong>Declaración de una componente de terceros que responde a ACTION_PICK:</strong><br><br>
Una Activity de terceros que quiera aparecer en el chooser cuando se lanza un <code>ACTION_PICK</code> implicit intent debe declararse en su AndroidManifest con:<br>
<pre>
&lt;activity android:name=".MiActivityPick"
    android:label="Mi Selector Personalizado"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.PICK" /&gt;
        &lt;category android:name="android.intent.category.DEFAULT" /&gt;
        &lt;!-- Opcional: especificar el tipo de datos que maneja --&gt;
        &lt;data android:mimeType="application/x-mi-tipo" /&gt;
    &lt;/intent-filter&gt;
&lt;/activity&gt;
</pre><br>
<strong>Elementos imprescindibles:</strong><br>
1. <code>&lt;action android:name="android.intent.action.PICK" /&gt;</code>: indica que esta activity puede manejar peticiones PICK.<br>
2. <code>&lt;category android:name="android.intent.category.DEFAULT" /&gt;</code>: <em>obligatoria</em> para que la activity pueda recibir implicit intents. Sin ella, el Android system no la considerará como candidata.<br><br>
<strong>Para retornar la selección al invocador:</strong><br>
La activity debe llamar a <code>setResult(RESULT_OK, intentConUri)</code> seguido de <code>finish()</code>, con el intent conteniendo la URI del elemento seleccionado.`
    },
    {
      id: "TC04",
      exam: "Examen 1r Parcial – Curso 23/24 – Pregunta 4a (AndroidManifest – Service declaración)",
      pregunta: `<strong>AndroidManifest – Interpretación de declaración de Service:</strong><br><br>
Dada la siguiente declaración de componente en el AndroidManifest:<br>
<pre>
&lt;service
    android:name="com.android.email.service.Pop3SyncAdapterService"
    android:exported="true"&gt;
    &lt;intent-filter&gt;
        &lt;action
            android:name="android.content.SyncAdapter" /&gt;
    &lt;/intent-filter&gt;
    android:permission="com.android.email.permission.ACCESS_PROVIDER"
&lt;/service&gt;
</pre>
Indica con detalle todo lo que en ella se declara referente a una componente Service, inclusive los tags <code>android:exported</code>, <code>intent-filter</code> y <code>android:permission</code>.`,
      respuesta: `<strong>Interpretación completa de la declaración:</strong><br><br>
• <code>android:name="com.android.email.service.Pop3SyncAdapterService"</code>: Nombre completamente cualificado de la clase que implementa este Service. Es el servicio de sincronización POP3 del cliente de email de Android.<br><br>
• <code>android:exported="true"</code>: Indica que este Service es <em>accesible desde otras aplicaciones</em>. Otras apps pueden vincularse a él o iniciarlo mediante intents.<br><br>
• <code>&lt;intent-filter&gt;</code> con <code>&lt;action android:name="android.content.SyncAdapter" /&gt;</code>: Declara que este Service puede responder al intent con acción <code>SyncAdapter</code>. Esto es necesario para que el sistema Android lo reconozca como un adaptador de sincronización (SyncAdapter), que es el mecanismo estándar de Android para sincronizar datos en segundo plano con un servidor.<br><br>
• <code>android:permission="com.android.email.permission.ACCESS_PROVIDER"</code>: Establece un permiso de seguridad. Solo las apps que tengan el permiso <code>ACCESS_PROVIDER</code> del cliente de email podrán interactuar con este Service. Esto protege el servicio de accesos no autorizados desde apps de terceros.`
    },
    {
      id: "TC05",
      exam: "Examen 1r Parcial – Curso 23/24 – Pregunta 4",
      pregunta: `<strong>AndroidManifest – Declaración de componentes:</strong><br><br>
¿Qué indica el tag <code>&lt;uses-feature&gt;</code> en el AndroidManifest? ¿Cómo se indica que es una característica imprescindible? ¿Y si se trata de una funcionalidad adicional pero prescindible?<br><br>
Ejemplo: <code>android.hardware.biometrics</code> es la constante API para referenciar medios biométricos.`,
      respuesta: `<strong>El tag <code>&lt;uses-feature&gt;</code>:</strong><br>
Se utiliza en el AndroidManifest para declarar las características de hardware o software que requiere la app. Su función principal es <strong>filtrar la app en Google Play</strong>: dispositivos que no tengan esa característica no podrán instalar la app (si es required=true).<br><br>
<strong>Característica imprescindible (required=true, por defecto):</strong><br>
<pre>
&lt;uses-feature
    android:name="android.hardware.biometrics"
    android:required="true" /&gt;
</pre>
Los dispositivos sin biometría no verán la app en Google Play.<br><br>
<strong>Característica opcional/prescindible (required=false):</strong><br>
<pre>
&lt;uses-feature
    android:name="android.hardware.biometrics"
    android:required="false" /&gt;
</pre>
La app puede instalarse en dispositivos sin biometría, pero puede usar la funcionalidad en los que sí la tienen. El código de la app debe comprobar en tiempo de ejecución si la característica está disponible y degradar graciosamente si no lo está.<br><br>
<strong>¿Qué aspectos se configuran en build.gradle en lugar del Manifest?</strong><br>
minSdkVersion, targetSdkVersion, versionCode y versionName. Los valores de build.gradle prevalecen sobre los del Manifest si ambos los declaran.`
    },
    {
      id: "TC06",
      exam: "Examen 1r Parcial – Curso 24/25 – Pregunta 2 (Componentes Jetpack Architecture)",
      pregunta: `<strong>Componentes de arquitectura Jetpack – ViewModel y LiveData:</strong><br><br>
<strong>a.</strong> Explica claramente por qué no se deben mantener referencias a los componentes de la UI dentro del ViewModel, y qué fundamenta la necesidad de una componente ViewModel.<br><br>
<strong>b.</strong> Explica cómo se consigue que los datos contenidos en el ViewModel sean renderizados en pantalla, y por tanto que el usuario los vea siempre actualizados en la UI.<br><br>
<strong>c.</strong> Completa los espacios vacíos del siguiente código y explica por qué se usan dos miembros (<code>_acclrColor</code> y <code>acclrColor</code>):<br>
<pre>
class SensorChangeViewModel: ViewModel() {
    private val _acclrColor: MutableLiveData&lt;Boolean&gt; = MutableLiveData(value: false)
    val acclrColor: LiveData&lt;Boolean&gt; = _acclrColor

    fun setColor(c: Boolean) {
        _acclrColor.value = ___[1]___
    }

    fun getColor(): Boolean {
        return (___[2]___)
    }
}
</pre>`,
      respuesta: `<strong>a) Por qué NO referencias UI en ViewModel:</strong><br>
El ViewModel está diseñado para sobrevivir a los cambios de configuración (rotación de pantalla, cambio de idioma) que recrean la Activity/Fragment. Si el ViewModel guardara una referencia a la Activity (un Context de UI), habría una <em>fuga de memoria</em>: la Activity destruida no podría ser liberada por el GC porque el ViewModel la referencia. Además, la Activity recreada sería diferente al objeto referenciado. El ViewModel solo debe contener datos y lógica de UI, no referencias a vistas.<br><br>
<strong>b) Cómo los datos del ViewModel llegan a la UI:</strong><br>
Mediante <strong>LiveData</strong>: el ViewModel expone los datos como objetos <code>LiveData</code>. La Activity/Fragment se <em>suscribe</em> (observa) al LiveData. Cuando el valor cambia, LiveData notifica automáticamente a todos los observadores activos. Compose usa <code>observeAsState()</code> o la integración con <code>collectAsState()</code>. Así, la UI siempre muestra el estado actualizado sin necesidad de consultas manuales.<br><br>
<strong>c) Completar código y explicación:</strong><br>
<pre>
fun setColor(c: Boolean) {
    _acclrColor.value = c  // [1] c
}

fun getColor(): Boolean {
    return (_acclrColor.value ?: false)  // [2] _acclrColor.value ?: false
}
</pre>
<strong>¿Por qué dos miembros?</strong><br>
• <code>_acclrColor</code> es <strong>MutableLiveData</strong> (privado): permite modificar el valor desde dentro del ViewModel.<br>
• <code>acclrColor</code> es <strong>LiveData</strong> (público, read-only): expone los datos a la UI de forma inmutable. La UI no puede modificar el valor directamente, solo observarlo. Esto aplica el patrón de encapsulación: solo el ViewModel controla cuándo y cómo cambian los datos.`
    }
  ]
};
