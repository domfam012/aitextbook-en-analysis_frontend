export const useApiUserStore = defineStore(
    'apiUser',
    () => {
        type Item = {
            teacherId: string;
            studentId: string;
            originalId: string;
            name: string;
            role: string;
            grade: number;
            classNum: number;
            schoolId: string;
            schoolName: string;
            eduOfficeCode: string;
            classId: number;
            soundVolume?: number;
        };

        const user = ref<Item>();
        const getUser = async (value: string) => {
            const { data, error } = await useCustomFetch('https://aitextbookapi-stage.i-screammedia.com/' + value, {
                method: 'get'
            });
            if (error.value) throw error.value;
            if (data.value) {
                const result = data.value as Result;
                user.value = result.data as Item;

                //id 저장
                const userId = useCookie('userId');
                if (value == 'teacher') {
                    userId.value = user.value.teacherId;
                } else {
                    userId.value = user.value.studentId;
                }
            }
        };
        return {
            user,
            getUser
        };
    },
    {
        persist: true
    }
);
