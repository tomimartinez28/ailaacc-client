# Guía de Uso de Alias en el Proyecto AILAACC

## 📝 Alias Configurados

Este proyecto tiene configurados los siguientes alias para simplificar los imports:

| Alias | Ruta Real | Uso |
|-------|-----------|-----|
| `@` | `./src` | Raíz del proyecto |
| `@components` | `./src/components` | Componentes reutilizables |
| `@pages` | `./src/pages` | Páginas/vistas |
| `@assets` | `./src/assets` | Imágenes, íconos, etc. |
| `@hooks` | `./src/customHooks` | Custom hooks |
| `@utils` | `./src/utils` | Utilidades y helpers |
| `@services` | `./src/actions` | Servicios de API |
| `@store` | `./src/store` | Redux store |
| `@reducers` | `./src/reducers` | Redux reducers |
| `@hocs` | `./src/hocs` | Higher Order Components |

## ✅ Ejemplos de Uso

### ANTES (imports relativos):
```jsx
import { ContactForm } from '../../pages/home/ContactForm'
import { WppIcon } from '../../components/icons/WppIcon'
import { SocialPill } from '../../components/ui/SocialPill'
import store from './store'
```

### DESPUÉS (con alias):
```jsx
import { ContactForm } from '@pages/home/ContactForm'
import { WppIcon } from '@components/icons/WppIcon'
import { SocialPill } from '@components/ui/SocialPill'
import store from '@/store'
```

## 🎯 Ejemplos por Tipo de Archivo

### Importar componentes UI:
```jsx
import { Modal } from '@components/ui/Modal'
import { Dropdown } from '@components/ui/Dropdown'
import { Navbar } from '@components/Navbar'
```

### Importar páginas:
```jsx
import { HomePage } from '@pages/home/HomePage'
import { Sedes } from '@pages/sedes/Sedes'
import Login from '@pages/auth/Login'
```

### Importar assets (imágenes, íconos):
```jsx
import logo from '@assets/logo/logo.png'
import sedeImage from '@assets/sedes/charata.webp'
import { FacebookIcon } from '@components/icons/FacebookIcon'
```

### Importar hooks:
```jsx
import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { useIsDesktop } from '@hooks/useIsDesktop'
```

### Importar utilidades:
```jsx
import { cn } from '@utils/cn'
import { customStyles } from '@utils/customStyles'
import { ROUTES } from '@utils/const'
```

### Importar servicios/actions:
```jsx
import { login, logout } from '@services/auth'
```

### Importar store/reducers:
```jsx
import store from '@/store'
import { authReducer } from '@reducers/auth'
```

### Importar HOCs:
```jsx
import Layout from '@hocs/Layout'
```

## 🔧 Configuración del Editor

### VSCode
El archivo `jsconfig.json` ya está configurado para que VSCode reconozca los alias.
Tendrás autocompletado automático al escribir `@`.

### Reiniciar el servidor de desarrollo
Después de cambiar la configuración de Vite, reinicia el servidor:
```bash
npm run dev
```

## 📌 Buenas Prácticas

1. **Siempre usa alias** en lugar de rutas relativas largas (`../../..`)
2. **Usa el alias más específico** posible:
   - ✅ `@components/ui/Modal`
   - ❌ `@/components/ui/Modal` (funciona, pero menos específico)
3. **Mantén consistencia** en todo el proyecto
4. **No mezcles** rutas relativas y alias en el mismo archivo

## 🚀 Migración Gradual

No necesitas cambiar todos los imports de una vez. Puedes:
1. Usar alias en archivos nuevos
2. Actualizar archivos existentes cuando los edites
3. Hacer una migración masiva cuando tengas tiempo

## ❓ Solución de Problemas

### El autocompletado no funciona
1. Reinicia VSCode
2. Verifica que `jsconfig.json` existe en la raíz
3. Ejecuta "TypeScript: Restart TS Server" en VSCode (Cmd/Ctrl + Shift + P)

### Error "Cannot find module '@components/...'"
1. Reinicia el servidor de desarrollo (`npm run dev`)
2. Verifica que `vite.config.js` tiene la configuración de alias
3. Limpia la caché: `rm -rf node_modules/.vite`

---

**Nota:** Esta configuración mejora la mantenibilidad del código y hace más fácil mover archivos sin romper imports.
