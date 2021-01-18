<template>
  <div>
    <page-header class="mb-6" title="Workouts" />
    <workout-table />
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader";
import WorkoutTable from "./WorkoutTable";

export default {
  components: {
    PageHeader,
    WorkoutTable,
  },
  data() {
    return {
      workout: {
        workout_id: "3242lkjl-ij324234",
        name: "RSS",
        activity_type: "run",
        description: "No. 189, Grove St, Los Angeles",
        modified_on: "2016-05-03",
        created_on: "2016-05-03",
        segments: [
          {
            segment_id: "",
            segment_order: 0,
            steps: [{ step_id: "", step_order: 0 }],
          },
        ],
      },
    };
  },
};
</script>
