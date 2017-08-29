const checked = <i className="fa fa-check-square-o" aria-hidden="true"></i>;
const unchecked = <i className="fa fa-square-o" aria-hidden="true"></i>;

const TableHeaders = (props) => {
    const recent = (props.dataReq == "recent" ? checked : unchecked);
    const alltime = (props.dataReq == "alltime" ? checked : unchecked);
    return (
      <tr>
        <th className="rank">#</th>
        <th className="username">USERNAME</th>
        <th className="recent" style={{cursor:"pointer"}} onClick={props.onClick}>LAST 30 DAYS {recent}</th>
        <th className="alltime" style={{cursor:"pointer"}} onClick={props.onClick}>ALL TIME {alltime}</th>
      </tr>
    );
}

export default TableHeaders;