// Function to generate a random time between min and max seconds
window.promises = [];
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}
// Add five promises with random resolving times to the existing promises array
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = getRandomTime(1, 5);
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime / 1000} seconds.`);
    }, randomTime);
  });
window.promesses.push(promise);
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

