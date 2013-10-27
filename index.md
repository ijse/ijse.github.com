---
layout: page
title: IJSE STU BLOG
tagline: Supporting tagline
---
{% include JB/setup %}


<ul class="posts">
  {% for post in site.posts %}
    <li>
    	<a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    	<span class="right">{{ post.date | date: "%Y-%m-%d" }} &raquo;</span>
    </li>
  {% endfor %}
</ul>

