import { Component } from '..';

interface Node<T> {
  nodeId: string;
  data: T | null;
  children?: Node<T> | null;
}

interface State<T> {
  root: Node<T | null>;
}

class Sidebar extends Component<State> {
  declare state: State;
  setup() {}
}

export default Sidebar;
