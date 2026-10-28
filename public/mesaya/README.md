# MesaYa

Menú QR para restaurantes en Costa Rica: el cliente ve el menú, llama al mesero, pide la cuenta, paga con SINPE Móvil o tarjeta, junta puntos y juega. El restaurante tiene un panel de salón y un panel del dueño con analítica e inventario.

## Archivos

| Archivo | Quién lo usa | Para qué |
|---|---|---|
| `index.html` | Cliente (escanea el QR) | Inicio, Puntos, **Menú** (centro) con carrito para pedir, Juegos, Perfil · campana para llamar al mesero o pedir la cuenta |
| `salon.html` | Meseros / caja | Solicitudes en tiempo real, enviar el total, confirmar SINPE, canjes |
| `admin.html` | Dueño | Analítica, inventario, agotados y precios |
| `mesas.html` | Dueño | Genera e imprime el QR de cada mesa |
| `config.js` | Tú | Datos del restaurante, menú, premios, Firebase |
| `store.js` | — | Capa de datos (demo o Firebase) |
| `mesaya.css` | — | Estilos compartidos |
| `firestore.rules` | Tú | Reglas de seguridad para Firebase |

## 1. Probar en modo demo (sin Firebase)

Con `firebase: null` en `config.js` todo funciona en un mismo navegador.

1. Sube la carpeta a Netlify Drop (app.netlify.com/drop) o a tu hosting.
2. Abre `salon.html` en una pestaña → PIN `1234`.
3. Abre `index.html` en otra pestaña → "Entrar como Mesa 7".
4. En la mesa: campana → llamar mesero / pedir la cuenta. En el salón aparece con alerta.
5. `admin.html` → PIN `4321`. Trae 30 días de datos de ejemplo.

En demo, la verificación de ubicación tiene un botón "Simular que estoy en el restaurante".

## 2. Pasar a producción con Firebase

1. console.firebase.google.com → **Crear proyecto** (plan Spark gratis alcanza para empezar).
2. **Firestore Database** → Crear base de datos → modo producción → región `us-central` o la más cercana.
3. **Authentication** → Método de acceso → activa **Anónimo** y **Correo/contraseña**.
4. Authentication → Usuarios → crea dos usuarios: el del salón y el del dueño.
5. Configuración del proyecto → Tus apps → **Web** (`</>`) → copia el bloque `firebaseConfig` y pégalo en `config.js` en `firebase:`.
6. Pon esos dos correos en `staffEmails` / `ownerEmails` de `config.js` **y** en `firestore.rules`.
7. Firestore → **Reglas** → pega el contenido de `firestore.rules` → Publicar.
8. Authentication → Configuración → **Dominios autorizados** → agrega tu dominio (ej. `menu.turestaurante.com` o `xxx.netlify.app`).
9. Sube los archivos, abre `mesas.html`, imprime los QR.

## Cuántas lecturas gasta (plan gratis: 50.000 lecturas y 20.000 escrituras al día)

- **Menú, fotos, info, juegos**: 0 lecturas (viven en `config.js`).
- **Agotados/precios**: 1 lectura por visita.
- **Puntos del cliente**: 1 lectura al registrarse o una vez por visita.
- **Llamar mesero / cuenta / canje**: 1 escritura al crear + 1 lectura por cada cambio de estado (solo escucha su propia solicitud y se desconecta al terminar).
- **Panel del salón**: 1 escucha solo de solicitudes activas; cada cambio = 1 lectura.
- **Analítica**: 1 documento por día con contadores → ver 30 días = 30 lecturas. Los "platos más vistos" viajan dentro de la cuenta (0 escrituras extra).
- **Inventario**: 1 documento → 1 lectura al abrir, 1 escritura por cambio.

Una visita típica (llamar mesero + cuenta con SINPE) ronda 6–10 lecturas y 4–5 escrituras. Un restaurante con 150 cuentas al día queda muy por debajo del límite gratis.

## Cómo se evita que pidan "desde la casa"

1. **QR por mesa con clave**: `?m=7&k=xxxx`. La clave sale de `tableSalt`; un número de mesa inventado no funciona.
2. **Visita con vencimiento**: al escanear se abre una visita de `sessionHours` (3 h). Al confirmar el pago, la visita se cierra y hay que volver a escanear.
3. **Ubicación al momento de actuar**: llamar mesero, pedir cuenta y canjear piden el GPS y comparan contra `lat/lng` con un radio de `radiusM` (150 m). Fuera del radio se bloquea.
   - `requireLocation: "soft"`: si el cliente niega el permiso puede seguir, pero el salón ve "Sin ubicación".
   - `requireLocation: "strict"`: sin ubicación no se puede.
4. El menú sí se puede ver desde cualquier lugar (sirve como vitrina en Instagram/WhatsApp).

Mejora futura: un código de 4 dígitos en la mesa que cambie cada día, para restaurantes en centros comerciales donde el GPS es impreciso.

## Pagos

- **Ahora**: SINPE Móvil con monto exacto + referencia (`M7-K3P`); el salón confirma en la app del banco. Tarjeta y efectivo: el mesero lleva el datáfono.
- **Siguiente paso**: integrar ONVO Pay o Tilopay para que SINPE y tarjeta se confirmen solos. Eso requiere una función en el servidor (Firebase Cloud Functions, plan Blaze) para crear el cobro y recibir el webhook.

## Límites conocidos de esta versión

- El club de puntos identifica por teléfono sin código SMS. Por eso los canjes los aplica el mesero en la mesa. Para verificar por SMS se puede activar Firebase Phone Auth (tiene costo por SMS).
- Los platos, fotos y descripciones se editan en `config.js`. El dueño cambia agotados y precios desde su panel.
- El inventario es manual (entradas y salidas). Como los pedidos ya se toman en la app, el siguiente paso es asignar una receta a cada plato para descontar insumos al aceptar el pedido.
