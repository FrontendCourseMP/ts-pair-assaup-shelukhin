function getInitials(fullName: string): string {
    const parts = fullName.trim().split(/\s+/).filter(part => part.length > 0);
    
    const [lastName, firstName, middleName] = parts;
    
    if (!lastName || !firstName || !middleName) {
        return 'Ошибка: Введите Фамилию Имя Отчество (три слова)';
    }
    
    const firstInitial = firstName.charAt(0);
    const middleInitial = middleName.charAt(0);
    
    const formattedLastName = lastName.charAt(0).toUpperCase() + 
                             lastName.slice(1).toLowerCase();
    
    return `${firstInitial.toUpperCase()}.${middleInitial.toUpperCase()}. ${formattedLastName}`;
}

function handleForm(event: Event) {
    event.preventDefault();
    
    const input = document.getElementById('name') as HTMLInputElement;
    const output = document.querySelector('.result') as HTMLOutputElement;
    
    if (!input || !output) {
        console.error('Элементы не найдены');
        return;
    }
    
    const fullName = input.value;
    
    if (!fullName.trim()) {
        output.textContent = 'Ошибка: Введите ФИО';
        return;
    }
    
    output.textContent = getInitials(fullName);
}

function initForm() {
    const form = document.querySelector('.form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', handleForm);
    }
}

// Единый экспорт всего модуля
export default {
    getInitials,
    handleForm,
    initForm
};