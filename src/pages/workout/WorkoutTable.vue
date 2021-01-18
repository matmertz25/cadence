<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-table :data="workouts" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column
        prop="activity_type"
        label="Activity Type"
        width="180"
      ></el-table-column>
      <el-table-column prop="description" label="Description"> </el-table-column>

      <el-table-column prop="modified_on" label="Modified" width="180"> </el-table-column>
      <el-table-column prop="created_on" label="Created" width="180"> </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  props: {
    workouts: Array,
  },
  data() {
    return {};
  },
};
</script>
