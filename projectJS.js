document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const clearBtn = document.getElementById("clearBtn");
    const printBtn = document.getElementById("printBtn");
    generateBtn.addEventListener("click", function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const goal = document.getElementById('goal').value;
        
        const mon_breakfast = document.getElementById('mon_breakfast').value;
        const mon_snack1 = document.getElementById('mon_snack1').value;
        const mon_lunch = document.getElementById('mon_lunch').value;
        const mon_snack2 = document.getElementById('mon_snack2').value;
        const mon_dinner = document.getElementById('mon_dinner').value;

        const tue_breakfast = document.getElementById('tue_breakfast').value;
        const tue_snack1 = document.getElementById('tue_snack1').value;
        const tue_lunch = document.getElementById('tue_lunch').value;
        const tue_snack2 = document.getElementById('tue_snack2').value;
        const tue_dinner = document.getElementById('tue_dinner').value;

        const wed_breakfast = document.getElementById('wed_breakfast').value;
        const wed_snack1 = document.getElementById('wed_snack1').value;
        const wed_lunch = document.getElementById('wed_lunch').value;
        const wed_snack2 = document.getElementById('wed_snack2').value;
        const wed_dinner = document.getElementById('wed_dinner').value;

        const thu_breakfast = document.getElementById('thu_breakfast').value;
        const thu_snack1 = document.getElementById('thu_snack1').value;
        const thu_lunch = document.getElementById('thu_lunch').value;
        const thu_snack2 = document.getElementById('thu_snack2').value;
        const thu_dinner = document.getElementById('thu_dinner').value;

        const fri_breakfast = document.getElementById('fri_breakfast').value;
        const fri_snack1 = document.getElementById('fri_snack1').value;
        const fri_lunch = document.getElementById('fri_lunch').value;
        const fri_snack2 = document.getElementById('fri_snack2').value;
        const fri_dinner = document.getElementById('fri_dinner').value;

        const sat_breakfast = document.getElementById('sat_breakfast').value;
        const sat_snack1 = document.getElementById('sat_snack1').value;
        const sat_lunch = document.getElementById('sat_lunch').value;
        const sat_snack2 = document.getElementById('sat_snack2').value;
        const sat_dinner = document.getElementById('sat_dinner').value;

        const sun_breakfast = document.getElementById('sun_breakfast').value;
        const sun_snack1 = document.getElementById('sun_snack1').value;
        const sun_lunch = document.getElementById('sun_lunch').value;
        const sun_snack2 = document.getElementById('sun_snack2').value;
        const sun_dinner = document.getElementById('sun_dinner').value;



        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

    const mealPlanContent = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: monospace;
                }
            </style>
        </head>
        
        <body>
            <h1>Meal Plan for ${name}</h1>
            <h2>Goal for the Week:</h2>
            <p>${goal}</p>
            
            <h2>Meal Plan:</h2>
            <ul>
                <li><strong>Monday</strong></li>
                <ul>
                    <li>Breakfast: ${mon_breakfast}</li>
                    <li>Snack: ${mon_snack1}</li>
                    <li>Lunch: ${mon_lunch}</li>
                    <li>Snack: ${mon_snack2}</li>
                    <li>Dinner: ${mon_dinner}</li>
                </ul>
                <li><strong>Tuesday</strong></li>
                <ul>
                    <li>Breakfast: ${tue_breakfast}</li>
                    <li>Snack: ${tue_snack1}</li>
                    <li>Lunch: ${tue_lunch}</li>
                    <li>Snack: ${tue_snack2}</li>
                    <li>Dinner: ${tue_dinner}</li>
                </ul>
                <li><strong>Wednesday</strong></li>
                <ul>
                    <li>Breakfast: ${wed_breakfast}</li>
                    <li>Snack: ${wed_snack1}</li>
                    <li>Lunch: ${wed_lunch}</li>
                    <li>Snack: ${wed_snack2}</li>
                    <li>Dinner: ${wed_dinner}</li>
                </ul>
                <li><strong>Thursday</strong></li>
                <ul>
                    <li>Breakfast: ${thu_breakfast}</li>
                    <li>Snack: ${thu_snack1}</li>
                    <li>Lunch: ${thu_lunch}</li>
                    <li>Snack: ${thu_snack2}</li>
                    <li>Dinner: ${thu_dinner}</li>
                </ul>
                <li><strong>Friday</strong></li>
                <ul>
                    <li>Breakfast: ${fri_breakfast}</li>
                    <li>Snack: ${fri_snack1}</li>
                    <li>Lunch: ${fri_lunch}</li>
                    <li>Snack: ${fri_snack2}</li>
                    <li>Dinner: ${fri_dinner}</li>
                </ul>
                <li><strong>Saturday</strong></li>
                <ul>
                    <li>Breakfast: ${sat_breakfast}</li>
                    <li>Snack: ${sat_snack1}</li>
                    <li>Lunch: ${sat_lunch}</li>
                    <li>Snack: ${sat_snack2}</li>
                    <li>Dinner: ${sat_dinner}</li>
                </ul>
                <li><strong>Sunday</strong></li>
                <ul>
                    <li>Breakfast: ${sun_breakfast}</li>
                    <li>Snack: ${sun_snack1}</li>
                    <li>Lunch: ${sun_lunch}</li>
                    <li>Snack: ${sun_snack2}</li>
                    <li>Dinner: ${sun_dinner}</li>
                </ul>
            </ul>
        </body>
        
        </html>
    `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(mealPlanContent);

    });

    printBtn.addEventListener("click", function() {
        window.print();
    });

    clearBtn.addEventListener("click", function() {
        document.getElementById('mealForm').reset();
    });

});