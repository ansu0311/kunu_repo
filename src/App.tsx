import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

import "./App.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const linkList = [
  {
    Link: "https://www.google.co.in/",
    Name: "Google",
    ColorBg: "rgba(255, 26, 104, 0.5)",
  },
  {
    Link: "https://www.youtube.com/",
    Name: "Youtube",
    ColorBg: "rgba(153, 102, 255, 0.5)",
  },
  {
    Link: "https://in.pinterest.com/",
    Name: "Pinterest",
    ColorBg: "rgba(153, 102, 255, 1)",
  },
];
const data = [
  {
    x: -10,
    y: -3,
    data: 10,
  },
  {
    x: -7,
    y: 3,
    data: 130,
  },
  {
    x: 0,
    y: 5,
    data: 50,
  },
  {
    x: 2,
    y: 6,
    data: 60,
  },
  {
    x: 7,
    y: 4,
    data: 10,
  },
  {
    x: 9,
    y: 2,
    data: -100,
  },
  {
    x: 7,
    y: -1,
    data: 90,
  },
];

const ColorNeeded = [
  "rgba(255, 26, 104)",
  "rgba(54, 162, 235)",
  "rgba(255, 206, 86)",
  "rgba(75, 192, 192)",
  "rgba(153, 102, 255)",
  "rgba(255, 159, 64)",
  "rgba(0, 0, 0)",
];

const backgroundColor = convertToRgba({rgbValues:ColorNeeded,opacity:0.5})

const borderColor = convertToRgba({rgbValues:ColorNeeded, opacity:1})

const App = () => {
  return (
    <div className="App">
      <div className="chartCard">
        <div className="chartBox">
          <Scatter
            data={{
              datasets: [
                {
                  label: "Your Name", // Name of the chart
                  data: data, // data in the chart
                  backgroundColor: backgroundColor,
                  borderColor: borderColor,
                  pointRadius: 10, // radius of points
                  borderWidth: 1, // border to points
                  showLine: true, // show line
                  tension: 0.4, // makes line smooth
                },
              ],
            }}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    // data shown on click over the point can be modified to go to a link
                    label: (context:any) => {
                      return `X: ${context.raw.x} Y: ${context.raw.y} & Data: ${context.raw.data}`;
                    },
                  },
                },
              },
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
        <div className="chartBox2">
          <div className="Link_box">
            {linkList.map((e)=>{
              return <Link_box Link={e.Link} Name={e.Name} ColorBg={e.ColorBg} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

type Props ={
  Link: string,
  Name: string,
  ColorBg: string,
}

function Link_box({ Link, Name, ColorBg }:Props) {
  return (
    <>
      <a href={Link} className="anchor_style">
        <div className="color_box" style={{ backgroundColor: ColorBg }}></div>
        <div className="link_to">{Name}</div>
      </a>
    </>
  );
}

type Props2={
  rgbValues: string[],
  opacity: number,
}

function convertToRgba({rgbValues, opacity}:Props2) {
  return rgbValues.map(rgb => {
      return rgb.replace("rgb(", "rgba(").replace(")", `, ${opacity})`);
  });
}