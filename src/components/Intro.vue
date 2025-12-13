<script lang="ts" setup>
import { onMounted } from 'vue'

import { NGrid, NGridItem } from 'naive-ui'

onMounted(() => {
  document.title = 'CV. Guillermo Valentín Sánchez'
})
</script>

<template>
  <div class="container mb5">
    <n-grid class="mt3" cols="1 s:1 m:2 " x-gap="10" responsive="screen">
      <n-grid-item>
        <div class="flex justify-end">
          <img class="pic" src="/IMG_4663RED.png" />
        </div>
      </n-grid-item>
      <n-grid-item class="letter">
        <div><strong>Guillermo Valentín Sánchez</strong></div>
        <p class="mt0 mb0">Desarrollador Full Stack.</p>
        <p class="mt0 mb0">Especialista front-end ecosistema Vue.</p>
        <p class="mt0 mb0">Diseñador gráfico</p>
        <p class="mt0">Fecha de nacimiento: 1973</p>
        <p class="text">
          Hola!, desde el año 1992 he trabajado en entornos de edición y publicidad, como diseñador gráfico, aunque
          ahora ya no ejerzo, definitivamente esa experiencia es muy útil para realizar de manera óptima mis tareas como
          maquetador web y desarrollador front-end.
        </p>
        <p class="text">
          Soy entusiasta de las tecnologías y desarrollo de software y autodidacta, llevo codificando profesionalmente
          desde 2012. Transicioné el paso de jQuery para todo, a <strong>JavaScript moderno</strong> en entornos
          profesionales.
        </p>

        <p>
          Me considero un profesional con fuerte capacidad analítica y visión sistémica, me siento cómodo en entornos
          que requieren procesamiento profundo de información, innovación y atención meticulosa a la calidad.
          Aprendizaje rápido de nuevas tecnologías/metodologías. Capacidad para establecer conexiones no evidentes entre
          conceptos. Resolución creativa de problemas complejos. Perfeccionismo constructivo orientado a resultados.
          Sensibilidad para detectar necesidades no expresadas de clientes/equipos. Capacidad para procesar múltiples
          variables simultáneamente en la toma de decisiones. Pensamiento estratégico y visión holística.
        </p>

        <p class="text">
          En los últimos años he sido partícipe en un porcentaje muy alto en un proyecto realmente grande para gestión
          de eventos donde entre otras cosas, he ideado y producido un editor web desde 0 totalmente operativo, esto me
          ha permitido llevar las tecnologías al límite y conocer los mejores métodos, técnicas y librerías para
          desarrollo front-end, además de habituarme al trabajo en equipo con <strong>Jira</strong>,
          <strong>Git Flow</strong>.
        </p>

        <p class="text">
          Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en <strong>Vue</strong> 3,
          <strong>Typescript</strong> y <strong>Nuxt</strong> 3 al realizar una gran cantidad de proyectos profesionales
          en este ecosistema (también en las versiones 2). Podría crear y adaptarme con cierta facilidad proyectos de
          <strong>React</strong> y <strong>Angular</strong>.
        </p>
        <p class="text">
          Proyectos backend en GO/GIN, estupendos lenguaje/framework para realización de proyectos de alto rendimiento,
          escalable, seguro y de desarrollo rápido.
        </p>

        <p class="text">
          <strong>Reutilización de componentes</strong>, <strong>estudio de la arquitectura</strong>,
          <strong>buenas prácticas</strong>, <strong>código legible y mantenible</strong>,
          <strong>patrones de diseño</strong>, <strong>pruebas unitarias</strong> y <strong>end to end</strong> .
          Configuración y manejo de <strong>Git</strong>, <strong>GitHub</strong>, <strong>GitLab</strong>,
          <strong>Docker</strong>, <strong>IA para programar</strong>. <strong>Usabilidad</strong>,
          <strong>interfaces gráficas</strong>, <strong>WYSIWYG</strong>, <strong>accesibilidad</strong>,
          <strong>multi idioma</strong>, <strong>CSS</strong>, <strong>SCSS</strong> 12 años experiencia.
        </p>
        <p class="text">
          Desarrollo de aplicaciones completas, backend GO - Gin o en PHP - Laravel o Typescript - Adonis JS. Comercio
          electrónico, backoffices personalizados, aplicaciones móviles y de escritorio. Interesado en el la publicación
          de IA para usuario final, WASM y GO.
        </p>
      </n-grid-item>
    </n-grid>

    <n-grid class="mt0" cols="1 s:1 m:2 " x-gap="10" responsive="screen">
      <n-grid-item>
        <h3 class="mb0"><strong>Formación</strong></h3>
        <p class="mb0"><b>Centro de estudios de informática superior Alicante.</b></p>
        <p class="mt0">Programador de gestión - Analista programador 1990 – 1992.</p>
      </n-grid-item>
      <n-grid-item>
        <h3 class="mb2"><strong>Autodidacta</strong></h3>
        <p class="mt0">
          Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc... de
          todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software.
        </p>
        <h3 class="mb0"><strong>Inglés</strong></h3>
        <p class="mb0">Leo y es escribo pero no hablo ni entiendo con facilidad.</p>
      </n-grid-item>
    </n-grid>

    <h3 class="mt3 mb0"><strong>Experiencia</strong></h3>

    <n-grid class="mt0" cols="1 s:1 m:3 " x-gap="10" responsive="screen">
      <n-grid-item>
        <p class="mb0"><b>Bmotion</b></p>
        <p class="mt0 mb0">Desarrollo aplicaciones nocode</p>
        <p class="mt0 mb2">may.2022 • Actualidad • Madrid (remoto)</p>

        <p class="mb0"><b>Indexeo Marketing</b></p>
        <p class="mt0 mb0">Desarrollo web, mantenimiento</p>
        <p class="mt0 mb2">ene.2021 • mayo 2022 • Ibi (remoto)</p>

        <p class="mb0"><b>Por cuenta propia</b></p>
        <p class="mt0 mb0">Desarrollo web, diseño gráfico/web</p>
        <p class="mt0 mb2">ene.2020 • ene.2021 • Santa Pola</p>

        <p class="mb0"><b>NovoSpain</b></p>
        <p class="mt0 mb0">Desarrollo web, diseño gráfico</p>
        <p class="mt0 mb2">nov.2016 • ene.2020 • Elche</p>
      </n-grid-item>

      <n-grid-item>
        <p class="mb0 mt1"><b>3dids.com</b></p>
        <p class="mt0 mb0">Desarrollo front-end</p>
        <p class="mt0 mb2">mar.2016 • nov.2016 • Alicante</p>

        <p class="mb0"><b>Fractal Internet Consultancy</b></p>
        <p class="mt0 mb0">Desarrollo web y diseño gráfico/web</p>
        <p class="mt0 mb2">jun.2012 • oct.2015 • Madrid (remoto)</p>

        <p class="mb0"><b>Baluarte Comunicación, S.L.</b></p>
        <p class="mt0 mb0">Desarrollo web y diseño gráfico</p>
        <p class="mt0 mb2">may.2009 • nov.2012 • Santa Pola</p>

        <p class="mb0"><b>MASA International</b></p>
        <p class="mt0 mb0">Diseñador Gráfico (encargado dept.)</p>
        <p class="mt0 mb2">jun.2005 • sept.2008 • Torrevieja</p>
      </n-grid-item>

      <n-grid-item>
        <p class="mb0 mt1"><b>Imprenta Hnos. Rastoll</b></p>
        <p class="mt0 mb0">Diseñador Gráfico, artefinalista</p>
        <p class="mt0 mb2">dic.2003 • oct.2005 • Santa Pola</p>

        <p class="mb0"><b>Cartel Rotulación, S.L.</b></p>
        <p class="mt0 mb0">Diseño para exteriores, rotulación e impresión</p>
        <p class="mt0 mb2">feb.2000 • abr.2003 • Alicante</p>

        <p class="mb0"><b>Rusan Copy, S.L (CopyFlash)</b></p>
        <p class="mt0 mb0">Diseño para exteriores, rotulación e impresión</p>
        <p class="mt0 mb2">ene.1993 • ene.2000 • Alicante</p>
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
        <p class="mb2 mt2">
          Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y soltar, calendario
          interactivo.
        </p>
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
        <p class="mb2 mt2">Gestión de estado, Pinia..</p>
        <p class="mb2 mt2">Prototipado UI-UX.</p>
        <p class="mb1 mt2">Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.</p>
      </n-grid-item>
    </n-grid>

    <h3 class="mb0"><strong>Backend</strong></h3>
    <n-grid class="mt0" cols="1 s:1 m:3 " x-gap="10" responsive="screen">
      <n-grid-item>
        <p class="mb2 mt1">Creación de backend API Rest o con plantillas con GO/Gin, TypeScript/Adonis, PHP/Laravel</p>
        <p class="mb2 mt1">
          Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB, Postgress...
        </p>
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
