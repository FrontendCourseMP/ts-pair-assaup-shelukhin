// initials.ts

// Объявляем функции
function getInitials(fullName: string): string {
    const parts = fullName.trim().split(/\s+/).filter(part => part.length > 0);
    
    if (parts.length < 3) {
        return 'Ошибка: Введите Фамилию Имя Отчество (три слова)';
    }
    
    const lastName = parts[0];
    const firstName = parts[1];
    const middleName = parts[2];
    
    if (!lastName || lastName.length === 0) {
        return 'Ошибка: Фамилия не может быть пустой';
    }
    
    if (!firstName || firstName.length === 0) {
        return 'Ошибка: Имя не может быть пустым';
    }
    
    if (!middleName || middleName.length === 0) {
        return 'Ошибка: Отчество не может быть пустым';
    }
    
    const firstInitial = firstName.charAt(0);
    const middleInitial = middleName.charAt(0);
    
    if (!firstInitial) {
        return 'Ошибка: Не удалось получить инициал имени';
    }
    
    if (!middleInitial) {
        return 'Ошибка: Не удалось получить инициал отчества';
    }
    
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