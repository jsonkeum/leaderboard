import TableHeaders from "./TableHeaders.js";
import TableData from "./TableData.js";
import Footer from "./Footer.js";

const Leaderboard = (props) => {
    return (
      <div id="board">
        <table>
          <thead>
            <TableHeaders dataReq={props.dataReq} onClick={props.onClick}/>
          </thead>
          <TableData dataReq={props.dataReq} dataSet={props.dataSet}/>
        </table>
        <Footer />
      </div> 
    );
}

export default Leaderboard;