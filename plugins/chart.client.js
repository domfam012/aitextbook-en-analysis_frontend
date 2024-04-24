import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineNuxtPlugin(() => {
  Chart.register(ChartDataLabels);
  return {
    provide: {
      Chart,
    },
  };
});
