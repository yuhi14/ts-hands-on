export { };

let numbers: number[] = [1, 2, 3];
let strings: string[] = ['Tokyo', 'Osaka', 'Fukuoka'];

// 別の書き方（非推奨）
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Fukuoka'];

// 二次元配列
let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
]

// 複数の型が入った配列(ユニオン型)
let hairetsu: (number | boolean | string)[] = [1, false, 'Japan'];