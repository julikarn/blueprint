
function clickOn() {

    var chrt = document.getElementById("chartId").getContext("2d");
    var chartId = new Chart(chrt, {
        type: 'line',
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                label: "Sales",
                data: [15000, 21000, 18000, 24000, 23000, 24000, 12000],
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
                borderColor: ['black'],
                borderWidth: 2,
                pointRadius: 5,
            }],
        },
        options: {
            responsive: false,
        },
    });

   

}
