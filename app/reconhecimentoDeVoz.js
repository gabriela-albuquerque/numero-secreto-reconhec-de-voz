const elementoChute = document.getElementById('chute')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventListener('result', onSpeak)

  function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
  }

  function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
  }