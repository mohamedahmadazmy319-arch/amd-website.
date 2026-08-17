function sendWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        alert("من فضلك اكتب الاسم ورقم الهاتف والرسالة.");
        return;
    }

    const text = `مرحبًا، يوجد عميل مهتم بمشروع TRIVIA MALL

الاسم: ${name}
رقم الهاتف: ${phone}
الرسالة: ${message}`;

    const url =
        "https://wa.me/201070343434?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");
}
function openImage(src) {
    document.getElementById("bigImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}