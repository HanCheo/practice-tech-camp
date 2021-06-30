```
npm install -g learnyounode
learnyounode
```

## 결과

![nodejs](https://user-images.githubusercontent.com/38929712/123634490-77489f80-d855-11eb-8cd2-733a841fd639.png)

## 회고
node.js는 실 프로젝트나 개인적인 경험이 매우 적어 뒷부분 문제를 푸는데에서 여러 자료를 찾아보게 되었다. 실제 캠프를 진행하기전에 미리 알게되어 정말 다행이다..

문제 중 시간이 걸리고 이해가 어려웠던 부분은 stream에 대한 부분이다.

그 중 12번 문제 http-uppercaserer에서 stream의 pipe에 대해 이해가 조금 어려웠다.
이전 문제에서 다음과 같은 형태로 문제를 풀다보니 접근 방식에 대해 어려웠던 것 같다.
```javascrpit
req.on('data', ()=>{})
```
req.pipe()에서도 콜백 함수와 같이 데이터를 받으면 수정할 수 있도록 작성할 수 있을 줄 알고 작성했다가 잘못되었다는 것을 문서를 보고 알았다.
pipe는 단순 stream과 stream을 연결해주는 역할로 pipe의 과정에서 데이터를 수정할 수는 없다.
데이터를 수정해주기 위해서는 새로운 스트림이 필요하다는 것을 문서와 여러 질문들을 찾고 알게되었다.

```
//pipe : '===='
//stream : ()

//기존 생각 방식
(req)==edit==(res)

//해결 방식
(req)====(edit)====(res)
```
문제에서는 through2-map의 외부 모듈을 사용하라고 되어 있었는데 이를 사용하는 것도 좋지만 개인적으로 별도의 스트림을 만들어보고 싶었고 스트림을 사용하지 않는 방법으로도 풀어보고 싶었다.
다행히 자료가 많아 만드는데에는 크게 어렵지 않았으며 stream과 pipe를 이해하는데에도 도움이 되었다.

## 참고링크
[Node JS Streams](https://nodejs.dev/learn/nodejs-streams)

[Node.js Tutorial For Beginners Part 8 - Buffers, Streams, Pipes and Files](https://youtu.be/8Vmvsn5JhVY)

[Custom Trasnfrom Stream](https://stackoverflow.com/questions/31625563/nodejs-modify-data-during-piping-from-source-to-destination)


