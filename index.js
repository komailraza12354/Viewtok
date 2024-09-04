const faqQuestionEl = document.querySelectorAll(".faq-question");

const pasteBtn = document.getElementById("paste-btn");

const pasteIput = document.getElementById("paste-input");

faqQuestionEl.forEach(btn => {

    btn.addEventListener("click", (event) => {

        if (event.target.classList.contains("active"))

            event.target.classList.remove("active");

        else {
            
            faqQuestionEl.forEach(btn => btn.classList.remove("active"));

            event.target.classList.add("active");

        }

    });

});

pasteBtn.addEventListener("click", async (event) => {

    event.preventDefault();

    if (event.target.classList.contains("active")) {

        pasteIput.value = "";

        pasteIput.focus();

        event.target.classList.remove("active");

        event.target.innerText = "Paste";

    } else {

        try {

            const text = await navigator.clipboard.readText();

            pasteIput.value = text;

            event.target.classList.add("active");

            event.target.innerText = "Clear";

        } catch (err) {

            console.error('Failed to copy!', err);

        }
        
    }

});
