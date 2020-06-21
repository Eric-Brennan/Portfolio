<template>
    <img v-bind:src="require(`@/assets/cards/${cardNumberName+suitName}.webp`)" 
            :alt="cardNumberName +' of ' + suitName"
            :class="cardWidth"/>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
    })
    export default class PlayingCard extends Vue {
        //Props
        @Prop() cardNumber!: number;
        @Prop() suit!: number;
        @Prop() columns!: number;

        get cardWidth(){
            switch (this.columns){
                case 1:{
                    return "div__100pc"
                }
                case 2:{
                    return "div__50pc"
                }
                case 3:{
                    return "div__33pc"
                }
                case 4:{
                    return "div__25pc"
                }
                case 5:{
                    return "div__20pc"
                }
                case 6:{
                    return "div__16pc"
                }
                case 7:{
                    return "div__12pc"
                }
            }
        }

        get suitName(){
            switch (this.suit){
                case 0:{
                    return "C";
                }
                 case 1:{
                    return "S";
                }
                 case 2:{
                    return "D";
                }
                 case 3:{
                    return "H";
                }
            }
        }

        get cardNumberName(){
            switch (this.cardNumber){
                case 0:{
                    return "A";
                }
                case 1:{
                    return "2";
                }
                case 2:{
                    return "3";
                }
                case 3:{
                    return "4";
                }
                case 4:{
                    return "5";
                }
                case 5:{
                    return "6";
                }
                case 6:{
                    return "7";
                }
                case 7:{
                    return "8";
                }
                case 8:{
                    return "9";
                }
                case 9:{
                    return "10";
                }
                case 10:{
                    return "J";
                }
                case 11:{
                    return "Q";
                }
                case 12:{
                    return "K";
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>