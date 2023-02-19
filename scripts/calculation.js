let serialNumber = 0;

document.getElementById('btn-triangle').addEventListener('click', function(){
    const inputBField = inputField('triangle-input-b');
    const inputHField = inputField('triangle-input-h');

    if (inputBField !== null && inputHField !== null) {
        const resultLine = document.getElementById('triangle-calculation');
        const result = document.getElementById('triangle-result');
        const resultValue = 0.5 * inputBField * inputHField;
        resultLine.style.display = 'flex';
        result.innerText = resultValue.toFixed(2);
        document.getElementById('triangle-convert').addEventListener('click', function(){
            const convert = resultValue * 0.0001;
            result.innerText = convert.toFixed(7);
            const unit = document.getElementById('unit-triangle');
            unit.innerText = "m";
    })
    }
});

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputWField = inputField('rectangle-input-w');
    const inputLField = inputField('rectangle-input-l');

    if (inputWField !== null && inputLField !== null) {
        const resultLine = document.getElementById('rectangle-calculation');
        const result = document.getElementById('rectangle-result');
        const resultValue = inputWField * inputLField;
        resultLine.style.display = 'flex';
        result.innerText = resultValue.toFixed(2);
        document.getElementById('rectangle-convert').addEventListener('click', function(){
            const convert = resultValue * 0.0001;
            result.innerText = convert.toFixed(7);
            const unit = document.getElementById('unit-rectangle');
            unit.innerText = "m";
    })
    }
});


