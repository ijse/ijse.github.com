<template>
  <div class="list-view">
    <div
      v-if="$pagination.posts.length === 0"
      class="empty-list">
      Ooops! Nothing here..🙈
    </div>
    <ol
      v-else
      class="list">
      <li
        v-for="page of $pagination.posts"
        :key="page.key"
        class="list-item">
        <router-link
          :to="page.path"
          class="item-title">
          {{ page.title }}
        </router-link>
        <br>
        <TimeAgo
          :last-updated="page.frontmatter.date || page.lastUpdated"
          class="item-date"/>
      </li>
    </ol>

    <section class="pagination">
      <router-link :to="$pagination.prevLink" v-if="$pagination.hasPrev">
        Prev
      </router-link>
      <span v-else />
      <router-link :to="$pagination.nextLink" v-if="$pagination.hasNext">
        Next
      </router-link>
    </section>

  </div>
</template>

<script>
import TimeAgo from './TimeAgo';

export default {
  components: {
    TimeAgo
  }
}
</script>
<style>
  .pagination {
    display: flex;
    justify-content: space-between;
  }
</style>
