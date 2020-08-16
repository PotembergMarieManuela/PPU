export default function nav(buttonNav, sectionNav)
{
  const navButton = document.querySelector(buttonNav);
  const nav = document.querySelector(sectionNav);
  const navEl = document.querySelectorAll(".nav-list__el");

  var i;

  navButton.addEventListener("click", e =>
  {
    navButton.classList.toggle("button__nav-open");
    nav.classList.toggle("nav-list--open");
    
    for (i = 0; i <navEl.length; i++)
    {
      navEl[i].classList.toggle("nav-list__el--open");
    }
  });
}
