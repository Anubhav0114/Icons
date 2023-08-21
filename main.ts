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

function createFolders() {
  for (let index = 0; index < folderNames.length; index++) {
    const folderPath = "./icons/" + folderNames[index];
    fs.mkdirSync(folderPath);

    // create sub folders
    fs.mkdirSync(folderPath + "/solid");
    fs.mkdirSync(folderPath + "/stroke");
  }
}

// createFolders();

function generateFileNames(path: string, prefixFilter = '') {
  console.log("generating...");
  const dir = fs.readdirSync(path).map((item) => {

    if(prefixFilter != ''){
      return item.split(".")[0].replace(prefixFilter, '');
    }else{
      return item.split(".")[0];
    }
    
  });
  const json = JSON.stringify(dir);
  // saving
  fs.writeFileSync("./temp/names.json", json);

  console.log("done");
}






generateFileNames('./pawan/font-awesome/solid', 'fs-')

// function generate

function renameFileName(path: string, prefix: string) {
  const fileName = fs.readdirSync(path);

  fileName.forEach((element) => {
    let newName = prefix + element;

    let oldPath = path + "/" + element;
    let newPath = path + "/" + newName;

    fs.renameSync(oldPath, newPath);
  });
}

function removePreFix(path: string, prefix: string) {
  const fileName = fs.readdirSync(path);

  fileName.forEach((element) => {
    let oldPath = path + "/" + element;
    let removed = element.replace(prefix, "");
    let newPath = path + "/" + removed;

    fs.renameSync(oldPath, newPath);
  });
}

// removePreFix("./Anubhav" , "regularanu")

function removeUnmatchedFile(strokePath: string, solidPath: string) {
  const strokeFileNames = fs.readdirSync(strokePath);
  const solidFileNames = fs.readdirSync(solidPath);

  const acceptedList = Array<string>();

  strokeFileNames.forEach((element) => {
    // if filename match then push the name in accepted array
    if (solidFileNames.includes(element)) {
      acceptedList.push(element);
    }
  });


  // print all unmatched item
  strokeFileNames.forEach(element => {
    if(!acceptedList.includes(element)){

      // print the rejected filename
      console.log('stroke - ' + element)
    }
  });

  solidFileNames.forEach(element => {
    if(!acceptedList.includes(element)){

      // print the rejected filename
      console.log('solid - ' +element)
    }
  });

  console.log(acceptedList)
}


// removeUnmatchedFile('./pawan/font-awesome/regular', "./pawan/font-awesome/solid")
