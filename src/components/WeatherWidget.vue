<script>
import { ref } from "vue";
import { weatherApi } from "@/api";
export default {
  setup(props) {
    let weatherData = ref([]);
    const getWeatherData = async () => {
      weatherData.value = await weatherApi.oneCallWeatherData({
        lat: 33.441792,
        lon: -94.037689
      });
    };
    console.log(weatherApi);
    console.log(props);
    return {
      weatherData,
      getWeatherData
    };
  },
  mounted() {
    this.getWeatherData();
  }
};
</script>
