export { };

let profile: [string, number] = ['Ham', 43];

// ユニオン型の場合は配列の中の型の順番は検査されない
let profile2: (string | number)[] = ['Ham', 43];
profile2 = [43, 'Ham'];

