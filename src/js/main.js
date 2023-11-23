import './../style/style.scss';

document.addEventListener('DOMContentLoaded', function () {
    const resultScreen = document.getElementById('resultScreen');
    const buttonsGrid = document.querySelector('.buttonsGrid');

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleKeyPress('=');
        } else {
            handleKeyPress(event.key);
        }
    });

    buttonsGrid.addEventListener('click', function (event) {
        handleButtonClick(event.target.innerText);
    });

    function handleKeyPress(value) {
        if (value === 'AC') {
            resultScreen.value = ''; // Clear the result screen
        } else if (value === 'Backspace') {
            resultScreen.value = resultScreen.value.slice(0, -1); // Remove the last character
        }
        else if (value === 'Delete') {
                resultScreen.value = '';
        

        } else if (value === '=') {
            try {
                resultScreen.value = eval(resultScreen.value);
            } catch (error) {
                resultScreen.value = 'Error';
            }
        } else {
            resultScreen.value += value;
        }
    }

    function handleButtonClick(value) {
        if (value === 'AC') {
            resultScreen.value = ''; // Clear the result screen
        } else if (value === '=') {
            try {
                resultScreen.value = eval(resultScreen.value);
            } catch (error) {
                resultScreen.value = 'Error';
            }
        } else if (value === 'Backspace') {
            resultScreen.value = resultScreen.value.slice(0, -1); // Remove the last character
        } else {
            resultScreen.value += value;
        }
    }
}); // DOM Content End
