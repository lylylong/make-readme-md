// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}`;

  function badges() {
    if (response.license === "MIT") {
      return `[![NPM](https://img.shields.io/npm/l/express)]`;
    } else if (response.license === "Apache License 2.0") {
      return `[![Hex.pm](https://img.shields.io/hexpm/l/plug)]`;
    } else if (response.license === "GNU GPLv3") {
      return `[![CRAN/METACRAN](https://img.shields.io/cran/l/devtools)]`;
    } else if (response.license === "BSD 3") {
      return `[![PyPI - License](https://img.shields.io/pypi/l/Django)]`;
    } else {
      return ``;
    }
  }

  `${badges()}
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
  ${response.license}

  ## Installation
  ${response.installation}

  ## Test
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
