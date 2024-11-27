
import scrollama from "scrollama";
import * as d3 from 'd3';

let stage = 1;

// Load Stage 1 Content
const stage1Content = `
<div class="parallax-container">
    <div id="parallax-bg" style="background-image: url('leicester.JPG');"></div>
</div>
<div class="parallax-container">
    <div id="parallax-bg-2" style="background-image: url('champions.JPG');"></div>
</div>

<h1 style="text-align: center; color: white; font-size: 96px;">5000 - 1</h1>
<h2 style="text-align: center; color: white; font-size: 72px;">Leicester City's Fairytale</h2>

<section style="height: 70vh;"></section>
    <section id="scrolly">
        <article>
           <div class="step" data-step="1">
            <div  id="players">
                    <img src="vardy.WEBP" width="400px" />
                    <img src="kante.WEBP" width="400px" />
                    <img src="maharez.WEBP" width="400px" />
                    </div>
            </div>
            <div class="step" data-step="2" style="max-width: 40rem;">
        <p style="background-color: black; border-radius: 20px;"><strong>Leicester City's 2015/16 fairytale</strong> defied conventional soccer wisdom. While other teams dominated possession, Leicester relied on a counter-attacking strategy to win the title.</p>
        <p style="background-color: black; border-radius: 20px;"><strong>One of the greatest underdog tales in sports history</strong> is Leicester City's surprising victory in the English Premier League season of 2015–16. The team was given <strong>5000-to-1 odds</strong> to win the championship at the beginning of the season. Leicester City surprised everyone by winning the league and doing so in a way that went against accepted soccer measurements and conventions.</p>
        <p style="background-color: black; border-radius: 20px;"><strong>Ball possession</strong> is valued highly in soccer, according to conventional knowledge, and teams that dominate possession are frequently thought to have a higher chance of winning. Leicester City, however, reversed this notion. They averaged just <strong>43% possession</strong>, one of the lowest among the league's champions in recent memory. In contrast, other elite clubs dominated games with prolonged stretches of possession, often surpassing <strong>55%</strong>.</p>
        </div>
        <div class="step" data-step="3" style="max-width: 40rem;">
        <p style="background-color: black; border-radius: 20px;"><strong>Their success was based on their counter-attacking strategy.</strong> Leicester enticed their opponents into overcommitting by giving up possession and playing compact defense, then quickly responded. Key players like <strong>Jamie Vardy</strong> and <strong>Riyad Mahrez</strong> played a crucial role in carrying out this plan; Vardy frequently converted clinical opportunities that Mahrez's ingenuity and vision generated. In addition to being effective, this strategy was devastatingly so.</p>
        <p style="background-color: black; border-radius: 20px;">Furthermore, Leicester benefited from a unique confluence of circumstances, including a team free of injuries for the majority of the season, exceptional performances by up-and-coming talent like <strong>N'Golo Kanté</strong>, and the inability of established powerhouses like Manchester United, Arsenal, and Chelsea to remain consistent. Leicester's tenacity and camaraderie became legendary under manager <strong>Claudio Ranieri</strong>'s leadership.</p>
        </div>
         
        </article>
    </section>

    <section style="height: 100vh;"></section>
`;


// Load Stage 2 Content
// const stageKanteContent = `


//     <section id="outro"></section>
//     <section id="scrolly">
//         <article>

//         </article>

//         <figure>
//             <p id="kante"></p>
//         </figure>
//     </section>
  

//     <section id="outro"></section>
// `;

