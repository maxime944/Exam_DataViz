
fetch('data.json')
    .then(response => response.json())
    .then(data => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30pays = data.slice(0, 30).reverse();
    const pays = top30pays.map(item => item.country);
    const population = top30pays.map(item => item.population);

    const trace = {
        x: pays,
        y: population,
        type: 'bar'
    };

    const layout = {
        title: 'Top 30 des pays par population',
        xaxis: { title: 'Pays' },
        yaxis: { title: 'Population' }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}
