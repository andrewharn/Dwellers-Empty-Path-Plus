/*:
 * @plugindesc v0.1 Allows to remove choices from choice list
 * @author uncle thomson - http://www.tomshut.de  
 *
 * @help
 * ============================================================================
 * Purpose
 * ============================================================================
 *
 * Allows to remove choices from choice list
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following plugin command will remove choices from 
 * the list of choices shown next:
 *
 *   RemoveChoice i
 *   - Replace 'i' with the index of the choice to be removed, with 1 being
 *     the first choice.
 */


var THDE = THDE || {};
THDE.RMC = THDE.RMC || {};		

THDE.RMC.pluginCommand = Game_Interpreter.prototype.pluginCommand;
	
THDE.RMC._choicesToBeRemoved = new Array(10);

	
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    THDE.RMC.pluginCommand.call(this, command, args);     

    if (command === 'RemoveChoice') {	
        var index = Number(args[0]) - 1;
	THDE.RMC._choicesToBeRemoved[index] = true;
    }         
};

Game_Message.prototype.onChoice = function(n) {
    for (var i = 0; i<= n; i++) {
	if (typeof THDE.RMC._choicesRemoved[i] !== 'undefined' && THDE.RMC._choicesRemoved[i]) {
	    n++;
	}
    }
    if (this._choiceCallback) {
        this._choiceCallback(n);
        this._choiceCallback = null;
    }
};

Game_Interpreter.prototype.setupChoices = function(params) {
    var choices = new Array();    
	
    var cancelType = params[1];
    var defaultType = params.length > 2 ? params[2] : 0;

    for (var i = 0; i< params[0].length; i++) {
	if (typeof THDE.RMC._choicesToBeRemoved[i] !== 'undefined' && THDE.RMC._choicesToBeRemoved[i]) {
	   if (cancelType > i) {
		cancelType--;
	   }
	   if (defaultType > i) {
		defaultType--;
	   }
	} else {
	    choices.push(params[0][i]);
	}
    }
	
    var positionType = params.length > 3 ? params[3] : 2;
    var background = params.length > 4 ? params[4] : 0;
    if (cancelType >= choices.length) {
        cancelType = -2;
    }
    $gameMessage.setChoices(choices, defaultType, cancelType);
    $gameMessage.setChoiceBackground(background);
    $gameMessage.setChoicePositionType(positionType);
    $gameMessage.setChoiceCallback(function(n) {
        this._branch[this._indent] = n;
    }.bind(this));
    
    THDE.RMC._choicesRemoved = THDE.RMC._choicesToBeRemoved.clone();
    THDE.RMC._choicesToBeRemoved = new Array(10);
};