const stageVardyContent = `


<section id="outro"></section>

    
<section id="intro">
<div">
    <p>
        Using <strong>advanced analytics</strong>, we can quantify the value of individual players in ways that traditional metrics—such as <strong>goals</strong> and <strong>assists</strong>—can’t fully capture. By looking beyond surface-level statistics, we gain a deeper understanding of a player’s true impact on the game.
    </p>
    </div>
</section>

<section id="outro"></section>

<section id="intro">

<div>
    <p><strong>For example:</strong></p>
    <ul>
        <li><strong>xG (expected goals)</strong> and <strong>xA (expected assists)</strong> provide deeper insights into a player’s ability to <strong>create</strong> and <strong>finish scoring opportunities</strong>.</li>
        <li><strong>Radar charts</strong> allow us to compare traditional football statistics alongside advanced metrics, helping to identify the <strong>key contributors</strong> to Leicester’s success beyond just goal scorers.</li>
    </ul>
    </div>
</section>

<section id="outro"></section>

<section id="intro">

<div>
    <p>
        By comparing traditional metrics—like <strong>height</strong>, <strong>weight</strong>, and <strong>goals</strong>—with advanced analytics like <strong>xG (expected goals)</strong> and <strong>xA (expected assists)</strong>, we can see how Leicester City’s star players—<strong>Vardy</strong>, <strong>Kanté</strong>, and <strong>Mahrez</strong>—contributed to their historic Premier League win. 
        <br><br>
        <strong>Data analytics</strong> not only helps identify standout performances but also enables clubs to make <strong>informed decisions</strong> on tactics, recruitment, and player development, giving them a competitive edge in modern football.
    </p>
    </div>
</section>

    
<section id="outro"></section>
<section id="scrolly">
    <article>
<div class="step" data-step="1">
    <p><strong>Vardy: Traditional Metrics</strong></p>
    <p>Vardy stands out for his <strong>goals scored</strong>, <strong>assists</strong>, and <strong>minutes played</strong>. His height and weight are also typical for a fast and mobile forward.</p>
</div>

<div class="step" data-step="2">
    <p><strong>Vardy: Advanced Metrics</strong></p>
    <p>His <strong>xG (expected goals)</strong> and <strong>xA (expected assists)</strong> will show how clinical his finishing is compared to what’s expected.</p>
</div>

<div class="step" data-step="3">
    <p><strong>Kanté: Traditional Metrics</strong></p>
    <p>Kanté might have a lower number of <strong>goals</strong> and <strong>assists</strong>, but he will excel in <strong>minutes played</strong> and <strong>key passes</strong>. He’s the engine of the team, covering ground and supporting both defense and attack.</p>
</div>

<div class="step" data-step="4">
    <p><strong>Kanté: Advanced Metrics</strong></p>
    <p>His <strong>xG (expected goals)</strong> and <strong>xA (expected assists)</strong> values may not be as high as Mahrez or Vardy, but his <strong>tackles</strong> and <strong>interceptions</strong> will be vital.</p>
</div>

<div class="step" data-step="5">
    <p><strong>Mahrez: Traditional Metrics</strong></p>
    <p>Mahrez will excel in <strong>goals</strong>, <strong>assists</strong>, and <strong>dribbles</strong>, showcasing his creative and offensive qualities.</p>
</div>

<div class="step" data-step="6">
    <p><strong>Mahrez: Advanced Metrics</strong></p>
    <p>His <strong>xG</strong> and <strong>xA</strong> will highlight his involvement in creating and finishing chances, showcasing his technical prowess and efficiency.</p>
</div>

    </article>

    <figure>
        <p id="vardy"></p>
        <img id="profile" />
    </figure>
</section>


<section id="outro"></section>
`;

// const stageMaharezContent = `


// <section id="outro"></section>
// <section id="scrolly">
//     <article>
//     </article>

//     <figure>
//         <p id="maharez"></p>
//     </figure>
// </section>


// <section id="outro"></section>
// `;

        // generic window resize listener event
        function handleResize() {
        // 1. update height of step elements
        var stepH = Math.floor(window.innerHeight * 0.75);
        step.style("height", stepH + "px");

        var figureHeight = window.innerHeight / 2;
        var figureMarginTop = (window.innerHeight - figureHeight) / 2;

        figure
            ?.style("height", figureHeight + "px")
            .style("top", figureMarginTop + "px");

        // 3. tell scrollama to update new element dimensions
        // scroller.resize();
    }

    let myStep;

    // scrollama event handlers
    // function handleStepEnter(response) {
    //     // response = { element, direction, index }

    //     // if (stage == 1) {

    //     //     // update graphic based on step
    //     //     // figure.select("p").text(response.index + 1);
    //     //     if (_step >= 2) {
    //     //         d3.selectAll(".bar")
    //     //         .style("fill", (d, i) => i === 17 ? "#003090" : "steelblue");
    //     //     }
    //     //     if (_step >= 3) {
    //     //         // Add captions (labels) on the bars
    //     //         svg.selectAll(".label")
    //     //         .text((d, i) => i === 17 ?  d.value_eur : '');
    //     //     } 

    //     //     return;
    //     // }

    //     // if (stage == 5) {
    //     //     if (_step == 2) {
    //     //         d3.select('#v1')
    //     //           .transition() // Add a transition
    //     //           .duration(500) // Specify the duration in milliseconds
    //     //           .style('opacity', 0) // Fade out
    //     //           .on('end', function () {
    //     //             d3.select(this)
    //     //               .attr('src', 'V2.PNG') // Update the image source
    //     //               .transition() // Add another transition
    //     //               .duration(500)
    //     //               .style('opacity', 1); // Fade back in
    //     //           });
    //     //       }
    //     //       if (_step == 3) {
    //     //         d3.select('#v1')
    //     //           .transition()
    //     //           .duration(500)
    //     //           .style('opacity', 0)
    //     //           .on('end', function () {
    //     //             d3.select(this)
    //     //               .attr('src', 'V3.PNG')
    //     //               .transition()
    //     //               .duration(500)
    //     //               .style('opacity', 1);
    //     //           });
    //     //       }
    //     //       if (_step == 4) {
    //     //         d3.select('#v1')
    //     //           .transition()
    //     //           .duration(500)
    //     //           .style('opacity', 0)
    //     //           .on('end', function () {
    //     //             d3.select(this)
    //     //               .attr('src', 'V4.PNG')
    //     //               .transition()
    //     //               .duration(500)
    //     //               .style('opacity', 1);
    //     //           });
    //     //       }
              
    //     //   }
          
    // }

    function applyStyles(styles) {
            Object.entries(styles).forEach(([selector, rules]) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                Object.entries(rules).forEach(([property, value]) => {
                element.style[property] = value;
                });
            });
        });
    }

    function handleParallaxScroll() {
        const scrollPosition = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        
        parallaxBg2.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        parallaxBg2.style.marginTop = `${1300 - scrollPosition / 3}px`;
      }
  
      // Attach event listener to the window for parallax scrolling
      window.addEventListener('scroll', handleParallaxScroll);

