<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { CommonOption } from '@/datasources/StoreList';

export default {
  name: "KakaoMap",
  data() {
    return {};
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.498095, 127.027610),
        level: 5,
      };

      // 지도 객체를 등록합니다.
      this.map = new kakao.maps.Map(container, options);

      // positions 배열을 CommonOption.locationList로 채우기
      const positions = CommonOption.locationList.map(location => ({
        title: location.name,
        latlng: new kakao.maps.LatLng(parseFloat(location.loc_x), parseFloat(location.loc_y))
      }));

      console.log(positions);

      // positions 배열의 각 항목을 마커로 표시
      positions.forEach(position => {
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        const imageSize = new kakao.maps.Size(24, 35);

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: position.latlng, // 마커를 표시할 위치
          title: position.title, // 마커의 타이틀
          image: markerImage // 마커 이미지
        });
      });
    },
  },
};
</script>


<style scoped>
#map { 
  width: 900px;
  height: 600px;

}
</style>
