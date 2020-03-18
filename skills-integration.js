

var allSkills = {};


/**
 * register new skills. eg finance, music etc. requires intent to be added to dialogflow
 *
 * @param {*} action - Dialogflow action/intent
 * @param {*} scriptLocation - script to handle action (must export a handler function)
 */
async function register_script(action, scriptLocation){
    if(!(action in allSkills))
        allSkills[action] = [];
      
        allSkills[action].push(require(scriptLocation));
}


module.exports.allSkills = allSkills;
module.exports.register_script = register_script;
