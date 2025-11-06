# Guía de Despliegue - Portfolio Personal

Esta guía explica cómo desplegar el portfolio personal en diferentes plataformas.

## Despliegue en GitHub Pages

### Método 1: Desde configuración del repositorio
1. Ve a la página de tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona la rama `main` (o `master`)
5. Haz clic en **Save**
6. Tu sitio estará disponible en: `https://github.com/christian-rep/portfolio-tester/`

### Método 2: Usando GitHub CLI
```bash
# Instalar GitHub CLI
# Subir cambios
git add .
git commit -m "deploy: preparar para producción"
git push origin main