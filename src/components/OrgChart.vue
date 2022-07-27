<script lang="ts" setup>
import Org from './Org.vue';
import Node from './Node.vue';
import { ref } from 'vue';

const org = ref({
  name: 'Lao Lao',
  title: 'general manager',
  children: [
    {
      name: 'Su Miao', title: 'department manager', children: [
        { name: 'Bo Miao', title: 'department manager' },
        {
          name: 'Chun Miao', title: 'department manager',
          children: [
          ]
        },
        { name: 'Er Dan Zai', title: 'Intern' },
        { name: 'Su Miao', title: 'department manager', },
      ]
    },
    {
      name: 'Bo Miao', title: 'department manager',
      children: [
        { name: 'Bo Miao', title: 'department manager' },
      ]
    },
    {
      name: 'Chun Miao', title: 'department manager',
      children: [
        { name: 'Bo Miao', title: 'department manager' },
        {
          name: 'Chun Miao', title: 'department manager',
          children: [
          ]
        },
        { name: 'Er Dan Zai', title: 'Intern' },
        { name: 'Su Miao', title: 'department manager', },
      ]
    },
    {
      name: 'Er Dan Zai', title: 'Intern',
      children: [
        { name: 'Bo Miao', title: 'department manager' },
        {
          name: 'Chun Miao', title: 'department manager',
          children: [
          ]
        },
        { name: 'Er Dan Zai', title: 'Intern' },
        { name: 'Su Miao', title: 'department manager', },
      ]
    },
    {
      name: 'Su Miao', title: 'department manager', children: [
        { name: 'Bo Miao', title: 'department manager' },
        {
          name: 'Chun Miao', title: 'department manager',
          children: [
          ]
        },
        { name: 'Er Dan Zai', title: 'Intern' },
        { name: 'Su Miao', title: 'department manager', },
      ]
    },
  ]
});

function onNodeClick(...args) {
  console.log('node-click', ...args);
}

</script>

<template>
  <div class="orgchart">
    <ul class="children">
      <Org :org="org"
        @node-click="onNodeClick">
        <template v-slot:node="{ data, index, parent }">
          <Node :data="data"
            :index="index" />
        </template>
      </Org>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.org-chart {
  text-align: center;
  padding: 50px;
}
</style>
