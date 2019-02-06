<template>
  <section class="post-view">
    <h1 class="post-title">
      {{ $page.title }}
      <time-ago
        :last-updated="$page.frontmatter.date || $page.lastUpdated"
        class="post-date"
      />
    </h1>
    <Content />
    <Vssue title="Comments" />
  </section>
</template>

<script>
import TimeAgo from './TimeAgo';

export default {
  components: {
    TimeAgo
  },
}
</script>
<style>
.vssue-header-powered-by {
  display: none;
}
</style>
