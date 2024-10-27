const targets = document.querySelectorAll(".target");

const option = {
  threshold: 0.3,
};

const callBack = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(callBack, option);

targets.forEach((target) => {
  observer.observe(target);
});
