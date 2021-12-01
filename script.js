function calculateBmi() {
  let weight = document.bmiForm.weight.value;
  let height = document.bmiForm.height.value;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (((height / 100) * height) / 100);
    document.bmiForm.bmi.value = finalBmi;
    if (finalBmi < 18.5) {
      document.bmiForm.meaning.value = "That you are too thin.";
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      document.bmiForm.meaning.value = "That you are healthy.";
    }
    if (finalBmi > 25) {
      document.bmiForm.meaning.value = "That you are overweight.";
    }
  }
}
