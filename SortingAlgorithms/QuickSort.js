async function QuickSort(
  bars,
  setState,
  setnotrespond,
  speed,
  setTutorial,
  togglenow
) {
  setnotrespond(false);
  if (togglenow == true) {
    setTutorial("Let's get started !!");
  }
  let compareSpeed, swapSpeed, isLessSpeed, pauseSpeed;
  if (togglenow == true) {
    pauseSpeed = 1200;
  } else {
    pauseSpeed = 0;
  }
  await pauseIt(pauseSpeed);
  if (speed === 0) {
    compareSpeed = 300;
    swapSpeed = 300;
    // isLessSpeed = 0;
  } else if (speed === 1) {
    compareSpeed = 100;
    swapSpeed = 100;
    isLessSpeed = speed * 3;
  } else if (speed === 2) {
    compareSpeed = 0;
    swapSpeed = 0;
  }
  var last = bars.length - 1;
  for (var i = 0; i < bars.length - 1; i++) {
    for (var j = i + 1; j < bars.length; j++) {
      if (togglenow == true) {
        setTutorial("Searching for Bar1 greater than bar2");
        await pauseIt(pauseSpeed);
      }
      await compare(bars[i], bars[j], compareSpeed);
      setState([...bars]);
      if (bars[i].HEIGHT > bars[j].HEIGHT) {
        if (togglenow == true) {
           setTutorial("Bar1 is greater than Bar2");
           await pauseIt(pauseSpeed);
           setTutorial("Since Bar1 is greater than Bar2 will swap them");
           await pauseIt(pauseSpeed);
         }
       let temp = bars[i].HEIGHT;
       bars[i].HEIGHT = bars[j].HEIGHT;
       bars[j].HEIGHT = temp;
     }
      setState(bars);
      await uncompare(bars[i], bars[j]);
      // setState(bars);
    }
    // console.log(bars[i])
    swap(bars[i], swapSpeed);
  }
  swap(bars[last], swapSpeed);
  setState([...bars]);
}
async function sort(bars,i, j, setTutorial, pauseSpeed, togglenow) {
  
  return new Promise((resolve) => setTimeout(resolve, 100));
}
function swap(bar1, swapSpeed) {
  bar1.SWAP = true;
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
  return new Promise((resolve) => setTimeout(resolve, 100));
}
function pauseIt(pauseSpeed) {
  return new Promise((resolve) => setTimeout(resolve, pauseSpeed));
}
export { QuickSort };
