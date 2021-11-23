/**
 * npm run new:domain
 */
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'domain_name',
        message: 'What is the name of domain?（The input value is used in all lowercase letters）'
      },
      {
        type: 'input',
        name: 'sub_dir',
        message: 'Do you want to use sub directory? (No problem in blank)',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { domain_name, sub_dir } = answers
        const name = domain_name.toLowerCase()
        const Name = `${domain_name[0].toUpperCase()}${domain_name.slice(1)}`
        const path = `src/domain/${ sub_dir ? `${sub_dir}/` : `` }${name}`
        return { answers, name, Name, path }
      })
  }
}
