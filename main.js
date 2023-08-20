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

