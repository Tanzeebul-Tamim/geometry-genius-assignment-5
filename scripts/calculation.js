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

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const bField = inputField2('parallelogram-b');
    const hField = inputField2('parallelogram-h');

    const resultLine = document.getElementById('parallelogram-calculation');
    const result = document.getElementById('parallelogram-result');
    const resultValue = bField * hField;
    resultLine.style.display = 'flex';
    result.innerText = resultValue.toFixed(2);
    document.getElementById('parallelogram-convert').addEventListener('click', function(){
        const convert = resultValue * 0.0001;
        result.innerText = convert.toFixed(7);
        const unit = document.getElementById('unit-parallelogram');
        unit.innerText = "m";
    })
})

document.getElementById('btn-rhombus').addEventListener('click', function(){
    const d1Field = inputField2('rhombus-d1');
    const d2Field = inputField2('rhombus-d2');

    const resultLine = document.getElementById('rhombus-calculation');
    const result = document.getElementById('rhombus-result');
    const resultValue = 0.5 * d1Field * d2Field;
    resultLine.style.display = 'flex';
    result.innerText = resultValue.toFixed(2);
    document.getElementById('rhombus-convert').addEventListener('click', function(){
        const convert = resultValue * 0.0001;
        result.innerText = convert.toFixed(7);
        const unit = document.getElementById('unit-rhombus');
        unit.innerText = "m";
    })
})

document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pField = inputField2('pentagon-p');
    const bField = inputField2('pentagon-b');

    const resultLine = document.getElementById('pentagon-calculation');
    const result = document.getElementById('pentagon-result');
    const resultValue = 0.5 * pField * bField;
    resultLine.style.display = 'flex';
    result.innerText = resultValue.toFixed(2);
    document.getElementById('pentagon-convert').addEventListener('click', function(){
        const convert = resultValue * 0.0001;
        result.innerText = convert.toFixed(7);
        const unit = document.getElementById('unit-pentagon');
        unit.innerText = "m";
    })
})

document.getElementById('btn-ellipse').addEventListener('click', function(){
    const aField = inputField2('ellipse-a');
    const bField = inputField2('ellipse-b');

    const resultLine = document.getElementById('ellipse-calculation');
    const result = document.getElementById('ellipse-result');
    const resultValue = 3.14 * aField * bField;
    resultLine.style.display = 'flex';
    result.innerText = resultValue.toFixed(2);
    document.getElementById('ellipse-convert').addEventListener('click', function(){
        const convert = resultValue * 0.0001;
        result.innerText = convert.toFixed(7);
        const unit = document.getElementById('unit-ellipse');
        unit.innerText = "m";
    })
})



