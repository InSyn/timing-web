<template>
    <div class="judgeJumpsTimingWrapper">

        <div class="markInputWrapper">
            <label for="firstJumpRank">Прыжок 1</label>
            <input id="firstJumpRank" class="jumpRank">
        </div>

        <div class="markInputWrapper">
            <label for="secondJumpRank">Прыжок 2</label>
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

    .judgeJumpsTimingWrapper{

        .markInputWrapper{

        }
    }

</style>
