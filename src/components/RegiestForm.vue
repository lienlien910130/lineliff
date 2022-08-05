<template>
<div class='lmask'></div>
  <Form id="line-form-app">
    <div class="card" id="formCard">
      <div class="card-image">
        <img src="https://imgur.com/XF2qm3W.jpg" />
        <span class="card-title">
          Save the date,
          <br />join us to celebrate.
        </span>
      </div>
      <div class="card-content">
        <!-- Line Profile : {{ profile }} -->
        <div class="row">
          <div class="field--section">
            <h5>您的 Line 名稱</h5>
            <div class="input-field col s12">
              <span>{{ profile.displayName }}</span>
            </div>
          </div>
          <div class="field--section">
            <h5>請問您的大名? (真實姓+名)</h5>
            <div class="input-field col s12">
              <Field
                name="fullName"
                as="input"
                type="text"
                :rules="isRequired"
                v-model="regiestForm.fullName"
              />
              <label for="fullName">您的回答</label>
              <ErrorMessage name="fullName" class="error" />
            </div>
          </div>
          <div class="field--section">
            <h5>您的聯絡電話?</h5>
            <div class="input-field col s12">
              <Field
                name="phoneNumber"
                as="input"
                type="text"
                :rules="isRequired"
                v-model="regiestForm.phoneNumber"
              />
              <label for="phoneNumber">您的回答</label>
              <ErrorMessage name="phoneNumber" class="error" />
            </div>
          </div>
          <div class="field--section">
            <h5>是否願意與我們共進晚宴？</h5>
            <div class="radio--group p-l-5">
              <p>
                <label>
                  <Field
                    name="attendEvent"
                    as="input"
                    type="radio"
                    :value=1
                    :rules="isRequired"
                    v-model="regiestForm.attendEvent"
                  />
                  <span>拜託我一定要參加！</span>
                </label>
              </p>
              <p>
                <label>
                  <Field
                    name="attendEvent"
                    as="input"
                    type="radio"
                    :value=2
                    :rules="isRequired"
                    v-model="regiestForm.attendEvent"
                  />
                  <span>無法出席，祝你們幸福滿滿</span>
                </label>
              </p>
              <ErrorMessage name="attendEvent" class="error" />
            </div>
          </div>
          <div class="field--section attend--field">
            <h5>您和新人的關係是?</h5>
            <div class="radio--group p-l-5">
              <p>
                <label>
                  <Field
                    name="relation"
                    as="input"
                    type="radio"
                    :value=1
                    :rules="isRequired"
                    v-model="regiestForm.relation"
                  />
                  <span>男方親友</span>
                </label>
              </p>
              <p>
                <label>
                  <Field
                    name="relation"
                    as="input"
                    type="radio"
                    :value=2
                    :rules="isRequired"
                    v-model="regiestForm.relation"
                  />
                  <span>女方親友</span>
                </label>
              </p>
            </div>
            <ErrorMessage name="relation" class="error" />
          </div>
          <div
            class="field--section attend--field"
            v-if="regiestForm.attendEvent == 1"
          >
            <h5>當天出席人數 (含自己，不佔位兒童不算哦)</h5>
            <div>
              <Field
                name="attendPeople"
                as="select"
                :rules="isRequired"
                v-model="regiestForm.attendPeople"
              >
                <option :value=1>1 人</option>
                <option :value=2>2 人</option>
                <option :value=3>3 人</option>
                <option :value=4>4 人</option>
                <option :value=5>5 人</option>
              </Field>
            </div>
            <ErrorMessage name="attendPeople" class="error" />
          </div>
          <div
            class="field--section attend--field"
            v-if="regiestForm.attendEvent == 1"
          >
            <h5>是否需要準備兒童座椅?</h5>
            <div class="radio--group p-l-5">
              <Field
                name="child"
                as="select"
                :rules="isRequired"
                v-model="regiestForm.child"
              >
                <option :value=0>不需要</option>
                <option :value=1>1 張</option>
                <option :value=2>2 張</option>
                <option :value=3>3 張</option>
              </Field>
            </div>
            <ErrorMessage name="attendPeople" class="error" />
          </div>
          <div
            class="field--section attend--field"
            v-if="regiestForm.attendEvent == 1"
          >
            <h5>是否需要安排素食餐點？</h5>
            <div class="radio--group p-l-5">
              <div class="switch">
                <label>
                  否
                  <input type="checkbox" v-model="regiestForm.speical" />
                  <span class="lever"></span>
                  是
                </label>
              </div>
            </div>
          </div>
          <div class="field--section">
            <h5>想對我們說的話</h5>
            <div class="radio--group p-l-5">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                  v-model="regiestForm.message"
                ></textarea>
                <label for="textarea1">您的悄悄話</label>
              </div>
            </div>
          </div>
        </div>
        <div class="field--section attend--field">
          <h5>溫馨小提醒</h5>
          <blockquote>
            如果您已送出表單，但有要更改的話，再麻煩提前跟我們說一聲哦！
          </blockquote>
        </div>
      </div>
      <!-- submit object : {{ regiestForm }} -->
      <div class="card-action center-align">
        <button class="btn waves-effect waves-light" type="button" @click="checkForm" :disabled="isSend">送出</button>
      </div>
    </div>
  </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import axios from 'axios';
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  name: "RegiestForm",
  props: {
    profile: {
      userId: "",
      displayName: "",
    },
  },
  data() {
    return {
      regiestForm: {
        LineUserId: "",
        LineUserName: "",
        fullName: "",
        attendPeople:0,
        child:0,
        speical:false,
        message:""
      },
      isSend:false,
      success:false
    };
  },
  watch:{
    profile:{
      handler(val,old){
        alert(val.LineUserId)
        console.log(val,old)
      },
      deep:true
    }
  },
  methods: {
    // Validator function
    isRequired(value) {
      return value ? true : "此欄位必填";
    },
    checkForm: function (e) {
      //alert(this.regiestForm.LineUserId,this.regiestForm.LineUserName)
      e.preventDefault();
      this.regiestForm.LineUserId = this.profile.userId;
      this.regiestForm.LineUserName = this.profile.displayName;
      this.isSend = true
      axios.post("https://weddinglinebot.azurewebsites.net/api/register",this.regiestForm).then(()=>{
        alert("正確")
      }).catch((error)=>{
        console.log(error)
        alert("錯誤")
      })
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body {
  background-color: #e1e5e4;
  font-family: "Helvetica Neue", Helvetica, Arial, "Heiti TC",
    "Apple LiGothic Medium", "微軟正黑體", sans-serif;
}
select {
  display: inherit;
}
#lineForm {
  padding: 5px 1rem;
}
#formCard {
  max-width: 512px;
  margin: 0.5em auto;
}
.field--section {
  padding-bottom: 20px;
}
button {
  background-color: #4285f4;
}
.p-l-5 {
  padding: 5px;
}
.input-field {
  margin-top: 10px;
}
.radio--group p {
  padding: 5px 0;
}
.error {
  color: #f44336;
}

