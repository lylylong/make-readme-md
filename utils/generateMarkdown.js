function badges(license) {
  if (license === "MIT") {
    return `![NPM](https://img.shields.io/npm/l/express)`;
  } else if (license === "Apache License 2.0") {
    return `![Hex.pm](https://img.shields.io/hexpm/l/plug)`;
  } else if (license === "GNU GPLv3") {
    return `![CRAN/METACRAN](https://img.shields.io/cran/l/devtools)`;
  } else if (license === "BSD 3") {
    return `![PyPI - License](https://img.shields.io/pypi/l/Django)`;
  } else {
    return ``;
  }
}
function licenseDiv(license) {
  if (!license) {
    return `No license used for this project`;
  } else {
    return `This project is licensed under:`;
  }
}

// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ${badges(response.license)}

  ## Description
  ${response.description}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Test](#test)
  * [Screenshot](#screenshot)
  * [Usage](#usage)
  * [Contributor](#contributor)
  * [Contact](#contact)

  ## License
  ${licenseDiv(response.license)} ${response.license}

  ## Installation
  To install the dependencies, run this command:
  ${response.installation}

  ## Test
  To run tests, run this command:
  ${response.tests}

  ## Screenshot
  The screenshot demonstrates the user experience:
  ${response.screenshot}

  ## Usage
  ${response.usage}

  ## Contributor
  ${response.contributor}

  ## Contact
  View my on GitHub page:
  https://github.com/${response.github}

  If you have any questions, please send me emails:
  ${response.email}
`;
}

module.exports = generateMarkdown;
