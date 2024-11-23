// เลือกปุ่มทั้งหมด
const drumButtons = document.querySelectorAll(".drum");

// เพิ่ม event listener สำหรับการคลิก
drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
});

// เพิ่ม event listener สำหรับการกดแป้นพิมพ์
document.addEventListener("keydown", function (event) {
    playSound(event.key);
});

// ฟังก์ชันเล่นเสียง
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
    for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          alert("ฉันถูกกด");
        });
      }
      
}
