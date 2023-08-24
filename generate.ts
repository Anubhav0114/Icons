import fs from "fs";

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
  const arr = Array<{
    category: string;
    keyword: string[];
  }>();

  folderNames.forEach((element) => {
    arr.push({
      category: element,
      keyword: [],
    });
  });

  fs.writeFileSync("./filter.json", JSON.stringify(arr));
  console.log("filter generated");

  // console.log(JSON.stringify(arr))
}

// generateFilterStructure()

function createCategory(folderPaths: Array<string>) {

  console.log("generating...")
  createRequiredFolders();

  // load structure
  const structure = JSON.parse(
    fs.readFileSync("./filter.output.json").toString()
  ) as Array<{
    category: string;
    keyword: string[];
  }>;

  // cleaning the dir
  fs.rmSync("./temp/icons/failed", {
    recursive: true,
  });
  fs.rmSync("./temp/icons/success", {
    recursive: true,
  });

  // create dir
  fs.mkdirSync("./temp/icons/failed");
  fs.mkdirSync("./temp/icons/success");

  // creating category dir
  structure.forEach((element) => {
    fs.mkdirSync("./temp/icons/success/" + element.category);
  });

  // ----------------------------------

  // get all icons from folder
  
  let failedRecords = 0;
  folderPaths.forEach((folderPath) => {
    const fileNames = fs.readdirSync(folderPath);

    // adding files to dir
    fileNames.forEach((element) => {
      let found = false;
      for (let item of structure) {
        const isFound = isContainKeyword(element, item.keyword);
        if (isFound) {
          found = true;

          // save file to category
          const path = "./temp/icons/success/" + item.category + "/" + element;
          fs.writeFileSync(path, fs.readFileSync(folderPath + "/" + element));
          break;
        }
      }

      if (!found) {
        failedRecords += 1;
        // save file to category
        const path = "./temp/icons/failed/" + element;
        fs.writeFileSync(path, fs.readFileSync(folderPath + "/" + element));
      }
    });

  });
  console.log("Failed record found: " + failedRecords);
}

function isContainKeyword(text: string, keywords: string[]) {
  for (let item of keywords) {
    if (text.includes(item)) {
      return true;
    }
  }

  return false;
}

function createRequiredFolders() {
  if (fs.existsSync("./temp") == false) {
    fs.mkdirSync("./temp");
  }

  if (fs.existsSync("./temp/icons") == false) {
    fs.mkdirSync("./temp/icons");
  }

  if (fs.existsSync("./temp/icons/failed") == false) {
    fs.mkdirSync("./temp/icons/failed");
  }

  if (fs.existsSync("./temp/icons/success") == false) {
    fs.mkdirSync("./temp/icons/success");
  }
}

createCategory(["./pawan/font-awesome/solid", "./Rajat/solids", "./Anubhav/solid"]);
