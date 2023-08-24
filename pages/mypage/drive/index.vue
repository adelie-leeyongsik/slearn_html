<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import UploadModal from "./_uploadModal.vue";
import { useModalStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "mypage",
});

const modal = useModalStore();
const fileUpload = ref();

const d = reactive({
  titleDesc: "",
  sort: "fileSize",
  masterFilter: false,
  checkData: [],
  data: {
    driver: {},
    myfiles: [],
  },
  uploadModal: null,
  fileInfo: {},
});

onMounted(() => {
  getData();
  getBoardInfo();
});

const getBoardInfo = async () => {
  d.fileInfo = await uGetBoardInfo("drive");

  const fileExtArr = d.fileInfo.attaFileUseExt.split(",");

  if (fileExtArr.length > 7) {
    const halfLength = Math.floor(fileExtArr.length / 2);
    const arr1 = fileExtArr.slice(0, halfLength);
    const arr2 = fileExtArr.slice(halfLength, fileExtArr.length);

    d.titleDesc = `필요한 파일은 언제 어디서나 올리고 다운받으세요.<br/>${arr1}<br/>${arr2} 형식으로 최대 10MB 첨부 가능`;
  } else {
    d.titleDesc = `필요한 파일은 언제 어디서나 올리고 다운받으세요.<br/>${d.fileInfo.attaFileUseExt}>형식으로 최대 10MB 첨부 가능`;
  }
};

const getIconName = (ext) => {
  //   동영상 - mp4, avi, .mov
  // 문서 - doc, docx, ppt, pptx, xls, xlsx, pdf, hwp, txt
  // 이미지 - gif, jpg, jpeg, png, bmp
  // 압축파일 - zip
  // 기타 - 나머지 모두

  console.log(ext);
  let icon = "etc";

  switch (ext) {
    case "mp4":
    case "avi":
    case "mov":
      icon = "vod";
      break;
    case "doc":
    case "docx":
    case "ppt":
    case "pptx":
    case "xls":
    case "xlsx":
    case "pdf":
    case "hwp":
    case "txt":
      icon = "doc";
      break;
    case "gif":
    case "jpg":
    case "jpeg":
    case "png":
    case "bmp":
      icon = "pic";
      break;
    case "zip":
      icon = "zip";
      break;
  }

  return icon;
};

const checkFileValidation = (f) => {
  try {
    //mb 로 변환해서 계산
    let fileSize = f.target.files[0].size / (1024 * 1024); // byte to mb
    let maxSize = d.fileInfo.attaFileMaxSize; //mb
    let unusedSize = uConvertKbToMb(d.data.driver.unusedSize); // kb to mb

    console.log("fileSize>>>>", fileSize);
    console.log("maxSize>>>>", maxSize);

    if (fileSize > maxSize) {
      modal.alert(
        "알림",
        `첨부파일 사이즈는 ${d.fileInfo.attaFileMaxSize}MB 이내로 등록 가능합니다.`
      );
      return false;
    }

    if (fileSize > unusedSize) {
      modal.alert(
        "알림",
        "파일 사용용량이 가득 찼습니다. <br/>파일 정리 후 다시 시도해주시길 바랍니다"
      );
      return false;
    }

    let fileName = f.target.files[0].name;
    let extArr = d.fileInfo.attaFileUseExt.split(",");
    let fileExt = fileName.substr(fileName.lastIndexOf(".") + 1).toUpperCase();

    if (extArr.filter((f) => f === fileExt).length === 0) {
      modal.alert(
        "알림",
        "파일등록이 불가능한 확장자입니다. <br/> 파일을 확인 후 다시 시도해주시길 바랍니다."
      );
      return false;
    }
  } catch (err) {
    console.log("내드라이브 try catch err >>> ", err);
  }

  return true;
};
const handleChangeMasterFilter = (val) => {
  if (val) {
    for (const item in d.data.myfiles) {
      const fileData = d.data.myfiles[item].dvFlSeq;
      if (d.checkData.indexOf(fileData) < 0) {
        d.checkData.push(fileData);
      }
    }
    d.masterFilter = true;
  } else {
    d.checkData = [];
    d.masterFilter = false;
  }
};

