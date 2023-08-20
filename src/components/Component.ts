interface Props<T extends State> {
  element: HTMLElement | Element;
  initialState?: T;
}

type State = any;

class Component<T = State> {
  state: T | undefined;
  element: HTMLElement | Element;

  constructor(props: Props<T>) {
    const { element, initialState } = props;
    this.element = element;
    this.state = initialState;
    this.render();
  }

  setState(nextState: T) {
    this.state = nextState;

    this.render();
  }

  render() {
    this.element.innerHTML = this.template();
  }

  template() {
    return ``;
  }
}

export default Component;
