function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text = `الاسم: ${name}
رقم الهاتف: ${phone}
الرسالة: ${message}`;

    let url = "https://wa.me/201070343434?text=" + encodeURIComponent(text);

    window.location.href = url;
}