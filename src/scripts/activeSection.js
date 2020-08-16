import nav from "./nav";

export default function activeSection()
{
    const navElement = document.querySelectorAll(".link-page");
    const navEl = document.querySelectorAll(".nav-list__el");
    
    var i;

    navElement.forEach(x =>
    {
      x.addEventListener("click", (e) =>
      {
        var link = e.currentTarget.getAttribute('data-link');
        changeSection(link);
      })  
    });

    function changeSection(link)
    {
        var sectionOpened = document.querySelector(".section--open");

        if(sectionOpened)
        {
            sectionOpened.classList.remove("section--open");
        }

        var sectionOpen = document.querySelector(".section__" + link);

        if(sectionOpen)
        {
            sectionOpen.classList.add("section--open");
        }

        const nav = document.querySelector(".nav-list");
        const buttonNav = document.querySelector(".button__nav");

        nav.classList.remove("nav-list--open");
        buttonNav.classList.remove("button__nav-open");

        for (i = 0; i <navEl.length; i++)
        { 
          navEl[i].classList.remove("nav-list__el--open");
        }
    };
}

