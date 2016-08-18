var App = React.createClass({
  render: function() {
    return <p className="text off-black">This is the beginning of a beautiful thing!</p>;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
