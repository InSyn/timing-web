<template>
    <div class="judgeJumpsTimingWrapper">

        <div class="markInputWrapper">
            <label for="firstJumpRank">Оценка за первый прыжок</label>
            <input id="firstJumpRank" class="jumpRank">
        </div>

        <div class="markInputWrapper">
            <label for="secondJumpRank">Оценка за второй прыжок</label>
            <input id="secondJumpRank" class="jumpRank">
        </div>

    </div>
</template>

<script>

    export default {

        name: "judgeJumpsFrame"

    }

</script>

<style lang="scss" scoped>
    @import "../../../../assets/scss/colors";
    @import "../../../../assets/scss/transition-conf";

    .judgeJumpsTimingWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid $light_blue-dark;

        .markInputWrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 32px;
        }
    }

</style>
