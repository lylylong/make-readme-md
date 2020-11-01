// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Contributor](#contributor)

  ## License
  ${response.license}

  ## Installation
  ${response.installation}

  ## Tests
  ${response.tests}

  ## Contributor
  ${response.contributor}
`;
}

module.exports = generateMarkdown;
