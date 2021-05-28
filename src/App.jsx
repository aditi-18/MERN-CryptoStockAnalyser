class IssueFilter extends React.Component {
  render(){
    return(
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}
class IssueRow extends React.Component {	
  render() {	
    const style = this.props.rowStyle;	
    return (	
      <tr>	
        <td style={style}>{this.props.issue_id}</td>	
        <td style={style}>{this.props.issue_title}</td>	
      </tr>	
    );	
  }	
}
class IssueTable extends React.Component {
  render(){
    return(
      <div>This is a placeholder for a table of issues.</div>
    );
  }
}
class IssueAdd extends React.Component {
  render(){
    return(
      <div>This is a placeholder for a form to add an issue.</div>
    );
  }
}
class IssueList extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));