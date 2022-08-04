<template>
  <Form id="line-form-app" @submit="checkForm">
    <div class="card" id="formCard">
      <div class="card-image">
        <img src="https://imgur.com/XF2qm3W.jpg" />
        <span class="card-title">
          Save the date,
          <br />join us to celebrate.
        </span>
      </div>
      <div class="card-content">
        Line Profile : {{ profile }}
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
                    value="1"
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
                    value="2"
                    :rules="isRequired"
                    v-model="regiestForm.attendEvent"
                  />
                  <span>禮到人不到，請寄喜帖給我！</span>
                </label>
              </p>
              <p>
                <label>
                  <Field
                    name="attendEvent"
                    as="input"
                    type="radio"
                    value="3"
                    :rules="isRequired"
                    v-model="regiestForm.attendEvent"
                  />
                  <span>無法出席，祝你們幸福滿滿</span>
                </label>
              </p>
              <ErrorMessage name="attendEvent" class="error" />
            </div>
          </div>
          <div
            class="field--section attend--field send--invited"
            v-if="regiestForm.attendEvent == 1 || regiestForm.attendEvent == 2"
          >
            <h5>喜帖寄送方式：</h5>
            <div class="radio--group p-l-5">
              <p>
                <label>
                  <Field
                    name="inviteType"
                    as="input"
                    type="radio"
                    value="1"
                    :rules="isRequired"
                    v-model="regiestForm.inviteType"
                  />
                  <span>好呦！請寄給我喜帖 ~ 讓我珍藏 :heart:</span>
                </label>
              </p>
              <p>
                <label>
                  <Field
                    name="inviteType"
                    as="input"
                    type="radio"
                    value="2"
                    :rules="isRequired"
                    v-model="regiestForm.inviteType"
                  />
                  <span>我比較喜歡電子喜帖，而且我會準時參加 ^^</span>
                </label>
              </p>
            </div>
            <div class="invite--address" v-if="regiestForm.inviteType == 1">
              <Field
                name="inviteAddress"
                as="input"
                type="text"
                :rules="isRequired"
                v-model="regiestForm.inviteAddress"
              />
              <label for="inviteAddress">喜帖收件地址 (含郵遞區號)</label>
            </div>
            <ErrorMessage name="inviteAddress" class="error" />
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
                    value="1"
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
                    value="2"
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
                <option value="1">1 人</option>
                <option value="2">2 人</option>
                <option value="3">3 人</option>
                <option value="4">4 人</option>
                <option value="5">5 人</option>
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
                <option value="0" selected>不需要</option>
                <option value="1">1 張</option>
                <option value="2">2 張</option>
                <option value="3">3 張</option>
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
            <h5>想對我們說的話 :heart:</h5>
            <blockquote style="border-left: 5px solid #26a69a">
              當天會將您的祝福放在大螢幕上哦~
            </blockquote>
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
            12月是迎接聖誕節的開始，讓我們約定Dress Code為紅「或」綠色吧 !
            只要穿有紅「或」綠其中ㄧ顏色的衣物、鞋子或配件...都可喔～
          </blockquote>
          <blockquote>
            如果您已送出表單，但有要更改的話，再麻煩提前跟我們說一聲哦！
          </blockquote>
        </div>
      </div>
      submit object : {{ regiestForm }}
      <div class="card-action center-align">
        <button class="btn waves-effect waves-light" type="submit">送出</button>
      </div>
    </div>
  </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  name: "RegiestForm",
  props: {
    profile: {
      lineUserId: "",
      displayName: "1111",
    },
  },
  data() {
    return {
      regiestForm: {
        lineUserId: this.profile.userId,
        lineUserName: this.profile.displayName,
        fullName: "",
      },
    };
  },
  methods: {
    // Validator function
    isRequired(value) {
      return value ? true : "此欄位必填";
    },
    checkForm: function (e) {
      console.log(this.regiestForm);
      e.preventDefault();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
