/*!
 * Color mode toggler for CoreUI's docs (https://coreui.io/)
 * Copyright (c) 2023 creativeLabs Łukasz Holeczek
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

;(() => {
  'use strict'

  const THEME = 'coreui-docs-theme'

  const getStoredTheme = () => localStorage.getItem(THEME)
  const setStoredTheme = (theme) => localStorage.setItem(THEME, theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = (theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-coreui-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-coreui-theme', theme)
    }
  }

  const showActiveTheme = (theme) => {
    document.querySelectorAll('[data-coreui-theme-value]').forEach((element) => {
      element.classList.remove('active')
    })
  }

  // Event delegation para manejar clicks en elementos dinámicos
  const handleThemeToggle = (event) => {
    console.log('Click detectado en:', event.target)
    const toggle = event.target.closest('[data-coreui-theme-value]')
    if (!toggle) return

    event.preventDefault()

    const theme = toggle.getAttribute('data-coreui-theme-value')
    setStoredTheme(theme)
    setTheme(theme)
    showActiveTheme(theme)
  }

  // Inicializar tema
  setTheme(getPreferredTheme())

  // Escuchar cambios en la preferencia del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  // Usar event delegation en el documento para manejar clicks
  document.addEventListener('click', handleThemeToggle)

  // Mostrar tema activo al cargar
  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())
  })
})()
