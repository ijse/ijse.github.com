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
    <Vssue v-if="hasComment" :title="commentTitle" />
  </section>
</template>

<script>
import TimeAgo from './TimeAgo';
import TOC from './TocItem';

export default {
  components: {
    TimeAgo, TOC
  },
  computed: {
    hasComment () {
      return this.$page.comment !== false && process.env.NODE_ENV === 'production'
    },
    commentTitle () {
      return process.env.NODE_ENV === 'production' ? this.$page.title : 'Comments'
    },
    listData () {
      if (!this.list.length) return []

      const cur = this.list[0]
      const result = [ cur ]
      this.list.forEach(t => {
        if (t.level > cur.level) {
          cur.children = [].concat(cur.children, t)
        } else {
          result.push(t)
        }
      })

      return result
    }
  }
}
</script>
<style>
.vssue-header-powered-by {
  display: none;
}
</style>