// Scrollama Initialization
function initScrollama({ onStepProgress = () => {}, onStepEnter = () => {}, onStepExit = () => {} } = {}) {
    
        
    main = d3.select("main");
    scrolly = main.select("#scrolly");
    figure = scrolly.select("figure");
    article = scrolly.select("article");
    step = article.selectAll(".step");

    const scroller = scrollama();
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();
    scroller.resize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            debug: false,
            progress: true,
        })
        .onStepEnter(onStepEnter)
        .onStepExit(onStepExit)
        .onStepProgress(onStepProgress);

        window.scrollTo(0, 0);
}
    

// const data = [
//     { "name": "Chelsea", "value_eur": 23950000 },
//     { "name": "Manchester City", "value_eur": 20750000 },
//     { "name": "Arsenal", "value_eur": 19075000 },
//     { "name": "Manchester United", "value_eur": 18060000 }, 
//     { "name": "Liverpool", "value_eur": 13925000 },				
//     { "name": "Tottenham Hotspur", "value_eur": 11215000 },
//     { "name": "Everton", "value_eur": 9125000 },
//     { "name": "Stoke City", "value_eur": 6865000 },
//     { "name": "Southampton", "value_eur": 6823750 },
//     { "name": "Swansea City", "value_eur": 6560000 },									
//     { "name": "Newcastle United", "value_eur": 6435000 },
//     { "name": "West Ham United", "value_eur": 6075000 },											
//     { "name": "Aston Villa", "value_eur": 5090000 },
//     { "name": "Sunderland", "value_eur": 4800000 },
//     { "name": "West Bromwich Albion", "value_eur": 4780000 },
//     { "name": "Crystal Palace", "value_eur": 4255000 },
//     { "name": "Watford", "value_eur": 3635000 },
//     { "name": "Leicester City", "value_eur": 3587500 },
//     { "name": "Norwich City", "value_eur": 2940000 },
//     { "name": "Bournemouth", "value_eur": 2843750 }
    
// ];



document.getElementById("story").innerHTML = stage1Content;

document.querySelectorAll('.step').forEach((el) => el.style.height = 'auto !important');


let parallaxBg = document.getElementById('parallax-bg');

let parallaxBg2 = document.getElementById('parallax-bg-2');

parallaxBg2.style.marginTop = `1300px`;
//         // using d3 for convenience
var main = d3.select("main");
var scrolly;
var figure;
var article;
var step = main.selectAll(".section");

initScrollama();





// const margin = { top: 20, right: 30, bottom: 40, left: 150 };
// const width = 800 - margin.left - margin.right;
// const height = 600 - margin.top - margin.bottom;

// // Append the SVG object to the chart container
// const svg = d3.select("#chart")
// .append("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform", `translate(${margin.left},${margin.top})`);

// // Scales
// const x = d3.scaleLinear()
// .domain([0, d3.max(data, d => d.value_eur / 1000000)])
// .range([0, width]);

// const y = d3.scaleBand()
// .domain(data.map(d => d.name))
// .range([0, height])
// .padding(0.1);

// // Bars
// svg.selectAll(".bar")
// .data(data)
// .enter()
// .append("rect")
// .attr("class", "bar")
// .attr("x", 0)
// .attr("y", d => y(d.name))
// .attr("width", d => x(d.value_eur / 1000000))
// .attr("height", y.bandwidth())
// .style("fill", "steelblue");

// // Axes
// svg.append("g")
// .attr("class", "x-axis")
// .attr("transform", `translate(0,${height})`)
// .call(d3.axisBottom(x));

// svg.append("g")
// .attr("class", "y-axis")
// .call(d3.axisLeft(y));


