<script setup>
definePageMeta({
  layout: "mypage",
});
</script>

<script>
export default {
  data() {
    return {
      accordion01: true,
      accordion02: false,
      accordion03: false,
    };
  },
};
</script>

<template>
  <div class="mypage">
    <div class="mypage-report">
      <PubTitle
        title="서울런 AI 학습추천"
        sub="학습도, 자기개발도 이제 찾아보는 것은 그만! 선택한 방식에 따라 알아서 찾아주는 AI 서울런의 관심추천 서비스로 한번에 알아보세요!"
      />
      <div class="mypage-Al">
        <div class="mypage-Al__inner">
          <div class="mypage-Al__title">
            <div class="mypage-Al__title-cont">
              <div class="c-text-title-lg">
                스스로 공부할 수 있는 습관을<br />
                키울 수 있도록 도와드립니다
              </div>
              <p>
                맞춤학습 추천에 필요한
                <span class="c-text-blue">학습자 기본정보</span>와
                <span class="c-text-blue">학습이력</span>을<br />
                <span class="c-text-blue">집중 분석</span>하여 학습자에게
                <span class="c-text-blue">만족도 높은 강좌</span>를
                <span class="c-text-blue">추천</span>합니다
              </p>
            </div>
            <div class="mypage-Al__title-img">
              <img
                src="@img/pic-ai-title-img.svg"
                alt="서울런 AI 학습추천 타이틀 이미지"
              />
            </div>
          </div>
          <div class="c-accordion custom">
            <dl
              class="c-accordion-item"
              :class="{ active: accordion01 === true }"
            >
              <dt @click="accordion01 = !accordion01">
                <a href="javascript:void(0)">
                  서울런 회원들을 위한 학습모델을 설계합니다.
                </a>
              </dt>
              <dd>
                <div class="c-flex">
                  <div class="c-accordion-box">
                    <div class="c-text-title-sm c-text-primary">
                      학습 과목 정보 표준화 모델
                    </div>
                    <div class="c-text-title-sub">
                      (SIS, Subject Information Standardization Model)
                    </div>
                    <p>
                      서로다른 학습사이트의 강좌 정보를<br />
                      현행 교육과정에 맞추어 텍스트마이닝과 지도학습<br />
                      알고리즘을 활용하여 표준화하는 모델링 기법
                    </p>
                  </div>
                  <div class="c-accordion-box">
                    <div class="c-text-title-sm c-text-primary">
                      학습 과목 영역 추천 모델
                    </div>
                    <div class="c-text-title-sub">
                      (SAR, Subject Area Recommendation Model)
                    </div>
                    <p>
                      서울런 회원들의 학습이력을 기반으로<br />
                      현행화된 과목에 대한 지표를 생성하고 지속적으로<br />
                      학습할 수 있는 최적의 과목을 추천해주는 모델링 기법
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion02 === true }"
            >
              <dt @click="accordion02 = !accordion02">
                <a href="javascript:void(0)"
                  >나의 학습 데이터 분석으로 스스로 공부할 수 있는 나만의 맞춤
                  강좌를 추천합니다.</a
                >
              </dt>
              <dd>
                <div class="c-flex">
                  <div class="c-accordion-box">
                    <div class="c-text-title-sm c-text-primary">
                      서울런 학습 지속도
                    </div>
                    <div class="c-text-title-sub">
                      (Seoul learn Learning Continuity)
                    </div>
                    <p>
                      학습자가 어떤 학습패턴으로 학습에 참여하고 있는지를<br />
                      측정하여 과목별 완강 가능성을 평가하기 위한 지표로 활용
                    </p>
                  </div>
                  <div class="c-accordion-box">
                    <div class="c-text-title-sm c-text-primary">
                      서울런 학습 고착도
                    </div>
                    <div class="c-text-title-sub">
                      (Seoul learn Learning Stickiness)
                    </div>
                    <p>
                      학습자가 서울런 사이트에 지속적으로 관심을 가지는가에<br />
                      대한 지표로 학습자별 서울런 활용도를 측정하는 지표로 활용
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion03 === true }"
            >
              <dt @click="accordion03 = !accordion03">
                <a href="javascript:void(0)">
                  학습자와 유사도가 높은 선행학습자의 데이터를 기반으로
                  추천합니다.
                </a>
              </dt>
              <dd>
                <ul>
                  <li>
                    동일한 학습 패턴 그룹의 선호 콘텐츠를 조합한 학습 콘텐츠를
                    추천
                  </li>
                  <li>
                    <strong>
                      학습이력에 따라 새로운 서울런 학습자 군집화(CRL, Cluster
                      Seoul learn Learners)
                    </strong>
                    형성하여 진행
                  </li>
                </ul>
                <div class="c-accordion-img">
                  <img src="@img/pic-ai-img.svg" alt="추천 알고리즘 이미지" />
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="mypage__wrap">
        <!-- 230801 w-100 클래스 추가 -->
        <div class="mypage__contents-body w-100">
          <div class="mypage__report">
            <div class="mypage__report-box--title">
              <div class="mypage__report-title--sub">
                현재 학습중인 수강<br class="c-mo" />
                내역이에요<br class="c-mo" />
                <span>(최근 3개까지 노출됩니다.)</span>
              </div>
              <a href="#;" class="mypage__report-link">
                전체 이력보기
                <i class="ico ico-arrow">더보기</i>
              </a>
            </div>
            <div class="mypage__report-list">
              <PubNodata
                :nodata="'현재 학습중인 수강 내역이 없습니다'"
              ></PubNodata>
              <div class="c-card--inline c-card--inline-col3">
                <div class="c-card c-card--border c-card--custom">
                  <div class="c-card-logo">
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                  </div>
                  <div class="c-card-body">
                    <dl class="c-card-info">
                      <dt>수강 기간</dt>
                      <dd>2023.03.01~2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>최근 수강일</dt>
                      <dd>2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>진도율</dt>
                      <dd class="c-card-foot-progress">
                        <div class="c-progress">
                          <div class="c-progress-bar" style="width: 80%"></div>
                        </div>
                        <strong class="c-text-primary">80%</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="c-card c-card--border c-card--custom">
                  <div class="c-card-logo">
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                  </div>
                  <div class="c-card-body">
                    <dl class="c-card-info">
                      <dt>수강 기간</dt>
                      <dd>2023.03.01~2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>최근 수강일</dt>
                      <dd>2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>진도율</dt>
                      <dd class="c-card-foot-progress">
                        <div class="c-progress">
                          <div class="c-progress-bar" style="width: 80%"></div>
                        </div>
                        <strong class="c-text-primary">80%</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="c-card c-card--border c-card--custom">
                  <div class="c-card-logo">
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                  </div>
                  <div class="c-card-body">
                    <dl class="c-card-info">
                      <dt>수강 기간</dt>
                      <dd>2023.03.01~2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>최근 수강일</dt>
                      <dd>2023.03.25</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>진도율</dt>
                      <dd class="c-card-foot-progress">
                        <div class="c-progress">
                          <div class="c-progress-bar" style="width: 80%"></div>
                        </div>
                        <strong class="c-text-primary">80%</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div class="mypage__report-box--title">
              <div class="mypage__report-title--sub">
                <strong class="c-text-blue">‘메가스터디’</strong>
                에서<br class="c-mo" />
                학습기반으로<br class="c-mo" />
                맞춤형 강좌를 찾았어요
              </div>
              <a href="#;" class="mypage__report-link">
                더 알아보기
                <i class="ico ico-arrow">더보기</i>
              </a>
            </div>
            <div class="mypage__report-list">
              <PubNodata
                :nodata="'현재 학습중인 수강 내역이 없습니다'"
              ></PubNodata>
              <div class="c-card--inline c-card--inline-col3">
                <div class="c-card c-card--border">
                  <div class="c-card-logo">
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>중학과정</span>
                      <span>수학</span>
                      <span>기초1</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
                <div class="c-card c-card--border">
                  <div class="c-card-logo">
                    <!-- a태그 p태그로 변경 -->
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>중학과정</span>
                      <span>수학</span>
                      <span>기초1</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
                <div class="c-card c-card--border">
                  <div class="c-card-logo">
                    <p>
                      <img src="@img/logo-report-mega2.png" alt="mega" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          현우진의 국어 독해 특강 현우진의 국어 독해 특강
                          현우진의 국어 독해 특강
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>중학과정</span>
                      <span>국어</span>
                      <span>기초1</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mypage__report-box--title">
              <div class="mypage__report-title--sub">
                <strong class="c-text-blue">‘윌라’</strong>
                에서 좋아할 만한<br class="c-mo" />
                콘텐츠를 찾았어요
              </div>
              <a href="#;" class="mypage__report-link">
                더 알아보기
                <i class="ico ico-arrow">더보기</i>
              </a>
            </div>
            <div class="mypage__report-list">
              <PubNodata
                :nodata="'현재 학습중인 수강 내역이 없습니다'"
              ></PubNodata>
              <div class="c-card--inline c-card--inline-col3">
                <div class="c-card c-card--border">
                  <div class="c-card-img">
                    <p>
                      <img src="@img/@temp/1.jpg" alt="" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>김철수 선생님</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
                <div class="c-card c-card--border">
                  <div class="c-card-img">
                    <p>
                      <img src="@img/@temp/1.jpg" alt="" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <!-- a 태그 p태그로 변경 -->
                      <a href="">
                        <strong>
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>김철수 선생님</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
                <div class="c-card c-card--border">
                  <div class="c-card-img">
                    <p>
                      <img src="@img/@temp/1.jpg" alt="" />
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a href="">
                        <strong>
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                          9급 공무원(특성화고) 기본 9급 공무원(특성화고) 기본
                        </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>김철수 선생님</span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>총 40차시, 380분</p>
                      <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
                        <i class="ico ico-copy">복사</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c {
  &-accordion {
    dl {
      background-color: $white;
      & + dl {
        margin-top: 3.2rem;
      }
    }
    &-item {
      border: 0.1rem solid #dddddd;
      box-shadow: 0.4rem 0.8rem 1.6rem 0 rgba($black, 0.04);
      border-radius: 1.6rem;
      & + .c-accordion-item {
        margin-top: 3.2rem;
      }
      dt {
        position: relative;
        line-height: 1.4;
        font-size: 2.8rem;
        font-weight: bold;
        color: $black;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          width: 2rem;
          height: 2rem;
          top: 50%;
          right: 4.8rem;
          margin-top: -1.6rem;
          border: 0.4rem solid $black;
          border-width: 0 0.3rem 0.3rem 0;
          transform: rotate(45deg);
        }
        a {
          display: block;
          color: $black;
          padding: 4.8rem 9.6rem 4.8rem 4.8rem;
        }
      }
      dd {
        display: none;
        position: relative;
        padding: 4rem;
        border-radius: 1.6rem;
        background-color: #fafafa;
        font-size: 2rem;
        line-height: 1.6;
      }
      ul {
        li {
          position: relative;
          padding-left: 1rem;
          line-height: 1.7;
          font-size: 1.8rem;
          font-weight: 400;
          color: $black;
          &::before {
            content: "";
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: $black;
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -0.15rem;
          }
          strong {
            font-weight: 700;
          }
        }
        & + .c-accordion-img {
          margin-top: 3rem;
        }
      }
      &.active {
        dt {
          &::before {
            transform: rotate(-135deg);
            margin-top: -0.4rem;
          }
          a {
            padding-bottom: 4rem;
          }
        }
        dd {
          display: block;
          margin: 0 4.8rem 4.8rem;
        }
      }
    }
    &-box {
      width: 100%;
      .c {
        &-text {
          &-title {
            &-sm {
              line-height: 1.2;
              font-size: 2.4rem;
              font-weight: 700;
              color: #ff5c01;
            }
            &-sub {
              padding-top: 1.2rem;
              margin: 0;
              line-height: 1.2;
              font-size: 1.8rem;
              font-weight: 400;
              color: #535353;
              text-align: left;
              & + p {
                padding-top: 2.4rem;
              }
            }
          }
        }
      }
    }
    &-img {
      border-radius: 1.2rem;
      background-color: $white;
      overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .c-btn {
      padding: 0 2.4rem;
    }
    &.custom {
      .c {
        &-accordion {
          &-item {
            & + .c-accordion-item {
              margin-top: 2.4rem;
            }
            dt {
              font-size: 2rem;
              &::before {
                content: "";
                position: absolute;
                width: 1.4rem;
                height: 1.4rem;
                top: 50%;
                right: 4rem;
                margin-top: -0.9rem;
                border: 0.4rem solid $black;
                border-width: 0 0.3rem 0.3rem 0;
                transform: rotate(45deg);
              }
              a {
                padding: 4rem 8rem 4rem 4rem;
                font-weight: 700;
              }
            }
            dd {
              font-size: 1.8rem;
            }
            &.active {
              dt {
                &::before {
                  margin-top: -1.3rem;
                  transform: rotate(-135deg);
                  margin-top: -0.4rem;
                }
                a {
                  padding-bottom: 4rem;
                }
              }
              dd {
                margin: 0 4rem 4rem;
                padding: 4rem;
              }
            }
          }
        }
      }
    }
    @include mobile {
      dl {
        & + dl {
          margin-top: 3.2rem;
        }
      }
      &-item {
        & + .c-accordion-item {
          margin-top: 3.2rem;
        }
        dt {
          a {
            font-size: 2.8rem;
            padding: 2.8rem 7rem 2.8rem 3rem;
            letter-spacing: -0.5px;
          }
          &::before {
            margin-top: -0.9rem;
            right: 3rem;
            width: 1.6rem;
            height: 1.6rem;
            border-width: 0 0.3rem 0.3rem 0;
          }
        }
        dd {
          word-break: break-all;
          font-size: 2rem;
          padding: 3rem;
          a {
            word-break: break-all;
          }
        }
        &.active {
          dt {
            a {
              padding: 4.8rem 7rem 4.8rem 3rem;
            }
          }
          dd {
            margin: 0 3rem 3rem;
          }
        }
      }
      &.custom {
        .c {
          &-accordion {
            &-item {
              & + .c-accordion-item {
                margin-top: 2.4rem;
              }
              dt {
                a {
                  padding: 3rem 7rem 3rem 2.4rem;
                  font-size: 2rem;
                }
                &::before {
                  margin-top: -0.9rem;
                  right: 2.4rem;
                  width: 1.2rem;
                  height: 1.2rem;
                  margin-top: -0.7rem;
                  border-width: 0 0.2rem 0.2rem 0;
                }
              }
              dd {
                font-size: 1.8rem;
              }
              &.active {
                dt {
                  a {
                    padding-bottom: 3rem;
                  }
                  &::before {
                    margin-top: -0.4rem;
                  }
                }
                dd {
                  margin: 0 2.4rem 2.4rem;
                  padding: 2.4rem;
                }
              }
            }
            &-box {
              font-size: 1.8rem;
              .c {
                &-text {
                  &-title {
                    &-sm {
                      font-size: 1.8rem;
                    }
                    &-sub {
                      font-size: 1.6rem;
                    }
                  }
                }
              }
            }
          }
          &-flex {
            flex-direction: column;
            .c-accordion-box {
              & + .c-accordion-box {
                margin-top: 4rem;
              }
            }
          }
        }
      }
    }
  }
}
.mypage {
  &__wrap {
    @include mobile {
      padding-top: 6rem;
    }
  }
  &-Al {
    background-color: #f3f3f7;
    padding: 6rem 0 10rem;
    &__inner {
      position: relative;
      width: 120rem;
      margin: 0 auto;
    }
    &__title {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      margin-bottom: -2.5rem;
      &-cont {
        padding-top: 9.5rem;
        font-size: 2rem;
        font-weight: 700;
        .c {
          &-text {
            &-title {
              &-lg {
                line-height: 1.25;
                font-size: 4.8rem;
                font-weight: 800;
                color: $black;
                & + p {
                  padding-top: 2rem;
                }
              }
            }
          }
        }
        span {
          color: #0c82e9;
        }
      }
    }
    @include tablet {
      &__inner {
        width: 100%;
        padding: 0 2.4rem;
      }
      &__title {
        flex-direction: column;
        &-cont {
          width: 100%;
          padding-top: 4rem;
          padding-bottom: 1rem;
        }
        &-img {
          width: 100%;
          text-align: right;
          img {
            max-width: 52rem;
          }
        }
      }
    }
    @include mobile {
      &__inner {
        padding: 0 1.6rem;
      }
      &__title {
        &-img {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
