import { Component } from './components';

interface Props {
  element: HTMLElement | Element;
}

interface State {
  message: string;
}

class App extends Component<State> {
  declare state: State;

  constructor(props: Props) {
    const { element } = props;
    super({ element });

    // page에다가 이벤트를 걸어주기
    this.element.addEventListener('click', (e) => {
      if (!e.target) return;

      const $btn = (e.target as HTMLElement).closest('.btn');

      if ($btn && (e.target as HTMLElement).contains($btn)) {
        console.log('clicked');
        // this.setState({
        //   message: 'You Clicked Button!',
        // });
        this.setState((prev) => ({
          ...prev,
          message: 'You Clicked Button!(using prevFn)',
        }));
      }
    });
  }

  // use this method before render
  setup() {
    this.state = {
      message: 'Hello, World!',
    };
  }

  template(): string {
    return `
      <h1>${this.state.message}</h1>
      <div>
        <button type="button" class="btn">Click</button>
      </div>
    `;
  }
}

export default App;
