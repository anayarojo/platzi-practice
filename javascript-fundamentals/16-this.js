class Person {
    constructor(name, friends = []) {
        this.name = name;
        this.friends = friends;
    }

    listFriends() {
        //const _this = this;
        this.friends.forEach((friend) => {
            // console.log(`Hola, mi nombre es ${_this.name} y soy amigo de ${friend}`)
            console.log(`Hola, mi nombre es ${this.name} y soy amigo de ${friend}`)
        }/* .bind(this) */)
    }
}

const sacha = new Person("Sacha", ["Pedro", "Juan", "Pepe"])