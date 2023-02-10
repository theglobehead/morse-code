let $inputTextarea = $("#input-textarea")
let $outputTextarea = $("#output-textarea")
let $convertButton = $("#convert-button")
let $inputModeContainer = $(".input-mode-container:first") 

let inputMode = "text"

let textToMorseDict = {
    "a": "._",
    "b": "_...",
    "c": "_._.",
    "d": "_..",
    "e": ".",
    "f": ".._.",
    "g": "__.",
    "h": "....",
    "i": "..",
    "j": ".___",
    "k": "_._",
    "l": "._..",
    "m": "__",
    "n": "_.",
    "o": "___",
    "p": ".__.",
    "q": "__._",
    "r": "._.",
    "s": "...",
    "t": "_",
    "u": ".._",
    "v": "..._",
    "w": ".__",
    "x": "_.._",
    "y": "_.__",
    "z": "__..",
    "0": "_____",
    "1": ".____",
    "2": "..___",
    "3": "...__",
    "4": "...._",
    "5": ".....",
    "6": "_....",
    "7": "__...",
    "8": "___..",
    "9": "____.",
    " ": "/",
}

function setInputMode(){
    convertInput()
    $inputModeContainer.find(".option").toggleClass("selected")
    inputMode = $inputModeContainer.find(".option.selected:first").attr("value")

    let inputTextareaVal = $inputTextarea.val()
    $inputTextarea.val($outputTextarea.val())
    $outputTextarea.val(inputTextareaVal)
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function convertInput(){
    let inputText = $inputTextarea.val()
    let result = ""

    if(inputMode === "text"){
        result = textToMorse(inputText)
    }else{
        result = morseToText(inputText)
    }

    $outputTextarea.val(result)
}

function morseToText(text){
    result = ""

    text = text.split(" ")

    for(char of text){
        if(getKeyByValue(textToMorseDict, char) != undefined){
            result += getKeyByValue(textToMorseDict, char)
        }
    }

    return result
}

function textToMorse(text){
    result = ""

    for(char of text){
        if(textToMorseDict[char] != undefined){
            result += textToMorseDict[char] + " "
        }
    }

    return result
}
