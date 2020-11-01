// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Screenshot](#screenshot)
  * [Usage](#usage)
  * [Contributor](#contributor)
  * [Contact Me](#github)

  ## License
  ${response.license}

  ## Installation
  ${response.installation}

  ## Tests
  ${response.tests}

  ## Contributor
  ${response.contributor}

  ## Contact Me
  View my on GitHub page:
  https://github.com/${response.github}

  Send me emails:
  ${response.email}
`;
}

module.exports = generateMarkdown;
