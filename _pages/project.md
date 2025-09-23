---
layout: page
title: Projects
permalink: /projects/
description: Explore the journey of our lab’s projects.
nav: true
nav_order: 3
horizontal: false
---

<div class="projects-grid">
  {% for project in site.projects %}
  <div class="project-card">
    <div class="thumb">
      <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
  </div>
  {% endfor %}
</div>
