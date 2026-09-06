function swapLetters() {
    let word = document.getElementById("word").value;
    let result = document.getElementById("result");

    // if the word has only one or zero letters, nothing to swap
    if (word.length <= 1) {
        result.textContent = word;
        return;
    }

    // swap first and last letters
    let swapped = word[word.length - 1] + word.slice(1, -1) + word[0];

    result.textContent = "Swapped word: " + swapped;
}
