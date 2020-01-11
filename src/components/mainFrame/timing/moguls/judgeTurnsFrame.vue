<template>
    <div class="judgeTurnsTimingWrapper">

        <div class="markInputWrapper">
            <label for="turnsRank" class="jumpPenaltyLabel">Оценка</label>
            <input id="turnsRank" class="jumpMarkInput" type="number">
        </div>

        <div class="markInputWrapper">
            <label for="penalty" class="jumpPenaltyLabel">Сбавка</label>
            <input id="penalty" class="jumpMarkInput" type="number">
        </div>

        <button type="button" class="setMark">
            Постваить оценку
        </button>

    </div>
</template>

<script>
    export default {
        name: "judgeTurnsFrame"
    }
</script>

<style lang="scss" scoped>
    @import "../../../../assets/scss/colors";
    @import "../../../../assets/scss/transition-conf";

    .judgeTurnsTimingWrapper{
        display: flex;
        align-items: center;
        justify-content: center;

        .markInputWrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 32px;


            .jumpPenaltyLabel{
                font-size: 1.2rem;
                padding: 16px;
            }
            .jumpMarkInput{
                transition: background $transition-time-double;
                padding: 16px 8px;
                font-size: 1.2rem;
                border: transparent;
                outline: transparent;
                background: transparent;
            }
            &:hover .jumpMarkInput {
                background-color: rgba(255,255,255,0.4);
            }
        }
        .setMark{
            transition: $transition-time-default;
            cursor: pointer;
            font-size: 1.2rem;
            background: lighten($dark_blue-light, 55%);
            padding: 8px 16px;
            margin-left: auto;
            outline: none;
            border: 2px solid $light_grey-dark;

            &:hover{
                background: lighten($dark_blue-light, 75%);
                border: 1px solid lighten($light_grey-dark, 20%);
            }
        }
    }

</style>
