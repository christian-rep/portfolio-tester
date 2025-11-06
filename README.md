# Portfolio Personal - Christian Acuña

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)

Portfolio personal desarrollado como proyecto final del curso de testing. Sitio web one-page completamente responsive que muestra información profesional, formación académica, experiencia laboral e incluye un formulario de contacto funcional.

## 🚀 Características

- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Navegación Suave**: Scroll animado entre secciones
- **Formulario Validado**: Validación en tiempo real con JavaScript
- **Sin Dependencias**: Código vanilla HTML, CSS y JavaScript
- **Accesibilidad**: Atributos ARIA y soporte para navegación por teclado
- **Testeable**: Estructura preparada para testing unitario y automatizado

## 📋 Estructura del Proyecto
portfolio-personal/
│
├── index.html # Página principal
├── style.css # Estilos CSS
├── script.js # Funcionalidades JavaScript
├── README.md # Este archivo
├── TESTING-SPECS.md # Especificaciones para testing
├── package.json # Configuración del proyecto
└── .gitignore # Archivos ignorados por Git


## 🎯 Secciones Implementadas

### 1. Navegación
- Barra de navegación fija en la parte superior
- Enlaces ancla a todas las secciones
- Diseño responsive con menú adaptable

### 2. Quien Soy
- Presentación personal profesional
- Fondo color `#f0f0f0` según especificaciones
- Margen superior de 20px

### 3. Formación Académica
- Lista de títulos académicos y cursos complementarios
- Texto alineado a la izquierda
- Colores diferenciados para ítems

### 4. Experiencia Laboral
- Tabla con historial profesional
- Bordes visibles y espaciado entre celdas
- Diseño responsive para móviles

### 5. Intereses
- Iconos representativos de hobbies
- Imágenes de 100x100px alineadas horizontalmente
- Efectos hover en iconos

### 6. Contacto
- Formulario completo con validación
- Campos: nombre, email, teléfono, fecha, archivo
- Checkbox de términos y condiciones
- Borde sólido y centrado vertical

### 7. Footer
- Íconos de redes sociales con efectos hover
- Copyright y información de contacto

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Flexbox, Grid, Media Queries, Animaciones
- **JavaScript ES6+**: Validaciones, Navegación, Interactividad
- **Git**: Control de versiones
- **GitHub Pages**: Hosting (opcional)

## 📱 Diseño Responsive

El sitio está optimizado para:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🧪 Testabilidad

El proyecto incluye:

- Selectores CSS específicos para cada sección
- Atributos `data-testid` para elementos interactivos
- Propiedades CSS comprobables (colores, bordes, tamaños)
- Validación de formulario testeable
- Especificaciones completas en `TESTING-SPECS.md`

## 🚀 Instalación y Uso

### Opción 1: Servidor Local
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-personal.git

# Navegar al directorio
cd portfolio-personal

# Ejecutar servidor local (requiere Python)
python -m http.server 8000

# Abrir en navegador: http://localhost:8000



Desarrollado como parte del Curso de Testing - 2025