const handleChangeFilter = () => {
  if (d.checkData.length == d.data.myfiles.length) {
    d.masterFilter = true;
  } else {
    d.masterFilter = false;
  }
};

const handleClickDelete = async () => {
  if (d.checkData.length <= 0) {
    modal.alert(
      "알림",
      "선택하신 파일이 없습니다. 파일 선택 후 다시 시도해주시길 바랍니다."
    );
    return;
  }
  modal.confirm(
    "알림",
    "파일 삭제시 다시 복구 할 수 없습니다. 삭제하시겠습니까?",
    () => {
      call({
        id: "마이페이지 내 드라이브 파일 삭제",
        endpoint: "/api/sq/mydrive/file",
        method: "delete",
        data: { dvFlSeqList: d.checkData.toString() },
        onResponse({ data }) {
          modal.alert("알림", "파일 삭제가 완료되었습니다.");
          getData();
          getBoardInfo();
          d.checkData = [];
          d.masterFilter = false;

          return true;
        },
      });
    }
  );
};

const onChangeFile = async (e) => {
  let result = checkFileValidation(e);
  if (!result) {
    e.target.value = "";
    return false;
  }

  let file = e.target.files[0];

  const apiResult = await call({
    id: "마이페이지 내 드라이브 파일 업로드 하기",
    endpoint: "/api/sq/mydrive/file",
    headers: "FILE_UPLOAD",
    method: "post",
    data: {
      file: file,
    },
    onResponse({ data, status }) {
      if (status === 200) {
        modal.alert("알림", "파일 업로드가 완료되었습니다.");
        getData();
        getBoardInfo();
      } else {
        modal.alert("알림", "파일 업로드에 실패하였습니다.");
      }
      return true;
    },
  });

  if (!apiResult) {
    modal.alert("알림", "파일 업로드에 실패하였습니다.");
  }
  e.target.value = "";
};
const handleClickDownload = async () => {
  if (d.checkData.length <= 0) {
    modal.alert(
      "알림",
      "선택하신 파일이 없습니다. 파일 선택 후 다시 시도해주시길 바랍니다."
    );
    return;
  } else if (d.checkData.length > 1) {
    modal.alert(
      "알림",
      "파일 다운은 1건씩만 가능합니다. 1건 선택 후 다시 시도해주세요."
    );
    return;
  }
  //uFileDownload(d.checkData[0], "drive");

  await call({
    id: "마이페이지 내 드라이브 파일 다운로드",
    endpoint: "/api/sq/mydrive/file",
    headers: "PUBLIC",
    responseType: "blob",
    data: {
      dvFlSeq: d.checkData[0],
    },
    onResponse({ response, headers }) {
      const blob = new Blob([response]);

      const fileUrl = window.URL.createObjectURL(blob);

      console.log("fileUrl>>", fileUrl);
      const link = document.createElement("a");
      link.href = fileUrl;
      link.style.display = "none";

      const injectFilename = () => {
        const disposition = headers["content-disposition"];
        const fileName = decodeURI(
          disposition
            .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
            .replace(/['"]/g, "")
        );
        return fileName;
      };

      link.download = injectFilename();
      document.body.appendChild(link);
      link.click();
      link.remove();
      return true;
    },
  });
};

const getData = async () => {
  await call({
    id: "마이페이지 내 드라이브 조회",
    endpoint: "/api/sq/mydrive/info",
    data: {
      order: "DESC",
      sort: d.sort,
    },
    onResponse({ data }) {
      console.log("조회데이터 >>", data);

      d.data = data;
      d.data.myfiles.map((e) => {
        const fileSize = uConvertKbToMb(e.fileSize, 1);
        e.fileSize = fileSize < 0 ? `${e.fileSize}KB` : `${fileSize}MB`;
      });

      return true;
    },
  });
};

const onClickFile = () => {
  fileUpload.value.click();
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-drive">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle title="내 드라이브 관리" :desc="d.titleDesc">
              <template v-slot:tail>
                <input
                  v-show="false"
                  id="file"
                  class="c-form-control"
                  type="file"
                  ref="fileUpload"
                  title="파일 첨부"
                  placeholder="파일을 첨부해주세요."
                  @change="onChangeFile"
                />
                <button
                  class="c-btn c-btn-sm c-btn-danger"
                  @click="onClickFile"
                >
                  파일 찾기
                </button>
                <!-- <Button
                  size="auto"
                  sizeType="small"
                  styleType="danger"
                  text="파일 업로드"
                  :onClick="handleClickUpload"
                /> -->
              </template>
            </MypageTitle>
            <UploadModal :modalKey="d.uploadModal" />
          </div>
          <div class="mypage__contents-progress">
            <div class="mypage__contents-progress-head">
              <p>
                1GB 중 {{ uConvertKbToMb(d.data.driver.usedSize) }}MB 사용 중
              </p>
              <span>여유 {{ uConvertKbToMb(d.data.driver.unusedSize) }}MB</span>
            </div>
            <div class="c-progress">
              <span
                class="c-progress-bar"
                :style="{ width: uConvertKbToMb(d.data.driver.usedSize) + '%' }"
              ></span>
            </div>
          </div>

          <div class="mypage__contents-body">
            <div class="mypage__table-wrap">
              <div class="mypage__table-head">
                <div class="c-form-group c-form-group--inline">
                  <Checkbox
                    :modelValue="d.masterFilter"
                    @update:modelValue="handleChangeMasterFilter"
                    text="전체 선택"
                    :textWrap="false"
                  />

                  <div class="c-table__head-select">
                    <span class="c-text-danger">{{ d.checkData.length }}</span
                    >개 선택
                  </div>
                  <ul>
                    <li>
                      <button @click="handleClickDelete">삭제하기</button>
                    </li>
                    <li>
                      <button @click="handleClickDownload">내려받기</button>
                    </li>
                  </ul>
                </div>
              </div>
              <table class="c-table c-table-center">
                <caption>
                  내 드라이브 목록으로 파일이름, 크기, 첨부일자 를 볼 수
                  있습니다.
                </caption>
                <colgroup>
                  <col width="64" />
                  <col />
                  <col width="100" />
                  <col width="140" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">파일 이름</th>
                    <th scope="col">크기</th>
                    <th scope="col">첨부 일자</th>
                  </tr>
                </thead>
                <tbody v-if="d.data.myfiles.length > 0">
                  <tr
                    v-for="item in d.data.myfiles"
                    :class="{ active: d.checkData.indexOf(item) >= 0 }"
                  >
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          :id="`check${item.dvFlSeq}`"
                          :value="item.dvFlSeq"
                          v-model="d.checkData"
                          @change="handleChangeFilter($event)"
                        /><label
                          class="c-form-check-label"
                          :for="`check${item.dvFlSeq}`"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <i :class="`ico ico-${getIconName(item.fileExt)}`"
                          >파일 이미지</i
                        >
                        {{ item.flOriName }}
                      </p>
                    </td>
                    <td>{{ item.fileSize }}</td>
                    <td>{{ uConvertDate(item.updDtm, "YYYY.MM.DD") }}</td>
                  </tr>
                </tbody>
              </table>
              <NoData
                v-if="d.data.myfiles.length <= 0"
                contents="데이터가 없습니다."
              ></NoData>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-table__head {
  margin-top: 4rem;
}
.c-form-check--type04 label {
  margin: 0 auto;
}
</style>
