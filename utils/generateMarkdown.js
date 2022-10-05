//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  if (license === 'MIT'){
  var badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  
  } else if (license === 'Boost'){
  var badge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';

  } else if (license === 'Apache'){
  var badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';

  } else if (license === 'IBM'){
  var badge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg';

  }
  return `![GitHub License Badge](${badge})`;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (!license){
  return '';
}
if (license === 'MIT'){
var source = 'https://opensource.org/licenses/MIT';

} else if (license === 'Boost'){
var source = 'https://www.boost.org/LICENSE_1_0.txt';

} else if (license === 'Apache'){
var source = 'https://opensource.org/licenses/Apache-2.0';

} else if (license === 'IBM'){
var source = 'https://opensource.org/licenses/IPL-1.0';
}

return source;
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }
  return `##License 
  This project has a [${license}](${renderLicenseLink(license)}) license`;
};

function createTable(license){
  if (license){
    var contents = ['installation', 'usage', 'license','contributing','tests', 'questions'];

  }else {
    var contents = ['installation', 'usage','contributing','tests', 'questions'];
  }
  var table ='';
  for (var i=0; i<contents.length; i++){
    table += `* [${list[i].charAt(0).toUpperCase() + list[i].slice(1)}](#${list[i]})
    `;
  };
  return table;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge}

`;
}

module.exports = generateMarkdown;
