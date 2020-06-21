<template>
  <div class="game-board">
    <div class="game-board game-board--flex game-board__border">
      <PlayingCard
        v-if="showCards"
        v-for="(card, index) in playDeck"
        :key="card.cardNumber.toString()+' of '+card.suit.toString()+index"
        :cardNumber="card.cardNumber"
        :suit="card.suit"
        :front="card.front"
        :columns="5"
        @cardFlipped="cardFlipped"
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
  deck: {
    cardNumber: number;
    suit: number;
    front: boolean;
    picked: boolean;
  }[] = [];

  playDeck: { cardNumber: number; suit: number; front: boolean }[] = [];

  numberOfPairs = 5;

  deckBuilt = false;

  cardHistory: { cardNumber: number; suit: number; front: boolean }[] = [];

  cardMatch = false;

  showCards = false;

  async mounted() {
    await this.buildDeck();
    await this.buildPlayDeck();
    this.showCards = true;
  }

  buildDeck() {
    for (let suitType = 0; suitType < 4; suitType++) {
      for (let cardNumber = 0; cardNumber < 13; cardNumber++) {
        this.deck.push({
          cardNumber: cardNumber,
          suit: suitType,
          front: false,
          picked: false
        });
      }
    }
    this.deckBuilt = true;
  }

  buildPlayDeck() {
    for (let i = 0; i < this.numberOfPairs; i++) {
      this.playDeck = this.playDeck.concat(this.pair());
    }
    this.playDeck = this.shuffle(this.playDeck)
  }

    shuffle(array:{ cardNumber: number; suit: number; front: boolean }[]) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  pair() {
    let cardPair: { cardNumber: number; suit: number; front: boolean }[] = [];
    let cNumber = Math.floor(Math.random() * Math.floor(13));
    let csuit = Math.floor(Math.random() * Math.floor(4));

    cardPair.push({ cardNumber: cNumber, suit: csuit, front: false });
    this.deck[
      this.deck.findIndex(c => c.suit === csuit && c.cardNumber === cNumber)
    ].picked = true;
    let secondGot = false;
    let csuitNew = -1;
    while (!secondGot) {
      csuitNew = Math.floor(Math.random() * Math.floor(4));
      csuit !== csuitNew ? (secondGot = true) : (secondGot = false);
    }
    cardPair.push({ cardNumber: cNumber, suit: csuitNew, front: false });
    this.deck[
      this.deck.findIndex(c => c.suit === csuit && c.cardNumber === cNumber)
    ].picked = true;

    return cardPair;
  }

  cardFlipped(cardNumber: number, suit: number) {
    this.playDeck[
      this.playDeck.findIndex(
        c => c.suit === suit && c.cardNumber === cardNumber
      )
    ].front = true;
    this.cardHistory.push(
      this.playDeck[
        this.playDeck.findIndex(
          c => c.suit === suit && c.cardNumber === cardNumber
        )
      ]
    );
    if (this.cardHistory.length % 2 === 0) {
      if (
        this.cardHistory[this.cardHistory.length - 1].cardNumber ===
        this.cardHistory[this.cardHistory.length - 2].cardNumber
      ) {
      } else {
          setTimeout(() => {
this.playDeck[
          this.playDeck.findIndex(
            c =>
              this.cardHistory[this.cardHistory.length - 1].suit === c.suit &&
              this.cardHistory[this.cardHistory.length - 1].cardNumber ===
                c.cardNumber
          )
        ].front = false;
        this.playDeck[
          this.playDeck.findIndex(
            c =>
              this.cardHistory[this.cardHistory.length - 2].suit === c.suit &&
              this.cardHistory[this.cardHistory.length - 2].cardNumber ===
                c.cardNumber
          )
        ].front = false;
          }, 1000)
        
      }
    }
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