const humanText = document.querySelector("#human");
const catText = document.querySelector("#cat");

//This charset is the set of all characters that can be translated
//This charset is divided in 4 subsets
const charset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", ".", ",", "!", "?",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

//This indicates the subset the programm is currently in
const setNumber = ["Mi", "Me", "Mo", "Mu"];

//This is the equivalent for each character is a subset
const catEquivalent = ["meow", "miaw", "miou", "miew", "mew", "miow", "miuw", "maou", "mow", "miu"];

function humanChanged() {
    const text = humanText.value;
    var translation = "";
    var currentSubSet = -1;

    for (var i = 0; i < text.length; i++) {
        const char = text[i];
        const normalizedChar = char.toLowerCase();
        const charIndex = charset.indexOf(normalizedChar);
        if (charIndex <= -1)
            translation += char;
        else {
            const isUpper = (normalizedChar == char) ? false : true;
            const subSet = Math.floor(charIndex / 10);
            if (subSet != currentSubSet) {
                translation += setNumber[subSet];
                currentSubSet = subSet;
            }
            const subIndex = charIndex % 10;
            translation += (isUpper) ? catEquivalent[subIndex].toUpperCase() : catEquivalent[subIndex];
        }
    }
    catText.value = translation;
}

function catChanged() {
    const text = catText.value;
    var translation = "";
    var subSet = 0;

    const searchSub = /(Mi|Me|Mo|Mu)/g;
    var splitted = text.split(searchSub);
    for (var i = 0; i < splitted.length; i++) {
        if (i % 2 == 1)
            subSet = setNumber.indexOf(splitted[i]);
        else {
            for (var j = 0; j < catEquivalent.length; j++) {
                const cat = catEquivalent[j];
                const re = new RegExp(cat, 'g');
                const reUp = new RegExp(cat.toUpperCase(), 'g');
                splitted[i] = splitted[i].replace(re, charset[subSet * 10 + j])
                    .replace(reUp, charset[subSet * 10 + j].toUpperCase());
            }
            translation += splitted[i];
        }
    }
    humanText.value = translation;
}