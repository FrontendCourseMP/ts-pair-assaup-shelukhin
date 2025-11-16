function calculateExpression(expression: string): string {
    const trimmedExpression = expression.trim();
    
    if (trimmedExpression === '') {
        return 'Ошибка: Введите выражение';
    }
    
    if (!/^[\d+*]+$/.test(trimmedExpression)) {
        return 'Ошибка: Можно использовать только цифры и знаки +,*';
    }
    
    if (trimmedExpression[0] === '+' || trimmedExpression[0] === '*') {
        return 'Ошибка: Выражение не может начинаться на + или *';
    }
    
    if (trimmedExpression[trimmedExpression.length - 1] === '+' || 
        trimmedExpression[trimmedExpression.length - 1] === '*') {
        return 'Ошибка: Выражение не может заканчиваться на + или *';
    }
    
    for (let i = 0; i < trimmedExpression.length - 1; i++) {
        if ((trimmedExpression[i] === '+' || trimmedExpression[i] === '*') && 
            (trimmedExpression[i + 1] === '+' || trimmedExpression[i + 1] === '*')) {
            return 'Ошибка: Не может быть двух операторов подряд';
        }
    }
    
    try {
        let result: number = 0;
        let currentNumber: string = '';
        let lastOperator: string = '+';
        
        for (let i = 0; i <= trimmedExpression.length; i++) {
            const char: string = trimmedExpression.charAt(i);
            
            if (char >= '0' && char <= '9') {
                currentNumber += char;
            } else if (char === '+' || char === '*' || i === trimmedExpression.length) {
                const number: number = parseInt(currentNumber);
                
                if (lastOperator === '+') {
                    result += number;
                } else if (lastOperator === '*') {
                    result *= number;
                }
                
                lastOperator = char;
                currentNumber = '';
            }
        }
        
        return `Результат: ${result}`;
        
    } catch (error) {
        return 'Ошибка при вычислении';
    }
}

function handleMathForm(event: Event) {
    event.preventDefault();
    
    const input = document.getElementsByClassName('math-input')[0] as HTMLInputElement;
    const errorDiv = document.getElementById('expressionError') as HTMLDivElement;
    const resultDiv = document.getElementsByClassName('math-result')[0] as HTMLOutputElement;
    
    if (!input || !errorDiv || !resultDiv) {
        console.error('Элементы не найдены');
        return;
    }
    
    const expression = input.value;
    
    errorDiv.textContent = '';
    resultDiv.style.display = 'none';
    
    const result = calculateExpression(expression);
    
    if (result.startsWith('Ошибка')) {
        errorDiv.textContent = result;
    } else {
        resultDiv.textContent = result;
    }
}

function initCalculator() {
    const form = document.getElementsByClassName('math-form')[0] as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', handleMathForm);
    }
}

export default {
    calculateExpression,
    handleMathForm,
    initCalculator
};