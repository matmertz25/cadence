<template>
  <div>
    <page-header class="mb-6" title="Workouts" />
    <workout-table :workouts="workouts" />
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader";
import WorkoutTable from "./WorkoutTable";
import { workouts } from "../../data";

export default {
  components: {
    PageHeader,
    WorkoutTable,
  },
  data() {
    return {
      workouts: workouts,
    };
  },
};
</script>
