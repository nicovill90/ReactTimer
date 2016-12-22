const React = require('react');

let Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },

  render: function () {
    let {countdownStatus} = this.props;
    let renderStartStopButton = (status) => {
      if (status === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (status === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton(countdownStatus)}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
