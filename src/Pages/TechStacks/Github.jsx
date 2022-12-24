import React from "react";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar"
import { ThemeContext } from "../../ThemeContext/ThemeContext";

export const Github = () => {
    const { newTheme } = React.useContext(ThemeContext);
   

  return (
    <>
      <div className={"section " + newTheme}>
        <h3>
          Days I <span> Code</span>
        </h3>
        <div >
          <GitHubCalendar
            username="abdullahhassan19"
            blockSize={20}
            fontSize={15}
            // transformData={selectLastHalfYear}
            // blockMargin={5}
            theme={newTheme}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
      </div>
      {/* <Statistics/> */}

      {/* <div >
        <div style={{ width: "40%", margin: "auto" }}>
          <a href="https://github.com/abdullahhassan19">
            <img
              width="100%"
              height="100%"
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=abdullahhassan19"
            />
          </a>
        </div>

        <div
          style={{
            width: "60%",
            height: "300px",
            display: "flex",
            margin: "auto",
          }}
        >
          <a href="https://github.com/abdullahhassan19">
            <img
              width="100%"
              height="100%"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=abdullahhassan19" //launguages
            />
          </a>
          <a href="https://github.com/abdullahhassan19">
            <img
              width="100%"
              height="100%"
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=abdullahhassan19&count_private=true&show_icons=true" //stats
            />
          </a>
        </div>
      </div> */}
    </>
  );
};


// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";
// export const Github = () => {
//   const selectLastHalfYear = (contributions) => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 10;

//     return contributions.filter((day) => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();

//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };
//   return (
//     <div>
//       <GitHubCalendar
//         style={{ margin: "auto" }}
//         username="saurabh0413"
//         transformData={selectLastHalfYear}
//         blockSize={20}
//         fontSize={20}
//       >
//         <ReactTooltip delayShow={20} html />
//       </GitHubCalendar>
//     </div>
//   );
// };

// export default Github;