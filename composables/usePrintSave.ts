import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
export const usePrintSave = () => {
    const savePdf = async (type: string) => {
        html2canvas(document.getElementById('pdf'), {
            scale: 2
        }).then(canvas => {
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
            putCompletion();
        });
    };

    const printPage = async (type: string) => {
        const printElement = document.getElementById('pdf');
        try {
            const canvas = await html2canvas(printElement, {
                scale: 2
            });
            const imageData = canvas.toDataURL('image/png');

            const imgWidth = 210; // 가로(mm) (A4)
            const pageHeight = imgWidth * 1.414; // 세로 길이 (A4)
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const printContent = `<html style="padding:0; margin:0"><body style="padding:0; margin:0"><img src="${imageData}" style="width:100%;"></body></html>`;

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

    const putCompletion = () => {
        const { selectedStudentIndex } = storeToRefs(useApiRecordStore());
        const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
        useApiCompletionStore().putCompletion({ studUuid: learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid });
    };

    return {
        savePdf,
        printPage
    };
};
