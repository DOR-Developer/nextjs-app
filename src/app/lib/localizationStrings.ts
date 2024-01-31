type Localization = {
  "en-GB": {
    about: {
      subtitle: string;
      frontend_info: string;
      backend_info: string;
      fill_info: string;
      bottom_date: string;
    }, 
    button_text: string;
    sidebar: {
      title: string;
      home: string;
      about: string;
      component: string;
    }, 
  };
  "es-ES": {
    about: {
      subtitle: string;
      frontend_info: string;
      backend_info: string;
      fill_info: string;
      bottom_date: string;
    }, 
    button_text: string;
    sidebar: {
      title: string;
      home: string;
      about: string;
      component: string;
    }, 
  };
}

export const myLocalization: Localization = {
  "en-GB": {
    "about": {
      "subtitle": "Web Developer / Graphic Designer",
      "frontend_info": `<p>Hello, I'm Daniel Otero Rivera, a Software Developer with a focus on web technologies.</p>
      <p>Currently, I'm diving into frontend frameworks like <b>NextJS and React</b> — the powerhouse behind this website — and also experimenting with <b>Angular</b>.</p>
      <p>I'm well versed in <b>Vanilla JavaScript</b> and <b>jQuery</b>, crafting <b><a href="/mycomponents">custom components</a></b> and processing big data sets, such as spanish public tenders.</p>`,
      "backend_info": `<p>While my focus isn't primarily on backend languages, I have experience with <b>NodeJS</b>, which I use in conjunction with <b>MongoDB</b> to build APIs that complement my frontend projects. Additionally, I frequently turn to <b>Python</b> for tasks such as working with files, processing large amounts of data, or conducting <b><a class="text-emerald-500 hover:text-indigo-500" href="https://wikipedia.org/wiki/Web_scraping" target="_blank">web scraping</a></b>.</p>`,
      "fill_info": `<p>I'm passionate about the world of CSS. I've been delving into its complexities for over 4 years, and to this day, I continue to discover new techniques. Recently, I took the plunge into learning the styling library <b>TailwindCSS</b>, which is providing me with a fresh perspective when it comes to web design. While I have some familiarity with Bootstrap, I've always felt more efficient and precise writing my own classes — a sentiment I haven't encountered with Tailwind yet.</p>`,
      "bottom_date": "January 2024",
    },
    "button_text": "Go to Top", 
    "sidebar": {
      "title": "My Portfolio", 
      "home": "Home", 
      "about": "About", 
      "component": "DOR Components", 
    }, 
  },
  "es-ES": {
    "about": {
      "subtitle": "Desarrollador Web / Diseñador Gráfico",
      "frontend_info": `<p>Hola, soy Daniel Otero Rivera, un Desarrollador de Software comprometido con mi pasión.</p>
      <p>Actualmente, me estoy especializando en tecnologías web, utilizando principalmente frameworks frontend como <b>NextJS y React</b> - los cuales impulsan este sitio web - y <b>Angular</b>.</p>
      <p>A lo largo de mi trayectoria, he trabajado con <b>Vanilla JavaScript</b> y <b>jQuery</b>, creando <b><a href="/mycomponents">componentes personalizados</a></b> y manejando grandes volúmenes de datos, como son las licitaciones públicas a nivel español.</p>`,
      "backend_info": `<p>Aunque mi enfoque no se centra tanto en los lenguajes de backend, tengo experiencia con <b>NodeJS</b>, el cual utilizo junto con <b>MongoDB</b> para construir APIs que complementen mis proyectos front. Además, recurro a Python con frecuencia para trabajar con archivos, procesar grandes cantidades de datos o realizar <b><a class="text-emerald-500 hover:text-indigo-500" href="https://es.wikipedia.org/wiki/Web_scraping" target="_blank">web scraping</a></b>.</p>`,
      "fill_info": `<p>Me apasiona el mundo del CSS. Llevo más de 4 años explorando sus complejidades y, aún hoy, sigo descubriendo nuevas técnicas. Recientemente, me aventuré a aprender la librería de estilos <b>TailwindCSS</b>, la cual me está aportando una nueva perspectiva a la hora de trabajar el diseño web. Además, tengo nociones de Bootstrap, pero siempre he sentido que puedo trabajar de manera más eficiente y precisa escribiendo mis propias clases - un sentimiento que no he encontrado con Tailwind todavía.</p>`,
      "bottom_date": "Enero 2024",
    },
    "button_text": "Volver al principio", 
    "sidebar": {
      "title": "Mi Portfolio", 
      "home": "Inicio", 
      "about": "Sobre mí", 
      "component": "DOR Components", 
    }, 
  },
};