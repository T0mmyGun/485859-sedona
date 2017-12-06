


      var link = document.querySelector(".search-hotel-btn");

      var popup = document.querySelector(".popup");

      var form = popup.querySelector("form");

      var arrival_date = popup.querySelector("[name=date-of-arrival]");

      var departure_date = popup.querySelector("[name=date-of-departure]");

      var adult_amount = popup.querySelector("[name=adult-amount]");

      var child_amount = popup.querySelector("[name=child-amount]");

      var storage = localStorage.getItem("adult_amount");

      var storage1 = localStorage.getItem("child_amount");

      document.documentElement
        .classList.replace('no-js', 'js');

      link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.toggle("popup-show");
        arrival_date.focus();
        if (storage) {
        adult_amount.value = storage;
      }
      if (storage1) {
      child_amount.value = storage1;
    }
      });

      form.addEventListener("submit", function(evt) {
        if (!arrival_date.value || !departure_date.value || !adult_amount.value) {
          evt.preventDefault();
          popup.classList.remove("popup-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("popup-error");
        } else {
        localStorage.setItem("adult_amount", adult_amount.value);
        localStorage.setItem("child_amount", child_amount.value);
    }
      });


      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
            evt.preventDefault();
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
          }
        }
      });
