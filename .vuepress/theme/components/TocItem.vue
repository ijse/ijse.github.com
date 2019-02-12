<template>
  <div>
    <li v-for="item in list" :key="index">
      <a :href="`#${item.slug}`"> {{ item.title }} </a>

      <ul v-if="item.children">
        <TocItem :list="item.children" />
      </ul>
    </li>
  </div>
</template>
<script>
export default {
  name: 'TocItem',
  props: {
    list: Array
  }
}
</script>
