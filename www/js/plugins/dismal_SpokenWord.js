/*:
* @plugindesc (1.0) SpokenWord Message Speech Synthesis
* @author dismal_science__
* @help Plugin commands-
*
*   spokenWord word
*   (utter specified word)
*
*   spokenWord e:JavaScriptCommand
*   (utter JavaScript statement)
*
*   spokenWord #VariableNumber
*   (utter specified $gameVariable value)
*
* Examples-
*   spokenWord dope
*   (utter the word 'dope')
*
*   spokenWord e:$gameActors.actor(1)._name
*   (utter Game Actor 1's name)
*
*   spokenWord #10
*   (utter the value of $gameVariable 10)
*
*   setVoice vValue pValue rValue 
*   (changes synthesis parameters to effect volume[v], pitch[p],
*   and speech rate[r]).
*
* Example-
*   setVoice v1 p2 r4
*   (changes volume to 1, pitch to 2, and speech rate to 4)
*
* Commands can be invoked by script as well-
*
*   dismal.SpokenWord.utter(`dopeness`);
*   (utters the word 'dopeness')
*
*   dismal.SpokenWord.setVoice(1,2,4);
*   (changes volume to 1, pitch to 2, and speech rate to 4)
*
* For messages, use the following Control characters-
*
*   \SW[x] Will be replaced by x word, and will utter x word.
*   ('This is a test \SW[message].' 'Message' will be uttered)
*
*   \SWE['x'] Will evaluate code x.  Result will be uttered.
*   ('Actor 1's name is \SWE['$gameActors.actor(1)._name']' 
*   The database value of Actor 1's name will be uttered.)
*
*   \SWV[x] Will be replaced with the value of xth variable.
*   ('There are \SWV[4] cookies left.'
*   The value of $gameVariable 4 will be uttered.)
*
* If you want to alter any of the code for custom use, please
* do so by creating an extension plugin.
*
* To check if dismal_SpokenWord has been loaded use the following
* conditional statement-
*
*   if (Imported.dismal_SpokenWord) {};
*
*
* Copyright ©MMXX dismal_science__. All Rights Reserved.
* Permission to use and distribute for any purpose is hereby granted
* without fee, provided that the above copyright notice appear in
* all copies and that both copyright notice and this permission notice
* appear in supporting documentation.
*
* Additional Terms of Use-
*   1. 'dismal_science' must be given credit in your games.
*   2. Do NOT change the code, filename, parameters, and information
*      of the plugin.
*   3. Do NOT take code for your own released plugins.
*
* The above copyright notice, terms of use, and this permission notice
* shall be included in all copies or substantial portions of the plugin.
*
* THE PLUGIN IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
* OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN ACTION OF CONTRACT, TORT OR
* OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE PLUGIN OR
* THE USE OR OTHER DEALINGS IN THE PLUGIN.
*
* @param defaultVolume
* @desc default volume. 0 to 1. 
* @type number
* @type decimals 1
* @max 1
* @min 0
* @default 1
*
* @param defaultPitch
* @desc default pitch. 0 to 2. 
* @type number
* @type decimals 1
* @max 2
* @min 0
* @default 1
*
* @param defaultRate
* @desc default speech rate. 0.1 to 10. 
* @type number
* @type decimals 1
* @max 10
* @min 0.1
* @default 1
*/

var Imported = Imported || {};
Imported.dismal_SpokenWord = true;

var dismal = dismal || {};
dismal.SpokenWord = 
    dismal.SpokenWord || {};

