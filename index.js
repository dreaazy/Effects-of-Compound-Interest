
let chartInstance = null;

document.getElementById('compoundInterestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the values from the input fields
    let principal = parseFloat(document.getElementById('principal').value);
    let years = parseFloat(document.getElementById('years').value);
    let interestRate = parseFloat(document.getElementById('interest').value) / 100;
    let compoundsPerYear = parseInt(document.getElementById('compoundsPerYear').value);
    let TER = parseFloat(document.getElementById('TER').value) / 100;
    let advisorFee = parseFloat(document.getElementById('advisorFee').value) / 100;
    let monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);

    let periodRecBuy = document.getElementById('recBuy').value;

    // Arrays to hold data points for the graph
    let labels = [];
    let dataPointsETF = [];
    let dataPointsAdvisor = [];

    for (let year = 1; year <= years; year++) {
        let accumulatedAmountETF = principal * Math.pow((1 + (interestRate - TER) / compoundsPerYear), (compoundsPerYear * year));
        let accumulatedAmountAdvisor = principal * Math.pow((1 + (interestRate - TER - advisorFee) / compoundsPerYear), (compoundsPerYear * year));

        // Add contributions based on selected period
        switch(periodRecBuy) {
            case 'month':
                for (let month = 1; month <= year * 12; month++) {
                    let monthsLeft = (year * 12 - month + 1) / 12;
                    accumulatedAmountETF += monthlyContribution * Math.pow((1 + (interestRate - TER) / compoundsPerYear), (compoundsPerYear * monthsLeft));
                    accumulatedAmountAdvisor += monthlyContribution * Math.pow((1 + (interestRate - TER - advisorFee) / compoundsPerYear), (compoundsPerYear * monthsLeft));
                }
                break;
            case 'year':
                accumulatedAmountETF += monthlyContribution * 12 * Math.pow((1 + (interestRate - TER) / compoundsPerYear), (compoundsPerYear * year));
                accumulatedAmountAdvisor += monthlyContribution * 12 * Math.pow((1 + (interestRate - TER - advisorFee) / compoundsPerYear), (compoundsPerYear * year));
                break;
            case 'day':
                for (let day = 1; day <= year * 365; day++) {
                    let monthsLeft = (year * 365 - day + 1) / 365;
                    accumulatedAmountETF += (monthlyContribution / 30) * Math.pow((1 + (interestRate - TER) / compoundsPerYear), (compoundsPerYear * monthsLeft));
                    accumulatedAmountAdvisor += (monthlyContribution / 30) * Math.pow((1 + (interestRate - TER - advisorFee) / compoundsPerYear), (compoundsPerYear * monthsLeft));
                }
                break;
        }

        // Log accumulated amounts for debugging
        console.log(`Year ${year}: ETF = ${accumulatedAmountETF}, Advisor = ${accumulatedAmountAdvisor}`);

        dataPointsETF.push(parseFloat(accumulatedAmountETF.toFixed(2)));
        dataPointsAdvisor.push(parseFloat(accumulatedAmountAdvisor.toFixed(2)));
        labels.push("Year " + year);
    }

    let WithoutCompound = principal + (monthlyContribution * years)


    function formatNumberWithSpaces(num) {
    // Convert the number to a string and split it into groups of three
    const numStr = num.toString();
    const formattedNum = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Add spaces

    return formattedNum;
    }

    // Display the final amount and spent amount
    document.getElementById('result').textContent = `Total: $${formatNumberWithSpaces(dataPointsETF[years - 1])} - Spent: $${formatNumberWithSpaces(WithoutCompound)}`;

    

    console.log("Data Points ETF:", dataPointsETF);
    console.log("Data Points Advisor:", dataPointsAdvisor);


    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = document.getElementById('interestChart').getContext('2d');
    chartInstance = new Chart(ctx, {

        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'ETF Performance (No Advisor)',
                    data: dataPointsETF,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.1
                },
                {
                    label: 'Financial Advisor Performance',
                    data: dataPointsAdvisor,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                    tension: 0.1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Accumulated Amount ($)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                }
            }
        }
    });
});
