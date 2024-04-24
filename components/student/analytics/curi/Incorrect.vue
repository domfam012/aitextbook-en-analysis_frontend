<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">철자를 틀린 경우</h3>
        </div>
        <v-list class="list_check">
            <v-list-item>
                <span class="wrong">moning(x)</span>
                <span class="right">mo<span class="text_err">r</span>ning (o)</span>
            </v-list-item>
        </v-list>
        <div class="inner_title">
            <h3 class="bullet">잘못된 표현을 쓴 경우</h3>
        </div>
        <v-list class="list_check">
            <v-list-item>good night 은 무조건 헤어질 때 하는 인사가 아니에요.</v-list-item>
            <v-list-item>헤어질 때에는 Good bye.</v-list-item>
            <v-list-item>저녁에 잘 자라고 할 때에는 Good night.</v-list-item>
        </v-list>
    </v-sheet>
</template>