.lmask {
  position: absolute;
  height: 100%;
  width: 100%; 
  background-color: #000;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;;
  opacity: 0.4;
  &.fixed {
    position: fixed;
  }
  &:before {
    content: '';
    background-color: rgba(0,0,0,0);
    border: 5px solid rgba(0,183,229,0.9);
    opacity: .9;
    border-right: 5px solid rgba(0,0,0,0);
    border-left: 5px solid rgba(0,0,0,0);
    border-radius: 50px;
    box-shadow: 0 0 35px #2187e7;
    width: 50px;
    height: 50px;
    -moz-animation: spinPulse 1s infinite ease-in-out;
    -webkit-animation: spinPulse 1s infinite linear;

    margin: -25px 0 0 -25px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &:after {
    content: '';
    background-color: rgba(0,0,0,0);
    border: 5px solid rgba(0,183,229,0.9);
    opacity: .9;
    border-left: 5px solid rgba(0,0,0,0);
    border-right: 5px solid rgba(0,0,0,0);
    border-radius: 50px;
    box-shadow: 0 0 15px #2187e7;
    width: 30px;
    height: 30px;
    -moz-animation: spinoffPulse 1s infinite linear;
    -webkit-animation: spinoffPulse 1s infinite linear;

    margin: -15px 0 0 -15px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
}

@-moz-keyframes spinPulse {
  0% {
    -moz-transform:rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #2187e7;
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-moz-keyframes spinoffPulse {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spinPulse {
  0% {
    -webkit-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #2187e7;
  }
  50% {
    -webkit-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-webkit-keyframes spinoffPulse {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

</style>
