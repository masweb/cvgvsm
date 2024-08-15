<script lang="ts" setup>
import { onMounted } from 'vue'

import {
  NGrid, NGridItem
} from 'naive-ui'

onMounted(() => {
  document.title = 'CV. Guillermo Valentín Sánchez'
})

</script>

<template>

  <div class="container mb5">
    <n-grid class="mt3" cols="1 s:1 m:2 " x-gap="10" responsive="screen">
      <n-grid-item>
        <div class="flex justify-end">
          <img class="pic" src="/pic.jpeg" />
        </div>
      </n-grid-item>
      <n-grid-item class="letter">
        <div><strong>Guillermo Valentín Sánchez</strong></div>
        <p class="mt0 mb0">Desarrollador front end senior.</p>
        <p class="mt0 mb0">Diseñador gráfico.</p>
        <p class="mt0">nacimiento: 1973</p>

        <p class="text">Hola!, desde el año 1992 he trabajado en entornos de edición y publicidad.
          Entusiasta de las tecnologías y desarrollo de software, autodidacta, codificando profesionalmente desde 2012.
          Transicioné el paso de jQuery para todo a javascript moderno en entornos profesionales.</p>
        <p class="text">Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en Vue 3, Typescript y Nuxt 3
          al realizar una gran cantidad de proyectos profesionales únicamente en este ecosistema (también en las versiones 2). Podría crear y adaptarme con cierta facilidad proyectos de React y Angular. </p>

        <p class="text">Reutilización de componentes, estudio de la arquitectura, buenas prácticas, código legible y mantenible,
          pruebas unitarias y end to end.</p>
        <p class="text">Configuración y manejo de Git, GitHub, Docker, IA para programar.</p>
        <p class="text">Usabilidad, interfaces gráficas, WYSIWYG, accesibilidad, multiidioma.</p>
        <p class="text">Desarrollo de aplicaciones completas, backend GO - Gin o en PHP - Laravel o Typescript - Adonis JS.</p>
        <p class="text">Comercio elecrónico, backoffices personalizados, aplicaciones de móviles y de escritorio. Interesado en el la publicación de IA para
          usuario final, WASM y GO.</p>

        <p class="text mt3">Soy una persona con <a target="_blank" href="https://es.wikipedia.org/wiki/Sensibilidad_de_procesamiento_sensorial">SPS</a>,
          utilizo el
          proceso intensivo, capacidad de análisis, cuidado de los detalles... para prácticamente todo, por lo que quizás posea
          <a target="_blank"
             href="https://mariagomezpsicologia.com/altas-capacidades/que-relacion-hay-entre-alta-sensibilidad-y-altas-capacidades-lo-que-dicen-las-investigaciones/">altas
            capacidades</a>, ya que puedo aprender y abordar temáticas complejas en todos los ámbitos en muy poco tiempo.</p>
      </n-grid-item>

    </n-grid>


    <n-grid class="mt0" cols="1 s:1 m:2 " x-gap="10" responsive="screen">

      <n-grid-item>
        <h3 class="mb0"><strong>Formación</strong></h3>
        <p class="mb0"><b>Centro de estudios de informática superior Alicante.</b></p>
        <p class="mt0">Programador de gestión - Analista programador 1990 – 1992. </p>
        <p class="mb0"><b>Cursando ChatGPT Prompt Engineering for Developers</b></p>
        <p class="mt0">Actualidad </p>


      </n-grid-item>
      <n-grid-item>
        <h3 class="mb2"><strong>Autodidacta</strong></h3>
        <p class="mt0">Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc...
          de todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software. </p>
        <h3 class="mb0"><strong>Inglés</strong></h3>
        <p class="mb0">Leo y es escribo pero no hablo ni entiendo con facilidad.</p>
      </n-grid-item>

    </n-grid>


    <h3 class="mt3 mb0"><strong>Experiencia</strong></h3>


    <n-grid class="mt0" cols="1 s:1 m:3 " x-gap="10" responsive="screen">

      <n-grid-item>
        <p class="mb0"><b>Bmotion</b></p>
        <p class="mt0 mb0">Desarrollo aplicaciones nocode</p>
        <p class="mt0">may.2022 • Actualidad • Madrid (remoto)</p>

        <p class="mb0"><b>Indexeo Marketing</b></p>
        <p class="mt0 mb0">Desarrollo web, mantenimiento</p>
        <p class="mt0">ene.2021 • mayo 2022 • Ibi (remoto)</p>

        <p class="mb0"><b>Por cuenta propia</b></p>
        <p class="mt0 mb0">Desarrollo web, diseño gráfico/web</p>
        <p class="mt0">ene.2020 • ene.2021 • Santa Pola</p>

        <p class="mb0"><b>NovoSpain</b></p>
        <p class="mt0 mb0">Desarrollo web, diseño gráfico</p>
        <p class="mt0 mb1">nov.2016 • ene.2020 • Elche</p>
      </n-grid-item>

      <n-grid-item>
        <p class="mb0 mt1"><b>3dids.com</b></p>
        <p class="mt0 mb0">Desarrollo front-end</p>
        <p class="mt0">mar.2016 • nov.2016 • Alicante</p>

        <p class="mb0"><b>Fractal Internet Consultancy</b></p>
        <p class="mt0 mb0">Desarrollo web y diseño gráfico/web</p>
        <p class="mt0">jun.2012 • oct.2015 • Madrid (remoto)</p>

        <p class="mb0"><b>Baluarte Comunicación, S.L.</b></p>
        <p class="mt0 mb0">Desarrollo web y diseño gráfico</p>
        <p class="mt0">may.2009 • nov.2012 • Santa Pola</p>

        <p class="mb0"><b>MASA International</b></p>
        <p class="mt0 mb0">Diseñador Gráfico (encargado dept.)</p>
        <p class="mt0 mb1">jun.2005 • sept.2008 • Torrevieja</p>
      </n-grid-item>


      <n-grid-item>
        <p class="mb0 mt1"><b>Imprenta Hnos. Rastoll</b></p>
        <p class="mt0 mb0">Diseñador Gráfico, artefinalista</p>
        <p class="mt0">dic.2003 • oct.2005 • Santa Pola</p>

        <p class="mb0"><b>Cartel Rotulación, S.L.</b></p>
        <p class="mt0 mb0">Diseño para exteriores, rotulación e impresión</p>
        <p class="mt0">feb.2000 • abr.2003 • Alicante</p>

        <p class="mb0"><b>Rusan Copy, S.L (CopyFlash)</b></p>
        <p class="mt0 mb0">Diseño para exteriores, rotulación e impresión</p>
        <p class="mt0">ene.1993 • ene.2000 • Alicante</p>
      </n-grid-item>
    </n-grid>

    <h3 class="mt3 mb0"><strong>Habilidades</strong></h3>
    <h3 class="mb0"><strong>Frontend</strong></h3>
    <n-grid class="mt0" cols="1 s:1 m:3 " x-gap="10" responsive="screen">
      <n-grid-item>
        <p class="mb2 mt2">Código mantenible y legible, convenciones de código.</p>
        <p class="mb2 mt2">Gestión de conexión, repositorios API, fetch, ofetch, axios..</p>
        <p class="mb2 mt2">Internacionalización.</p>
        <p class="mb2 mt2">Persistencia de datos. IndexDB, LocalStorage, Node fs ...</p>
        <p class="mb2 mt2">Autenticación.</p>
        <p class="mb2 mt2">Manejo y conversión de fechas.</p>
        <p class="mb2 mt2">Creación programática y previsualización de PDF.</p>
        <p class="mb2 mt2">Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y soltar, calendario interactivo.</p>
        <p class="mb1 mt2">Validación front-end y back-end en vivo.</p>
      </n-grid-item>
      <n-grid-item>
        <p class="mb2 mt1">Marcado semántico.</p>
        <p class="mb1 mt2">Web components, modularización, reutilización.</p>
        <p class="mb2 mt2">Web App.</p>
        <p class="mb2 mt2">Cookies.</p>
        <p class="mb2 mt2">Canvas.</p>
        <p class="mb2 mt2">Audio y video en la web.</p>
        <p class="mb2 mt2">Pre-procesadores CSS.</p>
        <p class="mb2 mt2">Desarrollo responsive, mobile first.</p>
        <p class="mb2 mt2">Frameworks: Bulma, Naive-ui, Bootstrap, Fundation, Pure, UI-Kit, Skeleton...</p>
        <p class="mb2 mt2">Tipografía web.</p>
        <p class="mb2 mt2">Gráficos vectoriales (svg).</p>
        <p class="mb1 mt2">Animaciones CSS.</p>
      </n-grid-item>
      <n-grid-item>
        <p class="mb2 mt1">Javascript orientado a objetos.</p>
        <p class="mb2 mt2">Javascript asíncrono.</p>
        <p class="mb2 mt2">Estructuras de datos Json.</p>
        <p class="mb2 mt2">TypeScript.</p>
        <p class="mb1 mt2">Arquitectura hexagonal.</p>
        <p class="mb2 mt2">Motores de plantillas (pug, blade, liquid...).</p>
        <p class="mb2 mt2">Gestión de estado, Pinia.. </p>
        <p class="mb2 mt2">Prototipado UI-UX.</p>
        <p class="mb1 mt2">Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.</p>
      </n-grid-item>
    </n-grid>



    <h3 class="mb0"><strong>Backend</strong></h3>
    <n-grid class="mt0" cols="1 s:1 m:3 " x-gap="10" responsive="screen">
      <n-grid-item>
        <p class="mb2 mt1">Creación de backend API Rest o con plantillas con GO/Gin, TypeScript/Adonis, PHP/Laravel</p>
        <p class="mb2 mt1">Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB, Postgress...</p>
        <p class="mb2 mt2">Migraciones y generación de datos de prueba.</p>
        <p class="mb2 mt2">Login y registro seguro, encriptación.</p>
        <p class="mb1 mt2">Gestión y proceso de ficheros desde el servidor, imagen, vectorial, excel, pdf ...</p>
      </n-grid-item>
      <n-grid-item>
        <p class="mb1 mt1">Paginación.</p>
        <p class="mb2 mt2">Envío de correos automatizados.</p>
        <p class="mb2 mt2">Creación de tareas periódicas.</p>
        <p class="mb2 mt2">Caché en disco o memoria.</p>
        <p class="mb1 mt2">Manejo de eventos y colas de eventos.</p>
      </n-grid-item>
      <n-grid-item>
        <p class="mb2 mt1">Uso de Linux.</p>
        <p class="mb2 mt2">Gestión de dependencias.</p>
        <p class="mb2 mt2">Test unitarios.</p>
        <p class="mb2 mt2">ORM Gorm, Eloquent y Lucid.</p>
      </n-grid-item>
    </n-grid>


  </div>

  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>
  <div class="mb5">&nbsp;</div>


</template>
