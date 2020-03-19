export { };

// functionキーワードによる関数定義
function bmi1(height: number, weight: number): number {
    return weight / (height * height)
}
console.log(bmi1(1.7, 55));

// 無名関数による関数定義
let bmi2: (height: number, weight: number) => number = function (
    height: number,
    weight: number
): number {
    return weight / (height * height);
}
console.log(bmi2(1.7, 55));

// アロー関数による関数定義
let bmi3: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height);
console.log(bmi3(1.7, 55));

// オプショナルなパラメータの定義
let bmi4: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi = weight / (height * height);
    if (printable) {
        console.log(bmi);
        return bmi;
    }
    return bmi;
};
bmi4(1.7, 55, true);

// デフォルトパラメータの定義
const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
    return currentSalary * rate;
};

console.log(nextYearSalary(1000));

// Restパラメータの定義
const reducer = (accumulator: number, currentValue: number) => {
    console.log({ accumulator, currentValue })
    return accumulator + currentValue;
};
const sum: (...values: number[]) => number = (
    ...values: number[]
) => {
    return values.reduce(reducer);
}
console.log(sum(1, 2, 3, 4, 5));

// オーバーロード
function double(value: number): number;
function double(value: string): string;
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
}
console.log(double(100));
console.log(double('Go '));