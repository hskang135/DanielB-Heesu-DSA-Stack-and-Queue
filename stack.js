class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
    top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
    then create a new node,
    add data to the new node, and
    have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
    the pointer to the next item and that next item becomes the
    top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
};


function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if(stack.top === null) {
    return true
  }
  return false
}

function display(stack) {
  let currNode = stack.top
  console.log(stack.top)
  
  while(currNode) {
    console.log(currNode.data)
    currNode = currNode.next
  }
  return
}

function palindromes(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let result = '';
  let word = new Stack();
  for(let i=0; i<str.length; i++) {
    word.push(str[i])
  }

  while(word.top) {
    result += word.pop()
  }

  if(result === str) {
    return true
  }
  return false
}

function parentheses(str) {
  let bucket = new Stack();

  for(let i=0; i<str.length; i++) {
    bucket.push(str[i])
  }
  
  let lcounter = 0;
  let rcounter = 0;
  while(bucket.top) {
    let test = bucket.pop()
    if(test === '(') {
      lcounter++
    }
    else if(test === ')') {
      rcounter++
    }
  }

  if(lcounter > rcounter) {
    return `There are ${lcounter - rcounter} more '(' than ')'`  
  } else if(lcounter < rcounter) {
    return `There are ${rcounter - lcounter} more ')' than '('`
  } else {
    return 'There are the same'
  }
  console.log(lcounter, rcounter)
}

// function sortStack() {

// }

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
  starTrek.pop()
  starTrek.pop()

  // console.log(starTrek);
  // console.log(display(starTrek));
// console.log(palindromes('dad'))
console.log(parentheses('() hello () bye () ((('))
}

main();

