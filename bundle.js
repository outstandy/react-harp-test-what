var App = React.createClass({
  displayName: "App",

  render: function () {
    return React.createElement(
      "p",
      { className: "text off-black" },
      "This is the beginning of a beautiful thing!"
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
