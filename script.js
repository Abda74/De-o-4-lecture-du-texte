const textarea = document.getElementById("text");
const button = document.getElementById("btnLire");

button.addEventListener("click",(e)=>{

    e.preventDefault();

    const synth = window.speechSynthesis;
    const text = textarea.value;
    if (!synth.speaking && text){
        const utternance = new SpeechSynthesisUtterance(text);
        synth.speak(utternance);
    }


    let isSpeaking;
    if (text.length > 50) {
        if (synth.speaking && !isSpeaking) {
            button.innerText = "Pause";
            isSpeaking = false;
        } else {
            button.innerText = "Resume";
            isSpeaking = true;
        }

        setInterval(() => {
            if (!synth.speaking && !isSpeaking) {
                button.innerText = "Lire"
            }
        })
    }


})