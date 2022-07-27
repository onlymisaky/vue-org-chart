<script setup lang="ts" name="Org">

import { useSlots, computed, ref } from 'vue'

defineProps({
  org: {
    type: Object,
    required: true,
  },
  parentOrg: {
    type: Object,
  },
  index: {
    type: Number
  }
});

const slots = useSlots();
const slotNameList = computed(() => Object.keys(slots));
const emits = defineEmits(['node-click']);

const expanded = ref(true);

function onChangeExpand() {
  expanded.value = !expanded.value;
}

</script>

<template>
  <li class="org">

    <div class="line-to-sibling"></div>

    <div class="node-container"
      @click="emits('node-click', { org })">

      <div class="line-to-parent"></div>

      <slot name="node"
        :data="org">
        {{ org }}
      </slot>

      <template v-if="org.children && org.children.length">
        <div class="expand"
          @click.stop="onChangeExpand">
        </div>
        <div class="line-to-children"
          v-show="expanded">
        </div>
      </template>

    </div>

    <ul class="children"
      v-if="org.children && org.children.length"
      v-show="expanded">
      <Org v-for="(item, index) in org.children"
        :org="item"
        :parentOrg="org"
        :index="index"
        @node-click="emits('node-click', { org: item, index, })">

        <template v-for="slotName in slotNameList"
          #[slotName]="scope">
          <slot :name="slotName"
            :index="index"
            v-bind="scope">
          </slot>
        </template>

      </Org>
    </ul>
  </li>
</template>
