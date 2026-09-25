let textInput = document.getElementById("wordInput")
let checkBtn = document.getElementById("checkbutton")
let textResult = document.getElementById("result")
let errMessage = document.getElementById("error")



function checkEl(){
    let word = textInput.value
    let lowerCaseWord = word.toLowerCase()
    
    let reversedWord = lowerCaseWord.split("").reverse().join("")
    
    if (lowerCaseWord === reversedWord){
        textResult.textContent = word + " " + "is a PALINDROME"
    }
    else{
        textResult.textContent = word + " " + "is NOT a PALINDROME"
    }

    if (word === ""){
        textResult.textContent = ""
        errMessage.textContent = "Enter a word!!"
    }
}
