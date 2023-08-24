<template>
  <div class="guide">
    <h1 class="c-text-title-lg">Styleguide</h1>
    <!-- <div class="guide__body">
      <h2 class="c-text-title-md">Color</h2>
      <ul class="guide-color__list">
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div style="background-color: #111"></div>
            </dt>
            <dd>
              <div class="c-text"><strong>$black</strong></div>
              <div class="c-text-sub">#111</div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="guide__body">
      <h2 class="c-text-title-md">Title</h2>
      <ul class="guide-title__list">
        <li>
          <dl>
            <dt>
              <div class="c-text-title-lg">타이틀_대</div>
            </dt>
            <dd>
              <div class="c-text">class="c-text-title-lg"</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div class="c-text-title-md">타이틀_중</div>
            </dt>
            <dd>
              <div class="c-text">class="c-text-title-md"</div>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              <div class="c-text-title-sm">타이틀_소</div>
            </dt>
            <dd>
              <div class="c-text">class="c-text-title-sm"</div>
            </dd>
          </dl>
        </li>
      </ul>
    </div> -->
    <div class="guide__body">
      <h2 class="c-text-title-md">Component</h2>
      <h3 class="c-text-title-sm">form title</h3>
      <ul class="guide__list">
        <li>
          <p>class="c-form-label"</p>
          <label class="c-form-label" data-v-a68c0990="">form title</label>
        </li>
      </ul>
      <h3 class="c-text-title-sm">input text</h3>
      <ul class="guide__list">
        <li>
          <p>1. 기본</p>
          <input type="text" class="c-form-control" />
        </li>
        <li>
          <p>2. disabled</p>
          <input type="text" class="c-form-control" disabled />
        </li>
        <li>
          <p>3.button in input</p>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            /><button class="c-btn c-btn-sm c-btn-darkgray">파일 찾기</button>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">checkbox</h3>
      <ul class="guide__list">
        <li>
          <p>1. 기본</p>
          <div class="c-form-check c-form-check--type04">
            <input
              class="c-form-check-input"
              type="checkbox"
              name="check01"
              id="check01"
            /><label class="c-form-check-label" for="check01"></label>
          </div>
        </li>
        <li>
          <p>2. 라벨</p>
          <div class="c-form-check">
            <input
              type="checkbox"
              class="c-form-check-input"
              id="replySecret"
            /><label for="replySecret" class="c-form-check-label">라벨</label>
          </div>
        </li>
        <li>
          <p>3.</p>
          <div class="c-form-group">
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="homelearn"
                checked
              /><label for="homelearn" class="c-form-checkbox-label"
                ><img
                  src="@img/logo-homelearn.png"
                  alt="아이스크림 홈런 로고"
                />
                아이스크림 홈런</label
              >
            </div>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">radio</h3>
      <ul class="guide__list">
        <li>
          <p>1. 기본</p>
          <div class="c-form-check c-form-check--radio">
            <input
              class="c-form-check-input"
              type="radio"
              name="radio"
              id="radio01"
            /><label class="c-form-check-label" for="radio01"> 라디오</label>
          </div>
        </li>
        <li>
          <p>2. col-2</p>
          <div class="c-form-group">
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="authentication"
                  id="phone"
                  value="phone"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="phone"
                  >1</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="authentication"
                  id="email"
                  value="email"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="email"
                  >2</label
                >
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>3. col-3</p>
          <div class="c-form-group">
            <div class="c-form-check-group c-form-check-group--col3">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="memberType"
                  id="memberType1"
                  value="memberType1"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="memberType1"
                  >1</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="memberType"
                  id="memberType2"
                  value="memberType2"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="memberType2"
                  >2</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="memberType"
                  id="memberType3"
                  value="memberType3"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="memberType3"
                  >3</label
                >
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>4. col-5 / disabled</p>
          <div class="c-form-check-group c-form-check-group--col5">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="eventWin"
                id="eventWin01"
                checked
              /><label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventWin01"
                >1</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="eventWin"
                id="eventWin02"
              /><label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventWin02"
                >2</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="eventWin"
                id="eventWin03"
              /><label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventWin03"
                >3</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="eventWin"
                id="eventWin04"
                disabled
              /><label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventWin04"
                >4</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="eventWin"
                id="eventWin05"
                disabled
              /><label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventWin05"
                >5</label
              >
            </div>
          </div>
        </li>
        <li>
          <p>5. 회원구분</p>
          <div class="c-form-group">
            <div class="c-form-check-group c-form-check-group--14">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="age"
                  id="upper"
                  value="upper"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="upper"
                  ><p>
                    <strong>일반 회원</strong><br />
                    (만 14세 이상)
                  </p></label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="age"
                  id="under"
                  value="under"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="under"
                  ><p>
                    <strong>어린이 회원</strong><br />
                    (만 14세 미만)
                  </p></label
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">select</h3>
      <ul class="guide__list">
        <li>
          <select class="c-form-control">
            <option>응모한 이벤트</option>
            <option>당첨된 이벤트</option>
          </select>
        </li>
      </ul>
      <h3 class="c-text-title-sm">search</h3>
      <ul class="guide__list">
        <li>
          <div class="c-form-group c-form-group--search">
            <div
              class="c-form-check-group c-form-check-group--col4 c-form-check-group-month"
            >
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="searchMonth"
                  id="searchMonth01"
                  checked
                  title="1개월"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="searchMonth01"
                  >1개월</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="searchMonth"
                  id="searchMonth02"
                  title="3개월"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="searchMonth02"
                  >3개월</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="searchMonth"
                  id="searchMonth03"
                  title="6개월"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="searchMonth03"
                  >6개월</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="searchMonth"
                  id="searchMonth04"
                  title="1년"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="searchMonth04"
                  >1년</label
                >
              </div>
            </div>
            <div class="c-input-group c-input-group--calendar">
              <div>
                <input
                  class="c-input-calendar"
                  readonly
                  title="기간별 조회 시작"
                />
                <div
                  class="vc-popover-content-wrapper"
                  placement="bottom-start"
                >
                  <!---->
                </div>
              </div>
              <span>~</span>
              <div>
                <input
                  class="c-input-calendar"
                  readonly
                  title="기간별 조회 끝"
                />
                <div
                  class="vc-popover-content-wrapper"
                  placement="bottom-start"
                >
                  <!---->
                </div>
              </div>
            </div>
            <button class="c-btn">조회</button>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">file</h3>
      <ul class="guide__list">
        <li>
          <div class="c-form-group">
            <label for="file" class="c-form-label">증빙자료 첨부</label>
            <div class="c-input-group">
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일 첨부해주세요."
              /><button class="c-btn c-btn-sm c-btn-darkgray">파일 찾기</button>
            </div>
            <div class="c-form-file">
              <a href="">1.pdf</a
              ><button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
            <div class="c-form-file">
              <a href=""
                >11111111111111111111111111111111111111111111111111111111111111111111111111111111.pdf</a
              ><button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">rrn</h3>
      <ul class="guide__list">
        <li>
          <div class="c-form-group">
            <div class="c-input-group">
              <input
                id="rrn"
                class="c-form-control"
                type="text"
                placeholder="주민번호 앞 6자리"
                maxlength="6"
                required
              />
              -
              <input
                id="rrn02"
                class="c-form-control"
                type="password"
                placeholder="주민번호 뒤 7자리"
                maxlength="7"
                required
              /><button class="c-btn c-btn-sm c-btn-darkgray">
                주민번호 조회
              </button>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">email</h3>
      <ul class="guide__list">
        <li>
          <div class="c-input-group c-input-group--email">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="이메일 주소"
              title="이메일주소 입력"
            /><select
              name=""
              id=""
              title="이메일 도메인 입력"
              class="c-form-control"
            >
              <option value="">직접입력</option>
            </select>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">textarea</h3>
      <ul>
        <li>
          <textarea
            class="c-form-control"
            placeholder="댓글을 남겨 볼까요? (최대 300글자)"
          ></textarea>
        </li>
      </ul>
      <h3 class="c-text-title-sm">button</h3>
      <ul class="guide__list">
        <li>
          <p>1. 기본 class="c-btn"</p>
          <button class="c-btn">텍스트</button>
        </li>
        <li>
          <p>2. 스몰 class="c-btn c-btn-sm"</p>
          <button class="c-btn c-btn-sm">텍스트</button>
        </li>
        <li>
          <p>3. 라지 class="c-btn c-btn-lg"</p>
          <button class="c-btn c-btn-lg">텍스트</button>
        </li>
        <li>
          <p>3. 취소, 이전페이지 class="c-btn c-btn-darkgray"</p>
          <button class="c-btn c-btn-darkgray">텍스트</button>
        </li>
        <li>
          <p>4. 비활성화 class="c-btn c-btn-inactive"</p>
          <button class="c-btn c-btn-inactive">텍스트</button>
        </li>
        <li>
          <p>6. 넓이100% class="c-btn c-btn-block"</p>
          <button class="c-btn c-btn-block">텍스트</button>
        </li>
      </ul>
      <h3 class="c-text-title-sm">pagination</h3>
      <ul>
        <li>
          <div class="c-pagination">
            <ul>
              <li class="c-pagination__item">
                <a
                  href=""
                  class="c-pagination__item-link c-pagination__item-link--first"
                >
                  처음으로</a
                >
              </li>
              <li class="c-pagination__item">
                <a
                  href=""
                  class="c-pagination__item-link c-pagination__item-link--prev"
                  >이전</a
                >
              </li>
              <li class="c-pagination__item active">
                <a href="" class="c-pagination__item-link">1</a>
              </li>
              <li class="c-pagination__item">
                <a href="" class="c-pagination__item-link">2</a>
              </li>
              <li class="c-pagination__item">
                <a href="" class="c-pagination__item-link">3</a>
              </li>
              <li class="c-pagination__item">
                <a href="" class="c-pagination__item-link">4</a>
              </li>
              <li class="c-pagination__item">
                <a href="" class="c-pagination__item-link">5</a>
              </li>
              <li class="c-pagination__item">
                <a
                  href=""
                  class="c-pagination__item-link c-pagination__item-link--next"
                  >다음</a
                >
              </li>
              <li class="c-pagination__item">
                <a
                  href=""
                  class="c-pagination__item-link c-pagination__item-link--last"
                  >마지막으로</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <h3 class="c-text-title-sm">badge</h3>
      <ul class="guide__list">
        <li>
          <p>1. 기본 c-badge</p>
          <div class="c-badge">
            <p>벳지</p>
          </div>
        </li>
        <li>
          <p>2. 색변경 c-badge-lg c-badge-light</p>
          <div class="c-badge c-badge-light">
            <p>벳지</p>
          </div>
        </li>
        <li>
          <p>3. 라지 c-badge-lg</p>
          <div class="c-badge c-badge-lg">
            <p>벳지</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide {
  width: 64rem;
  margin: 0 auto;
  padding: 2rem 3rem 12rem;
  background-color: $white;
  @include mobile {
    width: auto;
  }
  h1.c-text-title-lg {
    margin-bottom: 3rem;
  }
  h2.c-text-title-md {
    margin-bottom: 2rem;
    padding-bottom: 1.2rem;
    border-bottom: 0.1rem solid $gray;
    font-size: 2rem;
  }
  h3.c-text-title-sm {
    margin-bottom: 1.6rem;
  }
  &__list {
    li {
      > p {
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
    }
    li + li {
      margin-top: 1.6rem;
    }
  }
  ul + h3.c-text-title-sm {
    margin-top: 4rem;
  }
}
</style>
