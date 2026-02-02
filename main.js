document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("moreBtn");
    const content = document.getElementById("moreContent");

    if (!btn || !content) {
        console.log("Button ya Content nahi mila");
        return;
    }

    btn.addEventListener("click", () => {
        content.classList.toggle("hidden");

        if (content.classList.contains("hidden")) {
            btn.innerText = "More About Me";
        } else {
            btn.innerText = "Hide About Me";
        }
    });
});
