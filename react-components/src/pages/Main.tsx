import React, { Component } from 'react';

class Main extends Component {
  constructor(props: Record<string, never>) {
    super(props);
    console.log(props.match);
  }

  render() {
    return <div>Main</div>;
  }
}

export default Main;
