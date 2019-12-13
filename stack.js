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
  if(stack.top){
  return stack.top.data;
  }
}
function isEmpty(stack) {
  if(stack.top === null) {
    return true
  }
  return false
}
function display(stack) {
  let currNode = stack.top
  
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

class QueMaker{
  constructor(){
    this.bucketA = new Stack()
    this.bucketB = new Stack()
  }
  insert(value){
    this.bucketA.push(value)
  }
  show(){
    display(this.bucketA)
  }
  deque(){
    while(this.bucketA.top){
      this.bucketB.push(this.bucketA.pop())
    }
    let grabbedItem = this.bucketB.pop()
    while(this.bucketB.top){
      this.bucketA.push(this.bucketB.pop())
    }
    return grabbedItem
  }
  sort(){
    while(this.bucketA.top){
      if(isEmpty(this.bucketB)){
        this.bucketB.push(this.bucketA.pop())
      }
      let temp = this.bucketA.pop()
      if((peek(this.bucketB) > temp)){
        this.bucketB.push(temp)
      }
      else if(temp > peek(this.bucketA)){
        this.bucketB.push(this.bucketA.pop())
      }
      else if((peek(this.bucketB) < temp)){
        this.bucketA.push(this.bucketB.pop())
        this.bucketB.push(temp)
        this.bucketB.push(this.bucketA.pop())
      }
    }
      display(this.bucketB)
  }
}

function main() {
  const que = new QueMaker()
  que.insert(5)
  que.insert(9)
  que.insert(2)
  que.insert(10)
  que.insert(4)
  que.sort() //Output : 1 2 3 4 5
  //  que.show()
  //  const starTrek = new Stack();
  //  starTrek.push('Kirk')
  //  starTrek.push('Spock')
  //  starTrek.push('McCoy')
  //  starTrek.push('Scotty')
  //  starTrek.pop()
  //  starTrek.pop()

  // console.log(starTrek);
  // console.log(display(starTrek));
// console.log(palindromes('dad'))
  //console.log(parentheses('() hello () bye () ((('))
}

main();

