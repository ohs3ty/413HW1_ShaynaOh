//Shayna Oh, January 20, 2020, 413
$("#submitButton").click(function () {
    //gather inputs
    var assignment = $("assignment").value;
    var project = $("project").value;
    var quiz = $("quiz").value;
    var exam = $("exam").value;
    var intex = $("intex").value;
    var final = 0;
    var letter = '';

    //calculate final percentage based on weighted scores
    final = assignment * .5 + project * .1 + quiz * .1 + exam * .2 + intex * .1;
    //get letter grade
    if (final >= 94) {
        letter = 'A';
    } else if (final >= 90) {
        letter = 'A-';
    } else if (final >= 87) {
        letter = 'B+';
    } else if (final >= 84) {
        letter = 'B';
    } else if (final >= 80) {
        letter = 'B-';
    } else if (final >= 77) {
        letter = 'C+';
    } else if (final >= 74) {
        letter = 'C';
    } else if (final >= 70) {
        letter = 'C-'
    } else if (final >= 67) {
        letter = 'D+';
    } else if (final >= 64) {
        letter = 'D';
    } else if (final >= 60) {
        letter = 'D-;'
    } else {
        letter = 'E';
    }
    //alert final things
    alert("Final Grade Percentage: " + final + "%\nFinal Letter Grade: " + letter);
    //document.getElementById("output").value = "Final Grade Percentage: " + final + "%<br>Final Letter Grade: " + letter;
});