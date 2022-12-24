import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
// import "../App.css";
import "../../App.css";
const Statistics = () => {
  const { newTheme } = React.useContext(ThemeContext);
  console.log(newTheme.title);
  let statctheme = "";
  if (newTheme.title === "black") {
    // console.log("KNKNKN")
    statctheme = "nord";
    // statctheme = "graywhite";
  } else if (newTheme.title === "white") {
    // console.log("KNKNKN")
    statctheme = "midnight-purple";
  }

  return (
    // streak
    <div className={"section " + newTheme}>
      <h1>My Statistics</h1>
      <div>
        <a href="https://github.com/abdullahhassan19">
          <img
            width="100%"
            // width="100%"
            // height="100%"
            align="left"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=abdullahhassan19&theme=${statctheme}`}
          />
        </a>
      </div>
      <div className="staticsdiv">
        <div>
          <a href="https://github.com/abdullahhassan19">
            <img
              width="100%"
              // width="100%"
              // height="100%"
              align="center"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=abdullahhassan19&theme=${statctheme}`} //launguages
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/abdullahhassan19">
            <img
              width="100%"
              // width="100%"
              // height="100%"
              align="left"
              src={`https://github-readme-stats.vercel.app/api?username=abdullahhassan19&theme=${statctheme}&how_icons=true`} //stats
            />
          </a>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};

export default Statistics;
