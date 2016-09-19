var React=require("react");
var E=React.createElement;
var ksa=require("ksana-simple-api");
var maincomponent = React.createClass({
  getInitialState:function() {
    return {result:[],tofind:"君子"};
  },
  search:function() {
    ksa.excerpt({db:"sample",q:this.state.tofind},function(err,data){
      if (err) console.error(err);
      else this.setState({result:data});
    }.bind(this));
  }
  ,renderItem:function(item,idx) {
    return E("div",{},
      ksa.renderHits(item.text,item.hits,
        function(o,t){return E("span",o,t)}
      )
    );
  },
  setTofind:function(e) {
    this.setState({tofind:e.target.value})
  },
  render: function() {
    return E("div",{},
      E("input", {ref:"tofind", value:this.state.tofind
        ,onChange:this.setTofind}),
      E("button",{onClick:this.search},"Search"),
      this.state.result.map(this.renderItem)
    );
  }
});
module.exports=maincomponent;