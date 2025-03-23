Ver tutorial https://www.youtube.com/watch?v=nZG6OyCT-qs&ab_channel=JuanMartinBarrientosLorusso

Instructivo: Uso de un Script JavaScript para Mensajes Automáticos en Kick

Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

Un navegador compatible (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.)

La extensión Tampermonkey instalada en su navegador

Si por ejemplo tiene Chrome puede crear varios perfiles y varias cuenta de KICK

El archivo JavaScript del script de mensajes automáticos

Instalación de Tampermonkey

Abra su navegador.

Vaya a la tienda de extensiones correspondiente:

Chrome: Tampermonkey en Chrome Web Store

Firefox: Tampermonkey para Firefox

Edge: Tampermonkey en Microsoft Store

Haga clic en Agregar a Chrome/Firefox/Edge y confirme la instalación.

Descarga del Archivo JavaScript

Diríjase al repositorio de GitHub donde se encuentra alojado el script.

Acceda al siguiente enlace: Mensajes Automáticos Kick

Haga clic en Download Raw o copie el contenido del archivo.

Carga del Script en Tampermonkey

Haga clic en el icono de Tampermonkey en la barra de extensiones de su navegador.

Seleccione Dashboard (Panel de Control).

Haga clic en el botón + (Crear un nuevo script).

Elimine el contenido predeterminado y pegue el código del archivo Mensajes Automaticos KICK2-1.1.user.js.

Haga clic en Archivo > Guardar o use Ctrl + S.

Asegúrese de que el script esté habilitado.

Modificación de los Mensajes

En el Dashboard de Tampermonkey, localice el script Mensajes Automaticos KICK2-1.1.user.js.

Haga clic en Editar.

Busque la sección donde se definen los mensajes automáticos, por ejemplo:

let messages = [
                "¡Aguante chillin!",
                "Exploten el chat malditosssss !!!",
                "Denle follow al canal y activen notificaciones 🔔",
                "¡Chilling es familia! 🔥🔥🔥",
                "Vamos genteeee...",
                "Alguien nuevo en el chat? De donde son??",
                "chilling_ogziplook",
                "Se pone temazo?",
                "Vamos agusss",
                "Sigan el Canal los nuevos ",
                "DanceDance DanceDance DanceDance"
            ];

Modifique los mensajes según sus necesidades.

Guarde los cambios (Ctrl + S).

Uso del Script en Kick

Abra Kick y acceda al chat donde desea enviar los mensajes automáticamente.

Verifique que el script esté activo en Tampermonkey.

Dependiendo del script, los mensajes se enviarán según la configuración establecida (por intervalos de tiempo, comandos, etc.).

¡Listo! Ahora su script está funcionando y enviando mensajes automáticamente en Kick.
