// import scrollama from "scrollama";
// import * as d3 from "d3";

// // // Set up the dimensions and margins of the chart
// // const margin = { top: 120, right: 30, bottom: 40, left: 110 };
// // const width = 800 - margin.left - margin.right;
// // const height = 600 - margin.top - margin.bottom;

// // // Append the SVG object to the chart container
// // const svg = d3.select("#chart")
// //   .append("svg")
// //   .attr("width", width + margin.left + margin.right)
// //   .attr("height", height + margin.top + margin.bottom)
// //   .append("g")
// //   .attr("transform", `translate(${margin.left},${margin.top})`);

// // // Dummy data
// // // const data = [
// // //   { name: "A", value: 30 },
// // //   { name: "B", value: 80 },
// // //   { name: "C", value: 45 },
// // //   { name: "D", value: 60 },
// // //   { name: "E", value: 20 }
// // // ];

// const data = [
// 	{ "name": "Chelsea", "value_eur": 23950000 },
// 	{ "name": "Manchester City", "value_eur": 20750000 },
// 	{ "name": "Arsenal", "value_eur": 19075000 },
// 	{ "name": "Manchester United", "value_eur": 18060000 }, 
// 	{ "name": "Liverpool", "value_eur": 13925000 },				
// 	{ "name": "Tottenham Hotspur", "value_eur": 11215000 },
// 	{ "name": "Everton", "value_eur": 9125000 },
// 	{ "name": "Stoke City", "value_eur": 6865000 },
// 	{ "name": "Southampton", "value_eur": 6823750 },
// 	{ "name": "Swansea City", "value_eur": 6560000 },									
// 	{ "name": "Newcastle United", "value_eur": 6435000 },
// 	{ "name": "West Ham United", "value_eur": 6075000 },											
// 	{ "name": "Aston Villa", "value_eur": 5090000 },
// 	{ "name": "Sunderland", "value_eur": 4800000 },
// 	{ "name": "West Bromwich Albion", "value_eur": 4780000 },
// 	{ "name": "Crystal Palace", "value_eur": 4255000 },
// 	{ "name": "Watford", "value_eur": 3635000 },
// 	{ "name": "Leicester City", "value_eur": 3587500 },
// 	{ "name": "Norwich City", "value_eur": 2940000 },
// 	{ "name": "Bournemouth", "value_eur": 2843750 }
	
// ];

// // // Scales
// // const x = d3.scaleLinear()
// //   .domain([0, d3.max(data, d => d.value_eur)])
// //   .range([0, width]);

// // const y = d3.scaleBand()
// //   .domain(data.map(d => d.name))
// //   .range([0, height])
// //   .padding(0.1);

// // // Bars
// // svg.selectAll(".bar")
// //   .data(data)
// //   .enter()
// //   .append("rect")
// //   .attr("class", "bar")
// //   .attr("x", 0)
// //   .attr("y", d => y(d.name))
// //   .attr("width", d => x(d.value_eur))
// //   .attr("height", y.bandwidth())
// //   .style("fill", "steelblue");

// // // Axes
// // svg.append("g")
// //   .attr("class", "x-axis")
// //   .attr("transform", `translate(0,${height})`)
// //   .call(d3.axisBottom(x));

// // svg.append("g")
// //   .attr("class", "y-axis")
// //   .call(d3.axisLeft(y));

  
// // svg.selectAll(".label")
// // .data(data)
// // .enter()
// // .append("text")
// // .attr("class", "label")
// // .attr("x", d => x(d.value_eur) + 5) // Position label slightly to the right of the bar
// // .attr("y", d => y(d.name) + y.bandwidth() / 2) // Center label vertically within the bar
// // .attr("dy", "0.35em") // Adjust for vertical alignment
// // .text(d => '') // Display the value of the bar
// // .style("fill", "black")
// // .style("font-size", "16px");


// // // Initialize Scrollama
// // const scroller = scrollama();
// // const chartContainer = d3.select("#chart-container");

// // // generic window resize listener event
// // function handleResize() {
// //   // 1. update height of step elements
// //   var stepH = Math.floor(window.innerHeight * 0.75);
// //   var main = d3.select("main");
// //   var scrolly = main.select("#scrolly");
// //   var article = scrolly.select("#text");
// //   var step = article.selectAll(".step");
// //   step.style("height", stepH + "px");

// //   var figureHeight = window.innerHeight / 2;
// //   var figureMarginTop = (window.innerHeight - figureHeight) / 2;

