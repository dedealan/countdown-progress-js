// Set time limit
const timeLimit = 100 * 1000; // 100 seconds
const timeEnd = new Date().getTime() + timeLimit;

// Start countdown progress
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = timeEnd - now;
  const progress = ((1 - distance / timeLimit) * 100).toFixed(2);

  if (distance < 0) {
    clearInterval(x);
  } else {
    document
      .getElementById("time-progress")
      .setAttribute("aria-valuenow", progress);
    document
      .getElementById("time-progress")
      .setAttribute("style", "width: " + progress + "%");
  }
}, 1000);
