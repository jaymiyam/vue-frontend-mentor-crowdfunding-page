<template>
  <div class="pledge | flow" v-if="amount != 0">
    <div class="pledge__info | desktop-flex-jc-sb">
      <h3 class="pledge__name">{{ name }}</h3>
      <h4 class="pledge__amount">Pledge ${{ amount }} or more</h4>
    </div>
    <p class="pledge__details">
      {{ description }}
    </p>
    <div class="pledge__actions | desktop-flex-jc-sb">
      <p class="pledge__available">
        {{ remaining }} <span class="pledge__left">left</span>
      </p>

      <button
        class="btn-main"
        :disabled="!availability"
        @click="selectReward()"
      >
        Select Reward
      </button>
    </div>
  </div>
</template>

<script setup>
import { usePledgeStore } from '@/stores/pledge';
const pledgeStore = usePledgeStore();

const props = defineProps([
  'name',
  'amount',
  'description',
  'remaining',
  'availability',
]);

function selectReward() {
  pledgeStore.selectionModalToggle = true;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  // console.log(e.target.parentNode);
}
</script>
