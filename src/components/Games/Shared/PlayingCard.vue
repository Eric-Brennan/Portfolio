<template>
    <div :class="cardWidth">
         
    
            <div :class="'flip-container '+ isFlipped">
	<div class="flipper">
		<div class="front">
			<img
            v-bind:src="require(`@/assets/cards/${cardNumberName+suitName}.webp`)" 
            :alt="cardNumberName +' of ' + suitName"
            :class="'playing-card__image '"
            @click="flipCard"/>
		</div>
		<div class="back">
			<img 
            v-bind:src="require(`@/assets/cards/blue_back.webp`)" 
            :alt="cardNumberName +' of ' + suitName"
            :class="'playing-card__image '"
            @click="flipCard"/>
		</div>
	</div>
</div>
    </div>
   
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

        front = false;

        flipAnimation = "";

        flipCard(){
                this.front =!this.front;
           
           
        }

        get isFlipped(){
            return this.front ? "flipped" : "";
        }
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
.flip-container {
	perspective: 1000px;
}
	/* flip the pane when hovered */
	.flip-container.flipped .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
	}

.flip-container, .front, .back {
	width: 100%;
	height: 15rem;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(180deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(0deg);
}
</style>