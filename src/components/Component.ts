interface Props<T extends State> {
  element: HTMLElement | Element;
  initialState?: T;
}

type State = any;

type SetupProps<T extends State> = Pick<Props<T>, 'initialState'>;
type NextStateFn<T extends State> = (prevState?: T) => State;

class Component<T = State> {
  state: T | undefined;
  element: HTMLElement | Element;

  constructor(props: Props<T>) {
    const { element, initialState } = props;
    this.element = element;
    this.state = initialState;
    this.setup({ initialState });
    this.render();
  }

  setState(nextState: T | NextStateFn<T>) {
    if (typeof nextState === 'function') {
      this.state = (nextState as NextStateFn<T>)(this.state);
    } else {
      this.state = nextState;
    }

    this.render();
  }

  setup(props: SetupProps<T>) {
    this.state = props.initialState;
  }

  render() {
    this.element.innerHTML = this.template();
  }

  template() {
    return ``;
  }
}

export default Component;