// svg.selectAll(".label")
// .data(data)
// .enter()
// .append("text")
// .attr("class", "label")
// .attr("x", d => x(d.value_eur / 1000000) + 5) // Position label slightly to the right of the bar
// .attr("y", d => y(d.name) + y.bandwidth() / 2) // Center label vertically within the bar
// .attr("dy", "0.35em") // Adjust for vertical alignment
// .text(d => '') // Display the value of the bar
// .style("fill", "black")
// .style("font-size", "16px");


// initScrollama();

function createRadar(data, chartId, title) {
    const metrics = [...new Set(data.map(d => d.variable))]; // Extract unique metrics
    const players = [...new Set(data.map(d => d.player_name))]; // Extract unique players

    const width = 600, height = 600, margin = 50;
    const radius = Math.min(width, height) / 2 - margin;
    const levels = 5; // Number of concentric circles

    // Create SVG
    const svg = d3.select(chartId)
    .html('')
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Scale for the radius
    const rScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, radius]);

    // Angle for each axis
    const angleSlice = (2 * Math.PI) / metrics.length;

    // Draw concentric circles
    for (let i = 1; i <= levels; i++) {
    svg.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", (radius / levels) * i)
        .style("fill", "none")
        .style("stroke", "#ccc");
    }

    // Draw axes
    metrics.forEach((metric, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Axis line
    svg.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .style("stroke", "#ccc");

    // Axis label
    svg.append("text")
        .attr("x", x * 1.1)
        .attr("y", y * 1.1)
        .attr("text-anchor", x > 0 ? "start" : "end")
        .style("font-size", "12px")
        .text(metric);
    });

    // Draw polygons
    players.forEach(player => {
    const playerData = data.filter(d => d.player_name === player);
    const pathData = metrics.map((metric, i) => {
        const point = playerData.find(d => d.variable === metric) || { value: 0 };
        const angle = angleSlice * i - Math.PI / 2;
        const x = Math.cos(angle) * rScale(point.value);
        const y = Math.sin(angle) * rScale(point.value);
        return [x, y];
    });

    // Close the polygon
    pathData.push(pathData[0]);

    // Draw polygon
    svg.append("path")
        .attr("d", d3.line()(pathData))
        .attr("class", "polygon")
        .style("stroke", player === "N'Golo Kanté" ? "blue" : "red")
        .style("fill", player === "N'Golo Kanté" ? "blue" : "red")
        .style("fill-opacity", 0.1);
    });

    // Draw points
    data.forEach(d => {
    const angle = metrics.indexOf(d.variable) * angleSlice - Math.PI / 2;
    const x = Math.cos(angle) * rScale(d.value);
    const y = Math.sin(angle) * rScale(d.value);

    svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 4)
        .attr("class", "dot")
        .style("fill", d.metric_type === "Traditional" ? "red" : "blue")
        .style("stroke", "#fff");
    });

        // Add concentric circles and scale labels
        for (let i = 1; i <= levels; i++) {
  const levelValue = (100 / levels) * i;
  const circleRadius = (radius / levels) * i;

  // Add circular gridlines
  svg.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", circleRadius)
    .style("fill", "none")
    .style("stroke", "#ccc");

  // Add scale labels (on top axis)
  svg.append("text")
    .attr("x", 0)
    .attr("y", -circleRadius) // Align with the circle
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#333")
    .text(Math.round(levelValue / 20) * 20);
}

    // Add a title to the chart
    svg.append("text")
    .attr("x", 0) // Centered horizontally
    .attr("y", height / 2 - 10) // Positioned above the chart
    .attr("text-anchor", "middle") // Align the text to the center
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text(title);


    // Legend data
    const legendData = [
    { color: "red", label: "Traditional" },
    { color: "blue", label: "Advanced" }
    ];

    // Create legend
    const legend = svg.append("g")
    .attr("transform", `translate(${radius - 35}, -${radius})`); // Position legend near the top-right

    legendData.forEach((d, i) => {
    // Add legend circles
    legend.append("circle")
        .attr("cx", 10)
        .attr("cy", i * 20)
        .attr("r", 5)
        .style("fill", d.color);

    // Add legend text
    legend.append("text")
        .attr("x", 20)
        .attr("y", i * 20 + 5)
        .text(d.label)
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#333"); // Use a neutral color for text
    });

}

// page.start();

