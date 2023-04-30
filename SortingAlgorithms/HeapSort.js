async function HeapSort(array,setState,setnotrespond,speed,setTutorial,togglenow) {
  setnotrespond(false);
  if (togglenow == true) {
    setTutorial("Let's get started with Heap Sort !!");
  }
  let compareSpeed, swapSpeed, pauseSpeed;
  if (togglenow == true) {
    pauseSpeed = 1000;
  } else {
    pauseSpeed = 0;
  }
  let HighestSpeed;
  if (speed === 0 && togglenow == true) {
    HighestSpeed = 1;
    compareSpeed = 10;
    swapSpeed = 10;
  } else if (speed === 0) {
    compareSpeed = 200;
    swapSpeed = 200;
    HighestSpeed = 100;
  } else if (speed === 1) {
    compareSpeed = 100;
    swapSpeed = 100;
    HighestSpeed = speed * 3;
  } else if (speed === 2) {
    compareSpeed = 0;
    swapSpeed = 0;
    HighestSpeed = speed * 3;
  }
  let length = array.length;
  let internalNode = Math.floor(length / 2 - 1);
  let lastChild = length - 1;

  await buildMaxHeap(internalNode,array,length,setState,togglenow,setTutorial,HighestSpeed,compareSpeed,swapSpeed);

  //Extract Max
  while (lastChild >= 0) {
    await swap(array[0], array[lastChild]);
    if (togglenow == true) {
      await highest(
        array.length - lastChild,
        HighestSpeed,
        setTutorial,
        togglenow
      );
    }
    let temp = array[0];
    array[0] = array[lastChild];
    array[lastChild] = temp;
    await heapify(array,lastChild,0,setState,HighestSpeed,togglenow,setTutorial,compareSpeed,swapSpeed);
    setState([...array]);
    lastChild--;
  }
  return array;
}

async function buildMaxHeap(internalNode,array,length,setState,togglenow,setTutorial,HighestSpeed,compareSpeed,swapSpeed) {
  if (togglenow == true) {
    setTutorial("First we will build the max heap");
    await pauseIt();
  }
  while (internalNode >= 0) {
    await heapify(array, length, internalNode, setState, HighestSpeed,compareSpeed,swapSpeed);
    setState([...array]);
    internalNode--;
  }
  if (togglenow == true) {
    setTutorial("We have successfully build the max heap");
    await pauseIt();
  }
  // await pauseAlgo();
}
async function heapify(array,length,parentNode,setState,HighestSpeed,togglenow, setTutorial, compareSpeed, swapSpeed) {
  let largest = parentNode;
  let left = 2 * parentNode + 1;
  let right = 2 * parentNode + 2;
  if (togglenow == true) {
    setTutorial("Performing maxHeapify on the remaining elements of the array");
    await pauseIt();
  }
  if (left < length && array[left].HEIGHT > array[largest].HEIGHT) {
    await compare(array[largest], array[left],compareSpeed);
    setState(array);
    uncompare(array[largest], array[left]);
    largest = left;
  }

  if (right < length && array[right].HEIGHT > array[largest].HEIGHT) {
    await compare(array[largest], array[right],compareSpeed);
    setState(array);
    uncompare(array[largest], array[right]);
    largest = right;
  }

  if (largest != parentNode) {
    await swap(array[parentNode], array[largest],swapSpeed);
    let temp = array[parentNode].HEIGHT;
    array[parentNode].HEIGHT = array[largest].HEIGHT;
    array[largest].HEIGHT = temp;
    unswap(array[parentNode], array[largest]);
    setState(array);
    await heapify(array,  length,largest,setState,HighestSpeed,togglenow,setTutorial,compareSpeed,swapSpeed);
  }
  return array;
}
function unswap(bar1, bar2) {
  bar1.SWAP = false;
  bar2.SWAP = false;
  return new Promise((resolve) => setTimeout(resolve, 10));
}
function swap(bar1, bar2, swapSpeed) {
  bar1.SWAP = true;
  bar2.SWAP = true;
  return new Promise((resolve) => setTimeout(resolve, swapSpeed));
}
function compare(bar1, bar2, compareSpeed) {
  bar1.COMPARE = true;
  bar2.COMPARE = true;
  return new Promise((resolve) => setTimeout(resolve, compareSpeed));
}
function uncompare(bar1, bar2) {
  bar1.COMPARE = false;
  bar2.COMPARE = false;
}
function pauseAlgo() {
  return new Promise((resolve) => setTimeout(resolve, 1200));
}
function pauseIt() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
async function highest(num, speed, setTutorial, togglenow) {
  // if (speed < 500) {
  //   return new Promise((resolve) => setTimeout(resolve, speed));
  // }
  console.log(num);
  if (num === 1) {
    if (togglenow == true) {
      setTutorial("Placing the 1st highest element at the end");
      await pauseAlgo();
    }
    // return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num === 2) {
    if (togglenow == true) {
      setTutorial("Placing the 2nd highest element before bar2");
      await pauseAlgo();
    }
    // return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num === 3) {
    if (togglenow == true) {
      setTutorial("Placing the 3rd highest element before bar3");
      await pauseAlgo();
    }
    // return new Promise((resolve) => setTimeout(resolve, speed));
  }
  if (num > 3) {
    if (togglenow == true) {
      setTutorial("Placing the " + num + "th highest element before bar ");
      await pauseAlgo();
    }
    // return new Promise((resolve) => setTimeout(resolve, speed));
  }
}
export { HeapSort };
