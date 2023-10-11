class customArray{
  constructor(...arg){
    this.size=arg.length;

    for (let i = 0; i < arg.length; i++) {
      this[i] = arg[i];
    }
  }

  push(ele){
    this[this.size]=ele;
    this.size++;
  }
  pop(){
    let newArr=[];
    for(let i=0; i<this.size-2; i++){
      newArr[i]=this[i];
    }
    return newArr;
  }
  top(){
    console.log( this[this.size-1]);
  }
  print(){
    let ele=[];
    for(let i=0; i<this.size;i++){
      ele.push(this[i]);
    }
    console.log(`[ ${ele.join(',')} ]`);
  }
  printReverse(){
    let ele=[];
    for(let i=this.size-1; i>=0;i--){
      ele.push(this[i]);
    }
    console.log(`[ ${ele.join(',')} ]`);

  }
}
const customArr = new customArray(1, 2, 3, 4);
customArr.push(9);
customArr.pop();
customArr.top();
customArr.print();
customArr.printReverse();
console.log(customArr.size);
