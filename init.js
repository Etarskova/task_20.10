
/*window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middlename;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.day + ' ' + initPerson.month + ' ' + initPerson.year_of_birthday;
};*/

document.getElementById('generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middlename;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.day + ' ' + initPerson.month + ' ' + initPerson.year_of_birthday;
});

document.getElementById('clear').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('middleNameOutput').innerText = 'Отчество';
    document.getElementById('professionOutput').innerText = 'Профессия';
    document.getElementById('birthYearOutput').innerText = 'Дата рождения';
});