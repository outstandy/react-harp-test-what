var BandGrid = React.createClass({
  render: function() {
    return <div className="band-card">
      <h3 className="text off-white center">Roz and the Rice Cakes</h3>
    </div>;
  }
});

// var BandCard = React.createClass({
//   render: function(){
//     return <div className="band-card"><div>;
//   }
// });

ReactDOM.render(
  <BandGrid />,
  document.getElementById('band-grid')
);
