
// ================================
// TOMBOL BUKA PESAN
// ================================

const openMessage = document.getElementById("openMessage");
const messageBox = document.getElementById("messageBox");

openMessage.addEventListener("click", function () {

    messageBox.classList.toggle("show");

    if (messageBox.classList.contains("show")) {

        openMessage.innerHTML = "Pesannya sudah terbuka 💗";

        // Scroll perlahan ke pesan
        setTimeout(() => {

            messageBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    } else {

        openMessage.innerHTML = "Buka pesannya 💌";

    }

});


// ================================
// TOMBOL WHATSAPP
// ================================

const whatsappButton =
    document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", function () {

    const nomor = "6282228379054";

    const pesan = "saya sudah melihatnya";

    const whatsappURL =
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(whatsappURL, "_blank");

});


// ================================
// ANIMASI HATI
// ================================

const heartsContainer =
    document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartSymbols = [
        "💗",
        "💖",
        "💕",
        "💓",
        "✨"
    ];

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


// Buat hati secara berkala
setInterval(createHeart, 700);
