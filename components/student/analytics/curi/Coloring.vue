<template>
    <v-sheet class="colorLessonInfo">
        <div class="inner_title">
            <h3 class="bullet">학습을 완료할 때마다 색깔 조각이 생깁니다. 도안을 선택해서 완성해 보세요.</h3>
        </div>
        <!-- 데이터 있을 때 -->
        <div class="inner">
            <v-list class="d-flex px30 py-0">
                <v-list-item class="px15 py15">
                    <div class="box cursor">
                        <div class="avatar avatar-box">
                            <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                            <div class="avatar-info">
                                <span class="info_number">15번</span>
                                <span class="info_name">늘푸른하늘</span>
                            </div>
                        </div>
                        <div class="colorboard">
                            <v-img :src="coloringBoard" width="24.2rem" height="24rem" class="mgt15"></v-img>
                            <!-- 스템프가 있을경우 추가 -->
                            <div class="board-stamp bg-white">
                                <v-img :src="stamp01" alt="어떻게 이렇게까지 잘하는 거지" />
                            </div>
                        </div>
                    </div>
                </v-list-item>
                <v-list-item class="px15 py15">
                    <div class="box cursor">
                        <div class="avatar avatar-box">
                            <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                            <div class="avatar-info">
                                <span class="info_number">15번</span>
                                <span class="info_name">늘푸른하늘</span>
                            </div>
                        </div>
                        <div class="colorboard">
                            <v-img :src="coloringBoard" width="24.2rem" height="24rem" class="mgt15"></v-img>
                            <!-- 스템프가 있을경우 추가 -->
                            <div class="board-stamp bg-white">
                                <v-img :src="stamp01" alt="어떻게 이렇게까지 잘하는 거지" />
                            </div>
                        </div>
                    </div>
                </v-list-item>
                <v-list-item class="px15 py15">
                    <div class="box cursor">
                        <div class="avatar avatar-box">
                            <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                            <div class="avatar-info">
                                <span class="info_number">15번</span>
                                <span class="info_name">늘푸른하늘</span>
                            </div>
                        </div>
                        <div class="colorboard">
                            <v-img :src="coloringBoard" width="24.2rem" height="24rem" class="mgt15"></v-img>
                            <!-- 스템프가 있을경우 추가 -->
                            <div class="board-stamp bg-white">
                                <v-img :src="stamp01" alt="어떻게 이렇게까지 잘하는 거지" />
                            </div>
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </div>

        <!-- 데이터 없을 때 -->
        <!-- <div class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>아직 숫자 색칠판을 시작한 학생이 없습니다.</p>
        </div> -->
    </v-sheet>
</template>

<script setup>
import avatar from '@/assets/images/temp/img_pho_st01.png';
import coloringBoard from '@/assets/images/temp/img_coloring_board.png';

import stamp01 from '@/assets/images/img_stamp_01.svg';
import noImages from '@/assets/images/img_noImage.svg';
</script>
