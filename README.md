# 더치페이

회식 자리, 친구 모임 등 더치페이의 효과적인 계산을 도와줍니다.

- 더치페이 설명 : [더치페이]()

- 더치페이 주소 : [더치페이]()

# 사용된 기술

* [Next](https://nextjs.org/) - React based SSR framework used
* [Tailwind CSS](https://tailwindcss.com/) - Main CSS Tool

# 만든 이

* **Choi** - *Full work* - [db970406](https://github.com/db970406)

# 설명 

- 더치페이는 총 세 가지의 챕터로 구성되어 있습니다.

## 1. 총 인원 체크

![](https://images.velog.io/images/db970406/post/c0c6dabd-fdc9-436c-9624-1191c7f7bb1d/1%EC%B4%9D%EC%9D%B8%EC%9B%90.gif)

- 아이콘을 클릭함으로 총 인원을 조절할 수 있습니다.

## 2. 총 금액 기입

![](https://images.velog.io/images/db970406/post/2d3c328c-2f17-4849-84e5-d05056ab6c59/2%EC%B4%9D%EA%B8%88%EC%95%A1.gif)

- 총 지출 금액을 기입하면 하단에 자동적으로 앞서 입력했던 인원 수를 나눠 1인 당 금액을 계산해줍니다!

## 3. 금액 세부사항 정하기

![](https://images.velog.io/images/db970406/post/5a75aa06-fb6a-4f69-9ba4-3206a931bd82/3%EA%B8%88%EC%95%A1%EC%B0%A8%EB%93%B1%EC%97%AC%EB%B6%80.gif)

- 더치페이 제작의 이유이자 알파이자 오메가인 마지막 챕터입니다.
- 더치페이 금액이 인원들간 서로 다르지 않다면! 챕터2에서 끝마치셔도 되나 만약 다른 경우를 위해 챕터3이 존재합니다.
- 또 챕터3은 두 가지의 경우로 나뉘는데요!

### ① 돈을 덜내는 인원들간 내야하는 금액이 같은 경우

![](https://images.velog.io/images/db970406/post/aebce54c-49b3-4587-bd43-821b3eb0a141/4%EC%B0%A8%EB%93%B1%EA%B8%88%EC%95%A1%EA%B0%99%EC%9D%80%EA%B2%BD%EC%9A%B0.gif)

- 만약 총 6명 중 돈을 덜내도 되는 인원이 3명이고 그 3명이 내야하는 금액이 같은 경우입니다.
- 덜 내도 되는 인원들은 따로 (노란색) 하단 바를 만들어 그들이 내야하는 금액을 표시하였습니다.

### ② 돈을 덜내는 인원들간 내야하는 금액이 다른 경우

![](https://images.velog.io/images/db970406/post/e07bacb3-266d-4678-bf42-a65b9193a727/5%EC%B0%A8%EB%93%B1%EA%B8%88%EC%95%A1%EB%8B%A4%EB%A5%B8%EA%B2%BD%EC%9A%B0.gif)

- 만약 총 6명 중 돈을 덜내도 되는 인원이 3명이고 그 3명이 내야하는 금액이 서로 다른 경우입니다.
- 덜 내도 되는 인원들끼리도 서로 금액이 다른 경우이므로 입력칸 밑에 각자 내야하는 금액을 표시하였습니다.