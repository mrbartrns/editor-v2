type TreeData<T> = T | null;

interface TreeNode<T> {
  id: number | string;
  data: TreeData<T>;
  children?: TreeData<T>[];
}

class Tree<T = any> {
  lastId: number;
  root: TreeNode<T>;

  constructor() {
    this.lastId = 1;

    this.root = {
      id: this.lastId,
      data: null,
    };
  }
}

export default Tree;
