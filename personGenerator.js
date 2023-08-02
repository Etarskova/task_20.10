const mnth = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Андрей",
            "id_2": "Елисей",
            "id_3": "Иван",
            "id_4": "Сергей",
            "id_5": "Олег",
            "id_6": "Петр",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Сергей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Екатерина",
            "id_2": "Анна",
            "id_3": "Елизавета",
            "id_4": "Марина",
            "id_5": "Ольга",
            "id_6": "Светлана",
            "id_7": "Ксения",
            "id_8": "Алиса",
            "id_9": "Милана",
            "id_10": "Наталья"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Грузчик",
            "id_3": "Водитель",
            "id_4": "Механик",
            "id_5": "Охранник",
            "id_6": "Пилот",
            "id_7": "Слесарь",
            "id_8": "Кузнец",
            "id_9": "Пожарный",
            "id_10": "Каскадер"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Педагог",
            "id_2": "Воспитатель",
            "id_3": "Танцовщица",
            "id_4": "Актриса",
            "id_5": "Модель",
            "id_6": "Няня",
            "id_7": "Писательница",
            "id_8": "Стюардесса",
            "id_9": "Флорист",
            "id_10": "Ландафтный дизайнер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return Math.floor(Math.random() * 2) == 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () { // генерация имени
        return this.person.gender == 'Мужчина' ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function () { // генерация фамилии
        return this.person.gender == 'Мужчина' ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'a';
    },

    randomMiddleName: function () { // генерация отчества
        let midNamMal = this.randomValue(this.firstNameMaleJson);
        return this.person.gender == 'Мужчина' ? (midNamMal.includes("ей") ? midNamMal.replace("ей", "еевич") : midNamMal + 'ович') : (midNamMal.includes('ей') ? midNamMal.replace("ей", "еевна") : midNamMal + 'овнa');
    },

    randomProfession: function () { // генерация профессии
        return this.person.gender == 'Мужчина' ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson);
    },

    // генерация даты рождения:

    randomYear: function () {
        return this.randomIntNumber(1923, 2005) + 'г.';
    },

    randomMonth: function () {
        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let month = months[Math.floor(Math.random() * 12)];
        return month;
    },

    randomDay: function () {
        let day = this.randomMonth == 'февраля' ? this.randomIntNumber(1, 28) : (this.randomMonth == 'апреля' || 'июня' || 'сентября' || 'ноября' ? this.randomIntNumber(1, 30) : this.randomIntNumber(1, 31));
        return day;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middlename = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.year_of_birthday = this.randomYear();
        this.person.month = this.randomMonth();
        this.person.day = this.randomDay();

        return this.person;
    }
};