interface Props<T extends State> {
  element: HTMLElement | Element;
  initialState?: T;
  [key: string]: any;
}

type State = any;

type SetupProps<T extends State> = Pick<Props<T>, 'initialState'>;
type NextStateFn<T extends State> = (prevState?: T) => State;

class Component<T = State> {
  state?: T;
  props: Props<T>;

  constructor(props: Props<T>) {
    this.props = props;
    this.setup({ initialState: this.props.initialState });
    this.renderTemplate();
    this.componentDidMount();
  }

  setState(nextState: T | NextStateFn<T>) {
    if (typeof nextState === 'function') {
      this.state = (nextState as NextStateFn<T>)(this.state);
    } else {
      this.state = nextState;
    }

    this.renderTemplate();
  }

  setup(props: SetupProps<T>) {
    this.state = props.initialState;
  }

  componentDidMount() {}

  private renderTemplate() {
    const { element } = this.props;
    element.innerHTML = this.render();
  }

  render() {
    return ``;
  }
}

export default Component;