// //   chartContainer
// //     .style("height", figureHeight + "px")
// //     .style("top", figureMarginTop + "px");

// //   // 3. tell scrollama to update new element dimensions
// //   scroller.resize();
// // }

// // // Step activation function
// // function handleStepEnter(response) {
// //   d3.selectAll(".step")
// //   .classed("active", (d, i) => i === response.index);
  
// //   const step = response.element.dataset.step;
// //   if (step === "1") {
// //     // Bring in the chart
// //     chartContainer
// //       .style("opacity", 1) // Fully visible
// //       .style("transform", "translateY(0)"); // Move to position
// //   }
// //   if (step >= 2) {
// // 	d3.selectAll(".bar")
// //     .style("fill", (d, i) => i === 17 ? "#003090" : "steelblue");
// //   } else {
// // 	d3.selectAll(".bar")
// //     .style("fill", "steelblue");

// //   }
// //   if (step >= 3) {
// // 	// Add captions (labels) on the bars
// // 	svg.selectAll(".label")
// // 	.text((d, i) => i === 17 ?  d.value_eur : '');
// //   } else {
// // 	svg.selectAll(".label")
// // 	.text((d, i) => '');
// //   }
// // }

      

// // handleResize();
// // // Initialize Scrollama
// // scroller
// //   .setup({
// //     step: ".step",
// //     offset: 0.2, 
// //     debug: false // Enable debugging visuals
// //   })
// //   .onStepEnter(handleStepEnter);


// // using d3 for convenience, and storing a selected elements
// var $container = d3.select('#scroll');
// var $graphic = $container.select('.scroll__graphic');
// var $chart = $graphic.select('.chart');
// var $text = $container.select('.scroll__text');
// var $step = $text.selectAll('.step');

// // initialize the scrollama
// var scroller = scrollama();

// // resize function to set dimensions on load and on page resize
// function handleResize() {
// 	// 1. update height of step elements for breathing room between steps
// 	var stepHeight = Math.floor(window.innerHeight * 0.75);
// 	$step.style('height', stepHeight + 'px');

// 	// 2. update height of graphic element
// 	var bodyWidth = d3.select('body').node().offsetWidth;

// 	$graphic
// 		.style('height', window.innerHeight + 'px');

// 	// 3. update width of chart by subtracting from text width
// 	var chartMargin = 32;
// 	var textWidth = $text.node().offsetWidth;
// 	var chartWidth = $graphic.node().offsetWidth - textWidth - chartMargin;
// 	// make the height 1/2 of viewport
// 	var chartHeight = Math.floor(window.innerHeight / 2);

// 	$chart
// 		.style('width', chartWidth + 'px')
// 		.style('height', chartHeight + 'px');

// 	// 4. tell scrollama to update new element dimensions
// 	scroller.resize();
// }

// // scrollama event handlers
// function handleStepEnter(response) {
// 	// response = { element, direction, index }

// 	// fade in current step
// 	$step.classed('is-active', function (d, i) {
// 		return i === response.index;
// 	})

// 	// update graphic based on step here
// 	var stepData = $step.attr('data-step')
	
// }

// function handleContainerEnter(response) {
// 	// response = { direction }

// 	// sticky the graphic
// 	$graphic.classed('is-fixed', true);
// 	$graphic.classed('is-bottom', false);
// }

// function handleContainerExit(response) {
// 	// response = { direction }

// 	// un-sticky the graphic, and pin to top/bottom of container
// 	$graphic.classed('is-fixed', false);
// 	$graphic.classed('is-bottom', response.direction === 'down');
// }

// // kick-off code to run once on load
// function init() {
// 	// 1. call a resize on load to update width/height/position of elements
// 	handleResize();

// 	// 2. setup the scrollama instance
// 	// 3. bind scrollama event handlers (this can be chained like below)
// 	scroller
// 		.setup({
// 			container: '#scroll', // our outermost scrollytelling element
// 			graphic: '.scroll__graphic', // the graphic
// 			text: '.scroll__text', // the step container
// 			step: '.scroll__text .step', // the step elements
// 			offset: 0.5, // set the trigger to be 1/2 way down screen
// 			debug: true, // display the trigger offset for testing
// 		})
// 		.onStepEnter(handleStepEnter)
// 		.onContainerEnter(handleContainerEnter)
// 		.onContainerExit(handleContainerExit);

// 	// setup resize event
// 	window.addEventListener('resize', handleResize);
// }

// // start it up
// init();