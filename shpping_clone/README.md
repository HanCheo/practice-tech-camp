## Goal
1. UI를 개발하는데 필요한 html 태그 사용
2. 시멘틱 태그의 이해
3. CSS position, float, flex를 이용한 화면 레이아웃 구성
4. CSS 캐스케이딩, 상속, box-model 이해

<br>

## 미리보기 

채택한 쇼핑몰 : [마켓컬리](https://www.kurly.com/m2/index.php)

### PC
![Jun-29-2021 18-52-31](https://user-images.githubusercontent.com/38929712/123777572-4d51b480-d90b-11eb-90d6-f17704383b53.gif)

### Mobile
![Jun-30-2021 20-15-40](https://user-images.githubusercontent.com/38929712/123951716-0ed9f980-d9e0-11eb-96dc-69b83ea23165.gif)



## 회고
클론코딩할 쇼핑몰은 마켓컬리를 채택하여 진행하였다.
막상 진행하고 보니 마켓컬리의 경우 pc화면과 모바일 화면 2가지로 나뉘어져있는데 pc의 경우는 반응형 웹사이트가 아니었다. media-query를 이용하여 글자나 이미지의 크기 등을 조정하지 않아 항상 1050px을 기준으로 맞춰져 있게 되어있다. 

이 점 때문에 pc를 따라하는데에는 크게 어렵지 않았다.

다만 모바일을 감지하는 기준이 화면의 너비가 아닌 php코드를 이용하여 서버단에서 먼저 확인후 진행되는 것 같아보였다. (개발자 도구를 이용하여 확인했어야 했는데...)

아무생각 없이 pc화면 레이아웃으로만 만들어버린 나를 질타했었다..
1050px을 기준으로 잡고 그 아래의 화면 너비는 모바일용으로 보일수 있게 media 쿼리로 추가 수정하였다.

이 후 다른 컴퓨터로도 확인해보았는데 font나 각 px위치들은 항상 맞지 않아 몇가지 추가수정을 진행하였다. pixel ratio에 대한 공부도 해야할 것 같다..


## 필요 공부사항

[Device Pixel Density](https://webclub.tistory.com/629)
