<script setup lang="ts">
import { Pagination } from './'
import './pagination.css'
</script>

<template>
  <Story title="Pagination">
    <Variant title="Basic">
      <Pagination.Root v-slot="{ pages }" :count="5000" :page-size="10" :sibling-count="2">
        <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
        <template v-for="(page, index) in pages">
          <Pagination.Item v-if="page.type === 'page'" :key="page" :value="page.value">
            {{ page.value }}
          </Pagination.Item>
          <Pagination.Ellipsis v-else :key="index" :index="index"> &#8230; </Pagination.Ellipsis>
        </template>
        <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
      </Pagination.Root>
    </Variant>

    <Variant title="Customized">
      <Pagination.Root
        v-slot="{ pages }"
        :count="5000"
        :page-size="20"
        :sibling-count="3"
        dir="ltr"
        :translations="{
          nextTriggerLabel: 'Next',
          prevTriggerLabel: 'Prev',
          itemLabel: (details) => `Page ${details.page}`,
        }"
      >
        <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
        <template v-for="(page, index) in pages">
          <Pagination.Item v-if="page.type === 'page'" :key="page" :value="page.value">
            {{ page.value }}
          </Pagination.Item>
          <Pagination.Ellipsis v-else :key="index" :index="index"> &#8230; </Pagination.Ellipsis>
        </template>
        <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
      </Pagination.Root>
    </Variant>
  </Story>
</template>
