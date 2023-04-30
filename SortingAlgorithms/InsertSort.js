async function InsertSort(bars, setState,setnotrespond,speed,setTutorial,togglenow) {
  setnotrespond(false);
  if (togglenow == true) {
    setTutorial("Let's get started !!");
  }
  let compareSpeed, swapSpeed, pauseSpeed;
  if (togglenow == true) {
    pauseSpeed = 1000;
  } else {
    pauseSpeed = 0;
  }
  await pauseIt(pauseSpeed);
  if (speed === 0) {
    compareSpeed = 400;
    swapSpeed = 400;
    // isLessSpeed = 0;
  } else if (speed === 1) {
    compareSpeed = 100;
    swapSpeed = 100;
  } else if (speed === 2) {
    compareSpeed = 0;
    swapSpeed = 0;
  }
  for (var i = 1; i < bars.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (togglenow == true) {
        setTutorial("Searching for any bar less than bar2 from the sorted part");
        await pauseIt(pauseSpeed);
      }
      await compare(bars, j, i,compareSpeed);
      setState([...bars]);
      await swap(bars[j],swapSpeed)
      if (bars[j].HEIGHT > bars[i].HEIGHT) {
        await uncompare(bars, j, i);
        await Insert(bars, j, i,setTutorial,togglenow,pauseSpeed);    
        await swap(bars[j],swapSpeed)
        setState([...bars]);
        j = i + 1;
      } else {
        uncompare(bars, j, i);
      }
    }
  }
  setState([...bars]);
  console.log("sorted");
}
function swap(bar1,swapSpeed) {
  bar1.SWAP = true;
  // setState([...bars])
  return new Promise((resolve) => setTimeout(resolve, swapSpeed));
}
async function Insert(array, idx1, idx2,setTutorial,togglenow,pauseSpeed) {
  let temp1 = array[idx1];
  let temp2 = array[idx2];
  if (togglenow == true) {
    setTutorial("Bar1 is greater than Bar2");
    await pauseIt(pauseSpeed);
    setTutorial("Since bar1 is less than the next Bar2 we will insert the bar2 before bar1");
    await pauseIt(pauseSpeed);
  }
  for (let i = idx2; i > idx1; i--) {
    array[i] = array[i - 1];
  }
  array[idx1] = temp2;
  array[idx1 + 1] = temp1;
  return new Promise((resolve) => setTimeout(resolve, pauseSpeed));
}
function uncompare(bar, x, y) {
  bar[x].COMPARE = false;
  bar[y].COMPARE = false;
  // setState([...bars])
  return new Promise((resolve) => setTimeout(resolve, 200));
}
function compare(bar, x, y,compareSpeed) {
  bar[x].COMPARE = true;
  bar[y].COMPARE = true;
  // setState([...bars])
  return new Promise((resolve) => setTimeout(resolve, compareSpeed));
}
function pauseIt(pauseSpeed) {
  return new Promise((resolve) => setTimeout(resolve, pauseSpeed));
}
export { InsertSort };

// var curr = bars[i].HEIGHT;
//     var j = i - 1;
//     while (j >= 0) {
//       await compare(bars, j + 1);
//       setState([...bars]);
//       await swap(bars, j);
//       setState([...bars]);
//       if (bars[j].HEIGHT > curr) {
//         await unswap(bars, j);
//         Insert(bars,j,i)
//         // bars[j+1].HEIGHT = bars[j].HEIGHT
//         await uncompare(bars, j + 1);
//         j--;
//       } else {
//         bars[j + 1].HEIGHT = curr;
//         await unswap(bars, j);
//         await uncompare(bars, j + 1);
//         break;
//       }
//     }
