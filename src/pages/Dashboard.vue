<template>
  <div>
    <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white">Home</h1>
    <section class="text-gray-600 body-font">
      <el-card class="box-card">
        <p class="leading-relaxed">Users</p>
        <h2
          class="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white"
        >
          2.7K
        </h2>
      </el-card>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div class="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg text-left">
            <p class="leading-relaxed">Users</p>
            <h2
              class="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white"
            >
              2.7K
            </h2>
          </div>
          <div class="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg text-left">
            <p class="leading-relaxed">Users</p>
            <h2
              class="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white"
            >
              2.7K
            </h2>
          </div>
          <div class="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg text-left">
            <p class="leading-relaxed">Users</p>
            <h2
              class="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white"
            >
              2.7K
            </h2>
          </div>
          <div class="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg text-left">
            <p class="leading-relaxed">Users</p>
            <h2
              class="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white"
            >
              2.7K
            </h2>
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-col md:flex-row">
      <bar-chart />
      <line-chart />
    </div>
  </div>
</template>
<script>
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart.vue";

export default {
  components: {
    BarChart,
    LineChart,
  },
};
</script>
