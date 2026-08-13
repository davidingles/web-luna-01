# VerdeForma

Landing page mobile-first para una fábrica de envases y embalajes de cartón corrugado. Incluye servicios de envases, embalaje, impresión y troquelado, animaciones suaves y un formulario de contacto conectado a un backend Express.

## Requisitos

- Node.js 18 o superior. Se recomienda Node.js 20 LTS o 22 LTS.
- npm, incluido normalmente con Node.js.
- PowerShell 7 en Windows.

Comprueba las versiones:

```powershell
node --version
npm --version
```

## Estructura del proyecto

Los comandos de npm se ejecutan siempre desde la carpeta raíz, es decir, desde:

```text
D:\_DIL\Mis Devs\web-luna-01
```

La aplicación no se arranca desde `frontend`. Esa carpeta contiene únicamente los archivos de la interfaz y no tiene un `package.json` propio.

```text
web-luna-01/
├── frontend/             # HTML, CSS y JavaScript del navegador
├── backend/              # Servidor Node.js + Express y API
├── database/             # Esquema preparado para PostgreSQL
├── package.json          # Scripts y dependencias del proyecto
└── package-lock.json     # Versiones exactas instaladas
```

## Instalación desde cero

Abre PowerShell y ejecuta exactamente:

```powershell
Set-Location 'D:\_DIL\Mis Devs\web-luna-01'
npm install
```

`npm install` debe terminar creando la carpeta `node_modules`. Si ya existe y la instalación fue correcta, no es necesario repetirlo.

## Arrancar la aplicación

Desde la raíz del proyecto ejecuta:

```powershell
Set-Location 'D:\_DIL\Mis Devs\web-luna-01'
npm start
```

Si funciona, PowerShell mostrará:

```text
VerdeForma disponible en http://localhost:3000
```

No cierres esa ventana: el servidor debe permanecer ejecutándose. Después abre manualmente en el navegador:

```text
http://localhost:3000
```

Para detenerlo, vuelve a la ventana de PowerShell y pulsa `Ctrl + C`.

## Modo desarrollo

Este modo reinicia Node automáticamente cuando modificas archivos:

```powershell
Set-Location 'D:\_DIL\Mis Devs\web-luna-01'
npm run dev
```

## Comprobar que funciona

Con el servidor activo, abre estas direcciones:

1. `http://localhost:3000` debe mostrar la landing.
2. `http://localhost:3000/api/health` debe mostrar `{"ok":true}`.

También puedes comprobarlo desde otra ventana de PowerShell:

```powershell
Invoke-WebRequest 'http://localhost:3000/api/health' -UseBasicParsing
```

El formulario de contacto necesita que el servidor esté activo. Al enviarlo, la consulta se valida y se muestra en la consola de la ventana donde ejecutaste `npm start`. Actualmente es una demostración: todavía no envía emails ni guarda datos en PostgreSQL.

## Si `npm start` no funciona

### Error: `Missing parameter name at index 1: *`

Ese error pertenecía a una versión anterior de `backend/server.js` que usaba una ruta comodín incompatible con Express 5. El archivo actual ya utiliza un middleware compatible. Si todavía aparece, comprueba que estás ejecutando el proyecto correcto:

```powershell
Set-Location 'D:\_DIL\Mis Devs\web-luna-01'
Get-Content .\backend\server.js
npm start
```

### Error: `Cannot find module` o no existe `node_modules`

Instala las dependencias desde la raíz:

```powershell
Set-Location 'D:\_DIL\Mis Devs\web-luna-01'
npm install
npm start
```

### Error: `EADDRINUSE` o el puerto 3000 ya está ocupado

Otro proceso está usando el puerto. Puedes arrancar esta aplicación en otro puerto:

```powershell
$env:PORT = '3001'
npm start
```

En ese caso abre `http://localhost:3001`. Para volver al puerto normal en esa misma ventana:

```powershell
Remove-Item Env:PORT
```

### El navegador dice que no puede conectarse

Comprueba que la consola todavía muestra el mensaje `VerdeForma disponible...`. Si la ventana se cerró o aparece un error, el servidor no está activo. Ejecuta `npm start` de nuevo y conserva esa ventana abierta.

### La página carga sin estilos o sin animaciones

No abras `frontend/index.html` haciendo doble clic. La página debe abrirse mediante `http://localhost:3000`, porque el servidor entrega correctamente los archivos CSS, JavaScript y el endpoint del formulario.

## Base de datos

El archivo `database/schema.sql` contiene la tabla `contact_requests` para PostgreSQL. La aplicación actual no necesita PostgreSQL para mostrar la landing ni para probar el formulario; el backend solo registra temporalmente las consultas en la consola.

## Datos de contacto usados como referencia

- Auxiliar Manipuladora del Cartón, S.L.
- C/ Los Mateos, 1, 30564 Lorquí, Murcia
- Teléfono: 968 693 575
- Email: info@laauxiliar.es

La información se tomó de la página pública de aviso legal de `laauxiliar.es` y la narrativa de VerdeForma se redactó de forma original.
