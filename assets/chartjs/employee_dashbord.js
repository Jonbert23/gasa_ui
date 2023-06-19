(function daily_grph()
{
    const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10"],
    datasets: [
        {
        label: "Registered Employees",
        data: [20, 25, 30, 40, 35, 45, 50, 55, 60, 65],
        backgroundColor: "#4B49AC",
        borderWidth: 1,
        },
        {
        label: "Unregistered Employees",
        data: [15, 18, 20, 25, 23, 28, 30, 32, 35, 40],
        backgroundColor: "#F3797E",
        borderWidth: 1,
        },
    ],
    };

    // Get the canvas element
    const ctx = document.getElementById("daily_graph").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
    type: "bar",
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

(function gender_graph(){
    const data = {
        labels: ["Male", "Female",],
        datasets: [
            {
            data: [15, 30],
            backgroundColor: ["#4B49AC", "#F3797E"],
            // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF7E"],
            },
        ],
    };

    // Get the canvas element
    const ctx = document.getElementById("job_type").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };

})();

(function status_graph(){
    const data = {
        labels: ["Active", "Inactive"],
        datasets: [
            {
            data: [150, 100],
            backgroundColor: ["#4B49AC", "#F3797E"],
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

(function department_graph(){
    const data = {
        labels: ["Manager", "Engineer", "Administrator"],
        datasets: [
            {
            data: [70, 50, 40],
            backgroundColor: ["#4B49AC", "#98BDFF",  "#F3797E"],
            // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF7E"],
            },
        ],
    };
    // Get the canvas element
    const ctx = document.getElementById("department").getContext("2d");

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

(function salary_base()
{
    const data = {
    labels: ["$ 100 - $149", "$ 150 - $ 199", "$ 200 - $ 149", "$ 250", "$ 300", "$ 350", "$ 400", "$ 450", "$ 500", "$ 600 - $1000"],
    datasets: [
        {
        label: "Salary Per Employees",
        data: [20, 25, 30, 40, 35, 45, 50, 55, 60, 65],
        backgroundColor: "#4B49AC",
        // borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        },
        
    ],
    };

    // Get the canvas element
    const ctx = document.getElementById("salary_base").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
    type: "bar",
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
