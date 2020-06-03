/**
 * This file is to be used to register new skills.
 * To register a skill use following syntax
 *           register_script( actionOrIntentName, scriptLocation);
 * 
 * NOTE: all skills script files must export only one callable entity (function) with following prototype
 * 
 * 
 *  function fnName(response, uicallback, isaudio=false){}
 *  // response - DialogFlow Response
 *  // uicallback - callback function to interact with UI
 *  // isaudio - to specify if user sent audio query or not
 * 
 *  module.exports = fnName;
 */



var { allSkills, register_script } = require('./skills-integration.js');

// handle default welcome and fallback intents
register_script('input', './skills/welcome.js');

// handle translate intent/action
register_script('translate', './skills/translate.js');

// handle all finance intent/action
register_script('finance', './skills/finance.js');




module.exports.allSkills = allSkills;
module.exports.register_script = register_script;

