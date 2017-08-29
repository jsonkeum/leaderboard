import Leaderboard from "./Leaderboard.js";

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSet:[],
      dataReq:"recent",
    }
    this.apiCall = this.apiCall.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  apiCall(){
    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/"+this.state.dataReq)
      .then((data) => this.setState({dataSet:data}));
  }
  handleClick(e){
    let choice = e.target.className;
    if(this.state.dataReq != choice){
      this.state.dataReq = choice;
      this.apiCall(); 
    }
  }
  componentDidMount(){
    this.apiCall();
  }
  
  render(){
   return (
      <div>
        <h1 id="title" className="text-center">FREE CODE CAMP LEADERBOARD</h1>
        <Leaderboard dataSet={this.state.dataSet} dataReq={this.state.dataReq} onClick={this.handleClick}/>
      </div>
    ); 
  }
}