const fs = require('fs');
const path = require('path');

// Specify the modpack folder path
const modpackFolderPath = path.join(__dirname, '../../modpack');

// Specify the array of named files to search for
const namedFiles = ['manifest.json', 'CHANGELOG.md', 'README.md', 'icon.png'];
const missingFiles = new Array();
// Function to search for the named files in the modpack folder
function searchForNamedFiles() {
  // Check if the modpack folder exists
  if (fs.existsSync(modpackFolderPath)) {
    // Read the contents of the modpack folder
    const files = fs.readdirSync(modpackFolderPath);

    // Iterate over the named files array
    namedFiles.forEach((namedFile) => {
      // Check if the named file exists in the modpack folder
      if (files.includes(namedFile)) {
        console.log(`Found ${namedFile} in the modpack folder.`);
      } else {
        console.log(`Could not find ${namedFile} in the modpack folder.`);
        missingFiles.push(namedFile);
      }
    });
  } else {
    console.log('Modpack folder does not exist.');
    process.exit(1);
  }

  if (missingFiles.length > 0) {
    console.log('Missing files:');
    missingFiles.forEach((file) => {
      console.log(file);
    });
    process.exit(1);
  }else {
    console.log('All files found');
  }
}

// Call the function to search for the named files
searchForNamedFiles();