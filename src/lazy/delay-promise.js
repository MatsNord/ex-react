const dealyPromise = duration => mod => {
  console.log(duration);
  return new Promise((resolve, reject) => {
    console.log(mod);
    setTimeout(function() {
      console.log("Loaded");
      resolve(mod);
    }, duration);
  });
};

export default dealyPromise;