const sideScrollStyle = {
        "#scrolly": {
            position: "relative",
            display: "flex", // Modern browsers
            // backgroundColor: "#FFF",
            padding: "1rem",
        },
        "#scrolly > *": {
            flex: "1",
        },
        article: {
            position: "relative",
            padding: "0 1rem",
            maxWidth: "50rem",
            
        },
        figure: {
            position: "sticky", // Modern browsers
            width: "100%",
            margin: "0",
            transform: "translate3d(0, 0, 0)",
            // backgroundColor: "#FFF",
            zIndex: "0",
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "white"
        },
        "figure p": {
            textAlign: "center",
            padding: "1rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "8rem",
            fontWeight: "900",
            color: "#fff",
        },
        ".step": {
            margin: "0 auto 2rem auto",
            // backgroundColor: "#FFF",
            color: "#fff",
            height: "100vh"
        },
        ".step:last-child": {
            marginBottom: "0",
        },
        ".step.is-active": {
            backgroundColor: "#FFF",
            color: "#3b3b3b",
        },
        ".step p": {
            textAlign: "center",
            padding: "1rem",
            fontSize: "1.5rem",
            width: "100%"
        },
        "img": {
            alignSelf: "center"
        }
        };

        
        


        const kante = [
            {"player_name": "N'Golo Kanté", "variable": "height", "value": 98, "metric_type": "Advanced"},
            {"player_name": "N'Golo Kanté", "variable": "weight", "value": 68, "metric_type": "Advanced"},
            {"player_name": "N'Golo Kanté", "variable": "goals", "value": 20, "metric_type": "Traditional"},
            {"player_name": "N'Golo Kanté", "variable": "assists", "value": 35, "metric_type": "Traditional"},
            {"player_name": "N'Golo Kanté", "variable": "minutes_played", "value": 100, "metric_type": "Advanced"},
            {"player_name": "N'Golo Kanté", "variable": "xG", "value": 30, "metric_type": "Advanced"},
            {"player_name": "N'Golo Kanté", "variable": "xA", "value": 25, "metric_type": "Advanced"},
            {"player_name": "N'Golo Kanté", "variable": "shots", "value": 25, "metric_type": "Traditional"},
            {"player_name": "N'Golo Kanté", "variable": "key_passes", "value": 30, "metric_type": "Traditional"},
            {"player_name": "N'Golo Kanté", "variable": "dribbles", "value": 100, "metric_type": "Traditional"}
        ];

        
        

        const maharez = [
            {"player_name": "Riyad Mahrez", "variable": "height", "value": 100, "metric_type": "Advanced"},
            {"player_name": "Riyad Mahrez", "variable": "weight", "value": 68, "metric_type": "Advanced"},
            {"player_name": "Riyad Mahrez", "variable": "goals", "value": 80, "metric_type": "Traditional"},
            {"player_name": "Riyad Mahrez", "variable": "assists", "value": 100, "metric_type": "Traditional"},
            {"player_name": "Riyad Mahrez", "variable": "minutes_played", "value": 90, "metric_type": "Advanced"},
            {"player_name": "Riyad Mahrez", "variable": "xG", "value": 90, "metric_type": "Advanced"},
            {"player_name": "Riyad Mahrez", "variable": "xA", "value": 63, "metric_type": "Advanced"},
            {"player_name": "Riyad Mahrez", "variable": "shots", "value": 92, "metric_type": "Traditional"},
            {"player_name": "Riyad Mahrez", "variable": "key_passes", "value": 100, "metric_type": "Traditional"},
            {"player_name": "Riyad Mahrez", "variable": "dribbles", "value": 37, "metric_type": "Traditional"}
        ];

let prevStep = myStep;

