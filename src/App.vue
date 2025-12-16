<script setup lang="ts">
import { esAR, dateEsAR } from 'naive-ui'
import { useDark, useToggle } from '@vueuse/core'
import { createTheme, inputDark, datePickerDark, cardDark, buttonDark } from 'naive-ui'
import { ref, watch } from 'vue'
import { IconTypography, IconItalic } from '@tabler/icons-vue'

const darkTheme = createTheme([inputDark, datePickerDark, cardDark, buttonDark])
const isDark = useDark()
const toggleDark = useToggle(isDark)

import { NConfigProvider, NSpace, NSelect, NButton } from 'naive-ui'

const isTransitioning = ref(false)

// Tipografía
const currentFont = ref('STIX Two Text')
const currentWeight = ref('400')
const isItalic = ref(true)

const weightOptions = [
  { label: '100 - Thin', value: '100' },
  { label: '200 - Extra Light', value: '200' },
  { label: '300 - Light', value: '300' },
  { label: '400 - Regular', value: '400' },
  { label: '500 - Medium', value: '500' },
  { label: '600 - Semi Bold', value: '600' },
  { label: '700 - Bold', value: '700' },
  { label: '800 - Extra Bold', value: '800' },
  { label: '900 - Black', value: '900' }
]

const toggleFont = () => {
  currentFont.value = currentFont.value === 'STIX Two Text' ? 'Inter' : 'STIX Two Text'
  updateBodyFont()
}

const toggleItalic = () => {
  isItalic.value = !isItalic.value
  updateBodyFont()
}

const updateBodyFont = () => {
  document.body.style.fontFamily =
    currentFont.value === 'STIX Two Text' ? "'STIX Two Text', serif" : "'Inter', sans-serif"
  document.body.style.fontWeight = currentWeight.value
  document.body.style.fontStyle = isItalic.value ? 'italic' : 'normal'
}

watch(currentWeight, () => {
  updateBodyFont()
})

watch(isItalic, () => {
  updateBodyFont()
})

// Aplicar fuente inicial
updateBodyFont()

const handleToggle = () => {
  isTransitioning.value = true
  setTimeout(() => {
    toggleDark()
    setTimeout(() => {
      isTransitioning.value = false
    }, 50)
  }, 150)
}
</script>

<template>
  <div class="app-container">
    <div class="content" :class="{ transitioning: isTransitioning }">
      <div class="controls">
        <div @click="handleToggle" class="toggle"></div>
        <n-button @click="toggleFont" class="font-toggle" size="small"><IconTypography size="50" /></n-button>
        <n-button @click="toggleItalic" class="italic-toggle" size="small"><IconItalic size="50" /></n-button>
        <n-select
          v-model:value="currentWeight"
          :options="weightOptions"
          class="weight-select"
          size="small"
          placeholder="Peso"
        />
      </div>
      <n-config-provider style="width: 100%" :theme="!isDark ? null : darkTheme" :locale="esAR" :date-locale="dateEsAR">
        <n-space vertical>
          <RouterView />
        </n-space>
      </n-config-provider>
    </div>
  </div>
</template>
