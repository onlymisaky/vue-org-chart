<script setup lang="ts" name="Org">

import { useSlots, useAttrs, computed } from 'vue'

defineProps({
  org: {
    type: Object,
    required: true,
  },
});

const slots = useSlots();
const slotList = computed(() => Object.keys(slots));
const emits = defineEmits(['node-click', 'node-dbclick'])

</script>

<template>
  <li class="org">
    <div class="node-container">
      <slot name="node"
        :data="org">
        {{ org.name }}
      </slot>
    </div>
    <ul class="children"
      v-if="org.children && org.children.length">
      <Org v-for="(item, index) in org.children"
        :org="item"
        @click.native="emits('node-click', item, index, org)">
        <template v-for="slot in slotList"
          #[slot]="scope">
          <slot :name="slot"
            v-bind="scope"
            :index="index"
            :parent="org">
          </slot>
        </template>
      </Org>
    </ul>
  </li>
</template>