// Navigate to Stage 2 after scrolling through Stage 1
window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;

  if (stage === 1) {
    if (scrollPosition >= documentHeight) {

        stage = 4;
            document.getElementById("story").innerHTML = stageVardyContent;
            applyStyles(sideScrollStyle);

        const vardy = [
            {"player_name": "Jamie Vardy", "variable": "height", "value": 100, "metric_type": "Advanced"},
            {"player_name": "Jamie Vardy", "variable": "weight", "value": 75, "metric_type": "Advanced"},
            {"player_name": "Jamie Vardy", "variable": "goals", "value": 100, "metric_type": "Traditional"},
            {"player_name": "Jamie Vardy", "variable": "assists", "value": 60, "metric_type": "Traditional"},
            {"player_name": "Jamie Vardy", "variable": "minutes_played", "value": 90, "metric_type": "Advanced"},
            {"player_name": "Jamie Vardy", "variable": "xG", "value": 100, "metric_type": "Advanced"},
            {"player_name": "Jamie Vardy", "variable": "xA", "value": 42, "metric_type": "Advanced"},
            {"player_name": "Jamie Vardy", "variable": "shots", "value": 92, "metric_type": "Traditional"},
            {"player_name": "Jamie Vardy", "variable": "key_passes", "value": 50, "metric_type": "Traditional"},
            {"player_name": "Jamie Vardy", "variable": "dribbles", "value": 31, "metric_type": "Traditional"}
        ];


        createRadar(vardy.map((metric, i) => ({
            ...metric,
            value: 0
        })), '#vardy', 'Key Performance Metrics');
          initScrollama({ onStepEnter: (response) => {
            

            const _step = response.element.dataset.step;
            // add color to current step only
            d3.selectAll(".step").classed("is-active", function (d, i) {
                return i === response.index;
            });
    
            myStep = _step;
        }, onStepProgress: ({ progress }) => {
            if (progress === 1 && prevStep !== myStep) {
                return;
            }

            prevStep = myStep;
            
            if (myStep == 1) {
                createRadar(vardy.map((metric, i) => ({
                    ...metric,
                    value: metric.value * progress / 2
                })), '#vardy', 'Key Performance Metrics');

                d3.selectAll("#profile").attr('src', 'vardy.PNG');
            }
            if (myStep == 2) {
                createRadar(vardy.map((metric, i) => ({
                    ...metric,
                    value: metric.value * (0.5 + progress / 2)
                })), '#vardy', 'Key Performance Metrics');
            }
            if (myStep == 3) {
                createRadar(vardy.map((metric, i) => ({
                    ...metric,
                    value: metric.value * (1 - progress / 2) + kante[i].value * progress / 2
                })), '#vardy', 'Key Performance Metrics');

                d3.selectAll("#profile").attr('src', 'kante.PNG');
            }
            if (myStep == 4) {
                createRadar(vardy.map((metric, i) => ({
                    ...metric,
                    value: metric.value * (0.5 - progress / 2) + kante[i].value * (0.5 + progress / 2)
                })), '#vardy', 'Key Performance Metrics');
            }
            if (myStep == 5) {
                
                createRadar(kante.map((metric, i) => ({
                    ...metric,
                    value: metric.value * (1 - progress / 2) + maharez[i].value * progress / 2
                })), '#vardy', 'Key Performance Metrics');
                d3.selectAll("#profile").attr('src', 'maharez.PNG');
            }
            
            if (myStep == 6) {
                createRadar(kante.map((metric, i) => ({
                    ...metric,
                    value: metric.value * (0.5 - progress / 2) + maharez[i].value * (0.5 + progress / 2)
                })), '#vardy', 'Key Performance Metrics');
            }
            if (myStep == 7) {
                createRadar(maharez, '#vardy', 'Key Performance Metrics');
            }
          }});
        return;
    }
  }
//   if (stage === 2) {
//     if (scrollPosition >= documentHeight) {
//         stage = 3;
//         document.getElementById("story").innerHTML = stageKanteContent;

//         applyStyles(sideScrollStyle);

//         createRadar(kante, '#kante', 'N’Golo Kanté: Key Performance Metrics');
//         initScrollama();
        
//         return;
//     }
//   }
//   if (stage === 3) {
//     if (scrollPosition >= documentHeight) {
//         stage = 4;
//         document.getElementById("story").innerHTML = stageMaharezContent;

//         applyStyles(sideScrollStyle);

//         createRadar(mahrez, '#maharez', 'Riyad Maharez: Key Performance Metrics');
//         initScrollama();
        
//         return;
//     }
//   }

