const mnth = Math.floor(Math.random()*3);

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

   /*middleNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Андреев",
            "id_2": "Николаев",
            "id_3": "Олегов",
            "id_4": "Сергеев",
            "id_5": "Максимов",
            "id_6": "Михаилов",
            "id_7": "Романов",
            "id_8": "Павлов",
            "id_9": "Кириллов",
            "id_10": "Елизаров"
        }
    }`,*/

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

    randomGender: function(){
        return Math.floor(Math.random()*2) ==1 ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {     // генерация имени
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {  // генерация фамилии
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    /*randomMiddleName: function() {   // генерация отчества
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson) + 'ович';
        }
        else {
            return this.randomValue(this.firstNameMaleJson) + 'овнa';
        }
    },*/

    randomMiddleName: function() {   // генерация отчества
        let midNamMal = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (midNamMal.includes("ей")) {
                return midNamMal.replace ("ей", "еевич");
            }
            else return midNamMal + 'ович';
        }
        if (this.person.gender == 'Женщина') { 
            if (midNamMal.includes('ей')) {
                return midNamMal.replace("ей", "еевна");
            }
            else return midNamMal + 'овнa';
        }
    },

    randomProfession: function() {  // генерация профессии
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        }
        else {
            return this.randomValue(this.professionFemaleJson);
        }
    },


// генерация даты рождения:

    randomYear: function() {
        return this.randomIntNumber(1923, 2005) + 'г.';
    },

    randomMonthFeb: function() {
        let month = 'февраля';
        return month;
    },

    randomMonth30: function(){
        let months = ['апреля', 'июня', 'сентября', 'ноября'];
        let month = months[Math.floor(Math.random()*4)];
        return month;
    },

    randomMonth31: function() {
        let months = ['января', 'марта', 'мая', 'июля', 'августа', 'октября', 'декабря'];
        let month = months[Math.floor(Math.random()*7)];
        return month;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middlename = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.year_of_birthday = this.randomYear();
        if (mnth ===0) {
            this.person.month = this.randomMonthFeb();
            this.person.day = this.randomIntNumber(1, 28);
        }
        else if (mnth ===1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        }
        else if (mnth === 2) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        }
        return this.person;
    }
};
