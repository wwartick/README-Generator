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
  return `## License 
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
    table += `* [${contents[i].charAt(0).toUpperCase() + contents[i].slice(1)}](#${contents[i]}) 
`;
  };
  return table;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  ${createTable(data.license)}

  ## Installation 

  To install the dependencies used - run the following command:
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribute}

  ## Tests

  To run tests, run the following command: 
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about this project, email me at [${data.email}](mailto:${data.email}). You can see more of my work at [${data.github}](https://github.com/${data.github}) on GitHub.

`;
}

module.exports = generateMarkdown;