let pictureContainer;

  if (stage === 4) {
    if (scrollPosition >= documentHeight) {
        stage = 5;
        document.getElementById("story").innerHTML = `           

            <div id="picture-container">
                <img id="moving-picture" src="moneyball_magic.PNG" alt="Crawling Picture" />
            </div>
            

            <section id="outro"></section>
            
            <section id="scrolly" style="background-color: white;">
                <article>
<div class="step" data-step="1">
    <p><strong>Moneyball: Revolutionizing Sports Recruitment</strong></p>
    <p>The concept of <strong>"Moneyball"</strong> has flipped the script on how sports teams scout and build their squads. Born in baseball, this revolutionary approach uses <strong>data and analytics</strong> to uncover hidden talent and maximize value. Instead of relying on gut instincts or traditional scouting, Moneyball relies on cold, hard numbers—like <strong>performance-to-cost ratios</strong>—to spot overlooked players who pack a punch. Its influence has spilled into football, where clubs are learning to find <strong>diamonds in the rough</strong>, delivering world-class results without spending a fortune.</p>
</div>

<div class="step" data-step="2">
    <p><strong>The Efficiency Matrix: A Treasure Map for Football Clubs</strong></p>
    <p>The <strong>Efficiency Matrix</strong> is like a football club’s treasure map, showing exactly where value hides. It balances two key factors: a player’s <strong>market value</strong> and their <strong>contribution on the pitch</strong>. The result? Players are placed into four categories:
        <ul>
            <li><strong>Undervalued Gems:</strong> Players who give you more than you paid for.</li>
            <li><strong>Big Spends:</strong> Pricey stars who justify their cost.</li>
            <li><strong>Inefficient Investments:</strong> Low-cost players who still fail to deliver.</li>
            <li><strong>Expensive Risks:</strong> High-cost players who may not always match their hefty price tags.</li>
        </ul>
        </p>
    <p>This tool helps clubs separate the stars from the duds and find the best bang for their buck.</p>
</div>

<div class="step" data-step="3">
    <p><strong>Leicester City: The Kings of Value Recruitment</strong></p>
    <p><strong>Leicester City’s recruitment team</strong> played a blinder by spotting value where others didn’t. 
        <ul>
            <li><strong>N’Golo Kanté:</strong> Signed for just €8 million, became the engine of their midfield, snapping up balls and winning hearts.</li>
            <li><strong>Riyad Mahrez:</strong> A €500,000 bargain, brought creativity and flair that rivaled football’s elite.</li>
            <li><strong>Jamie Vardy:</strong> His rise from a €1 million non-league signing to a Premier League Golden Boot winner is nothing short of legendary.</li>
        </ul>
        </p>
    <p>These players led Leicester to the <strong>2015-16 Premier League title</strong>, defying the odds and humiliating much wealthier clubs. The <strong>Efficiency Matrix</strong> makes sense of their success, revealing how underrated talent can conquer even the biggest names in the game.</p>
</div>

<div class="step" data-step="4">
    <p><strong>Moneyball: A Blueprint for Footballing Success</strong></p>
    <p>Moneyball is more than just a strategy; it’s a <strong>blueprint for footballing success</strong>. By spending just €10 million to bring in Kanté, Mahrez, and Vardy, Leicester City created a €100 million goldmine while delivering an unforgettable Premier League triumph. Kanté’s <strong>energy</strong>, Mahrez’s <strong>skill</strong>, and Vardy’s <strong>killer instinct</strong> showed that with smart recruitment, you don’t need billions to compete with the giants. The <strong>Efficiency Matrix</strong> empowers clubs to replicate this success by pinpointing undervalued players and striking the right balance between <strong>big-name investments</strong> and <strong>hidden gems</strong>. In today’s football world, where budgets are under the microscope, this approach is the ultimate game-changer.</p>
</div>

                </article>

                <figure>
                    <img id="v1" src="V1.PNG" width="100%" />
                </figure>
            </section>
        

            <section id="outro"></section>
        `;

        const pictureContainer = document.querySelector('#picture-container');

        // Define scroll points
        const crawlInStart = 100; // Start crawling in after 100px of scroll
        const crawlInEnd = 800;   // Finish crawling in by 500px
        const scrollUpStart = 800; // Start scrolling up after 500px
        const scrollUpEnd = 1500;  // Finish scrolling up by 1000px

        // Event listener for scroll
        window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Crawl in from the right
        if (scrollY >= crawlInStart && scrollY <= crawlInEnd) {
            const progress = (scrollY - crawlInStart) / (crawlInEnd - crawlInStart);
            pictureContainer.style.right = `${-100 + progress * 104}%`; // Moves from -100% to 10%
            pictureContainer.style.transform = 'translateY(-50%)'; // Keep vertically centered
        }

        // Scroll up
        if (scrollY > scrollUpStart && scrollY <= scrollUpEnd) {
            const progress = (scrollY - scrollUpStart) / (scrollUpEnd - scrollUpStart);
            pictureContainer.style.transform = `translateY(${(-50 - progress * 350)}%)`; // Move up off-screen
        }

        // Reset for scrolling back up
        // if (scrollY < crawlInStart) {
        //     pictureContainer.style.right = '-100%'; // Reset to off-screen
        //     pictureContainer.style.transform = 'translateY(-50%)'; // Reset vertical position
        // }
        });

        //         // using d3 for convenience
        applyStyles(sideScrollStyle);
        initScrollama({ onStepEnter: (response) => {
            

        const _step = response.element.dataset.step;
        // add color to current step only
        d3.selectAll(".step").classed("is-active", function (d, i) {
            return i === response.index;
        });

        myStep = _step;

                if (response.index === 0) {
                  // Step 1: Move the picture into view from the right
                  pictureContainer.style.right = '10%'; // Adjust final position as needed
                }

                if (_step == 2) {
                    d3.select('#v1')
                        .transition() // Add a transition
                        .duration(500) // Specify the duration in milliseconds
                        .style('opacity', 0) // Fade out
                        .on('end', function () {
                        d3.select(this)
                            .attr('src', 'V2.PNG') // Update the image source
                            .transition() // Add another transition
                            .duration(500)
                            .style('opacity', 1); // Fade back in
                        });
                    }
                    if (_step == 3) {
                    d3.select('#v1')
                        .transition()
                        .duration(500)
                        .style('opacity', 0)
                        .on('end', function () {
                        d3.select(this)
                            .attr('src', 'V3.PNG')
                            .transition()
                            .duration(500)
                            .style('opacity', 1);
                        });
                    }
                    if (_step == 4) {
                    d3.select('#v1')
                        .transition()
                        .duration(500)
                        .style('opacity', 0)
                        .on('end', function () {
                        d3.select(this)
                            .attr('src', 'V4.PNG')
                            .transition()
                            .duration(500)
                            .style('opacity', 1);
                        });
                    }
        }});
        
        return;
    }
  }

  if (stage === 5) {
    
    if (scrollPosition >= documentHeight) {
    stage = 6;

            document.getElementById("story").innerHTML = `
            <section style="height: 100vh;"></section>
    <section id="scrolly">
        <figure>
        <svg id="line-chart"></svg>
    </figure>
        <article style="max-width: 40rem;">
             <div class="step" data-index="0" style="opacity: 0;"></div>
  <div class="step" data-index="1"><p>Despite average offensive metrics, Leicester maximized their opportunities and showcased defensive resilience. Their 2015/16 season was an anomaly in Premier League history, driven by efficiency rather than dominance. Their offensive statistics were mediocre in comparison to other championship-winning teams, but what made them stand out was their capacity to seize opportunities and withstand pressure.</p></div>

  <div class="step" data-index="2"><p>Leicester scored 68 goals, which is in close agreement with their xG of 66, according to the expected goals (xG) metric. This effectiveness demonstrates that they made the most of their opportunities even if they didn't generate many more than their rivals. Jamie Vardy and Riyad Mahrez were among the key players who made sure that even half-chances frequently resulted in goals.</p></div>

  <div class="step" data-index="3"><p>Their success was primarily due to their defensive prowess. Their ability to nullify opponent assaults was demonstrated by their regularly better-than-expected xG against, which was lower than the league average. Important contributions were made by their disciplined backline, which remained resilient under duress, and N'Golo Kanté, whose unwavering work ethic supported their midfield. Kasper Schmeichel, the goalie, also had an exceptional season, making crucial saves at crucial times.</p></div>

  <div class="step" data-index="4"><p>The graph illustrates Leicester's impressive goal differential in the 2015–16 campaign as opposed to their difficulties in the 2016–17 campaign. Even though they kept a large portion of their team, their performance declined sharply, highlighting the exceptional coincidence of circumstances needed to win the championship. Leicester's success was the result of a confluence of luck, strategy, and unity rather than just skill. Their triumph is a permanent reminder that in athletics, effectiveness and faith can triumph over strength and disadvantage.</p></div>


        </article>
    </section>

    <section style="height: 250vh;"></section>
            `;
    const data = [{
        "season": "2013/14",
        "differential": -7
    }, {
        "season": "2014/15",
        "differential": -2

    }, {
        "season": "2015/16",
        "differential": 32

    }, {
        "season": "2016/17",
        "differential": -15

    }, {
        "season": "2017/18",
        "differential": -2

    }];

    // Set dimensions
const margin = { top: 20, right: 20, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

    // Create SVG
const svg = d3
.select("#line-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

// Scales
const x = d3
.scalePoint()
.domain(data.map((d) => d.season))
.range([0, width]);

const y = d3
.scaleLinear()
.domain([d3.min(data, (d) => d.differential), d3.max(data, (d) => d.differential)])
.range([height, 0]);

// Axes
svg.append("g").attr("class", "x-axis").style("fill", "black").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
svg.append("g").attr("class", "y-axis").style("fill", "black").call(d3.axisLeft(y));

// Style axes with D3
svg.selectAll(".x-axis text")
   .style("fill", "black")
   .style("font-size", "12px");

svg.selectAll(".y-axis text")
   .style("fill", "black")
   .style("font-size", "12px");

// Line generator
const line = d3
.line()
.x((d) => x(d.season))
.y((d) => y(d.differential))
.curve(d3.curveMonotoneX);

// Append path
const path = svg
  .append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "#FDBE11")
  .attr("stroke-width", 2)
  .attr("d", line);
  // Append the title to the SVG
svg.append("text")
.attr("x", width / 2) // Center the title horizontally
.attr("y", -10) // Position above the chart
.attr("text-anchor", "middle") // Center align the text
.style("font-size", "16px") // Set font size
.style("font-weight", "bold") // Make the text bold
.style("fill", "black") // Text color
.text("Goal Differential Across Seasons");


const totalLength = path.node().getTotalLength();

path
  .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
  .attr("stroke-dashoffset", totalLength);

const steps = d3.selectAll(".step").nodes();
initScrollama({ onStepProgress: (response) => {
    const index = +response.element.dataset.index;
    const progress = response.progress;

    // Adjust stroke-dashoffset based on progress
    path.attr("stroke-dashoffset", totalLength * (1 - (index + progress) / steps.length));
  }});
  }
}
});