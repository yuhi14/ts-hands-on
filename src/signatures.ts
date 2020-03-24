export { };

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

// let profile: { [index: string]: string | number } = {};

let profile: Profile = {
    name: 'yuhi',
    underTwenty: true
};

// Hoe to write index signetures.
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'yuhi';
profile.age = 27;
profile.nationality = 'Japan';