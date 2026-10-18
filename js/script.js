document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("packagesContainer");
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  if (!container) return;
  function step() {
    const card = container.querySelector(".package-card");
    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    return card ? card.getBoundingClientRect().width + gap : 300;
  }
  if (prev) prev.addEventListener("click", () => container.scrollBy({left: step(), behavior: "smooth"}));
  if (next) next.addEventListener("click", () => container.scrollBy({left: -step(), behavior: "smooth"}));
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("packagesContainer");
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  if (!container) return;
  function step() {
    const card = container.querySelector(".package-card");
    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    return card ? card.getBoundingClientRect().width + gap : 300;
  }
  if (prev) prev.addEventListener("click", () => container.scrollBy({left: step(), behavior: "smooth"}));
  if (next) next.addEventListener("click", () => container.scrollBy({left: -step(), behavior: "smooth"}));
});
/*
  مدیریت ایونت‌ها:
  فقط ایونت‌هایی که در آرایه events قرار دارند و active آن‌ها true است نمایش داده می‌شوند.
  برای نبودن ایونت فعال، آرایه را خالی کنید یا active همه ایونت‌ها را false بگذارید.
  برای افزودن ایونت جدید، یک شیء جدید با همین ساختار به آرایه اضافه کنید.
*/
const eventConfig = {
  events: [
    {
      active: false,
      title: 'کارگاه شعر و کاردستی انگلیسی',
      description: 'با شعر، بازی و کاردستی، یک تجربه‌ی شاد و تازه از یادگیری زبان انگلیسی داشته باشیم!',
      location: 'همیلا سنتر ، طبقه 2 ، شهر مشاغل همبازی',
      time: 'پنج‌شنبه‌ها، ساعت 10 تا 11',
      price: 'هزینه جلسه اول رایگان',
      rules: ' یادگیری طبیعی و لذت بخش ، تقویت مهارت های زبانی ، افزایش اعتماد به نفس ، تقویت ارتباط مادر و کودک ، آشنایی با فرهنگ و واژگان  ',
      registerUrl: ''
    }
  ]
};

(() => {
  const list = document.getElementById('active-events-list');
  const emptyPoster = document.getElementById('no-event-poster');
  const template = document.getElementById('event-poster-template');
  if (!list || !emptyPoster || !template) return;

  const activeEvents = (Array.isArray(eventConfig.events) ? eventConfig.events : [])
    .filter(event => event && event.active === true);

  list.replaceChildren();

  if (activeEvents.length === 0) {
    emptyPoster.hidden = false;
    return;
  }

  emptyPoster.hidden = true;
  activeEvents.forEach(event => {
    const poster = template.content.firstElementChild.cloneNode(true);
    const setText = (selector, value) => {
      const element = poster.querySelector(selector);
      if (element) element.textContent = value || 'اطلاعات متعاقباً اعلام می‌شود';
    };

    setText('.event-title', event.title);
    setText('.event-description', event.description);
    setText('.event-location', event.location);
    setText('.event-time', event.time);
    setText('.event-price', event.price);
    setText('.event-rules', event.rules);

    const registerLink = poster.querySelector('.event-register-link');
    if (registerLink && event.registerUrl) {
      registerLink.href = event.registerUrl;
      registerLink.hidden = false;
    }

    list.appendChild(poster);
  });
})();
