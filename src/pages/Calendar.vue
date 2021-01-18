<template>
  <div>
    <page-header class="mb-6" title="Calendar" />
    <el-calendar class="bg-gray-900">
      <!-- <template #dateCell>
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }} {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template> -->
    </el-calendar>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader";

export default {
  components: {
    PageHeader,
  },
};
</script>
