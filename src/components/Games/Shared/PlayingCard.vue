<template>
    <div>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    
    @Component({})
    export default class PlayingCard extends Vue {
        //Props
        @Prop() cardNumber!: number;
        @Prop() suit!: number;
        
    }
</script>

<style lang="scss" scoped>

</style>