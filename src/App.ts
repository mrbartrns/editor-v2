import { Component } from './components';

interface Props {
  element: HTMLElement | Element;
}

class App extends Component {
  constructor(props: Props) {
    const { element } = props;
    super({ element });
  }

  template(): string {
    return `
      <h1>Hello, World!</h1>
    `;
  }
}

export default App;
