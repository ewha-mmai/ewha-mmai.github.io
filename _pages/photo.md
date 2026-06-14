---
layout: page
title: Gallery
permalink: /gallery/
description: Photos from Multimodal AI Lab @ EWHA
nav: true
nav_order: 5
images:
  lightbox2: true
---

<div class="gallery-grid">
{% for entry in site.data.gallery %}
  {% assign photo_count = entry.photos | size %}
  {% assign event_idx = forloop.index %}

  {% if photo_count == 1 %}
  <figure>
    <a href="{{ entry.photos[0] | prepend: '/assets/img/' | relative_url }}"
       data-lightbox="lab-gallery"
       data-title="{{ entry.caption }}">
      <img src="{{ entry.photos[0] | prepend: '/assets/img/' | relative_url }}"
           alt="{{ entry.caption }}"
           loading="lazy">
    </a>
    <figcaption>
      {% if entry.caption %}<span class="gallery-caption-text">{{ entry.caption }}</span>{% endif %}
      <span class="gallery-caption-head"><span class="gallery-date">{{ entry.date }}</span></span>
    </figcaption>
  </figure>

  {% else %}
  <figure class="gallery-carousel">
    <div class="gallery-carousel-stage">
      {% for photo in entry.photos %}
      <a class="gallery-carousel-slide{% if forloop.first %} is-active{% endif %}"
         href="{{ photo | prepend: '/assets/img/' | relative_url }}"
         data-lightbox="gallery-event-{{ event_idx }}"
         data-title="{{ entry.caption }}">
        <img src="{{ photo | prepend: '/assets/img/' | relative_url }}"
             alt="{{ entry.caption }}"
             loading="lazy">
      </a>
      {% endfor %}
      <button class="gallery-carousel-button gallery-carousel-prev" type="button" aria-label="Previous">&#8249;</button>
      <button class="gallery-carousel-button gallery-carousel-next" type="button" aria-label="Next">&#8250;</button>
    </div>
    <figcaption>
      {% if entry.caption %}<span class="gallery-caption-text">{{ entry.caption }}</span>{% endif %}
      <span class="gallery-caption-head">
        <span class="gallery-date">{{ entry.date }}</span>
        <span class="gallery-carousel-count">1 / {{ photo_count }}</span>
      </span>
    </figcaption>
  </figure>
  {% endif %}

{% endfor %}
</div>

<script>
document.querySelectorAll('.gallery-carousel').forEach(function(carousel) {
  var slides = carousel.querySelectorAll('.gallery-carousel-slide');
  var countEl = carousel.querySelector('.gallery-carousel-count');
  var total = slides.length;
  var current = 0;

  function goTo(idx) {
    slides[current].classList.remove('is-active');
    current = (idx + total) % total;
    slides[current].classList.add('is-active');
    if (countEl) countEl.textContent = (current + 1) + ' / ' + total;
  }

  carousel.querySelector('.gallery-carousel-prev').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    goTo(current - 1);
  });

  carousel.querySelector('.gallery-carousel-next').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    goTo(current + 1);
  });
});
</script>
