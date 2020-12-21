<script>
import { onMounted, ref } from "vue";
export default {
  name: "GMaps",
  setup(props) {
    const map = ref(null);
    const mapDiv = ref(null);
    const apiKey = process.env.GMAPS_API_KEY;

    onMounted(() => {
      const scriptElement = document.createElement("script");
      scriptElement.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`
      );
      scriptElement.setAttribute("defer", "");
      scriptElement.setAttribute("async", "");

      document.head.appendChild(scriptElement);
    });

    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDiv.value, {
        mapTypeId: props.mapTypeId || "hybrid"
      });
    };
  }
};
</script>