(function($){

    let parameters = PluginManager.parameters(`dismal_SpokenWord`);
    let voiceVolume = parseFloat(parameters[`defaultVolume`] || 1);
    let voicePitch = parseFloat(parameters[`defaultPitch`] || 1);
    let voiceRate = parseFloat(parameters[`defaultRate`] || 1);

    if (`speechSynthesis` in window) {

        $._wordCache = [];
        $._instance = null;
        $._settings = {
            volume: voiceVolume,
            pitch: voicePitch,
            rate: voiceRate
        };

//=============================================================================
// Game_Interpreter
//=============================================================================

        const dismal_SpokenWord_Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function(command, args) {
            dismal_SpokenWord_Game_Interpreter_pluginCommand.call(this, command, args);
            if (command.toLowerCase() === `setvoice`) {
                let _settings = [];
                args.forEach(function(setting) {
                    setting = setting.replace(/\s/g,``).toLowerCase();
                    value = setting.substr(1);
                    switch (setting.charAt(0)) {
                        case `v`:
                            _settings[0] = Number(value);
                            break;
                        case `p`:
                            _settings[1] = Number(value);
                            break;
                        case `r`:
                            _settings[2] = Number(value);
                            break;
                    };
                });
                $.setVoice(
                    ((_settings[0] || $._settings.volume) || 1),
                    ((_settings[1] || $._settings.pitch) || 1),
                    ((_settings[2] || $._settings.rate) || 1)
                );
            };

            if (command.toLowerCase() === `spokenword`) {
                if (args.length > 0) {
                    let expression = args.join(` `);
                    $.utter(parseWord(expression));
                };
            };
        };

//=============================================================================
// Window_Message
//=============================================================================

        const dismal_SpokenWord_Window_Message_startMessage = 
            Window_Message.prototype.startMessage;
        Window_Message.prototype.startMessage = function() {
            dismal_SpokenWord_Window_Message_startMessage.call(this);
            magsalita();
        };

//=============================================================================
// Window_Base
//=============================================================================

        const dismal_SpokenWord_Window_Base_convertEscapeCharacters =
            Window_Base.prototype.convertEscapeCharacters;
        Window_Base.prototype.convertEscapeCharacters = function(text) {
            text = text.replace(/\\/g, '\x1b');
            text = text.replace(/\x1bSW\[(\w+)\]/gi, function() {
                $._wordCache.push(arguments[1]);
                return arguments[1];
            }.bind(this));
            text = text.replace(/\x1bSWE\[('[^\']+'|\"[^\"]+\")\]/gi, function() {
                let word = 
                    String(eval(arguments[1].slice(1, -1)) || ``);
                $._wordCache.push(word);
                return word;
            }.bind(this));
            text = text.replace(/\x1bSWV\[(\d+)\]/gi, function() {
                let word = 
                    String($gameVariables.value(parseInt(arguments[1])));
                $._wordCache.push(word);
                return word;
            }.bind(this));
            return dismal_SpokenWord_Window_Base_convertEscapeCharacters.call(this, text);
        };

//=============================================================================
// Helper Routines
//=============================================================================

        let magsalita = async function() {
            let words = $._wordCache;
            for (let word = 0; word < words.length; word++) {
                await utterWords(words[word]);
            };
            $._wordCache = [];
        };

        let setupSpeech = function(word) {
            if (!(typeof word === `string`)) word = ``;
            let retVal = new SpeechSynthesisUtterance(word);
            if (!(Object.keys($._settings).length === 0)) {
                retVal.volume = $._settings.volume;
                retVal.pitch = $._settings.pitch;
                retVal.rate = $._settings.rate;
            };
            return retVal;
        };

        let utterWords = async function(word) {
            if ($._instance === null || !$._instance.speaking) {
                $._instance = setupSpeech(word);
                window.speechSynthesis.speak($._instance);
        
                return new Promise(resolve => {
                    $._instance.onend = resolve;
                });
            };
        };

        let parseWord = function(word) {
            let retVal = word;
            if (word.contains(`#`) || word.contains(`e:`)) {
                switch(word.toLowerCase().charAt(0)) {
                    case `#`:
                        retVal = 
                            String($gameVariables.value(Number(word.substr(1))));
                        break;
                    case `e`:
                        retVal = 
                            String(eval(word.substr(2)));
                        break;
                };
            };
            return retVal;
        };

//=============================================================================
// dismal.SpokenWord Methods
//=============================================================================
        
        $.utter = function(word) {
            if ($._instance === null || !$._instance.speaking) {
                $._instance = setupSpeech(word);
                window.speechSynthesis.speak($._instance);
            };
        };

        $.setVoice = function(volume = 1, pitch = 1, rate = 1) {
            $._settings = {
                volume: ((volume >= 0 && volume <= 1) ? volume : 1),
                pitch: ((pitch >= 0 && pitch <= 2) ? pitch : 1),
                rate: ((rate >= 0.1 && rate <= 10) ? rate : 1)
            };
        };

    } else {

        console.log(`Speech Synthesis not supported.`);

    };

}(dismal.SpokenWord));