### next14

* app-routing
  * <code>app</code> 디렉토리 안에 <code>page.tsx</code> 파일을 통해 사용자가 볼 수 있는 실제화면이 구성됨
* CSR * SSR
  * <code>use client</code> react에서 사용하는 훅을 사용하기 위해서는 <code>use client</code>를 파일 상단에 명시해줘야한다.
  * <code>use client</code>는 무조건 client에서 동작한다는 의미가 아니고 <code>hydrate</code>가 된다는 의미
  * client component 안에 server component는 불가 하지만 그 반대의 경우는 가능하다.
* hydrate
  * SSR은 기본적으로 자바스크립트가 없어도 dummy html을 통해 기본적인 랜더링은 됨
  * 수분을 공급한다는 의미로써 react가 dummy html에 연결되는 과정을 말함.
* layout
  * 각 디렉토리에 만들 수 있으면 상위폴더의 layout은 충첩되어 적용됨
* not-found.tsx
  * 존재 하지 않은 url에 대한 페이지를 랜더링하는 기본적인 컴포넌트 
* routing group
  * 디렉토리명 () 을 사용시 실제 url에 영향을 미치지 않아 같은 분류의 디렉토리를 모아 파일을 정리 할 수 있음
* metaData
  ```javascript
  // root layout
  export const metadata: Metadata = {
  title: {
    template: "%s | next.js",
    default: "Loading...",
  },
  description: "Generated by Next.js",
  
  // main page
  export const metadata = {
  title: "Home",
  };
  ```
  * 이스케이프문에 다른페이지 값이 적용되어짐, c언어의 프린트와 유사함.

* Dynamic Routes 
  * [id] 대괄호를 사용하여 동적 라우팅 가능
  * 컴포넌트에서 props로 url에 대한 정보를 받아 올 수 있음
  
* loading.tsx
  * data fetch 중에 응답이 오기전까지 대신 보여질 ui 컴포넌트

* promise all
  * await은 비동기 작업을 하는 동안 기다리는 명령어
  * await 동작시 후에 작성된 코드는 await이 종료될때 가지 기다림
  * 따라서 promise all을 사용하여 병렬적으로 동작하게 만듬
  
* suspense
  * suspense 를 사용하여 각각 컴포넌트 별로 fetch받아 오는것을 따로 병렬적으로 가능함
  ```javascript
  <Suspense fallback>
  // fallback 속성에 fetch중에 나타날 컴포넌트를 render 할 수 있음
  </Suspense>
  ```