<template>
  <div>
    <page-header class="mb-6" title="Training" />
    <Table class="mb-6" />
    <data-card />
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import DataCard from "../components/DataCard";

export default {
  components: {
    PageHeader,
    Table,
    DataCard,
  },
};
</script>
