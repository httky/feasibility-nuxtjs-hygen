/**
 * npm run new:manager
 */
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'manager_name',
        message: 'What is the name of manager?（The input value is used in all lowercase letters）'
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
        const { manager_name, sub_dir } = answers
        const name = manager_name.toLowerCase()
        const Name = `${manager_name[0].toUpperCase()}${manager_name.slice(1)}`
        const path = `src/manager/${ sub_dir ? `${sub_dir}/` : `` }${name}`
        return { answers, name, Name, path }
      })
  }
}
