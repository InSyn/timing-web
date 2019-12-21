<template>
    <div class="authorizationWrapper">

        <div class="authInputWrapper">
            <label for="authLogin">Логин</label>
            <input id="authLogin" type="text">
        </div>

        <div class="authInputWrapper">
            <label for="authPassword">Пароль</label>
            <input id="authPassword" type="password">
        </div>

        <button type="button" class="loginButton" @click="authorize()">
            Войти
        </button>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {

        name: "authorization",

        mounted(){

            this.checkFields();
            this.animateInputsAtMount();

        },

        beforeRouteEnter(to, from, next) {

            next( (vm)=>{
                if (vm.isAuthorized)
                    next({name: 'profile'})
            })

        },

        computed: {
            ...mapGetters('authorization',{
                isAuthorized: 'isAuthorized',
                accountRole: 'accountRole'
            })
        },

        methods:{

            ...mapActions('authorization', {
                setRole: 'setRole',
                setAuthorized: 'setAuthorized'
            }),

            animateInput(elem, ev){

                if (elem)

                    elem.addEventListener(ev, ($event) =>{

                        $event.target.value === '' ?
                            $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                            null

                    });

            },

            animateInputsAtMount(){

                let inputs = document.querySelectorAll('.authInputWrapper');

                for (let input in inputs){

                    this.animateInput(inputs[input].lastChild, 'blur');

                    this.animateInput(inputs[input].lastChild, 'focus');

                }

            },

            checkFields(){

                let inputs = document.querySelectorAll('.authInputWrapper');

                for ( let i in inputs) {

                    if (inputs[i].lastChild)

                        inputs[i].lastChild.value !== '' ?
                            inputs[i].firstChild.classList.add('labelActive'):
                            null

                }

            },

            authorize(){

                localStorage.setItem('login', 'guest');
                localStorage.setItem('password', '');
                localStorage.setItem('accountRole', 'guest');
                this.setRole('guest');

                let login = document.querySelector('#authLogin').value;
                let password = document.querySelector('#authPassword').value;

                if (login !== '')
                    localStorage.setItem('login', login);

                if (password !== '')
                    localStorage.setItem('password', password);

                if (localStorage.getItem('login') === 'judge-jumps' && localStorage.getItem('password') === 'jjtw2019') {
                    this.setRole('judge_jumps_timing');
                    localStorage.setItem('accountRole', 'judge_jumps_timing');
                }

                if (localStorage.getItem('login') === 'judge-turns' && localStorage.getItem('password') === 'jttw2019'){
                    this.setRole('judge_turns_timing');
                    localStorage.setItem('accountRole', 'judge_turns_timing');
                }

                if (localStorage.getItem('login') === 'chief-judge' && localStorage.getItem('password') === 'cjtw2019'){
                    this.setRole('chief_judge_timing');
                    localStorage.setItem('accountRole', 'chief_judge_timing');
                }

                if (localStorage.getItem('login') === 'secretary' && localStorage.getItem('password') === 'sjtw2019'){
                    this.setRole('secretary_timing');
                    localStorage.setItem('accountRole', 'secretary_timing');
                }

                if (this.accountRole !== 'guest') {
                    this.setAuthorized();
                    this.$router.push('profile');
                }

                console.log(localStorage.getItem('login')+' '+localStorage.getItem('password')+' '+this.accountRole)
            }

        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../../assets/scss/colors";
    @import "../../../../assets/scss/transition-conf";

    .authorizationWrapper{
        display: flex;
        flex-direction: column;
        width: 100%;

        .authInputWrapper{
            position: relative;
            margin-top: 24px;
            border-bottom: 1px solid $borderColor;
            width: 200px;

            label{
                transition: $transition-time-default;
                position: absolute;
                cursor: text;
                top: 0;
                left: 8px;
                font-size: 1.2rem;


                &.labelActive{
                    top: -75%;
                    font-size: 1rem;
                }
            }
            input{
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 1.2rem;
                font-family: inherit;
                font-weight: inherit;
            }
            &:hover{
                background: rgba(255, 255, 255, 0.1);
            }
        }
        .loginButton{
            cursor: pointer;
            width: 200px;
            margin-top: 32px;
            padding: 8px 16px;
            font-size: 1.2rem;
            background-color: $buttonBackgroundColor;
            color: $buttonTextColor;
            border: none;
            outline: transparent;

            &:hover{
                background-color: lighten($buttonBackgroundColor, 10%);
            }
            &:focus{
                background-color: lighten($buttonBackgroundColor, 10%);
            }
        }
    }

</style>
