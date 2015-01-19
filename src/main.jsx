var kse=require("ksana-search");
var maincomponent = React.createClass({
  getInitialState:function() {
  	return {result:[]};
  },
  search:function() {
  	var tofind=this.refs.tofind.getDOMNode().value;
  	kse.search("sample",tofind,{range:{start:0}},function(err,data){
  		this.setState({result:data.excerpt});
  	},this);
  },
  renderItem:function(item) {
  	return <div dangerouslySetInnerHTML={{__html:item.text}}></div>
  },
  render: function() {
    return <div><input ref="tofind" value="君子"></input>
    <button onClick={this.search} >Search</button>
    	{this.state.result.map(this.renderItem)}

    </div>;
  }
});
module.exports=maincomponent;