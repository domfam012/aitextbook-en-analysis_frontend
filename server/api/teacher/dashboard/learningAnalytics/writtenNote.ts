// 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 필기노트
// API 작업 실제 종료일 2024-04-03
// 임시 mock data

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: [
        {
            title: 'Get Ready',
            description: '때에 맞는 인사하기',
            count: 4,
            imgSrc: [
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                }
            ]
        },
        {
            title: 'Lets Learn',
            description: '학습 내용 알아보기',
            count: 2,
            imgSrc: [
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                }
            ]
        },
        {
            title: 'Hello World',
            description: '가볍게 인사하기',
            count: 6,
            imgSrc: [
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                }
            ]
        },
        {
            title: 'Happy Day',
            description: '가볍게 칭찬하기',
            count: 5,
            imgSrc: [
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                }
            ]
        },
        {
            title: 'Hello',
            description: '인사하기',
            count: 3,
            imgSrc: [
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                },
                {
                    img: 'images/temp/img_bk_thumb.png'
                }
            ]
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
