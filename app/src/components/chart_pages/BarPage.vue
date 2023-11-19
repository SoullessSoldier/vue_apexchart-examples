<template>
  <div class="content">
    <vue-apex-charts
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></vue-apex-charts>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
const options = {
  chart: {
    id: "apexchart-example",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  title: {
    text: "Рост ВВП по годам",
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "Roboto",
      color: "#263238",
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "ВВП",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];
</script>
