/*function generateAdviceOnClick() {
    const dice = document.querySelector(".advGen__dice-bg");
    const text = document.querySelector(".advGen__advice-text");
    const id = document.querySelector(".advGen__advice-num--span");
    dice.addEventListener('click', () => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => {
            return response.json();
        })
        .then(data => {
            text.textContent = data.slip.advice;
            id.textContent = data.slip.id;
        })
        .catch(error => {
            document.getElementById('advice').textContent = 'Failed to fetch advice. Try again later.';
        });

    });
        
};*/

//generateAdviceOnClick();

function clickButtonWithEnter() {
    document.querySelector(".advGen__dice-bg").addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            this.click();
        }
    })
}

clickButtonWithEnter();

function generateAdvice() {
    const text = document.querySelector(".advGen__advice-text");
    const id = document.querySelector(".advGen__advice-num--span");
    text.classList.remove('fadein');
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            return response.json();
        })
        .then(data => {
            text.textContent = data.slip.advice;
            id.textContent = data.slip.id;
            void text.offsetWidth;
            text.classList.add('fadein');
        })
        .catch(error => {
            document.getElementById('advice').textContent = 'Failed to fetch advice. Try again later.';
        });

};

document.addEventListener('DOMContentLoaded', generateAdvice);
document.querySelector(".advGen__dice-bg").addEventListener('click', generateAdvice);


