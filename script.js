// รหัสผ่านที่ถูกต้อง
const correctPassword = "1234"; // เปลี่ยนเป็นรหัสที่คุณต้องการ

// ฟังก์ชันกดปุ่มตัวเลข
function enterNumber(num) {
    document.getElementById("password").value += num;
}

// ฟังก์ชันลบตัวเลข
function clearPassword() {
    let input = document.getElementById("password");
    input.value = input.value.slice(0, -1);
}

// ฟังก์ชันตรวจสอบรหัสผ่าน
function checkPassword() {
    let input = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (input === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('gallery-container').style.display = 'flex';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById("password").value = "";
    }
}

// สร้างเอฟเฟกต์หัวใจลอย
document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".floating-hearts");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; 
        heartContainer.appendChild(heart);
    }
});
