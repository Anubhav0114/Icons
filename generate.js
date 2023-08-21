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
function generateFilterStructure() {
    const arr = Array();
    folderNames.forEach((element) => {
        arr.push({
            category: element,
            keyword: [],
        });
    });
    fs_1.default.writeFileSync("./filter.json", JSON.stringify(arr));
    console.log("filter generated");
    // console.log(JSON.stringify(arr))
}
// generateFilterStructure()
function createCategory(folderPath) {
    // get all icons from folder
    const fileNames = fs_1.default.readdirSync(folderPath);
    // load structure
    const structure = JSON.parse(fs_1.default.readFileSync("./filter.output.json").toString());
    // cleaning the dir
    fs_1.default.rmdirSync("./temp/icons/failed", {
        recursive: true,
    });
    fs_1.default.rmdirSync("./temp/icons/success", {
        recursive: true,
    });
    // create dir
    fs_1.default.mkdirSync("./temp/icons/failed");
    fs_1.default.mkdirSync("./temp/icons/success");
    // creating category dir
    structure.forEach((element) => {
        fs_1.default.mkdirSync("./temp/icons/success/" + element.category);
    });
    // adding files to dir
    fileNames.forEach((element) => {
        let found = false;
        for (let item of structure) {
            const isFound = isContainKeyword(element, item.keyword);
            if (isFound) {
                found = true;
                // save file to category
                const path = "./temp/icons/success/" + item.category + "/" + element;
                fs_1.default.writeFileSync(path, fs_1.default.readFileSync(folderPath + "/" + element));
                break;
            }
        }
        if (!found) {
            console.log("not found");
            // save file to category
            const path = "./temp/icons/failed/" + element;
            fs_1.default.writeFileSync(path, fs_1.default.readFileSync(folderPath + "/" + element));
        }
    });
}
function isContainKeyword(text, keywords) {
    for (let item of keywords) {
        if (text.includes(item)) {
            return true;
        }
    }
    return false;
}
createCategory("./pawan/font-awesome/solid");
