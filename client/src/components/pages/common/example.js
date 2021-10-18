import React from 'react'
import { InView } from 'react-intersection-observer'
import { Spring, animated } from 'react-spring'

class App extends React.Component {
  state = {
    showH1: false
  }

  onInViewChange = inview => {
    if (!this.state.showH1 && inview) this.setState({ showH1: true })
  }

  render() {
    return (
      <>
        <h1>State reproduction</h1>
        <p>
     nisl congue eget. Maecenas
          mollis sodales nunc, vitae facilisis purus. Nunc venenatis, est at
          tristique efficitur, arcu risus faucibus nulla, elementum gravida
          metus dolor in diam. Pellentesque ac nulla felis.
        </p>

        <InView tag="div" onChange={this.onInViewChange}>
          <Spring to={{ opacity: this.state.showH1 ? 1 : 0 }} delay={500}>
            {props => (
              <animated.h1 style={props}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                fermentum tortor imperdiet at. Sed facilisis vitae velit sed
                blandit.
              </animated.h1>
            )}
          </Spring>
        </InView>
      </>
    )
  }
}

export default App