export { };

class Parson {
    public name: string;
    private age: number;
    protected nationality: string;
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
    }
}

class Android extends Parson {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }
    // profile(): string {
    //     return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    // }
}

let taro = new Parson('Taro', 30, 'Japan');
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());

// コンストラクタの初期化処理の省略形
class Parson2 {
    constructor(public name: string, protected age: number) { }
}
const yuhi = new Parson2('yuhi', 27);
console.log(yuhi);


// getterとsetter
class MyNumberCard {
    constructor(private _owner: string, private _secretNumber: number) { }

    get owner() {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber
    }
}

let card = new MyNumberCard('yuhi', 123456789);
console.log(card.owner);
console.log(card.secretNumber = 987654321);
console.log(card.secretNumber);

// readonly修飾子
class visaCard {
    constructor(public readonly owner: string) {
    };
}
let myVisaCard = new visaCard('yuhi');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'asuka';


// 静的メンバーの定義
class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'yuhi'
    static work() {
        return `Hello! My name is ${this.firstName}.`;
    }
}
console.log(Me.firstName);
console.log(Me.work());

// 名前空間
namespace Japanese {
    export namespace Fukuoka {
        export class Parson3 {
            constructor(public name: string) { }
        }
    }
}

namespace English {
    export class Parson3 {
        constructor(public name: string) { }
    }
}

const atori = new Japanese.Fukuoka.Parson3('Atori');
console.log(atori.name);

const maruko = new English.Parson3('Maruko');
console.log(maruko.name);

// 継承
class Animal {
    constructor(public name: string) { }
    run(): string {
        return 'I can run';
    }
}

class Lion extends Animal {
    public speed: number;
    constructor(name: string, speed: number) {
        super(name);
        this.speed = speed;
    }
    run() {
        return `${super.run()} ${this.speed}km/h.`;
    }
}
console.log(new Animal('Micky').run());
console.log(new Lion('Simba', 60).run());




// 抽象クラスと抽象メソッド
abstract class Animal2 {
    abstract cry(): string;
}

class Lion2 extends Animal2 {
    cry() {
        return 'roar';
    }
}

class Tiger extends Animal2 {
    cry() {
        return 'garrr';
    }
}



// インターフェイスリターンズ
// クラスは複数のクラスを継承することはできないが、複数のインターフェイスを実装するこどができる
class Mahoutsukai { }
class Souryo { }
class Taro extends Mahoutsukai { }

interface Kenja {
    ionazun(): void;
}
interface Senshi {
    kougeki(): void;
}
class Jiro implements Kenja, Senshi {
    ionazun() {
        console.log('ionazun');
    }
    kougeki() {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.kougeki();
jiro.ionazun();