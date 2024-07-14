### next14

* app-routhing
  * <code>app</code> 디렉토리 안에 <code>page.tsx</code> 파일을 통해 사용자가 볼 수 있는 실제화면이 구성됨
* CSR * SSR
  * <code>use client</code> react에서 사용하는 훅을 사용하기 위해서는 <code>use client</code>를 파일 상단에 명시해줘야한다.
  * <code>use client</code>는 무조건 client에서 동작한다는 의미가 아니고 <code>hydrate</code>가 된다는 의미
* hydrate
  * SSR은 기본적으로 자바스크립트가 없어도 dummy html을 통해 기본적인 랜더링은 됨
  * 수분을 공급한다는 의미로써 react가 dummy html에 연결되는 과정을 말함.
* layout
  * 각 디렉토리에 만들 수 있으면 상위폴더의 layout은 충첩되어 적용됨