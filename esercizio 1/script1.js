function salvaNome() {
    const nome = document.getElementById('nameInput').value.trim()
    if (nome !== '') {
        localStorage.setItem('nomeUtente', nome)
        mostraNomeSalvato()
    } else {
        alert('Inserisci un nome valido!')
    }
  }

  function rimuoviNome() {
    localStorage.removeItem('nomeUtente')
    mostraNomeSalvato()
  }

  function mostraNomeSalvato() {
        const nomeSalvato = localStorage.getItem('nomeUtente')
        const savedNameDiv = document.getElementById('savedName')
        if (nomeSalvato) {
            savedNameDiv.textContent = `Nome salvato: ${nomeSalvato}`
        } else {
            savedNameDiv.textContent = ''
        }
    } 

mostraNomeSalvato()