import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Background extends React.Component {
  render() {
    const texts = ["A Simple ToDo App.", "For All Your Tasks."]
    return (
      <div className="Heading">
        <div className="header">
          <ReactTypingEffect
            className="typingEffect"
            text={texts}
            speed='100'
            typingDelay='1000'
            eraseDelay='2000'
          />
        </div>
      </div>
    )
  }
}

export default Background
