import scrollama from "scrollama";
import * as d3 from "d3";

// Set up the dimensions and margins of the chart
const margin = { top: 20, right: 30, bottom: 40, left: 90 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Append the SVG object to the chart container
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Dummy data
// const data = [
//   { name: "A", value: 30 },
//   { name: "B", value: 80 },
//   { name: "C", value: 45 },
//   { name: "D", value: 60 },
//   { name: "E", value: 20 }
// ];

const data = [
	{ "name": "Chelsea", "value_eur": 23950000 },
	{ "name": "Manchester City", "value_eur": 20750000 },
	{ "name": "Arsenal", "value_eur": 19075000 },
	{ "name": "Manchester United", "value_eur": 18060000 }, 
	{ "name": "Liverpool", "value_eur": 13925000 },				
	{ "name": "Tottenham Hotspur", "value_eur": 11215000 },
	{ "name": "Everton", "value_eur": 9125000 },
	{ "name": "Stoke City", "value_eur": 6865000 },
	{ "name": "Southampton", "value_eur": 6823750 },
	{ "name": "Swansea City", "value_eur": 6560000 },									
	{ "name": "Newcastle United", "value_eur": 6435000 },
	{ "name": "West Ham United", "value_eur": 6075000 },											
	{ "name": "Aston Villa", "value_eur": 5090000 },
	{ "name": "Sunderland", "value_eur": 4800000 },
	{ "name": "West Bromwich Albion", "value_eur": 4780000 },
	{ "name": "Crystal Palace", "value_eur": 4255000 },
	{ "name": "Watford", "value_eur": 3635000 },
	{ "name": "Leicester City", "value_eur": 3587500 },
	{ "name": "Norwich City", "value_eur": 2940000 },
	{ "name": "Bournemouth", "value_eur": 2843750 }
	
];

// Scales
const x = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value_eur)])
  .range([0, width]);

const y = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([0, height])
  .padding(0.1);

// Bars
svg.selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", 0)
  .attr("y", d => y(d.name))
  .attr("width", d => x(d.value_eur))
  .attr("height", y.bandwidth())
  .style("fill", "steelblue");

// Axes
svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

svg.append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(y));

  
svg.selectAll(".label")
.data(data)
.enter()
.append("text")
.attr("class", "label")
.attr("x", d => x(d.value_eur) + 5) // Position label slightly to the right of the bar
.attr("y", d => y(d.name) + y.bandwidth() / 2) // Center label vertically within the bar
.attr("dy", "0.35em") // Adjust for vertical alignment
.text(d => '') // Display the value of the bar
.style("fill", "black")
.style("font-size", "12px");


// Initialize Scrollama
const scroller = scrollama();

// Step activation function
function handleStepEnter(response) {
  // Add/remove active class on steps
  d3.selectAll(".step")
    .classed("active", (d, i) => i === response.index);

  // Highlight bar on step
  const step = response.element.dataset.step;

  if (step >= 2) {
	d3.selectAll(".bar")
    .style("fill", (d, i) => i === 17 ? "orange" : "steelblue");
  } else {
	d3.selectAll(".bar")
    .style("fill", "steelblue");

  }
  if (step >= 3) {
	// Add captions (labels) on the bars
	svg.selectAll(".label")
	.text((d, i) => i === 17 ?  d.value_eur : '');
  } else {
	svg.selectAll(".label")
	.text((d, i) => '');
  }
}

var midpoint = Math.floor(window.innerHeight * 0.5) + "px";

// Initialize Scrollama
scroller
  .setup({
    step: ".step",
    offset: midpoint, // Trigger when 70% of the viewport height is reached
    debug: false // Enable debugging visuals
  })
  .onStepEnter(handleStepEnter);
