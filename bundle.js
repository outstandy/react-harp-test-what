var BandGrid = React.createClass({
  displayName: "BandGrid",

  render: function () {
    return React.createElement(
      "div",
      { className: "band-card" },
      React.createElement(
        "h3",
        { className: "text off-white center" },
        "Roz and the Rice Cakes"
      )
    );
  }
});

// var BandCard = React.createClass({
//   render: function(){
//     return <div className="band-card"><div>;
//   }
// });

ReactDOM.render(React.createElement(BandGrid, null), document.getElementById('band-grid'));
