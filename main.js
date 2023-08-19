"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const folderNames = [
    "Accessibility",
    "Alert",
    "Alphabet",
    "Animals",
    "Arrows",
    "Astronomy",
    "Automotive",
    "Buildings",
    "Business",
    "Camping",
    "Charity",
    "Charts + Diagrams",
    "Childhood",
    "Clothing + Fashion",
    "Coding",
    "Communication",
    "Connectivity",
    "Construction",
    "Design",
    "Devices + Hardware",
    "Disaster + Crisis",
    "Editing",
    "Emoji",
    "Education",
    "Energy",
    "Files",
    "Film + Video",
    "Food + Beverage",
    "Fruits + Vegetables",
    "Gaming",
    "Genders",
    "Halloween",
    "Hands",
    "Holidays",
    "Household",
    "Humanitarian",
    "Logistics",
    "Maps",
    "Maritime",
    "Marketing",
    "Mathematics",
    "Media Playback",
    "Medical + Health",
    "Money",
    "Moving",
    "Music + Audio",
    "Nature",
    "Numbers",
    "Photos + Images",
    "Political",
    "Punctuation + Symbols",
    "Religion",
    "Science",
    "Science Fiction",
    "Security",
    "Shapes",
    "Shopping",
    "Social",
    "Spinners",
    "Sports + Fitness",
    "Text Formatting",
    "Time",
    "Toggle",
    "Transportation",
    "Travel + Hotel",
    "Users + People",
    "Weather",
    "Writing",
];
function createFolders() {
    for (let index = 0; index < folderNames.length; index++) {
        const folderPath = "./icons/" + folderNames[index];
        fs_1.default.mkdirSync(folderPath);
        // create sub folders
        fs_1.default.mkdirSync(folderPath + "/solid");
        fs_1.default.mkdirSync(folderPath + "/stroke");
    }
}
// createFolders();
function generateFileNames(path) {
    console.log('generating...');
    const dir = fs_1.default.readdirSync(path);
    const json = JSON.stringify(dir);
    // saving
    fs_1.default.writeFileSync('./temp/names.json', json);
    console.log('done');
}
// generateFileNames('./temp/icons')
// function generate
function prefix3(path, prefix) {
    const fileName = fs_1.default.readdirSync(path);
    fileName.forEach(element => {
        const newName = prefix + element;
        const oldpath = path + "/" + element;
        const newPath = path + "/" + newName;
        fs_1.default.renameSync(oldpath, newPath);
    });
}
prefix3("./pawan/flowbite/solid/arrows/", "fs-");
prefix3("./pawan/flowbite/solid/brands/", "fs-");
prefix3("./pawan/flowbite/solid/e-commerce/", "fs-");
prefix3("./pawan/flowbite/solid/emoji/", "fs-");
prefix3("./pawan/flowbite/solid/file-folders/", "fs-");
prefix3("./pawan/flowbite/solid/general/", "fs-");
prefix3("./pawan/flowbite/solid/media/", "fs-");
prefix3("./pawan/flowbite/solid/text/", "fs-");
prefix3("./pawan/flowbite/solid/user/", "fs-");
prefix3("./pawan/flowbite/solid/weather/", "fs-");
prefix3("./pawan/flowbite/stroke/arrows/", "fs-");
prefix3("./pawan/flowbite/stroke/e-commerce/", "fs-");
prefix3("./pawan/flowbite/stroke/emoji/", "fs-");
prefix3("./pawan/flowbite/stroke/file-folders/", "fs-");
prefix3("./pawan/flowbite/stroke/general/", "fs-");
prefix3("./pawan/flowbite/stroke/media/", "fs-");
prefix3("./pawan/flowbite/stroke/text/", "fs-");
prefix3("./pawan/flowbite/stroke/user/", "fs-");
prefix3("./pawan/flowbite/stroke/weather/", "fs-");
// np
function removePrefix(path, prefix) {
    const removeFileName = fs_1.default.readdirSync(path);
    removeFileName.forEach(element => {
        const newFileName = element.replace(prefix, "");
        const oldpath = path + "/" + element;
        const newPath = path + "/" + newFileName;
        fs_1.default.renameSync(oldpath, newPath);
    });
}
// removePrefix("./pawan/font-awesome/brands/","fs-fs");
