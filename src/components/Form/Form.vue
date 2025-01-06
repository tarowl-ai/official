<template>
  <div
    class="form-container"
    style="background: linear-gradient(to bottom, #ffffff,#b1dcf9 );"
  >
    <h2 class="text-center">想和我們說的話</h2>
    <div style="margin-top: 20px;"></div>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submitToGoogleSheet"
          method="post"
        >
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="Name"
            name="entry.1771377888"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="Email"
            name="entry.195629645"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="[rules.required]"
            label="Message"
            name="entry.1992402086"
            required
          ></v-textarea>

          <div class="text-center">
            <v-btn
              :disabled="!valid"
              type="submit"
              style="background-color: #878787; color: white;"
            >Submit</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      message: "",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSdHkl73mA-GIk-Dw2_GNqnCVN3jbEZQZ1FlAiWg3WkVJwYiKw/formResponse",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          return pattern.test(value) || "E-mail must be valid.";
        },
      },
    };
  },
  methods: {
    async submitToGoogleSheet() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append("entry.1771377888", this.name);
        formData.append("entry.195629645", this.email);
        formData.append("entry.1992402086", this.message);

        try {
          // Using fetch with no-cors mode since Google Forms doesn't allow CORS
          await fetch(this.formUrl, {
            method: "POST",
            mode: "no-cors",
            body: formData,
          });

          // Clear form after successful submission
          this.name = "";
          this.email = "";
          this.message = "";
          this.$refs.form.reset();

          // Show success message (you might want to add a proper notification system)
          alert("Thank you for your submission!");
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("There was an error submitting the form. Please try again.");
        }
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  color: #878787;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>

