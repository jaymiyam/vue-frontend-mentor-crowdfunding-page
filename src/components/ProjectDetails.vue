<template>
  <section class="project-details">
    <div class="content-wrapper | flow">
      <h2 class="details__title">About this project</h2>
      <p class="details__text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <PledgeItem
        v-for="pledge in pledgeStore.pledges"
        :key="pledge.id"
        :name="pledge.name"
        :amount="pledge.amount"
        :description="pledge.description"
        :remaining="pledge.remaining"
        :availability="pledge.availability"
        :class="{ unavailable: !pledge.availability }"
      />
    </div>
  </section>
</template>

<script setup>
import { usePledgeStore } from '@/stores/pledge.js';
import PledgeItem from './PledgeItem.vue';

const pledgeStore = usePledgeStore();
</script>
