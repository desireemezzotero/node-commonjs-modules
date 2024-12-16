const {functionNames} = require('./namesOne');
const {funcionHobbies} = require('./hobbies');
let fullName;

function functionPeople (){
  const name = functionNames("Desiree", "Mezzotero")
  const fullName = `${name.firstName} ${name.lastName}`
  const hobbies = funcionHobbies("pallanuoto", "calcio", "nuoto")

  return {
   "fullName" : fullName,
    "hobbies" : hobbies.hobbies 
  }

}

module.exports = {
  functionPeople
}