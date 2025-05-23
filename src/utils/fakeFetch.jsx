// src/utils/fakeFetch.js
export function fakeFetch(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
