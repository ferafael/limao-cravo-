<template>
  <div style="display:grid; grid-template-columns:1fr 1fr; grid-template-columns:1.2fr 1.2fr;">
    <b-container style="height:500px;width:70% ;margin-top:10px;margin-left:200px;">
      <div class="contactUs">
      <h1>Mande um E-mail para</h1>
      <span>nos!</span>
    </div>
      <b-form @submit="onSubmit" style="display:grid;grid-template-columns:1fr 1fr ">
       <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="Email"
         style="width:300px;margin-top:40px;margin:30px 0;border-bottom:2px solid #adadad"
      >
        <b-form-input
          id="input-1"
          v-model="form.user"
          type="email"
          required
         style="width:300px;"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2"  style="width:300px;margin-top:40px;margin:30px 0;border-bottom:2px solid #adadad">
        <b-form-input
          id="input-2"
          v-model="form.email"
          required
          style="width:300px;"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Assunto" label-for="input-2" style="width:300px;">
        <b-form-input
          id="input-2"
          v-model="form.assunt"
          placeholder="Enter name"
          required
          style="width:610px"
        ></b-form-input>
      </b-form-group>
      </b-form>
      <b-form-textarea
    id="textarea-rows"
    placeholder="Tall textarea"
    rows="8"
    v-model="form.text"
    style="width:610px"
  ></b-form-textarea>
    <pre class="mt-3 mb-0">{{ text }}</pre>
    <div>
      <b-button type="submit" variant="primary">Submit</b-button>
    </div>
    </b-container>
    <Local/>
  </div>
</template>
<script>
import Local from './Local'
export default {
  components:{
    Local
  },
   data() {
      return {
        form: {
          email: '',
          name: '',
          text:'',
          assunt:'',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
  
}
b-form label{
  position: absolute;
  top:50%;
  left: 5px;
}
</style>