---
layout: page
permalink: /students/
title: Students
description: in Multimodal AI Lab @ EWHA
nav: false
nav_order: 4
display_categories: [Postdoc, Graduate, Undergraduate, Robot]
horizontal: true
---

<div class="students">
  {% if page.display_categories %}
    {% for category in page.display_categories %}
      <br/>
      <a id="{{ category }}" href="#{{ category }}">
        <h2 class="category text-capitalize">{{ category }}</h2>
      </a>
      <br/>

      {% assign categorized_students = site.students | where: "category", category %}
      {% assign sorted_students = categorized_students | sort: "importance" %}

      <div class="container-fluid px-1">
        <div class="row g-4">
          {% for s in sorted_students %}
          <div class="col-12 col-md-6">
            <div class="student-card d-flex p-1 rounded shadow-sm">
              <div class="student-photo-wrap me-1">
                <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}" class="student-photo">
              </div>
              <div class="flex-grow-1">
                <h3 class="h5 mb-1">
                  {{ s.name }}
                </h3>

                {% if s.education %}
                  <div class="mb-2">
                    <strong>Education</strong>
                    <ul class="mb-0">
                      {% for e in s.education %}
                        <li>{{ e }}</li>
                      {% endfor %}
                    </ul>
                  </div>
                {% endif %}
                {% if s.semester %}
                  <div>
                    <div><strong>{{ s.semester }}</strong></div>
                  </div>
                {% endif %}
                {% if s.interests %}
                  <div>
                    <strong>Research Interests</strong>
                    <div>{{ s.interests }}</div>
                  </div>
                {% endif %}
                {% if s.email or s.homepage %}
                  <div class="mt-2 d-flex" style="gap: 0.75rem;">
                    {% if s.email %}
                      <a href="mailto:{{ s.email }}" title="{{ s.email }}">
                        <i class="fas fa-envelope"></i>
                      </a>
                    {% endif %}
                    {% if s.homepage %}
                      <a href="{{ s.homepage }}" target="_blank" title="Homepage">
                        <i class="ti ti-home"></i>
                      </a>
                    {% endif %}
                  </div>
                {% endif %}
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>

    {% endfor %}
  {% else %}
    <!-- 카테고리 미사용 시 전체 목록 -->
    {% assign sorted_students = site.students | sort: "importance" %}
    <div class="container">
      <div class="row g-4">
        {% for s in sorted_students %}
        <div class="col-12 col-md-6">
          <div class="student-card d-flex p-3 rounded shadow-sm">
            <div class="student-photo-wrap me-3">
              <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}" class="student-photo">
            </div>
            <div class="flex-grow-1">
              <h3 class="h5 mb-1">{{ s.name }}</h3>
              {% if s.role %}<div class="text-muted mb-2">{{ s.role }}</div>{% endif %}
              {% if s.email %}
                <div class="mb-2">
                  <a href="mailto:{{ s.email }}" title="{{ s.email }}">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              {% endif %}
              {% if s.education %}
                <div class="mb-2">
                  <strong>Education</strong>
                  <ul class="mb-0">
                    {% for e in s.education %}
                      <li>{{ e }}</li>
                    {% endfor %}
                  </ul>
                </div>
              {% endif %}
              {% if s.interests %}
                <div>
                  <strong>Research Interests</strong>
                  <div>{{ s.interests }}</div>
                </div>
              {% endif %}
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  {% endif %}
</div>
