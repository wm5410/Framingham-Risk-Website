var age = "";
var gender = "";
var cholesterol = "";
var cholesterolHDL = "";
var smoking = "";
var bloodPressure = "";
var totalScore = "";
var treated = 0;
var risk = 0;


function Age(){
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    
    var new_nav = "<input type='reset' value='Restart' onclick='Restart()'>";
    new_nav += "<input type='button' value='Next' onclick='Cholesterol();'>";
    
    var new_html = "<h1>Please enter your age and your gender.</h1>";
    new_html += "<label for='age'>Age (20 to 79 Years):</label> <input type='number' id='age' name='age' min='20' max='79' value='20'><br><br>";
    new_html += "<label for='gender'>Gender</label> <select id='genderID' name='genders'> <option value='M' selected>Male</option> <option value='F'>Female</option></select>";
    
    div.innerHTML = new_html;
    nav.innerHTML = new_nav;

}
function Cholesterol(){
    age = document.getElementById("age").value;
    if(age > 80)
        {
            alert("Enter a valid number");
            return;
        }
    gender = document.getElementById("genderID").value;
    
    
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    
    div.innerHTML = "";
    nav.innerHTML = "";
    
    var new_nav = "<input type='button' value='Previous' onclick='Age();'>";
    new_nav += "<input type='reset' value='Restart' onclick='Restart()'>";
    new_nav += "<input type='button' value='Next' onclick='Smoking();'>";
    
    var new_html = "<h1>Please enter your Cholesterol level.</h1>";
    new_html += "<label for='cholesterol'>Total Cholesterol level (100 to 900): </label>";
    new_html += "<input type='number' id='CholesterolID' name='Cholesterol' min='100' max='900' value='100'>";
    new_html += "<br><br><label for='cholesterol'>HDL Cholesterol level (1 to 150): </label>";
    new_html += "<input type='number' id='CholesterolHDLID' name='CholesterolHDL' min='1' max='150' value='50'>";
    
    div.innerHTML = new_html;
    nav.innerHTML = new_nav;
}
function Smoking(){
    cholesterol = document.getElementById("CholesterolID").value;
    cholesterolHDL = document.getElementById("CholesterolHDLID").value;
    if(cholesterol > 900 || cholesterol < 100)
        {
            alert("Enter a valid number");
            return;
        }
    if(cholesterolHDL > 150 || cholesterolHDL < 1)
        {
            alert("Enter a valid number");
            return;
        }
    
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    
    div.innerHTML = "";
    nav.innerHTML = "";
    
    var new_nav = "<input type='button' value='Previous' onclick='Cholesterol();'>";
    new_nav += "<input type='reset' value='Restart' onclick='Restart()'>";
    new_nav += "<input type='button' value='Next' onclick='BloodPressure();'>";
    
    var new_html = "<h1>Please indicate if you are a smoker.</h1>";
    new_html += "<p>Are you currently a smoker?</p>";
    new_html += "<input type='radio' id='smokeYes' name='smoker' value='Yes'> <label for='Yes'>Yes</label><br>";
    new_html += "<input type='radio' id='smokeNo' name='smoker' value='No' checked='checked'> <label for='No'>No</label><br>";
    
    div.innerHTML = new_html;
    nav.innerHTML = new_nav;
}
function BloodPressure(){
    if(document.getElementById('smokeYes').checked) {
        smoking = 1;
    }else if(document.getElementById('smokeNo').checked) {
        smoking = 0;
    }
    
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    
    div.innerHTML = "";
    nav.innerHTML = "";
    
    var new_nav = "<input type='button' value='Previous' onclick='Smoking();'>";
    new_nav += "<input type='reset' value='Restart' onclick='Restart()'>";
    new_nav += "<input type='button' value='Next' onclick='FinalRiskScore();'>";
    
    var new_html = "<h1>Please enter your Blood pressure.</h1>";
    new_html += "<label for='blood pressure'>Blood pressure (30 to 300): </label>";
    new_html += "<input type='number' id='bloodPressureID' name='blood pressure' min='30' max='300' value='30'>";
    
    new_html += "<br><br><p>Do you currently take any Blood Pressure treatment?</p>";
    new_html += "<input type='radio' id='BloodYes' name='Blood' value='Yes'> <label for='Yes'>Yes</label><br>";
    new_html += "<input type='radio' id='BloodNo' name='Blood' value='No' checked='checked'> <label for='No'>No</label><br>";
    
    div.innerHTML = new_html;
    nav.innerHTML = new_nav;
}
function FinalRiskScore(){
    bloodPressure = document.getElementById("bloodPressureID").value;
    if(bloodPressure > 300 || bloodPressure < 30)
        {
            alert("Enter a valid number");
            return;
        }
    
    if(document.getElementById('BloodYes').checked) {
        treated = 1;
    }
    if(document.getElementById('BloodNo').checked) {
        treated = 0;
    }
    
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    
    div.innerHTML = "";
    
    var new_nav = "<input type='reset' value='Restart' onclick='Restart()'>";
    
    var new_html = "<input type='button' value='Submit' onclick='Submit()'>";
    
    
    div.innerHTML = new_html;
    nav.innerHTML = new_nav;
}
function Restart(){
    var nav = document.getElementById("navBar");
    var div = document.getElementById("div1");
    var new_html = "<h1>This is a website designed to estimate the 10-year cardiovascular risk of the user.</h1>";
    new_html += "<h2>Please enter the values required on each page starting from age.</h2>";
    new_html += "<input type='button' value='Next' onclick='Age();'>";
    div.innerHTML = new_html;
    nav.innerHTML = "";
}

