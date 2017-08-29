const TableData =(props)=> {
  const dataSet = props.dataSet;
  const dataReq = props.dataReq;
  const newRows = dataSet.map((data) => 
        <tr className="usercard">
          <td className="rank">{dataSet.indexOf(data) + 1}</td>
          <td className="username"><img className="img" src={data.img}/><a href={"https://www.freecodecamp.com/"+data.username} target="_blank">{data.username}</a></td>
          <td className="recent">{data.recent}</td>
          <td className="alltime">{data.alltime}</td>
        </tr>
    );
  return <tbody>{newRows}</tbody>;
}

export default TableData;