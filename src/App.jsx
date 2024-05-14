import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

import "./App.css";
import { NavLink } from "react-router-dom";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
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
                  backgroundColor: [
                    "rgba(255, 26, 104, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(0, 0, 0, 0.5)",
                  ],
                  borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                  ],
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
                    label: (context) => {
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

function Link_box({ Link, Name, ColorBg }) {
  return (
    <>
      <a href={Link} className="anchor_style">
        <div className="color_box" style={{ backgroundColor: ColorBg }}></div>
        <div className="link_to">{Name}</div>
      </a>
    </>
  );
}
