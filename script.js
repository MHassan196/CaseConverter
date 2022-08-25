const TitleCase = (string) => {
    let result = [];
    let a = string.toLowerCase().split(" ");
    //reset to lowercase and split where the spaces are

    for (let i = 0; i < a.length; i++) { //do every word
        a[i] = a[i][0].toUpperCase() + a[i].substr(1);
        //first letter to uppercase and then add the rest
        result.push(a[i]);

    }
    return result.join(' ');


}
const SentenceCase = (string) => {
    let result = [];
    let words = string.toLowerCase().split(" ");
    let newsentence = true;

    for (let i = 0; i < words.length; i++) {

        if (newsentence == true || words[i] == "i") {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            newsentence = false;
        }

        if (words[i][words[i].length - 1] === "." || words[i][words[i].length - 1] === "?" || words[i][words[i].length - 1] === "!") {
            newsentence = true;
        }

    }

    return words.join(" ");

};

var swapCase = function (s) {
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};


function copy() {
    /* Get the text field */
    var copyText = document.getElementById("user-input");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

function eraseText() {
    document.getElementById("user-input").value = "";
}

// function demo() {
//     document.getElementById("user-input").innerHTML = document.getElementById("user-input").innerHTML + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//   }

var memo = document.getElementById("user-input");

document.getElementById("lower").addEventListener("click", function () {
    memo.value = memo.value.toLowerCase();
});

document.getElementById("upper").addEventListener("click", function () {
    memo.value = memo.value.toUpperCase();
});

document.getElementById("sent").addEventListener("click", function () {
    memo.value = SentenceCase(memo.value);
});

document.getElementById("alter").addEventListener("click", function () {
    memo.value = swapCase(memo.value);
});

document.getElementById("titl").addEventListener("click", function () {
    memo.value = TitleCase(memo.value);
});

