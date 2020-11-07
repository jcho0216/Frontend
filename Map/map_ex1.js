let map;

//맵 객체 생성 id='map'에 지도 표시
function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.391703, lng: 127.363398},
    zoom: 17,
});

//마커 객체
let marker = new google.maps.Marker({
    map: map,
    position: {lat: 36.391703, lng: 127.363398},
    title: '여기가 내위치입니다!'
});

//정보창 객체를 추가
// let infoWindow = new.google.maps.infoWindow({map: map});
// let my_position = {lat: -27.554290, lng: 153.103664};

// infoWindow.setPosition(my_position);
// infoWindow.setContent('여기가 내 위치입니다!');


}