function Submit(){
    var div = document.getElementById("div1");
    
    totalScore = 0;
    
    if (gender == "M")
        {
            if(age >= 20 && age <= 34)
                {
                    totalScore -= 7;
                    if(smoking == 1)
                        totalScore += 8;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 4;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 7;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 9;
                    if(cholesterol > 280)
                        totalScore += 11;

                }
            if(age >= 35 && age <= 39)
                {
                    totalScore -= 3;
                    if(smoking == 1)
                        totalScore += 8;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 4;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 7;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 9;
                    if(cholesterol > 280)
                        totalScore += 11;
                }
            if(age >= 40 && age <= 44)
                {
                    totalScore += 0;
                    if(smoking == 1)
                        totalScore += 5;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 3;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 5;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 6;
                    if(cholesterol > 280)
                        totalScore += 8;
                }
            if(age >= 45 && age <= 49)
                {
                   totalScore += 3; 
                    if(smoking == 1)
                        totalScore += 5;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 3;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 5;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 6;
                    if(cholesterol > 280)
                        totalScore += 8;
                }
            if(age >= 50 && age <= 54)
                {
                    totalScore += 6;
                    if(smoking == 1)
                        totalScore += 3;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 2;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 3;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 4;
                    if(cholesterol > 280)
                        totalScore += 5;
                }
            if(age >= 55 && age <= 59)
                {
                    totalScore += 8;
                    if(smoking == 1)
                        totalScore += 3;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 2;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 3;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 4;
                    if(cholesterol > 280)
                        totalScore += 5;
                }
            if(age >= 60 && age <= 64)
                {
                    totalScore += 10;
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 1;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 2;
                    if(cholesterol > 280)
                        totalScore += 3;
                }
            if(age >= 65 && age <= 69)
                {
                  totalScore += 12;  
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 1;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 2;
                    if(cholesterol > 280)
                        totalScore += 3;
                }
            if(age >= 70 && age <= 74)
                {
                    totalScore += 14;
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 0;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 0;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 1;
                    if(cholesterol > 280)
                        totalScore += 1;
                }
            if(age >= 75 && age <= 79)
                {
                    totalScore += 16;
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 0;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 0;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 1;
                    if(cholesterol > 280)
                        totalScore += 1;
                }
            
            if(cholesterolHDL >= 60)
                totalScore -= 1;
            if(cholesterolHDL < 60 && cholesterolHDL >= 50)
                totalScore += 0;
            if(cholesterolHDL < 50 && cholesterolHDL >= 40)
                totalScore += 1;
            if(cholesterolHDL < 40)
                totalScore += 2;
            
            if(treated == 0)
                {
                    if(bloodPressure >= 120 && bloodPressure < 130)
                        totalScore += 0;
                    if(bloodPressure >= 130 && bloodPressure < 140)
                        totalScore += 1;
                    if(bloodPressure >= 140 && bloodPressure < 160)
                        totalScore += 1;
                    if(bloodPressure > 160)
                        totalScore += 2;
                }
            if(treated == 1)
                {
                    if(bloodPressure >= 120 && bloodPressure < 130)
                        totalScore += 1;
                    if(bloodPressure >= 130 && bloodPressure < 140)
                        totalScore += 2;
                    if(bloodPressure >= 140 && bloodPressure < 160)
                        totalScore += 2;
                    if(bloodPressure > 160)
                        totalScore += 3;
                }
            
            if(totalScore == 0)
                risk = "<1";
            if(totalScore >= 1 && totalScore <= 4)
                risk = 1;
            if(totalScore >= 5 && totalScore <= 6)
                risk = 2;
            if(totalScore == 7)
                risk = 3;
            if(totalScore == 8)
                risk = 4;
            if(totalScore == 9)
                risk = 5;
            if(totalScore == 10)
                risk = 6;
            if(totalScore == 11)
                risk = 8;
            if(totalScore == 12)
                risk = 10;
            if(totalScore == 13)
                risk = 12;
            if(totalScore == 14)
                risk = 16;
            if(totalScore == 15)
                risk = 20;
            if(totalScore == 16)
                risk = 25;
            if(totalScore >= 17)
                risk = ">30";
            
        }
    if(gender == "F")
        {
            if(age >= 20 && age <= 34)
                {
                    totalScore -= 7;
                    if(smoking == 1)
                        totalScore += 9;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 4;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 8;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 11;
                    if(cholesterol > 280)
                        totalScore += 13;
                }
            if(age >= 35 && age <= 39)
                {
                    totalScore -= 3;
                    if(smoking == 1)
                        totalScore += 9;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 4;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 8;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 11;
                    if(cholesterol > 280)
                        totalScore += 13;
                }
            if(age >= 40 && age <= 44)
                {
                    totalScore += 0;
                    if(smoking == 1)
                        totalScore += 7;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 3;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 6;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 8;
                    if(cholesterol > 280)
                        totalScore += 10;
                }
            if(age >= 45 && age <= 49)
                {
                   totalScore += 3; 
                    if(smoking == 1)
                        totalScore += 7;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 3;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 6;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 8;
                    if(cholesterol > 280)
                        totalScore += 10;
                }
            if(age >= 50 && age <= 54)
                {
                    totalScore += 6;
                    if(smoking == 1)
                        totalScore += 4;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 2;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 4;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 5;
                    if(cholesterol > 280)
                        totalScore += 7;
                }
            if(age >= 55 && age <= 59)
                {
                    totalScore += 8;
                    if(smoking == 1)
                        totalScore += 4;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 2;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 4;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 5;
                    if(cholesterol > 280)
                        totalScore += 7;
                }
            if(age >= 60 && age <= 64)
                {
                    totalScore += 10;
                    if(smoking == 1)
                        totalScore += 2;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 2;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 3;
                    if(cholesterol > 280)
                        totalScore += 4;
                }
            if(age >= 65 && age <= 69)
                {
                  totalScore += 12;  
                    if(smoking == 1)
                        totalScore += 2;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 2;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 3;
                    if(cholesterol > 280)
                        totalScore += 4;
                }
            if(age >= 70 && age <= 74)
                {
                    totalScore += 14;
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 1;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 2;
                    if(cholesterol > 280)
                        totalScore += 2;
                }
            if(age >= 75 && age <= 79)
                {
                    totalScore += 16;
                    if(smoking == 1)
                        totalScore += 1;
                    
                    if(cholesterol >= 160 && cholesterol < 200)
                        totalScore += 1;
                    if(cholesterol >= 200 && cholesterol < 240)
                        totalScore += 1;
                    if(cholesterol >= 240 && cholesterol < 280)
                        totalScore += 2;
                    if(cholesterol > 280)
                        totalScore += 2;
                }
                        
            
            if(cholesterolHDL >= 60)
                totalScore -= 1;
            if(cholesterolHDL < 60 && cholesterolHDL >= 50)
                totalScore += 0;
            if(cholesterolHDL < 50 && cholesterolHDL >= 40)
                totalScore += 1;
            if(cholesterolHDL < 40)
                totalScore += 2;
            
            if(treated == 0)
                {
                    if(bloodPressure >= 120 && bloodPressure < 130)
                        totalScore += 1;
                    if(bloodPressure >= 130 && bloodPressure < 140)
                        totalScore += 2;
                    if(bloodPressure >= 140 && bloodPressure < 160)
                        totalScore += 3;
                    if(bloodPressure > 160)
                        totalScore += 4;
                }
            if(treated == 1)
                {
                    if(bloodPressure >= 120 && bloodPressure < 130)
                        totalScore += 3;
                    if(bloodPressure >= 130 && bloodPressure < 140)
                        totalScore += 4;
                    if(bloodPressure >= 140 && bloodPressure < 160)
                        totalScore += 5;
                    if(bloodPressure > 160)
                        totalScore += 6;
                }
            
            if(totalScore < 9)
                risk = "<1";
            if(totalScore >= 9 && totalScore <= 12)
                risk = 1;
            if(totalScore >= 13 && totalScore <= 14)
                risk = 2;
            if(totalScore == 15)
                risk = 3;
            if(totalScore == 16)
                risk = 4;
            if(totalScore == 17)
                risk = 5;
            if(totalScore == 18)
                risk = 6;
            if(totalScore == 19)
                risk = 8;
            if(totalScore == 20)
                risk = 11;
            if(totalScore == 21)
                risk = 14;
            if(totalScore == 22)
                risk = 17;
            if(totalScore == 23)
                risk = 22;
            if(totalScore == 24)
                risk = 27;
            if(totalScore >= 25)
                risk = ">30";
        }
    
    var new_html = "<h2>Your score is: </h2>";
    new_html += totalScore;
    new_html += "<br><h2>With a percentage of: </h2>";
    new_html += risk + "%";
    div.innerHTML = new_html;
}

