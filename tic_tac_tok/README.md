
# Goal
1. 객체 리터럴을 이용한 객체 구성
2. Class를 이용하여 제작
3. forEach, map, filter와 같은 배열 내장 method 연습
4. DOM, Event 연습
5. 비동기에 대한 이해


## 미리보기
![preview](https://user-images.githubusercontent.com/38929712/123581329-9bd15700-d816-11eb-8e71-f7ca76645957.gif)


비동기에 대한 이해

 - 자바스크립트는 싱글 스레드 언어이다.
 - 한번에 하나의 작업을 진행하기 때문에 작업의 진행 중에는 다른 작업은 멈추게 된다.
 - 이를 해결하는 동시성을 보장해주기 위해 나타난 것이 비동기이다.
 - 자바스크립트의 동작 중 비동기 작업을 만나게 되면 다음과 같이 진행된다.
  1. 작업들을 Call stack으로 입력하여 Call stack에서 LIFO 형태로 순차적으로 진행한다.
  2. 작업이 진행중 비동기 작업이 발생한다.
    (setTimeout, setInterval, promise, async/await 등)
  3. 자바스크립트는 web_api로 요청작업과, 콜백함수를 전달한다.
  4. 요청작업이 완료되면 작업의 우선순위에 따라 Micro, Macro queue에 넣어진다.
  5. Call stack에 남은 작업이 없다면 FIFO의 형태로 micro queue에 있는 콜백함수를 우선적으로 콜스택에 입력한다.
  6. 함수단위로 작업이 진행되며
  7. 이후 macro queue에 있는 작업을 5,6번과 동일하게 진행한다.

위와 같은 상황에서 Event Loop는 Call Stack과 queue를 확인하며 작업을 Call Stack에 넣어주는 역할을 한다.
    
>큰 틀을 통하여 작업내용을 작성한 것으로 각 내용에는 세부적으로 들어가게되면 차이가 있다.
Web_api 또한 각 브라우저와 node.js와의 차이점이 있다.

 - 다음은 학습시 중요 키워드이다. 
  
```
Callback Function
Call Stack
Heap
Event Loop
Queue(Micro, Macro)
Web API(Background)
```

참고링크

[1] [nodejs eventLoop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

[2] [What to heck is the event loop anyway ? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ%20)

[3] [Testing Code](http://latentflip.com/loupe/)


### 회고
비동기에 대해 학습하여 크게나마 자바스크립트 실행 순서를 이해 할수 있게 되었다.

이전에 작업하면서 DB 내용을 제대로 불러왔는데 화면에는 나타나지 않았었던 기억이 있다.

 그 당시에는 오류도 안나오고 문제도 없어보여 많이 꽁꽁 싸매다가 비록 시간이 걸리더라도 ajax 코드를 동기적으로 바꾸어서 해결하였는데..

 이 내용을 알고 있었다면 더욱 해결하기 쉽지 않았을까..