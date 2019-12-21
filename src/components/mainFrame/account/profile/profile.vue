<template>
    <div class="profileWrapper">
        Вы вошли как {{accountRole}}
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "profile",
        computed: {
            ...mapGetters('authorization', {
                accountRole: 'accountRole'
            })
        },
        methods:{
            ...mapActions('profile', {

            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
