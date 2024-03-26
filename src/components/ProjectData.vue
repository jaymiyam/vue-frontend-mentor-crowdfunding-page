<template>
  <section class="project-data">
    <div class="content-wrapper">
      <div class="data-wrapper">
        <div class="data__stat | flow" style="--flow-spacer: 0.5rem">
          <span class="data__main-text">${{ pledgeStore.fundingDisplay }}</span>
          <span class="data__sub-text">of $100,000 backed</span>
        </div>
        <div class="data__stat | flow" style="--flow-spacer: 0.5rem">
          <span class="data__main-text">{{ pledgeStore.backersDisplay }}</span>
          <span class="data__sub-text">total backers</span>
        </div>
        <div class="data__stat | flow" style="--flow-spacer: 0.5rem">
          <span class="data__main-text">{{ pledgeStore.deadlineDisplay }}</span>
          <span class="data__sub-text">days left</span>
        </div>
      </div>
      <meter
        class="data__progress"
        min="0"
        max="100000"
        :value="pledgeStore.currentFunding"
      ></meter>
    </div>
  </section>
</template>

<script setup>
import { usePledgeStore } from '@/stores/pledge';
const pledgeStore = usePledgeStore();
</script>
