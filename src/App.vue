<script setup lang="ts">
import { esAR, dateEsAR } from 'naive-ui'

import { useDark, useToggle } from '@vueuse/core'

import { createTheme, inputDark, datePickerDark, cardDark, buttonDark } from 'naive-ui'

const darkTheme = createTheme([inputDark, datePickerDark, cardDark, buttonDark])
const isDark = useDark()
const toggleDark = useToggle(isDark)

import { NConfigProvider, NSpace } from 'naive-ui'

</script>

<template>
  <div>
    <div @click="toggleDark()" class="toggle"></div>
    <n-config-provider style="width: 100%;" :theme="!isDark ? null : darkTheme" :locale="esAR" :date-locale="dateEsAR">
      <n-space vertical>
        <RouterView />
      </n-space>
    </n-config-provider>
  </div>
</template>


