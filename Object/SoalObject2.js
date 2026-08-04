function createPerson(name, age, profession) {
    return {
        name: name,
        age: age,
        profession: profession,
        yearsExperience: 1,

        introduce: function () {
            return "Hello, my name is " + this.name + "and i am a" + this.profession;
        },

        updateAge: function (newAge) {
            this.age = newAge;
        },

        getInfo: function () {
            return {
                name: this.name,
                age: this.age,
                profession: this.profession,
                yearsExperience: this.yearsExperience,
            };
        }
    };
}