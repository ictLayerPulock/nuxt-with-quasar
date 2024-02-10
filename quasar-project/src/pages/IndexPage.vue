<template>
  <div class="q-pa-md q-gutter-sm" style="width: 100%; max-width: 100%">





    <q-responsive :ratio="16 / 5" style="width: 100%; max-width: 100%">
      <q-carousel swipeable animated arrows v-model="slide" infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />

        <template v-slot:control>
          <q-carousel-control
            position="bottom"
            :offset="[16, 8]"
            class="text-white text-center rounded-borders"
            style="background: rgba(255, 255, 255, 0.2); padding: 4px 8px"
          >
            Ratio 16:9
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-responsive>

    <div class="row">
      <div class="col-3"></div>
      <div class="col">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6">This is Basic Input form</div>
              <div class="text-subtitle2 pb-5">by Pulock</div>

              <q-form class="q-gutter-md">
                <q-input filled v-model="name" label="Your name *" />
                <q-input filled v-model="email" label="Your Email *" />
                <q-input filled v-model="phone" label="Your Phone *" />
                <q-input
                  filled
                  type="number"
                  v-model="age"
                  label="Your age *"
                />

                <q-select
                  square
                  filled
                  outlined
                  v-model="select"
                  :options="options"
                  label="Select Your Path"
                />

                <q-input outlined type="file" v-model="age" />
                <q-input filled type="time" v-model="time" />
                <q-input filled type="date" v-model="date" />

                <div
                  class="q-pa-sm rounded-borders"
                  :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
                >
                  Preferred genre:
                  <q-option-group
                    name="preferred_genre"
                    v-model="group"
                    :options="optionsO1"
                    color="primary"
                    inline
                  />
                </div>
                <div
                  class="q-pa-sm rounded-borders"
                  :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
                >
                  Accepted genres:
                  <q-option-group
                    name="accepted_genres"
                    v-model="accepted"
                    :options="optionsO1"
                    type="checkbox"
                    color="info"
                    inline
                  />
                </div>

                <br />

                <div>
                  <q-btn label="Submit" type="submit" color="green" />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from "vue";
// import { useQuasar } from "quasar";

import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      name: ref(""),
      email: ref(""),
      phone: ref(""),
      age: ref(""),
      time: ref(""),
      date: ref(""),
      select: ref(""),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      group: ref("op1"),
      accepted: ref([]),

      optionsO1: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],
    };
  },
};
</script>
<style lang="sass">
</style>
