<template>
  <div>
    <page-header class="mb-6" title="Calendar" />
    <div class="flex-grow">
      <div class="flex">
        <div class="min-h-screen w-64 pb-4 flex-col hidden sm:flex">
          <div class="px-3 relative inline-block text-left">
            <el-button type="primary" round>New Event</el-button>
          </div>
          <div class="px-3 mt-6">
            <h3 class="title-font text-lg font-medium text-white mb-3">
              Workouts ({{ workouts.length }})
            </h3>
            <el-input placeholder="Search workouts" v-model="workoutFilter">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div id="draggable-workouts">
              <el-card
                class="fc-event my-3 cursor-move"
                :body-style="{ padding: '10px' }"
                v-for="workout in workouts.filter((item) =>
                  JSON.stringify(item).includes(workoutFilter)
                )"
                :key="workout.title"
                :data-event="`${JSON.stringify(workout)}`"
              >
                <h2
                  class="tracking-widest text-xs uppercase title-font font-medium text-indigo-400 mb-1"
                >
                  {{ workout.activity_type }}
                </h2>
                <h1 class="title-font text-md font-medium text-white mb-0">
                  {{ workout.title }}
                </h1>
              </el-card>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-0 flex-1"><calendar /></div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader";
import Calendar from "./Calendar";

export default {
  components: {
    PageHeader,
    Calendar,
  },
  data() {
    return {
      workoutFilter: "",
      workouts: [
        {
          title: "Swim Recovery (SRe)",
          activity_type: "swim",
          description: "1500 Zone 1",
          date: "2021-01-10",
        },
        {
          title: "Cycling Recovery (CRe)",
          activity_type: "bike",
          description: "55 minutes Zone 1",
          date: "2021-01-10",
        },
      ],
    };
  },
};
</script>
