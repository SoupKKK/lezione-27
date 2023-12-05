function avviaContatore() {
    let tempoPassato = sessionStorage.getItem('tempoPassato');
    if (tempoPassato) {
        tempoPassato = parseInt(tempoPassato)
        document.getElementById('timer').textContent = tempoPassato
        continuaContatore(tempoPassato)
    } else {
        tempoPassato = 0
        setInterval(() => {
            tempoPassato++
            sessionStorage.setItem('tempoPassato', tempoPassato)
            document.getElementById('timer').textContent = tempoPassato
      }, 1000);
    }
  }


function continuaContatore(tempoPassato) {
    setInterval(() => {
        tempoPassato++
        sessionStorage.setItem('tempoPassato', tempoPassato)
        document.getElementById('timer').textContent = tempoPassato
    }, 1000);
  }

  
avviaContatore();