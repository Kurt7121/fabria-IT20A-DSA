const chartCanvas = document.createElement('canvas');
chartCanvas.id = 'talentChart';
chartCanvas.width = 800;
chartCanvas.height = 400;
document.body.appendChild(chartCanvas);
const talentCategories = ['Writing', 'Dance', 'Arts', 'Sports', 'Music'];
const talentData = {
    labels: talentCategories,
    datasets: [{
        label: 'Talent Distribution',
        data: [25, 15, 30, 20, 10], 
        backgroundColor: [
            'rgba(54, 162, 235, 1)', 
            'rgba(75, 192, 192, 1)',  
            'rgba(255, 165, 0, 1)',  
            'rgba(153, 102, 255, 1)',  
            'rgba(0, 128, 0, 1)'   
        ],
        hoverOffset: 4
    }]
};
const chartConfig = {
    type: 'pie',
    data: talentData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Talents',
                font: {
                    size: 24, 
                    weight: 'bold'
                }
            }
        }
    },
};
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = () => {
    const talentChart = new Chart(chartCanvas.getContext('2d'), chartConfig);
};
document.head.appendChild(chartScript);