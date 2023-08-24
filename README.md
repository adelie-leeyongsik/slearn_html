# SEOUL LEARN(서울형 교육플랫폼)

## 📌 개요

- 프로젝트 진행에 있어서, 최소한의 룰을 규정하기 위해 존재하는 문서입니다.
- 피드백 환영합니다. 불편하거나 더 좋은 대안이 있으면 언제든 제안해주세요.
- 이 문서는 완벽하지 않습니다. 하지만 계속해서 정립해 나갑니다.

## 📌 기본 환경

- **Node >= 16**
- **Vue3**: Composition API, setup() syntax [🔗](https://vuejs.org/)
- **Nuxt3**: SPA, SSG, SSR 빌드 제공 [🔗](https://nuxt.com/blog/v3)
- **Pinia**: 기존 vuex의 많은 문제점들을 개선하고 용법이 간단하고 직관적. [🔗](https://pinia.vuejs.org/)

## 📌 NPM 명령어

- **npm run dev**: PUB 모드로 로컬 서버 시작
- **npm run d**: DEV 모드로 로컬 서버 시작
- **npm run build**: SPA 모드로 빌드
- **npm run preview**: 빌드된 파일로 로컬 서버 시작

## 📌 파일 구조

```
root
│
├── app.vue
│
├── pages
│   ├── sample-page / index.vue
│   └── sample-page2
│       ├── index.vue
│       └── _subcomponent.vue
│
├── layouts
│   ├── default.vue
│   ├── account.vue
│   └── mypage.vue
│
├── components
│   ├── header.vue
│   ├── footer.vue
│   └── pub / pagination.vue
│
├── store
│   ├── index.js
│   ├── app.js
│   ├── user.js
│   └── ...
│
├── api
│   ├── index.js
│   ├── getMemberInfo.js
│   ├── doMemberInfo.js
│   └── ...
│
├── middleware
│   ├── router.global.js
│   └── ...
│
├── utils / index.js
│
├── assets
│   ├── images
│   │   ├── sample-image.png
│   │   └── sub-folder / sample-kv.svg
│   └── css
│       └── common.scss, vaiables.scss
│
├── public
│
└── dev
```

- **pages**: 페이지 단위의 컴포넌트가 위치합니다. Nuxt가 pages 폴더 구조에 맞게 자동으로 페이지 라우트를 생성합니다. 라우트의 엔드 포인트는 index.vue 파일로 통일합니다. 해당 페이지에 종속되는 서브컴포넌트는 기본적으로 같은 레벨에 `_subComponent.vue` 형태로 작성하며 index.vue 내에서 상대경로로 임포트해서 사용합니다. 여러개의 하위 라우트에서 필요한 서브컴포넌트는 상위 라우트 폴더에 위치할 수 있으며 이것 역시 상대경로로 임포트해서 사용합니다.

- **layouts**: 페이지 컴포넌트를 wrapping하는 레이아웃 단위의 컴포넌트가 위치합니다. 일반적인 상황에서는 퍼블과 개발소스상 레이아웃 컴포넌트의 차이가 없기 때문에 pub 폴더로 구분하지 않습니다.

- **components**: `components` 폴더 내의 _.vue 파일은 개발 환경 내에 자동으로 임포트되어 `import _ from _`구문을 사용하지 않고 사용이 가능합니다. 퍼블리싱과 개발의 구별이 필요하지 않는 파일의 경우는 폴더 구조에 맞춰 작성하며, 퍼블리싱 전용으로 사용될 컴포넌트는 반드시`pub/_`내에 작성이 필요합니다. 작성한 컴포넌트를 다른 파일 내에서 사용할 때는`파스칼케이스`로 불러오며, 네스팅된 파일은 다음과 같이 사용합니다. `components/pub/pagination.vue`->`<PubPagination />`

- **public**: (현재는 사용하는 케이스가 없습니다. 추후 필요에 따라 작성)

- **dev**: 개발과정에서 필요한 유틸성 파일들이 위치합니다. 특별한 사항이 아니라면 배포에는 dev 하위 요소들이 포함되지 않아야합니다.

- **assets/images/@temp**: 더미 이미지 등 개발 편의를 위해서 필요한 애셋들을 형식에 구애받지 않고 저장하는 폴더. 서비스 오픈전에 이 폴더는 삭제됩니다. 정말 **_임시_**로 넣을 요소들만 이 폴더에 저장해야합니다. 개발 편의성을 위해 네이밍은 자유입니다.

## 📌 이미지 경로 Alias

`tsconfig.ts` 파일에 설정한 JS 기반 alias는 vue 파일 내에서 사용하는 경우 코드 제안과 더불어 개발 모드와 빌드에서 적절하게 동작합니다. 하지만 css 파일은 설정이 불가능하기 때문에 별도 css(scss) 파일에서는 직접 `/assets/images/*` 경로를 지정하여 사용합니다(일관성은 떨어지지만 코드 제안 편의성을 이용하기 위함)

```html
<!-- Vue 파일 템플릿에서 -->
<template>
  <div>
    <!-- /assets/images/sample.png -->
    <img src="@img/sample.png" />
  </div>
</template>
```

---

```html
<!-- Vue 파일 스타일에서 -->
<template>
  <div class="ico">ICON</div>
</template>

<style lang="scss" scoped>
  .ico {
    /* /assets/images/ico.svg */
    background-image: url(@img/ico.svg);
  }
</style>
```

---

```scss
// 별도의 스타일 파일(ex. common.scss)
.ico {
  /* JS 기반 alias 사용 불가 */
  background-image: url(/assets/images/ico.svg);
}
```

## 📌 페이지 레이아웃 설정

```js
<script>
definePageMeta({
  layout: "mypage", // layouts/mypage.vue 레이아웃을 적용
});
</script>
```

## 📌 참고 사항

1. Nuxt 환경의 alias 설정 이슈로 인해서 기존 이미지 애셋 경로인 `public/images` 폴더를 `assets/images` 폴더로 대체했습니다.
2. 기본적으로 Nuxt가 `pages` 폴더 구조에 맞춰 자동으로 라우트를 생성하기 때문에, 퍼블에서도 가능하면 서브 폴더는 URL 친화적일 수 있도록 `케밥케이스`로 작성 부탁드립니다(기존 작업된 파일명은 수정하지 않았습니다)
3. Nuxt가 실시간으로 작성/수정하는 파일을 탐지하여 개발 환경에 맞도록 런타임 빌드를 합니다. 이 특징으로 인해서 가끔 싱크가 맞지 않을 때 오류가 발생하기도 하니, 이런 경우는 로컬 서버를 껐다 켜면 정상적으로 작동할 수 있습니다.

## 📌 개발툴

### 대시보드

f키 토글, 마지막 선택 페이지 하이라이트, 스크롤 유지

### 컴포넌트 리스트

c키 토글(DEV 모드 전용)

(계속 작성중...)
