// @ts-check

import $ from "jquery";

export default () => {
  // BEGIN (write your solution here)
  const carousels = $('[data-ride="carousel"]');

  const handle = (e) => {
    const clickedEl = $(e.target);

    let button;

    if (clickedEl.is("a") || clickedEl.parent().attr("data-slide")) {
      button = clickedEl.is("a") ? clickedEl : clickedEl.parent();
    }

    if (!button) return;

    const carouselEl = button.parent().children().first();
    
    const carouselItems = $(".carousel-item", carouselEl);
    
    const currentActiveItem = carouselItems.filter(".active");
    
    const currentActiveIndex = currentActiveItem.index();
    
    const isCurrentActiveLast = currentActiveIndex === carouselItems.length - 1;
    
    const isCurrentActiveFirst = currentActiveIndex === 0;
    
    const direction = button.attr('data-slide');

    const map = {
      next: isCurrentActiveLast ? carouselItems.first() : currentActiveItem.next(),
      prev: isCurrentActiveFirst ? carouselItems.last() : currentActiveItem.prev()
    }

    const targetItem = map[direction];

    currentActiveItem.removeClass("active");

    targetItem.addClass('active');
    
  };

  carousels.on("click", handle);
  // END
};
