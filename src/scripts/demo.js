export default function demo()
{
    const waylander = document.querySelectorAll(".name--book-waylander");
    const orien = document.querySelectorAll(".name--book-orien");
    const close = document.querySelector("button__close");

    waylander.forEach(x =>
    {
        x.addEventListener("click", (e) =>
        {
            document.querySelector(".waylander__title").style.display="block";
            document.querySelector(".waylander__explain").style.display="block";
            document.querySelector(".kindle__title").style.display="none";
            document.querySelector(".kindle__paragraph").style.display="none";
            close.style.display="block";
        });
    });

    orien.forEach(x =>
        {
            x.addEventListener("click", (e) =>
            {
                document.querySelector(".orien__title").style.display="block";
                document.querySelector(".orien__explain").style.display="block";
                document.querySelector(".kindle__title").style.display="none";
                document.querySelector(".kindle__paragraph").style.display="none";
            });
        });

    close.addEventListener("click", (e) =>
    {
        close.style.display="none";
        document.querySelector(".waylander__title").style.display="none";
        document.querySelector(".waylander__explain").style.display="none";
        document.querySelector(".orien__title").style.display="none";
        document.querySelector(".orien__explain").style.display="none";
        document.querySelector(".kindle__title").style.display="block";
        document.querySelector(".kindle__paragraph").style.display="block";
    });
}