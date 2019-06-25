function bmi() {
    let height = parseFloat(document.getElementById("enHeight").value);
    let weight = parseInt(document.getElementById("enWeight").value);
    let result = weight / (height * height);
    result = result.toFixed(2);
    document.getElementById('resultViewnumber').innerHTML = result;
    if (result < 18.0) {
        document.getElementById("resultView").innerHTML = 'UnderWeight';
    } else if (result < 25.0) {
        document.getElementById('resultView').innerHTML = 'Normal';
    } else if (result < 30.0) {
        document.getElementById('resultView').innerHTML = 'OverWeight';
    } else {
        document.getElementById('resultView').innerHTML = 'Obese';
    }
}