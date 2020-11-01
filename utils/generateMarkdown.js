// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

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

  Send me emails:
  ${response.email}
`;
}

module.exports = generateMarkdown;
