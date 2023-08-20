interface Props<T extends State> {
  element: HTMLElement | Element;
  initialState?: T;
}

type State = any;

type SetupProps<T extends State> = Pick<Props<T>, 'initialState'>;

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

  setState(nextState: T) {
    this.state = nextState;

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
