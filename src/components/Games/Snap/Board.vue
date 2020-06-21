<template>
  <div class="game-board">
    <div class="game-board game-board__border">
      <PlayingCard
          v-for="card in deck"
          :key="card.cardNumber.toString()+card.suit.toString()"
          :cardNumber="card.cardNumber"
          :suit="card.suit"
          :columns="5"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PlayingCard from "@/components/Games/Shared/PlayingCard.vue";

@Component({
  components: {
    PlayingCard
  }
})
export default class SnapBoard extends Vue {
  // Data
  deck: { cardNumber: number; suit: number }[] = [];
  numberOfCards = 5;

    deckBuilt = false;

  mounted() {
    this.buildDeck();
  }

  buildDeck() {
    for (let suitType = 0; suitType < 4; suitType++) {
      for (let cardNumber = 0; cardNumber < 13; cardNumber++) {
        this.deck.push({
          cardNumber: cardNumber,
          suit: suitType
        });
      }
    }
    this.deckBuilt = true;
  }

  randomCard() {
    let cNumber = Math.floor(Math.random() * Math.floor(13));
    let csuit = Math.floor(Math.random() * Math.floor(4));
    let card = "";

    switch (cNumber) {
      case 0: {
        card = "A";
        break;
      }
      case 1: {
        card = "2";
        break;
      }
      case 2: {
        card = "3";
        break;
      }
      case 3: {
        card = "4";
        break;
      }
      case 4: {
        card = "5";
        break;
      }
      case 5: {
        card = "6";
        break;
      }
      case 6: {
        card = "7";
        break;
      }
      case 7: {
        card = "8";
        break;
      }
      case 8: {
        card = "9";
        break;
      }
      case 9: {
        card = "10";
        break;
      }
      case 10: {
        card = "J";
        break;
      }
      case 11: {
        card = "Q";
        break;
      }
      case 12: {
        card = "K";
        break;
      }
    }
    switch (csuit) {
      case 0: {
        card += "C";
        break;
      }
      case 1: {
        card += "S";
        break;
      }
      case 2: {
        card += "D";
        break;
      }
      case 3: {
        card += "H";
        break;
      }
    }
    return card;
  }
}
</script>

<style lang="scss" scoped>
</style>