 const weightInput = document.querySelector('#weight');
 const heightInput = document.querySelector('#height');
 
 const weightVal = document.querySelector('#weight-val');
 const heightVal = document.querySelector('#height-val');  
 const bmiResult = document.querySelector('#result');  
 const category = document.querySelector('#category');  
 const colorBox = document.querySelector('.BMI');


function bmiCalc() {
    let weightInputValue = weightInput.value;
    let heightInputValue = heightInput.value;

    weightVal.innerHTML = weightInputValue;
    heightVal.innerHTML = heightInputValue

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100, 2))).toFixed(1);

    bmiResult.innerHTML = bmiValue;
     
    if(bmiValue < 16){
        category.innerHTML = 'Severely Underweight';
        category.style.color = "red";
        colorBox.style.backgroundColor = '#f46f6f76';
    }
    else if(bmiValue < 18.5){
        category.innerHTML = ' Underweight';
        category.style.color = "#d59d02";
        colorBox.style.backgroundColor = '#ffff004d';

    } else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        category.innerHTML = 'Normal weight';
        category.style.color = "green";
        colorBox.style.backgroundColor = '#84f5843e';


    } else if(bmiValue >= 25 && bmiValue < 29.9){
        category.innerHTML = ' Overweight';
        category.style.color = "#d59d02";
        colorBox.style.backgroundColor = '#ffff004d';

    }else{
        category.innerHTML = ' Obesity ';
        category.style.color = "red";
        colorBox.style.backgroundColor = '#f46f6f76';
    }
}
weightInput.addEventListener('input', bmiCalc);
heightInput.addEventListener('input', bmiCalc);
