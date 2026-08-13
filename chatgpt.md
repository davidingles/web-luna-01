# Reglas Globales del Proyecto y Entorno

## 💻 Entorno de Desarrollo y Sistema Operativo
- **Idioma de respuesta:** Español estricto.
- **Sistema Operativo:** Windows 11.
- **Terminal:** PowerShell 7 (`pwsh`). Todos los comandos de terminal provistos deben ser compatibles con este entorno.
- **Flujo de trabajo:** Planificar la estrategia y preguntar/confirmar con el usuario antes de ejecutar cualquier acción o escribir código masivo.

## 🛠️ Stack Tecnológico Autorizado
- **Frontend:** HTML5, CSS3 clásico, JavaScript moderno (ES6+ utilizando Clases/POO).
- **Gráficos:** Three.js (vía módulos ES nativos).
- **Backend:** Node.js, Express y PostgreSQL.
- **Restricción estricta:** No usar tecnologías, librerías o frameworks adicionales (ej. React, Vue, Tailwind, Webpack, Vite) sin preguntar previamente al usuario, o a menos que sean estrictamente necesarias y aprobadas.

## 📦 Reglas Específicas para Three.js (Evitar JS Antiguo)
- **Sintaxis ES6+ Obligatoria:** Queda estrictamente prohibido usar importaciones antiguas de scripts globales en el HTML o sintaxis obsoleta que dependa del objeto global `THREE` (ej. `const scene = new THREE.Scene()`).
- **Uso de Módulos ES:** Todo el código tridimensional debe estructurarse mediante módulos nativos de JavaScript utilizando `import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'`.
- **Integración POO:** La lógica de Three.js (inicialización de escena, bucle de animación `requestAnimationFrame` y destrucción de recursos) debe estar encapsulada dentro de los métodos de las Clases de los componentes correspondientes.

## 📁 Automatización, Inicialización y Archivos del Sistema
Cada vez que se inicie el proyecto o se generen estructuras de archivos, se deben cumplir obligatoriamente los siguientes pasos:
1. **Git:** Inicializar repositorio con `.git`, crear un archivo `.gitignore` adecuado para Node/PostgreSQL, y preparar el entorno ejecutando: `git add .` y `git commit -m "feat: initial commit"`.
2. **Favicon:** Crear siempre un archivo `favicon.ico`. Si no existe uno físico, inventar o codificar un diseño básico (SVG o Base64).
3. **Personalización de Carpeta (Windows):** 
   - Utilizar el `favicon.ico` como icono visual de la carpeta raíz del proyecto.
   - Crear un archivo `desktop.ini` en la raíz para que el Explorador de Archivos de Windows muestre exactamente los siguientes metadatos:
     * Etiquetas (Keywords): `david`
     * Comentarios (InfoTip): `app en proceso`
4. **Documentación:** Crear siempre un archivo `README.md` explicativo con la estructura actual del proyecto.

## 🎨 Directrices del Frontend y Diseño
- **Estilos:** No usar estilos en línea (`style="..."`) bajo ninguna circunstancia. Todo el diseño debe ir en hojas de estilo CSS externas y limpias.
- **Modularidad:** Arquitectura de carpetas totalmente separadas, limpias y escalables (Frontend/Backend aislados). Uso estricto de ES Modules (`import`/`export`).

## 🧱 Arquitectura de Componentes (POO en Vanilla JS)
- **Estructura Base:** Cada vista, página o componente visual de la SPA debe ser una Clase de JavaScript (ES6) que extienda de una clase base común o implemente una interfaz estándar.
- **Métodos obligatorios por componente:**
  * `constructor(props)`: Inicializa el estado local del componente y recibe propiedades.
  * `render()`: Retorna exclusivamente una cadena de texto (Template String) con el HTML limpio del componente.
  * `mount(container)`: Inyecta el HTML en el contenedor del DOM y vincula los escuchadores de eventos (`addEventListener`).
  * `afterMount()`: Método dedicado exclusivamente a registrar eventos del DOM o inicializar Three.js una vez el contenedor ya exista en la página.
- **Encapsulamiento:** El estado interno y las propiedades críticas de la clase deben ser privados (usando `#propiedad`) o protegidos por convención (`_propiedad`).

### Ejemplo de Estructura de Referencia (No regenerar este código en las respuestas)
```js
export class Component {
    constructor(props = {}) { 
        this.props = props; 
        this.state = {}; 
    }
    render() { return ''; }
    mount(container) { 
        container.innerHTML = this.render(); 
        this.afterMount(); 
    }
    afterMount() {} 
}
```
