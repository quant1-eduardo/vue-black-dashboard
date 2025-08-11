import { Bar, mixins } from "vue-chartjs";

export default {
  name: "bar-chart",
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    extraOptions: {
      type: Object,
      default: () => ({})
    },
    gradientColors: {
      type: Array,
      default: () => [
        "rgba(72,72,176,0.2)",
        "rgba(72,72,176,0.0)",
        "rgba(119,52,169,0)",
      ],
      validator: (val: any[]) => {
        return val.length > 2;
      },
    },
    gradientStops: {
      type: Array,
      default: () => [1, 0.4, 0],
      validator: (val: any[]) => {
        return val.length > 2;
      },
    },
    chartId: {
      type: String,
      default: "bar-chart"
    }
  },
  data() {
    return {
      ctx: null as CanvasRenderingContext2D | null,
    };
  },
  methods: {
    updateGradients(chartData: any): void {
      if (!chartData) return;
      const canvas = document.getElementById((this as any).chartId) as HTMLCanvasElement;
      const ctx = (this as any).ctx || canvas?.getContext("2d");
      if (!ctx) return;
      
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(
        (this as any).gradientStops[0],
        (this as any).gradientColors[0]
      );
      gradientStroke.addColorStop(
        (this as any).gradientStops[1],
        (this as any).gradientColors[1]
      );
      gradientStroke.addColorStop(
        (this as any).gradientStops[2],
        (this as any).gradientColors[2]
      );
      chartData.datasets.forEach((set: any) => {
        set.backgroundColor = gradientStroke;
      });
    },
  },
  mounted() {
    (this as any).$watch(
      "chartData",
      (newVal: any, oldVal: any) => {
        (this as any).updateGradients(newVal);
        if (!oldVal) {
          (this as any).renderChart((this as any).chartData, (this as any).extraOptions);
        }
      },
      { immediate: true }
    );
  },
};
