var AlbumList = React.createClass({
  getInitialState: function(){
    return{
      entry: []
    };
  },

  componentDidMount:function(){
    this.serverRequest = $.get(this.props.source, function(result){
      this.setState({entry: result});
    }.bind(this));
  },

  componentWilUnmount: function(){
    this.serverRequest.abort();
  },

  render:function(){
    return(
      <ol>
       {this.state.entry.map(function(index) {
         return <li key={index.title}>{index.title}</li>;
       })}
      </ol>
    );
  }
});

ReactDOM.render(
  <AlbumList source="http://jsonplaceholder.typicode.com/albums" />,
  document.getElementById('content')
);
