function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

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
                    <li>Breakfast: ${breakfast}</li>
                    <li>Snack: ${snack1}</li>
                    <li>Lunch: ${lunch}</li>
                    <li>Snack: ${snack2}</li>
                    <li>Dinner: ${dinner}</li>
                </ul>
                <li><strong>Tuesday</strong></li>
                <li><strong>Wednesday</strong></li>
                <li><strong>Thursday</strong></li>
                <li><strong>Friday</strong></li>
                <li><strong>Saturday</strong></li>
                <li><strong>Sunday</strong></li>
            </ul>
        </body>
        
        </html>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(mealPlanContent);
}

function clearPlanner() {
    document.getElementById('mealForm').reset();
}

function printPlanner() {
    window.print();
}
