async function MergeSort(bars, setState, mainbar,setnotrespond,speed, setTutorial,togglenow) {
  let compareSpeed, swapSpeed, insertSpeed;
  if (speed === 0) {
    compareSpeed = 200;
    insertSpeed = 100
    // swapSpeed = 200;
  } else if (speed === 1) {
    compareSpeed = 100;
    insertSpeed = 50
    // swapSpeed = 100;
  } else if (speed === 2) {
    compareSpeed = 0;
    insertSpeed = 0;
    // swapSpeed = 0;
  }
  if (togglenow == true) {
    setTutorial("Sorry, captions for this algorithm is not available...");
  }
  setnotrespond(false)
  await divide(bars, setState, mainbar,insertSpeed,compareSpeed);
}

async function divide(bars, setState, mainbar,insertSpeed,compareSpeed) {
  if (bars.length < 2) {
    return bars;
  }
  const mid = Math.floor(bars.length / 2);
  const leftArray = await divide(bars.slice(0, mid), setState, mainbar,insertSpeed,compareSpeed);
  const rightArray = await divide(bars.slice(mid), setState, mainbar,insertSpeed,compareSpeed);
  return merge(bars, leftArray, rightArray, setState, mainbar,insertSpeed,compareSpeed);
}

async function merge(bars, leftArray, rightArray, setState, mainbar,insertSpeed,compareSpeed) {
  // console.log(leftArray,rightArray)
  let i = 0;
  let j = 0;
  let sorted = [];
  let sucess = false
  // console.log(leftArray.length,rightArray.length)
  if((leftArray.length + rightArray.length) == mainbar.length){
    sucess = true
    // console.log(sucess)
  } 
  while (i < leftArray.length && j < rightArray.length) {
    var index1 = find(leftArray[i], mainbar);
    var index2 = find(rightArray[j], mainbar);
    // var mainValue = Insert(mainbar, index1, index2)
    await compare(mainbar[index1], mainbar[index2],compareSpeed);
    setState(mainbar);
    if (leftArray[i] > rightArray[j]) {
      // console.log(find(rightArray[j],bars)+' '+rightArray[j].HEIGHT)
      await uncompare(mainbar[index1], mainbar[index2]);
      await Insert(mainbar, index1, index2,insertSpeed);
      sorted.push(rightArray[j]);
      index2 = find(rightArray[j], mainbar);
      if(sucess){
        colorSorted(mainbar[index2])
        // console.log(rightArray[j])
      } 
      setState([...mainbar]);
      j++;
    } else {
      await uncompare(mainbar[index1], mainbar[index2]);
      sorted.push(leftArray[i]);
      index1 = find(leftArray[i], mainbar);
      if(sucess) colorSorted(mainbar[index1])
      setState([...mainbar]);
      i++;
    }
  }
  while (i < leftArray.length) {
    sorted.push(leftArray[i]);
    index1 = find(leftArray[i], mainbar);
    if(sucess) colorSorted(mainbar[index1])
    setState([...mainbar]);
    i++;
  }
  while (j < rightArray.length) {
    sorted.push(rightArray[j]);
    index2 = find(rightArray[j], mainbar);
    if(sucess) colorSorted(mainbar[index2])
    setState([...mainbar]);
    j++;
  }
  // console.log(mainbar);
  setState([...mainbar]);
  return sorted;
}
async function Insert(array, idx1, idx2,speed) {
  let temp1 = array[idx1].HEIGHT;
  let temp2 = array[idx2].HEIGHT;
  for (let i = idx2; i > idx1; i--) {
    array[i].HEIGHT = array[i - 1].HEIGHT;
    // console.log(i)
  }
  array[idx1].HEIGHT = temp2;
  array[idx1 + 1].HEIGHT = temp1;
  // console.log("after",array)
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function find(elem, mainbar) {
  for (var i = 0; i < mainbar.length; i++) {
    if (elem == mainbar[i].HEIGHT) {
      // console.log(i+" "+elem.HEIGHT)
      return i;
    }
  }
}
function uncompare(bar1, bar2) {
  bar1.COMPARE = false;
  bar2.COMPARE = false;
  return new Promise((resolve) => setTimeout(resolve, 100));
}
function compare(bar1, bar2,speed) {
  bar1.COMPARE = true;
  bar2.COMPARE = true;
  return new Promise((resolve) => setTimeout(resolve, speed));
}
function colorSorted(bar1){
  bar1.SWAP = true;
  // bar2.SWAP = true;
  // return new Promise((resolve) => setTimeout(resolve, 1));
}


export { MergeSort };
