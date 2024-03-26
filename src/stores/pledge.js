import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const usePledgeStore = defineStore('pledge', () => {
  const pledges = ref([
    {
      id: 1,
      name: 'Pledge with no reward',
      amount: 0,
      description:
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      remaining: null,
      availability: true,
    },
    {
      id: 2,
      name: 'Bamboo Stand',
      amount: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      remaining: 101,
      availability: true,
    },
    {
      id: 3,
      name: 'Black Edition Stand',
      amount: 75,
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      remaining: 64,
      availability: true,
    },
    {
      id: 4,
      name: 'Mahogany Special Edition',
      amount: 200,
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      remaining: 0,
      availability: false,
    },
  ]);

  const currentFunding = ref(89914);
  const currentBackers = ref(5007);
  const currentDeadline = ref(56);

  const deadlineDisplay = computed(() => {
    return currentDeadline.value.toString();
  });

  const backersDisplay = computed(() => {
    return new Intl.NumberFormat().format(currentBackers.value);
  });

  const fundingDisplay = computed(() => {
    return new Intl.NumberFormat().format(currentFunding.value);
  });

  const selectionModalToggle = ref(false);
  const successModalToggle = ref(false);

  function submitPledge(amount) {
    if (amount === null || amount < 0) {
      alert('Please enter a valid pledge value!');
      return;
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    selectionModalToggle.value = false;
    successModalToggle.value = true;

    currentBackers.value += 1;
    currentFunding.value += amount;
  }

  return {
    pledges,
    currentFunding,
    deadlineDisplay,
    backersDisplay,
    fundingDisplay,
    selectionModalToggle,
    successModalToggle,
    submitPledge,
  };
});
