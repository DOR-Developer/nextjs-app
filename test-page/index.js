Array.from(document.getElementsByClassName("no-route")).forEach(route => {
  route.addEventListener("click", (ev) => {
    // TODO : Change main content.
  });
});

document.getElementById("go-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth", 
  });
});

document.getElementById("change-theme").addEventListener("click", () => {
  const body = document.body;
  const darkTheme = body.classList.contains("dark");
  if (darkTheme) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

setWebLanguage();

const languageButtons = Array.from(document.getElementsByClassName("change-language"));

languageButtons.forEach(button => {
  try {
    button.addEventListener("click", (ev) => {
      languageButtons.forEach(btn => {
        btn.classList.remove("selected");
      });
      document.body.classList.remove("es");
      document.body.classList.remove("en");
  
      const id = ev.target.id;
  
      const language = id === "language-es" 
        ? "es" : id === "language-en" 
        ? "en" : "en";
  
      document.body.classList.add(language);
      button.classList.add("selected");
      setWebLanguage();
    });
  } catch (error) {}
});

function setWebLanguage() {
  try {
    const spanish = document.body.classList.contains("es");
    const english = document.body.classList.contains("en");

    const language = spanish ? "es" : english ? "en" : "en";
    
    document.body.classList.add(language);

    document.getElementById("about-text").innerHTML = translations[language]["about"];
    document.getElementById("title-text").innerHTML = translations[language]["title"];
    const routes = Array.from(document.getElementsByTagName("a"));

    routes.forEach(route => {
      try {
        const href = route.getAttribute("href");
        if (!route.classList.contains("no-route-small")) {
          if (href === "#") {
            route.innerHTML = translations[language]["nav"]["home"];
          }
          if (href === "#components") {
            route.innerHTML = translations[language]["nav"]["components"];
          }
          if (href === "#gallery") {
            route.innerHTML = translations[language]["nav"]["gallery"];
          }
          if (href === "#table") {
            route.innerHTML = translations[language]["nav"]["table"];
          }
          if (href === "#kanban") {
            route.innerHTML = translations[language]["nav"]["kanban"];
          }
          if (href === "#about") {
            route.innerHTML = translations[language]["nav"]["about"];
          }
          if (href === "#cv") {
            route.innerHTML = translations[language]["nav"]["cv"];
          }
        }
      } catch (error) {}
    });
  } catch (error) {}
}

setTimeout(() => {
  document.getElementById("profile-pic-loader").classList.remove("loading-border");
}, 1200);

let imageSourceCount = 0;
document.getElementById("profile-pic").addEventListener("click", (ev) => {
  try {
    imageSourceCount++;
    
    document.getElementById("profile-pic-loader").classList.add("loading-border");
    setTimeout(() => {
      document.getElementById("profile-pic-loader").classList.remove("loading-border");
    }, 1200);

    ev.target.setAttribute("src", "https://picsum.photos/" + (800 + imageSourceCount));
    console.log(ev.target);
  } catch (error) {}
});