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
                        <li>
                            {{ user.classInfo.grade + t('record.index.grade') }} {{ user.classInfo.classNum + t('record.index.class') }}
                        </li>
                    </ul>
                    <div class="avatar-box">
                        <div class="avatar">
                            <v-img :src="user.profileUrl" :alt="t('record.index.avatarImg')" class="avatar-item" />
                        </div>
                        <div class="avatar-info">
                            <span class="info_number">{{ user.number + t('common.unit.no') }}</span>
                            <h2>
                                <span class="info_name">{{ user.name }}</span>
                                {{ t('record.index.ofAI') }}
                                <span class="subject">
                                    <span
                                        >{{ user.classInfo.grade + t('record.index.grade') }}
                                        {{ user.semester + t('record.index.semester') }}</span
                                    >
                                    <strong>{{ t('record.index.english') }}</strong>
                                </span>
                                {{ t('record.index.studentRecord') }}
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
const { t } = useI18n();
const mode = useCookie('mode');
const { savePdf, printPage } = usePrintSave();
const { user } = storeToRefs(useApiUserStore());
const select = ref({ state: t('record.index.selectText') });
const items = ref([{ state: t('record.index.selectText') }]);
</script>
