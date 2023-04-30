async function BubbleSort(bars, setState,setnotrespond,speed, setTutorial,togglenow
) {
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
    compareSpeed = 200;
    swapSpeed = 200;
    // isLessSpeed = 0;
  } else if (speed === 1) {
    compareSpeed = 100;
    swapSpeed = 100;
  } else if (speed === 2) {
    compareSpeed = 0;
    swapSpeed = 0;
  }
  // console.log(compareSpeed)
  for (var i = 0; i < bars.length - 1; i++) {
    for (var j = 0; j < bars.length - i - 1; j++) {
      var last = j + 1;
      if (togglenow == true) {
        setTutorial("Searching for Bar1 greater than bar2");
        await pauseIt(pauseSpeed);
      }
      await compare(bars[j], bars[j + 1], compareSpeed);
      setState([...bars]);
      await sort(bars, j, setTutorial, pauseSpeed, togglenow);
      setState(bars);
      await uncompare(bars[j], bars[j + 1]);
      setState(bars);
    }
    swap(bars[last], swapSpeed);
  }
  swap(bars[0], swapSpeed);
  setState([...bars]);
}
async function sort(bars, j, setTutorial, pauseSpeed, togglenow) {
  if (bars[j].HEIGHT > bars[j + 1].HEIGHT) {
    if (togglenow == true) {
      setTutorial("Bar1 is greater than Bar2");
      await pauseIt(pauseSpeed);
      setTutorial("Since Bar1 is greater than Bar2 will swap them");
      await pauseIt(pauseSpeed);
    }
    var temp = bars[j].HEIGHT;
    bars[j].HEIGHT = bars[j + 1].HEIGHT;
    bars[j + 1].HEIGHT = temp;
    // setState(bars)
  }
  return new Promise((resolve) => setTimeout(resolve, 100));
}
function uncompare(bar1, bar2) {
  bar1.COMPARE = false;
  bar2.COMPARE = false;
  return new Promise((resolve) => setTimeout(resolve, 100));
}

function compare(bar1, bar2, speed) {
  bar1.COMPARE = true;
  bar2.COMPARE = true;
  return new Promise((resolve) => setTimeout(resolve, speed));
}
function swap(bar1, speed) {
  bar1.SWAP = true;
  // bar2.SWAP = true;
  return new Promise((resolve) => setTimeout(resolve, speed));
}
function pauseIt(pauseSpeed) {
  return new Promise((resolve) => setTimeout(resolve, pauseSpeed));
}
export { BubbleSort };
