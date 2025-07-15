const scrollElements = document.querySelectorAll(".show-on-scroll");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (el) => {
  el.style.opacity = "1";
  el.style.transform = "translateY(0)";
};

const hideScrollElement = (el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    elementInView(el) ? displayScrollElement(el) : hideScrollElement(el);
  });
};

window.addEventListener("scroll", handleScrollAnimation);

const toTopBtn = document.querySelector(".xoxo_fn_totop");
const progressCircle = document.querySelector(".progress");
const radius = 26;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;
  const offset = circumference - progress * circumference;
  progressCircle.style.strokeDashoffset = offset;

  if (scrollTop > 100) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", updateProgress);

toTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

updateProgress(); // مقدار اولیه هنگام بارگذاری

function updateTimeDate() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = now.toLocaleDateString("fa-IR", options);
  const time = now.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("timeDate").innerText = `🕒 ${time} | 📅 ${date}`;
}

updateTimeDate(); // بار اول
setInterval(updateTimeDate, 1000); // هر ثانیه آپدیت کن


function runCode() {
        const code = document.getElementById("codeInput").value;
        const outputFrame = document.getElementById("outputFrame");
        const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
    }