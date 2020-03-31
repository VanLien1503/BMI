function check() {
    let height = parseFloat(document.getElementById("cm").value);
    let weight = parseFloat(document.getElementById("kg").value);
    height /= 100;
    if (height <= 0 && height <= 0) {
        alert("Nhập Lại Giá Trị")
    } else {
        let bmi = weight / (height * height);
        document.getElementById("resuleBMI").innerHTML = "Chỉ Số BMI của Bạn : " + bmi;
        if (bmi < 18) {
            document.getElementById("resule").innerHTML = "<img src=\"image/Gầy.png\" height=\"500\" width=\"200\"/>"
        } else if (bmi < 25) {
            document.getElementById("resule").innerHTML = "<img src=\"image/BT.png\" height=\"500\" width=\"200\"/>"
        } else if (bmi < 30) {
            document.getElementById("resule").innerHTML = "<img src=\"image/Thừakg.png\" height=\"500\" width=\"200\"/>"
        } else if (bmi < 35) {
            document.getElementById("resule").innerHTML = "<img src=\"image/Béo.png\" height=\"500\" width=\"200\"/>"
        } else {
            document.getElementById("resule").innerHTML = "<img src=\"image/BéoPhì.png\" height=\"500\" width=\"200\"/>"
        }
    }

}