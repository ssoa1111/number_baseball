# 숫자야구 만들기
자바스크립트를 이용한 숫자 야구 만들기
[만드는 과정 BLOG에서 확인하기](https://flowerofashes.tistory.com/43)

## Array()
원하는 배열 길이의 배열을 만들 수 있습니다.

## fill()
배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
>fill(값, 시작위치(생략가능), 끝위치(생략가능))

## map()
배열이나 객체의 모든 값에 대해 조회하고 return합니다.

## Math.random()
0.0~0.9의 값을 무작위로 얻을 수 있습니다.
원하는 범위를 도출 후 최소값이 1일 경우에는 보정 전 무작위의 값 중에 0.0x의 값이 있기 때문에 +1을 해주어야 합니다.

## Math.floor()
내림 값을 적용합니다.

## push()
값을 배열의 맨 뒤에 할당합니다.

## splice()
배열의 위치를 선택하여 삭제하거나 값을 대체/추가합니다.
>splice(위치, 삭제개수, 대체/추가항목)

## new Set()
()의 내용 중 중복되는 내용을 제외한 내용을 반환합니다.
>new Set().size로 내용의 길이를 알 수 있습니다.

## includes()
()의 값이 포함되어 있으면 true, 없으면 false를 반환합니다.
