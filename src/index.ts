function getInitials(fullName: string): string {
    const parts = fullName.trim().split(' ');
    
    if (parts.length < 3) {
        return 'Ошибка: Введите Фамилию Имя Отчество';
    }
    
    const lastName = parts[0];
    const firstName = parts[1];
    const middleName = parts[2];
    
    const firstInitial = firstName[0].toUpperCase();
    const middleInitial = middleName[0].toUpperCase();
    
    const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    
    return ${firstInitial}.${middleInitial}. ${formattedLastName};
}

function handleForm(event: Event) {
    event.preventDefault();
    
    const input = document.getElementsByClassName('fullName');
    const output = document.getElementsByClassName('Result');
    
    const fullName = input.value;
    
    const result = getInitials(fullName);
    
    output.textContent = result;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementsByClassName('form') as HTMLFormElement;
    form.addEventListener('submit', handleForm);
});