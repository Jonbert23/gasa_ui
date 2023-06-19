(function department_graph()
{
    var registeredEmployees = [20, 35, 40, 55, 30]; // Daily registered employee counts
    var unregisteredEmployees = [10, 25, 30, 20, 15]; // Daily unregistered employee counts
    var labels = ['Admin', 'Human Resource', 'Accounting', 'IT', 'Inventory']; // Daily labels

    // Chart Configuration
    var ctx = document.getElementById('depart_graph').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar', // Use 'bar' type instead of 'horizontalBar'
        data: {
            labels: labels,
            datasets: [
            {
                label: 'Number of Employees',
                data: registeredEmployees,
                backgroundColor: '#4B49AC',
                borderWidth: 0
            },
            {
                label: 'Number of Goal',
                data: unregisteredEmployees,
                backgroundColor: '#F3797E',
                borderWidth: 0
            }
            ]
        },
        options: {
        indexAxis: 'y', // Set the axis to 'y' for horizontal orientation
        scales: {
            x: {
            beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
            display: true
            }
        }
        }
    });
})();


(function postion_graph(){
    const data = {
        labels: ["Manager", "Engineer", "Administrator"],
        datasets: [
            {
            data: [150, 30, 100],
            backgroundColor: ["#4B49AC",  "#7DA0FA", "#F3797E"],
            // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF7E"],
            },
        ],
    };
    // Get the canvas element
    const ctx = document.getElementById("position").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };

})();


(function Job_type()
{
    const data = {
    labels: ["Regular", "Part-Time", "Contractual", "Job Order", "Full Time"],
    datasets: [
        {
        label: "Number Of Employees",
        data: [20, 25, 30, 40, 35],
        backgroundColor: "#4B49AC",
        borderColor: "#4B49AC",
        borderWidth: 2,
        },
        {
        label: "Number of Goal",
        data: [15, 18, 20, 25, 23],
        backgroundColor: "#F3797E",
        borderColor: "#F3797E",
        borderWidth: 2,
        },
    ],
    };

    // Get the canvas element
    const ctx = document.getElementById("position_graph").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
    type: "line",
    data: data
    });
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };
})();
