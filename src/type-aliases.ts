export { };

// typeの定義は先頭大文字
type Mojiretsu = string;

const fooString: string = "hello";
const barString: Mojiretsu = "hello";

const exsample = {
    name: "yuhi",
    age: 27
}

type Profile = {
    name: string;
    age: number;
}

const exsample2: Profile = {
    name: "yuhi",
    age: 27
}

type Profile2 = typeof exsample;

const exsample3: Profile2 = {
    name: "yuhi",
    age: 27
}