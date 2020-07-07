import React from 'react';
import Background from './components/background.jsx'
import SvgImageOne from './components/svgimageOne.jsx'
import SvgImageTwo from './components/svgimageTwo.jsx'
import Tasks from './components/tasks.jsx'
import RandomQuotes from './components/randomquotes.jsx'


class App extends React.Component {
  render() {
    return (
      <div>
        <Background />
          <div className="main-container">
            <div>
              <SvgImageTwo />
            </div>
            <div>
              <Tasks />
            </div>
            <div>
              <SvgImageOne />
            </div>
          </div>
        <div>
          <RandomQuotes />
        </div>
      </div>

    )
  }
}

export default App;
