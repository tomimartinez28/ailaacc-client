#!/usr/bin/env node

/**
 * Script para reorganizar la estructura del proyecto AILAACC
 * Uso: node reorganize-structure.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.join(__dirname, 'src')

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
}

function log (message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

// Crear directorio si no existe
function ensureDir (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    log(`✅ Creado: ${path.relative(__dirname, dir)}`, 'green')
  }
}

// Mover archivo
function moveFile (from, to) {
  const fromPath = path.join(srcDir, from)
  const toPath = path.join(srcDir, to)

  if (!fs.existsSync(fromPath)) {
    log(`⚠️  No encontrado: ${from}`, 'yellow')
    return false
  }

  ensureDir(path.dirname(toPath))
  fs.renameSync(fromPath, toPath)
  log(`📦 ${from} → ${to}`, 'blue')
  return true
}

// Crear estructura de carpetas
function createFolderStructure () {
  log('\n🏗️  Creando nueva estructura de carpetas...\n', 'bright')

  const folders = [
    // Components
    'components/common',
    'components/common/icons',
    'components/layout',
    'components/ui/Carousel',

    // Features
    'features/home/components',
    'features/contact/components',
    'features/contact/hooks',
    'features/sedes/components',
    'features/sedes/data',
    'features/work-with-us/components',
    'features/auth/components',
    'features/auth/pages',
    'features/auth/services',
    'features/auth/hooks',
    'features/admin/components',

    // Infrastructure
    'hooks',
    'services',
    'store/slices',
    'routes',
    'config',
    'styles'
  ]

  folders.forEach(folder => ensureDir(path.join(srcDir, folder)))
}

// Fase 1: Mover componentes comunes
function phase1_CommonComponents () {
  log('\n📦 FASE 1: Moviendo componentes comunes...\n', 'bright')

  // Mover Input
  moveFile('components/Input.jsx', 'components/common/Input.jsx')

  // Mover todos los icons
  const icons = [
    'AdminIcon', 'DropFileIcon', 'FacebookIcon', 'GpsIcon',
    'InstagramIcon', 'LinkedinIcon', 'LocationIcon', 'LogoutIcon',
    'MailIcon', 'ObraSocialIcon', 'PenIcon', 'ServiceIcon',
    'TimeCounterIcon', 'UploadIcon', 'UserIcon', 'WppIcon'
  ]

  icons.forEach(icon => {
    moveFile(
      `components/icons/${icon}.jsx`,
      `components/common/icons/${icon}.jsx`
    )
  })
}

// Fase 2: Mover componentes de layout
function phase2_LayoutComponents () {
  log('\n🎨 FASE 2: Moviendo componentes de layout...\n', 'bright')

  moveFile('components/Navbar.jsx', 'components/layout/Navbar.jsx')
  moveFile('components/Footer.jsx', 'components/layout/Footer.jsx')
  moveFile('hocs/Layout.jsx', 'components/layout/Layout.jsx')
}

// Fase 3: Organizar UI components
function phase3_UIComponents () {
  log('\n🎭 FASE 3: Organizando componentes UI...\n', 'bright')

  // Mover carousels a subcarpeta
  moveFile('components/ui/ServicesCarousel.tsx', 'components/ui/Carousel/ServicesCarousel.tsx')
  moveFile('components/ui/SedesCarousel.jsx', 'components/ui/Carousel/SedesCarousel.jsx')
  moveFile('components/ui/CarouselItem.jsx', 'components/ui/Carousel/CarouselItem.jsx')

  // Renombrar MainCard a Card
  moveFile('components/ui/MainCard.jsx', 'components/common/Card.jsx')
}

// Fase 4: Feature HOME
function phase4_HomeFeature () {
  log('\n🏠 FASE 4: Organizando feature HOME...\n', 'bright')

  moveFile('pages/home/HomePage.jsx', 'features/home/HomePage.jsx')
  moveFile('pages/home/HomeSection.jsx', 'features/home/components/HeroSection.jsx')
  moveFile('pages/home/AboutSection.jsx', 'features/home/components/AboutSection.jsx')
  moveFile('pages/home/ContactSection.jsx', 'features/home/components/ContactSection.jsx')
  moveFile('components/ServiceCard.jsx', 'features/home/components/ServiceCard.jsx')
}

// Fase 5: Feature CONTACT
function phase5_ContactFeature () {
  log('\n📧 FASE 5: Organizando feature CONTACT...\n', 'bright')

  moveFile('pages/home/ContactForm.jsx', 'features/contact/components/ContactForm.jsx')
}

// Fase 6: Feature SEDES
function phase6_SedesFeature () {
  log('\n📍 FASE 6: Organizando feature SEDES...\n', 'bright')

  moveFile('pages/sedes/Sedes.jsx', 'features/sedes/SedesPage.jsx')
  moveFile('pages/sedes/SedeCard.jsx', 'features/sedes/components/SedeCard.jsx')
}

// Fase 7: Feature WORK WITH US
function phase7_WorkWithUsFeature () {
  log('\n💼 FASE 7: Organizando feature WORK WITH US...\n', 'bright')

  moveFile('pages/home/WorkWithUs.jsx', 'features/work-with-us/components/WorkWithUsForm.jsx')
}

// Fase 8: Feature AUTH
function phase8_AuthFeature () {
  log('\n🔐 FASE 8: Organizando feature AUTH...\n', 'bright')

  moveFile('pages/auth/Login.jsx', 'features/auth/pages/LoginPage.jsx')
  moveFile('pages/auth/Signup.jsx', 'features/auth/pages/SignupPage.jsx')
  moveFile('pages/auth/ResetPassword.jsx', 'features/auth/pages/ResetPasswordPage.jsx')
  moveFile('pages/auth/ResetPasswordConfirm.jsx', 'features/auth/pages/ResetPasswordConfirmPage.jsx')
  moveFile('pages/auth/Activate.jsx', 'features/auth/pages/ActivatePage.jsx')

  moveFile('actions/auth.js', 'features/auth/services/authService.js')
  moveFile('actions/types.js', 'store/actionTypes.js')
}

// Fase 9: Feature ADMIN
function phase9_AdminFeature () {
  log('\n👨‍💼 FASE 9: Organizando feature ADMIN...\n', 'bright')

  moveFile('pages/admin/Admin.jsx', 'features/admin/AdminPage.jsx')
  moveFile('pages/admin/TimeCounter.jsx', 'features/admin/components/TimeCounter.jsx')
  moveFile('pages/admin/Tracing.jsx', 'features/admin/components/Tracing.jsx')
  moveFile('pages/home/Missing.jsx', 'features/home/components/MissingPage.jsx')
}

// Fase 10: Hooks
function phase10_Hooks () {
  log('\n🪝 FASE 10: Organizando hooks...\n', 'bright')

  moveFile('customHooks/useWindowDimensions.js', 'hooks/useWindowDimensions.js')
  moveFile('customHooks/useIsDesktop.js', 'hooks/useIsDesktop.js')
}

// Fase 11: Services y Store
function phase11_Infrastructure () {
  log('\n⚙️  FASE 11: Organizando infraestructura...\n', 'bright')

  moveFile('endpoints.js', 'services/endpoints.js')
  moveFile('store.js', 'store/index.js')
  moveFile('reducers/auth.js', 'store/slices/authSlice.js')
  moveFile('reducers/index.js', 'store/rootReducer.js')

  // Utils
  moveFile('utils/PrivateRoutes.jsx', 'routes/PrivateRoute.jsx')
  moveFile('utils/const.js', 'utils/constants.js')

  // Styles
  moveFile('index.css', 'styles/index.css')
}

// Limpiar carpetas vacías
function cleanupEmptyFolders () {
  log('\n🧹 Limpiando carpetas vacías...\n', 'bright')

  const foldersToRemove = [
    'customHooks',
    'hocs',
    'actions',
    'reducers',
    'pages/home',
    'pages/auth',
    'pages/admin',
    'pages/sedes',
    'pages',
    'components/icons'
  ]

  foldersToRemove.forEach(folder => {
    const folderPath = path.join(srcDir, folder)
    if (fs.existsSync(folderPath)) {
      try {
        fs.rmdirSync(folderPath)
        log(`🗑️  Eliminada carpeta vacía: ${folder}`, 'yellow')
      } catch (e) {
        log(`⚠️  No se pudo eliminar ${folder} (puede que no esté vacía)`, 'yellow')
      }
    }
  })
}

// Ejecutar migración
async function main () {
  log('\n' + '='.repeat(60), 'bright')
  log('🚀 REORGANIZACIÓN DE ESTRUCTURA - AILAACC CLIENT', 'bright')
  log('='.repeat(60) + '\n', 'bright')

  log('⚠️  ADVERTENCIA: Este script moverá archivos en tu proyecto.', 'yellow')
  log('   Asegúrate de tener un backup (git commit) antes de continuar.\n', 'yellow')

  // Confirmar
  log('Presiona Ctrl+C para cancelar, o Enter para continuar...', 'yellow')

  // Esperar input (simplificado para Node.js)
  await new Promise(resolve => {
    process.stdin.once('data', resolve)
  })

  try {
    createFolderStructure()
    phase1_CommonComponents()
    phase2_LayoutComponents()
    phase3_UIComponents()
    phase4_HomeFeature()
    phase5_ContactFeature()
    phase6_SedesFeature()
    phase7_WorkWithUsFeature()
    phase8_AuthFeature()
    phase9_AdminFeature()
    phase10_Hooks()
    phase11_Infrastructure()
    cleanupEmptyFolders()

    log('\n' + '='.repeat(60), 'bright')
    log('✨ ¡Reorganización completada exitosamente!', 'green')
    log('='.repeat(60) + '\n', 'bright')

    log('📋 PRÓXIMOS PASOS:', 'bright')
    log('1. Revisa los cambios: git status', 'blue')
    log('2. Actualiza los imports en los archivos (ejecuta migrate-imports.mjs)', 'blue')
    log('3. Actualiza main.jsx para importar styles/index.css', 'blue')
    log('4. Actualiza App.jsx con las nuevas rutas de pages', 'blue')
    log('5. Ejecuta: npm run dev', 'blue')
    log('6. Prueba que todo funcione', 'blue')
    log('7. Si todo está bien: git add . && git commit -m "Reorganizada estructura del proyecto"', 'blue')
  } catch (error) {
    log('\n❌ Error durante la reorganización:', 'red')
    log(error.message, 'red')
    log('\nSi algo salió mal, ejecuta: git reset --hard HEAD', 'yellow')
  }
}

// Ejecutar solo si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
