<template>
    <div class="record_wrap">
        <div class="header">
            <div class="utility">
                <v-select
                    v-model="select"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    variant="outlined"
                    persistent-hint
                    rounded
                    return-object
                    single-line
                    hide-details
                ></v-select>
                <div class="extra">
                    <div class="buttons">
                        <!-- (개발용)로그아웃버튼 -->
                        <v-btn rounded size="x-small" class="primary ml-2 px-2" color="green" flat @click="useAuthStore().logoutUser()"
                            >(개발용)로그아웃</v-btn
                        >
                        <!-- //(개발용)로그아웃버튼 -->
                        <v-btn class="icon_only size_md"><i class="ico ico_size_10 pdf" @click="savePdf"></i></v-btn>
                        <v-btn class="icon_only size_md"><i class="ico ico_size_10 print" @click="printPage"></i></v-btn>
                        <v-btn class="icon_only size_md"><i class="ico ico_size_10 close_w"></i></v-btn>
                    </div>
                </div>
            </div>
            <div id="pdf">
                <div class="inner_wrap">
                    <ul class="divider_group">
                        <li>{{ user.schoolName }}</li>
                        <li>{{ user.classInfo.grade }}학년 {{ user.classInfo.classNum }}반</li>
                    </ul>
                    <div class="avatar-box">
                        <div class="avatar">
                            <v-img :src="user.profileUrl" alt="아바타 이미지" class="avatar-item" />
                        </div>
                        <div class="avatar-info">
                            <span class="info_number">{{ user.number }}번</span>
                            <h2>
                                <span class="info_name">{{ user.name }}</span>
                                의 AI
                                <span class="subject">
                                    <span>{{ user.classInfo.grade }}학년 {{ user.semester }}학기</span>
                                    <strong>영어</strong>
                                </span>
                                생활기록부
                            </h2>
                        </div>
                    </div>
                </div>
                <IssuancePart v-if="mode" />
            </div>
        </div>
    </div>
</template>
<script setup>
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const { mode } = storeToRefs(useApiUserStore());
const { user } = storeToRefs(useApiUserStore());
const apiRecordHistory = useApiRecordHistoryStore();
const { semesterInProgress } = storeToRefs(apiRecordHistory);
const select = ref({ state: '교과 진도만 분석합니다.' });
const items = ref([{ state: '교과 진도만 분석합니다.' }]);
onMounted(() => {
    apiRecordHistory.getStudentSemesterInProgress();
});

const printPage = async () => {
    const printElement = document.getElementById('pdf');
    try {
        const canvas = await html2canvas(printElement);
        const imageData = canvas.toDataURL('image/png');

        const imgWidth = 210; // 가로(mm) (A4)
        const pageHeight = imgWidth * 1.414; // 세로 길이 (A4)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        console.log(imgHeight);
        const printContent = `<img src="${imageData}" style="width:100%;">`;

        const windowContent = '<!DOCTYPE html>';

        const printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write(windowContent);
        printWindow.document.write(printContent);
        printWindow.document.close();

        printWindow.onload = function () {
            printWindow.print();
            printWindow.close();
        };
    } catch (error) {
        console.error('Error:', error);
    }
};

/**
 * pdf저장
 */
const savePdf = () => {
    html2canvas(document.getElementById('pdf')).then(canvas => {
        // 캔버스를 이미지로 변환
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 210; // 가로(mm) (A4)
        const pageHeight = imgWidth * 1.414; // 세로 길이 (A4)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });

        let heightLeft = imgHeight;
        let position = 0;

        // 첫 페이지 출력
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // 한 페이지 이상일 경우 루프 돌면서 출력
        while (heightLeft >= 20) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save('생활기록부_이름.pdf');
    });
};
</script>
