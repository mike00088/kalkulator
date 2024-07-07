function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    console.log(display.value); // Debugging line
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    console.log('Display cleared'); // Debugging line
}

function calculate() {
    const display = document.getElementById('display');
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/calculate';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'display';
    input.value = display.value;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
}
