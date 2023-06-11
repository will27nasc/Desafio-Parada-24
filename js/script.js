let s = (el) => document.querySelector(el);

function press() {
    s('.box p').innerText = 'Pressione enter...';
}

function compiladorTemp(dado) {
    if(dado === '' || isNaN(dado)) {
        alert('Valor incorreto! Digite somente números...')
        s('input').value = '';
        s('input').focus();
        return;
    }

    let celsius = parseInt(dado);
    let fahrenheit = 9*dado/5+32;
    let kelvin = celsius + 273;

    s('.box').innerHTML = 
    `<div class='tempResp'>
        <h1>Temperatura convertida de celsius para: </h1>
        <div class="response">
            <div id='fahrenheit'>
                <h3>Fahrenheit &#x1F321;</h3>
                <h4>${fahrenheit.toFixed(1)}</h4>
            </div>
            <div id='kelvin'>
                <h3>Kelvin &#x1F321;</h3>
                <h4>${kelvin.toFixed(1)}</h4>
            </div>
        </div>
        <button>&#9668;</button>
    </div>
    `;

    s('.tempResp').style.opacity = 0.0;
    setTimeout(() => {
        document.querySelector('.tempResp').style.opacity = 1;
    },400);

    s('button').addEventListener('click', () => {
        s('.box-temp').innerHTML = 
        `<div class='box newBox'>
            <h1>Conversor de temperatura</h1>
            <div class="box-input">
                <label>
                    Digite a temperatura em Celsius:
                    <div class="lupa">
                        <input type="text" onchange="compiladorTemp(this.value)" onkeyup="press()">
                        &#x1F321;
                    </div>
                </label>
            </div><!--box-input-->
            <p></p>
        </div>
        `;

        s('input').focus();

        s('.newBox').style.opacity = 0;
    
        setTimeout(() => {
            document.querySelector('.newBox').style.opacity = 1;
        },500);
    });
}





