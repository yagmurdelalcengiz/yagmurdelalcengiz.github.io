document.addEventListener("DOMContentLoaded", () => {
    const resumeSections = document.querySelectorAll(".resume-section");

    resumeSections.forEach(section => {
        const dropdown = section.querySelector(".dropdown-content");

        // Calculate scrolling height dynamically and expand the content window smooth on hover
        section.addEventListener("mouseenter", () => {
            if (dropdown) {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            }
        });

        // Retract immediately upon mouse leave back to initial baseline format
        section.addEventListener("mouseleave", () => {
            if (dropdown) {
                dropdown.style.maxHeight = "0px";
            }
        });
    });
});