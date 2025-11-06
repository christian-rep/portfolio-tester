# Especificaciones para Testing - Portfolio Personal

## Selectores CSS para Testing

### Secciones Principales
- Navbar: `.navbar`
- Quien Soy: `#quien-soy` / `.presentacion`
- Formación Académica: `#formacion-academica` / `.formacion-academica`
- Experiencia Laboral: `#experiencia-laboral` / `.experiencia-laboral`
- Intereses: `#intereses` / `.intereses`
- Contacto: `#contacto` / `.contacto`
- Footer: `.footer`

### Elementos Testables (data-testid)
- Formulario: `[data-testid="contact-form"]`
- Campo nombre: `[data-testid="name-input"]`
- Campo email: `[data-testid="email-input"]`
- Campo teléfono: `[data-testid="phone-input"]`
- Campo fecha: `[data-testid="date-input"]`
- Campo archivo: `[data-testid="file-input"]`
- Checkbox términos: `[data-testid="terms-checkbox"]`
- Botón enviar: `[data-testid="submit-button"]`

## Criterios de Aceptación Verificables

### 1. Navegación
- [ ] Los enlaces de navegación redirigen a las secciones correctas
- [ ] La navegación es suave (smooth scrolling)
- [ ] La navbar permanece fija en la parte superior

### 2. Estilos CSS
- [ ] Sección Quien Soy tiene fondo `#f0f0f0` y margen superior ≥20px
- [ ] Formación Académica tiene texto alineado a izquierda
- [ ] Experiencia Laboral tiene tabla con bordes visibles
- [ ] Intereses tiene imágenes de 100x100px alineadas horizontalmente
- [ ] Contacto tiene formulario con borde 1px sólido
- [ ] Footer tiene íconos que cambian color al hover

### 3. Funcionalidad JavaScript
- [ ] Validación de formulario funciona correctamente
- [ ] Mensajes de error se muestran apropiadamente
- [ ] Animaciones al scroll se ejecutan correctamente
- [ ] Navegación suave funciona en todos los navegadores

### 4. Responsive Design
- [ ] Diseño se adapta a dispositivos móviles (<768px)
- [ ] Tabla de experiencia es legible en móviles
- [ ] Navegación es usable en touch devices

## Comandos de Testing Sugeridos

```bash
# Servidor de desarrollo
npm run dev

# Ejecutar tests (cuando se configuren)
npm test

# Linting de código
npm run lint