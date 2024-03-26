<template>
  <Teleport to="body">
    <div class="modal">
      <dialog open="true" class="modal-wrapper modal__selection | flow">
        <button
          class="btn-close-modal"
          @click="pledgeStore.selectionModalToggle = false"
        ></button>
        <h3 class="modal__title">Back this project</h3>
        <p>
          Want to suppoer us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <form action="#" class="flow">
          <div
            class="form-control"
            v-for="pledge in pledgeStore.pledges"
            :key="pledge.id"
            :class="{ unavailable: !pledge.availability }"
          >
            <div class="input-wrapper">
              <input
                class="pledge-selection-radio"
                type="radio"
                name="pledge-selection"
                :id="pledge.id"
                :disabled="!pledge.availability"
              />
              <label :for="pledge.id" class="flow">
                <div class="label-wrapper">
                  <h4 class="modal__pledge-name">{{ pledge.name }}</h4>
                  <h5 class="modal__pledge-amount" v-if="pledge.amount != 0">
                    Pledge ${{ pledge.amount }} or more
                  </h5>
                  <p
                    class="modal__pledge-available"
                    v-if="pledge.remaining != null"
                  >
                    {{ pledge.remaining }}
                    <span class="modal__pledge-left">left</span>
                  </p>
                </div>
                <p>
                  {{ pledge.description }}
                </p>
              </label>
            </div>
            <div class="submit-pledge">
              <label for="pledge-amount">Enter your pledge</label>
              <div class="amount-input-wrapper">
                $
                <input
                  required
                  type="number"
                  name="pledge-amount"
                  id="pledge-amount"
                  v-model="pledgeInput"
                />
              </div>
              <button
                class="btn-main"
                :disabled="!pledge.availability"
                @click.prevent="pledgeStore.submitPledge(pledgeInput)"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { usePledgeStore } from '@/stores/pledge';
const pledgeStore = usePledgeStore();

const pledgeInput = ref(null);
</script>
