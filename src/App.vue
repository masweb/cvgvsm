<script setup lang="ts">
import { useTheme } from './composables/useTheme'
const { currentTheme, toggleTheme } = useTheme()
</script>

<template>
  <div class="toggle-dark" :class="{ dark: currentTheme === 'dark' }" @click="toggleTheme"></div>

  <header class="container mb5 cv">
    <div class="row mt-3">
      <div class="col-12 col-md-6 d-flex justify-content-end">
        <img class="pic" src="/IMG_4663RED.png" alt="Foto de Guillermo Valentín Sánchez" />
      </div>

      <div class="col-12 col-md-6">
        <h1 class="mt-4 mt-md-0"><strong>Guillermo Valentín Sánchez</strong></h1>
        <h3 class="mt-1 mb-0"><strong>Desarrollador full-stack</strong></h3>
        <h3 class="mt-1 mb-0"><strong>Especialista front-end ecosistema Vue</strong></h3>
        <h4 class="mt-2 mb-0">Diseñador gráfico</h4>
        <p class="mt-3">Fecha de nacimiento: 1973</p>
        <p class="lead">
          Hola!, desde el año 1992 he trabajado en entornos de edición y publicidad, como diseñador
          gráfico, aunque ahora ya no ejerzo, definitivamente esa experiencia es muy útil para
          realizar de manera óptima mis tareas como maquetador web y desarrollador front-end.
        </p>
      </div>
    </div>
  </header>

  <main class="container mb5 cv">
    <section class="row mt-3" cols="1 s:1 m:2 " x-gap="10" responsive="screen">
      <article class="col-12 col-md-6">
        <p>
          Soy entusiasta de las tecnologías y desarrollo de software, codifico profesionalmente
          <strong>desde 2012</strong> . Me considero un profesional con fuerte capacidad analítica y
          visión sistémica, me siento cómodo en entornos que requieren procesamiento profundo de
          información, innovación y atención meticulosa a la calidad. Aprendizaje rápido de nuevas
          tecnologías/metodologías. Capacidad para establecer conexiones no evidentes entre
          conceptos. Resolución creativa de problemas complejos. Perfeccionismo constructivo
          orientado a resultados. Sensibilidad para detectar necesidades no expresadas de
          clientes/equipos. Capacidad para procesar múltiples variables simultáneamente en la toma
          de decisiones. Pensamiento estratégico y visión holística.
        </p>

        <p>
          Soy una persona que disfruta mucho de la vida, intento estar siempre de buen humor y me
          encanta hacer reír a las personas. Esto no interfiere en absoluto en el respeto a las
          situaciones que requieran seriedad.
        </p>

        <p>
          En los últimos años he sido partícipe en un porcentaje muy alto en un proyecto realmente
          grande para gestión de eventos donde he ideado y producido un editor web desde 0
          totalmente operativo, esto me ha permitido llevar las tecnologías al límite y conocer los
          mejores métodos, técnicas y librerías para desarrollo front-end, además de habituarme al
          trabajo en equipo con <strong>Jira</strong>, <strong>Git Flow</strong>.
        </p>
        <p>
          Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en
          <strong>Vue</strong> 3, <strong>Typescript</strong> y <strong>Nuxt</strong> 3 al realizar
          una gran cantidad de proyectos profesionales en este ecosistema (también en las versiones
          2). Podría crear y adaptarme con cierta facilidad proyectos de <strong>React</strong> y
          <strong>Angular</strong>.
        </p>
      </article>

      <article class="col-12 col-md-6">
        <p>
          Además, en los últimos tiempos estoy realizando proyectos backend en GO, estupendo
          lenguaje para realización de proyectos de alto rendimiento, escalable, seguro y de
          desarrollo rápido.
        </p>
        <p>
          <strong>Reutilización de componentes</strong>,
          <strong>estudio de la arquitectura</strong>, <strong>buenas prácticas</strong>,
          <strong>código legible y mantenible</strong>, <strong>patrones de diseño</strong>,
          <strong>pruebas unitarias</strong> y <strong>end to end</strong> . Configuración y manejo
          de <strong>Git</strong>, <strong>GitHub</strong>, <strong>GitLab</strong>,
          <strong>Docker</strong>, <strong>IA para programar</strong>. <strong>Usabilidad</strong>,
          <strong>interfaces gráficas</strong>, <strong>WYSIWYG</strong>,
          <strong>accesibilidad</strong>, <strong>multi idioma</strong>, <strong>CSS</strong>,
          <strong>SCSS</strong> 12 años experiencia.
        </p>
        <p>
          Desarrollo de aplicaciones completas, backend GO - Gin o en PHP - Laravel o Typescript -
          Adonis / Express / Nitro.... Comercio electrónico, backoffices personalizados,
          aplicaciones móviles y de escritorio. Wordpress, PrestaShop, Shopify.
        </p>

        <p>
          Deploy, Docker, Docker: diseño de infraestructuras, integración contínua, diferentes
          plataformas.
        </p>

        <h3 class="mb-2 mt-4"><strong>Inteligncia Artificial</strong></h3>
        <p>
          <strong></strong>Desarrollo asistido por IA, control absoluto de lo que ocurre en mis
          proyectos, yo decido cómo y por qué se toman decisiones de toda índole, la IA pica código
          y asiste, cuando no lo hago yo para no perder la costumbre...
        </p>
        <p>
          <strong>Programación de chatboots</strong> personalizados alto y bajo coste. Instalación y
          manejo de <strong>Stable Diffusion</strong> y <strong>ComfyUI</strong> para generación de
          imágenes y vídeos de alta calidad, <strong>SD</strong>, <strong>XL</strong>,
          <strong>Flux</strong> .... Instalación y manejo de software <strong>RCV</strong> de Audio
          por IA.
        </p>
      </article>
    </section>

    <section class="row mt-0">
      <article class="col-12 col-md-6">
        <h2 class="mb-2 mt-4"><strong>Formación</strong></h2>
        <p class="mb-0"><b>Centro de estudios de informática superior Alicante.</b></p>
        <p class="mt-0">Programador de gestión - Analista programador 1990 – 1992.</p>
        <h3 class="mb-0"><strong>Inglés</strong></h3>
        <p class="mb-0">Leo y es escribo pero no hablo ni entiendo con facilidad.</p>
      </article>

      <article class="col-12 col-md-6">
        <h2 class="mb-2 mt-4"><strong>Autodidacta</strong></h2>
        <p class="mt-0">
          Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos,
          libros, etc... de todas las tecnologías susceptibles de mejorar la eficiencia en el
          desarrollo de software.
        </p>
      </article>
    </section>

    <section>
      <div class="row mb-3">
        <div class="col-12 mb-3">
          <h2 class="mt-5 mb-0"><strong>Experiencia</strong></h2>
        </div>
        <div class="col-12 col-md-4">
          <p class="mb-0"><b>Bmotion</b></p>
          <p class="mt-0 mb-0">Desarrollo aplicaciones nocode</p>
          <p class="mt-0 mb-3">may.2022 • dic.2025 • Madrid (remoto)</p>

          <p class="mb-0"><b>Indexeo Marketing</b></p>
          <p class="mt-0 mb-0">Desarrollo web, mantenimiento</p>
          <p class="mt-0 mb-3">ene.2021 • may.2022 • Ibi (remoto)</p>

          <p class="mb-0"><b>Por cuenta propia</b></p>
          <p class="mt-0 mb-0">Desarrollo web, diseño gráfico/web</p>
          <p class="mt-0 mb-3">ene.2020 • ene.2021 • Santa Pola</p>

          <p class="mb-0"><b>NovoSpain</b></p>
          <p class="mt-0 mb-0">Desarrollo web, diseño gráfico</p>
          <p class="mt-0 mb-3">nov.2016 • ene.2020 • Elche</p>
        </div>

        <div class="col-12 col-md-4">
          <p class="mb-0 mt1"><b>3dids.com</b></p>
          <p class="mt-0 mb-0">Desarrollo front-end</p>
          <p class="mt-0 mb-3">mar.2016 • nov.2016 • Alicante</p>

          <p class="mb-0"><b>Fractal Internet Consultancy</b></p>
          <p class="mt-0 mb-0">Desarrollo web y diseño gráfico/web</p>
          <p class="mt-0 mb-3">jun.2012 • oct.2015 • Madrid (remoto)</p>

          <p class="mb-0"><b>Baluarte Comunicación, S.L.</b></p>
          <p class="mt-0 mb-0">Desarrollo web y diseño gráfico</p>
          <p class="mt-0 mb-3">may.2009 • nov.2012 • Santa Pola</p>

          <p class="mb-0"><b>MASA International</b></p>
          <p class="mt-0 mb-0">Diseñador Gráfico (encargado dept.)</p>
          <p class="mt-0 mb-3">jun.2005 • ses.2008 • Torrevieja</p>
        </div>

        <div class="col-12 col-md-4">
          <p class="mb-0 mt1"><b>Imprenta Hnos. Rastoll</b></p>
          <p class="mt-0 mb-0">Diseñador Gráfico, artefinalista</p>
          <p class="mt-0 mb-3">dic.2003 • oct.2005 • Santa Pola</p>

          <p class="mb-0"><b>Cartel Rotulación, S.L.</b></p>
          <p class="mt-0 mb-0">Diseño para exteriores, rotulación e impresión</p>
          <p class="mt-0 mb-3">feb.2000 • abr.2003 • Alicante</p>

          <p class="mb-0"><b>Rusan Copy, S.L (CopyFlash)</b></p>
          <p class="mt-0 mb-0">Diseño para exteriores, rotulación e impresión</p>
          <p class="mt-0 mb-3">ene.1993 • ene.2000 • Alicante</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="mt-3 mb-0 mt-3"><strong>Habilidades</strong></h2>
      <h3 class="mb-3 mt-3"><strong>Frontend</strong></h3>
      <div class="row mt-0">
        <div class="col-12 col-md-4">
          <p class="mb-3 mt-2">Código mantenible y legible, convenciones de código.</p>
          <p class="mb-3 mt-2">Gestión de conexión, repositorios API, fetch, ofetch, axios..</p>
          <p class="mb-3 mt-2">Protocolos API REST, WebSockets, GraphQL.</p>
          <p class="mb-3 mt-2">Internacionalización.</p>
          <p class="mb-3 mt-2">Persistencia de datos. IndexDB, LocalStorage, Node fs ...</p>
          <p class="mb-3 mt-2">Autenticación.</p>
          <p class="mb-3 mt-2">Manejo y conversión de fechas.</p>
          <p class="mb-3 mt-2">Creación programática y previsualización de PDF.</p>
          <p class="mb-3 mt-2">
            Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y
            soltar, calendario interactivo.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <p class="mb-1 mt-2">Validación front-end y back-end en vivo.</p>
          <p class="mb-3 mt1">Marcado semántico.</p>
          <p class="mb-1 mt-2">Web components, modularización, reutilización.</p>
          <p class="mb-3 mt-2">Web App.</p>
          <p class="mb-3 mt-2">Cookies.</p>
          <p class="mb-3 mt-2">Canvas.</p>
          <p class="mb-3 mt-2">Audio y video en la web.</p>
          <p class="mb-3 mt-2">Pre-procesadores CSS.</p>
          <p class="mb-3 mt-2">Desarrollo responsive, mobile first.</p>
          <p class="mb-3 mt-2">
            Frameworks: Bulma, Naive-ui, Bootstrap, Fundation, Pure, UI-Kit, Skeleton...
          </p>
          <p class="mb-3 mt-2">Tipografía web.</p>
        </div>
        <div class="col-12 col-md-4">
          <p class="mb-3 mt-2">Gráficos vectoriales (svg).</p>
          <p class="mb-1 mt-2">Animaciones CSS.</p>
          <p class="mb-3 mt1">Javascript orientado a objetos.</p>
          <p class="mb-3 mt-2">Javascript asíncrono.</p>
          <p class="mb-3 mt-2">Estructuras de datos Json.</p>
          <p class="mb-3 mt-2">TypeScript.</p>
          <p class="mb-1 mt-2">Arquitectura hexagonal.</p>
          <p class="mb-3 mt-2">Motores de plantillas (pug, blade, liquid...).</p>
          <p class="mb-3 mt-2">Gestión de estado, Pinia..</p>
          <p class="mb-3 mt-2">Prototipado UI-UX.</p>
          <p class="mb-1 mt-2">
            Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.
          </p>
        </div>
      </div>

      <h3 class="mb-3 mt-4">
        <strong>Backend</strong>
      </h3>
      <div class="row mt-0 mb-5">
        <div class="col-12 col-md-4">
          <p class="mb-3 mt-1">
            Creación de backend API Rest o con plantillas con GO/Gin, TypeScript/Adonis, PHP/Laravel
          </p>
          <p class="mb-3 mt-2">Protocolos API REST, WebSockets, GraphQL, SOAP, gRPC, Webhooks.w</p>
          <p class="mb-3 mt-3">
            Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB,
            Postgress...
          </p>
          <p class="mb-3 mt-2">Migraciones y generación de datos de prueba.</p>
        </div>
        <div class="col-12 col-md-4">
          <p class="mb-3 mt-1">Login y registro seguro, encriptación.</p>

          <p class="mb-1 mt-2">
            Gestión y proceso de ficheros desde el servidor, imagen, vectorial, excel, pdf ...
          </p>
          <p class="mb-1 mt-2">Paginación.</p>
          <p class="mb-3 mt-2">Envío de correos automatizados.</p>
          <p class="mb-3 mt-2">Creación de tareas periódicas.</p>
          <p class="mb-3 mt-2">Caché en disco o memoria.</p>
        </div>
        <div class="col-12 col-md-4">
          <p class="mb-1 mt-1">Manejo de eventos y colas de eventos.</p>
          <p class="mb-3 mt-2">Uso de Linux.</p>
          <p class="mb-3 mt-2">Gestión de dependencias.</p>
          <p class="mb-3 mt-2">Test unitarios.</p>
          <p class="mb-3 mt-2">ORM Gorm, Eloquent y Lucid.</p>
        </div>
      </div>
    </section>
  </main>
</template>
