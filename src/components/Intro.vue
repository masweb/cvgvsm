<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { NButton } from 'naive-ui'
import { MouseIcon, SquareIcon, PlusIcon, MinusIcon } from 'vue-tabler-icons'

const columns = ref(48)
const rows = ref(48)

let blocks = reactive(new Array(columns.value * rows.value))
const gutter = ref(1)
const rectangle = reactive<{ x: number, y: number, w: number, h: number, isDrawing: boolean }>({ x: 0, y: 0, w: 0, h: 0, isDrawing: false })
const gridRef = ref(null as HTMLDivElement | null)
let startBlockX = 0
let startBlockY = 0
let endBlockX = 0
let endBlockY = 0

interface GridObject {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rect: {
    x: number;
    y: number;
    w: number;
    h: number;
    isDrawing: boolean;
  };
}
let selectedBlocks = reactive<number[]>([])
let gridObject: GridObject = reactive({
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  rect: { x: 0, y: 0, w: 0, h: 0, isDrawing: false },
});


onMounted(() => {
  document.title = 'CV. Guillermo Valentín Sánchez'
})


const handleTouchStart = (event: TouchEvent) => {
  document.body.style.overflow = 'hidden'
  handleMouseDown(event.touches[0])
}

const handleTouchMove = (event: TouchEvent) => {
  handleMouseMove(event.touches[0])
}

const handleTouchEnd = () => {
  document.body.style.overflow = 'auto'
  handleMouseUp()
}


const handleMouseDown = (event: Touch) => {
  if (gridObject.startX == 0 && gridRef.value) {
    const rect = gridRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    rectangle.x = x
    rectangle.y = y
    rectangle.isDrawing = true
  }
}


const handleMouseMove = (event: Touch) => {

  if (rectangle.isDrawing && gridRef.value && gridObject.startX == 0) {
    const gridWidth = gridRef.value.offsetWidth
    const gridHeight = gridRef.value.offsetHeight
    const blockWidth = gridWidth / columns.value
    const blockHeight = gridHeight / rows.value
    const rect = gridRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    rectangle.w = x - rectangle.x
    rectangle.h = y - rectangle.y

    draw(blockWidth, blockHeight)
  }
}

const draw = useThrottleFn((blockWidth: number, blockHeight: number) => {
  if (gridObject.startX == 0) {
    startBlockX = Math.floor(rectangle.x / blockWidth)
    startBlockY = Math.floor(rectangle.y / blockHeight)
    endBlockX = Math.floor((rectangle.x + rectangle.w) / blockWidth)
    endBlockY = Math.floor((rectangle.y + rectangle.h) / blockHeight)
    selectedBlocks = []

    for (let i = startBlockY; i <= endBlockY; i++) {
      for (let j = startBlockX; j <= endBlockX; j++) {
        selectedBlocks.push(i * columns.value + j)
      }
    }
  }
}, 100)

const handleMouseUp = () => {
  if (gridObject.startX == 0 && selectedBlocks.length > 6) {
    rectangle.isDrawing = false
    gridObject = { startX: startBlockX, startY: startBlockY, endX: endBlockX, endY: endBlockY, rect: { ...rectangle } }
    const blocksUsed = (endBlockX - startBlockX + 1) * (endBlockY - startBlockY + 1)
    blocks.splice(0, blocksUsed)
    selectedBlocks.length = 0
  } else {
    selectedBlocks.length = 0
    rectangle.isDrawing = false
  }
}

const increaseGutter = () => {
  gutter.value++
}

const decreaseGutter = () => {
  if (gutter.value > 1) {
    gutter.value--
  }
}

</script>

<template>
  <div>
    <h2 class="center mb0" style="font-weight: 300">Guillermo Valentín Sánchez </h2>
    <h3 class="center font-weight-light mt1" style="font-weight: 400"> Desarrollador front end</h3>

    <h2 class="center" style="font-weight: 200">Por favor, dibuje un recuadro en la rejilla para acceder al currículum.</h2>

    <div class="appGrid" ref="gridRef"
         @mousedown="handleMouseDown"
         @mousemove="handleMouseMove"
         @mouseup="handleMouseUp"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         :style="{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridGap: `${gutter}px` }">

      <div v-for="(block, index) in blocks" :key="index" class="gridBlock"
           :class="{ 'selected': selectedBlocks.includes(index) }">
        {{ block }}
      </div>

      <div v-if="gridObject.startX!=0" :style="{ gridColumn: `${gridObject.startX + 1} / ${gridObject.endX + 2}`,
                   gridRow: `${gridObject.startY + 1} / ${gridObject.endY + 2}`,
                   border: '1px solid #fff', borderRadius: '4px' }">
        <div class="flex items-center justify-center" style="height: 100%">
          <RouterLink to="/cv">
            <n-button>Ver currículum</n-button>
          </RouterLink>
        </div>

      </div>

    </div>


    <div class="flex justify-center mt-4">
      <div class="flex  ml-3">
        <div class="flex flex-column mt1">
          <n-button size="tiny" @click="increaseGutter">
            <PlusIcon stroke-width="1" size="16" />
          </n-button>
          <n-button size="tiny" @click="decreaseGutter">
            <MinusIcon stroke-width="1" size="16" />
          </n-button>
        </div>

        <div class="flex  mt1">
          <MouseIcon stroke-width=".4" size="44" />
          <div class="cifra mt3">
            <div>x: {{ Math.ceil(rectangle.x) }}</div>
            <div>y: {{ Math.ceil(rectangle.y) }}</div>
            <div>w: {{ Math.ceil(rectangle.w) }}</div>
            <div>h: {{ Math.ceil(rectangle.h) }}</div>
          </div>
        </div>
        <div class="flex  mt1">

          <SquareIcon stroke-width=".4" size="44" />
          <div class="cifra">
            <div>x: {{ startBlockX }}</div>
            <div>y: {{ startBlockY }}</div>
            <div>x: {{ endBlockX }}</div>
            <div>y: {{ endBlockY }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
