export { };

// 型アサーション
let name: any = 'yuhi';
// let length = name.length as number;
let length = (name as string).length;
console.log(length);




// コンストアサーション
let name2 = 'taro';
name2 = 'jiro';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

let profile = {
    name: 'yuhi',
    age: 27
} as const;

// profile.name = 'asuka';