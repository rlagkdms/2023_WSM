선택자

# style 적용 3가지 방법

1. <...style="">in HTML
2. `<style>...</style>` in HTML `<head>`
3. \*\__.css 파일 만들어서 link_

# 형식

```css
selector {
  attribute: value; /*comment*/
}
```

## selector

<pre>
/*시험 (중요!!!)*/
  *: 전체적용
  id(#) :  id는 한번만 사용 가능 : 주어진 값을 class 속성값으로 가진 html요소를 찾는다. 
  class(.) : 여러 번 사용 가능(분류할 때 사용)
  Tag : html 태그 이름으로 사용

TAG
  선택자 : 선택을 통해 특정 요소들을 선택하여 스타일을 적용하는 것
  selector1 selector2 : selector1요소의 자손 selector2 선택
  selector1 > selector2 : selector요소의 자식은 selector2요소를 선택
  selector1, selector2 : 여러개 선택
  selector1 + selector2 : selector1의 첫쨰 자매 selector2 하나 선택
  (selector1바로 옆에 selector2가 있으면 !! selector2!!를 선택함 )
  selector1~selector2 : selectore1요소가 앞에 존재하면 selector2 요소를 선택함. 
  selector1의 자매 중 모든 selector2 선택
  selector:first-child() : selector 중 첫번째 요소 선택(자식은 아님)
  selector:nth-child(): 형제 요소 중에서 특정 순서에 있는 요소를 선택할 때 사용
  selector:hover 요소의 마우스가 올라가는 동안 selector를 선택

  [속성="값"]			<...TAG 속성="값">인 모든 요소 선택
</pre>

# selector 우선순위

1. !important : 중요한
2. #id
3. class
4. TAG
5. \*

- 구체 > 포괄
- 같은 우선순위일 때, 나중에 쓴 게 적용
