export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'), 
    btnClose: document.querySelector('.modal button.close'), 

    open() {
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

// Fecha o popup 
Modal.btnClose.onclick = () => Modal.close();

// Caso o botão ESC seja acionado, fazer a mesma função do botão btnClose 
window.addEventListener('keydown', handleKeyDown); 
function handleKeyDown(event){
    if(event.key === 'Escape'){
        Modal.close(); 
    }
}