<template>
  <div>
    <div class="header">
      <div><span class="testing-scss">Testing SCSS</span></div>
    </div>
    <div class="mdc-card sign-in-card">
        <label class="mixin-text mdc-text-field mdc-text-field--outlined">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__notch">
              <span class="mdc-floating-label" id="email">Email</span>
            </span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
          <input
            type="email"
            v-model="email"
            class="mdc-text-field__input"
            aria-labelledby="email"
          />
        </label>

        <div class="mdc-text-field-helper-line" style="height: 32px">
          <span v-if="errors.email" style="font-size: 14px; color: red">{{
            errors.email
          }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { MDCTextField } from "@material/textfield";

export default {
  name: "tt",
  data: () => ({
    errors: {
      email: "",
    },
    email: null,
  }),
  mounted() {
    [].map.call(this.$el.querySelectorAll(".mdc-text-field"), function (el) {
      return new MDCTextField(el);
    });
  },

  methods: {
  },
};
</script>



<style lang="scss">
// @use "@material/floating-label/mdc-floating-label";
// @use "@material/line-ripple/mdc-line-ripple";
// @use "@material/notched-outline/mdc-notched-outline";
// @use "@material/textfield";

// @include textfield.core-styles;

// @import "@material/textfield/mdc-text-field";
// @import "@material/textfield/ljhlkjh";
// $testingcolor: orange;

// .mixin-text:not(.mdc-text-field--focused) {
//   @include label-color(red);
// }

// @use "@material/textfield";

@import "../test.scss";
// @mixin funky-color {
//   color: green;
// }
.testing-scss {
  @include funky-color(purple);
}

.header {
  background-size: cover;
  background-position: center;
  font-weight: 700;
  font-size: 48px;
  height: 300px;
  position: relative;
  text-align: center;
}
.sign-in-card {
  display: inline-flex !important;
  width: 480px;
  text-align: center;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 80px;
  padding-top: 95px;
  margin-top: -104px;
  margin-left: auto;
  margin-right: auto;
}
// @include textfield.core-styles;
</style>

<style scoped>
@import "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";
</style>