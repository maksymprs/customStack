type Tree = {
    name: string;
    level: number;
    items?: Tree[];
  }
  
  const tree: Tree = {
    name: '1',
    level: 1,
    items: [
      {
        name: '1.1',
        level: 2,
        items: [
          {
            name: '1.1.1',
            level: 3,
          },
        ]
      },
      {
        name: '1.2',
        level: 2,
        items: [
          {
            name: '1.2.1',
            level: 3,
            items: [
              {
                name: '1.2.1.1',
                level: 4,
                items: [
                  {
                    name: '1.2.1.1.1',
                    level: 5,
                  },
                ]
              },
              {
                name: '1.2.2.1',
                level: 4,
                items: [
                  {
                    name: '1.2.2.1.1',
                    level: 5,
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  };
  
  
  interface DataStructure<T> {
    get(): T | null;
    set(...args: T[]): void;
    has(): boolean;
  }
  
  type QueueItem = any;
  class Queue implements DataStructure<QueueItem> {
    private queue: QueueItem[];
  
    constructor(...args: QueueItem[]) {
      this.queue = args;
    }
  
    get() {
      return this.queue.pop() || null;
    }
  
    set(...args: QueueItem[]) {
      this.queue.push(...args);
    }
  
    has() {
      return Boolean(this.queue.length);
    }
  
    debug() {
      console.log(this.queue);
    }
  }
  
  type StackItem = any;
  class Stack implements DataStructure<StackItem> {
   private stack: StackItem[];
  
    constructor(...args: StackItem[]) {
      this.stack = args;
    }
  
    get() {
      return this.stack.pop() || null;
    }
  
    set(...args: StackItem[]) {
      this.stack.push(...args);
    }
  
    has() {
      return Boolean(this.stack.length);
    }
  
    debug() {
      console.log(this.stack);
    }
  }
  
  
      
  
  function traverse(dataStructure: DataStructure<Tree>): void  {
    while(dataStructure.has()) {
      const { name, level, items } = dataStructure.get() || {};
  
      console.log(name, level);
  
      if(items) {
        const newItems = items.slice().reverse();
        //items.reverse();
        dataStructure.set(...newItems);
      }
    }
  }
  
  // traverse(new Queue(tree));
  traverse(new Stack(tree));
  
  
  // const testArr = [];
  // [1, 2, 3];
  // testArr.push(1, 2, 3)
  // console.log(testArr);