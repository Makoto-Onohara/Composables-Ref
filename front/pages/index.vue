<script setup lang="ts">
const message = ref("Hi!");
const message_1 = useMessage();
const message_2 = useMessage();
const { message: message_3, setMessage: set3message } = useMessage();
const refMessage_1 = useRefMessage();
const refMessage_2 = useRefMessage();
const outRef_1 = useOuntRefMessage();
const outRef_2 = useOuntRefMessage();

let fetchData: string;
const fetch = async () => {
  const { data } = await useFetch("/api/hello");
  fetchData = data.value ?? "";
  message.value = fetchData + "ref";
  message_1.setMessage(fetchData + "massage_1");
  // message_2.setMessage(fetchData)
  refMessage_1.setMessage(fetchData + "refMessage_1");
  refMessage_2.setMessage(fetchData + "refMessage_2");
  outRef_1.setMessage(fetchData + "outRef_1");
  // outRef_2.setMessage(fetchData)
  set3message(fetchData + "分割代入");
};

const reset = () => {
  message.value = "";
  message_1.setMessage("");
  // message_2.setMessage('')
  refMessage_1.setMessage("");
  refMessage_2.setMessage("");
  // outRef_1.setMessage('')
  outRef_2.setMessage("");
};

</script>
<template>
  <div class="wrapper">
    <div class="item">
      <p class="title">親コンポーネント</p>
      <p>[index.vue]{{ message }}</p>
      <p>[useMessage_1(useState)]{{ message_1.message }}</p>
      <p>
        [useMessage_2(useState)]{{ message_2.message
      }}<span v-if="message_2.message.value"></span>
      </p>
      <p>[useMessage(useState)分割代入]{{ message_3 }}</p>
      <p>[useRefMessage_1(ref)]{{ refMessage_1.message }}</p>
      <p>[useRefMessage_2(ref)]{{ refMessage_2.message }}</p>
      <p>[outref_1(exportの外)]{{ outRef_1.message }}</p>
      <p>[outref_2(exportの外)]{{ outRef_2.message }}</p>
    </div>
    <div class="item child">
      <p class="title">子コンポーネント(値の設定はしていない！！)</p>
      <ChildComponent />
    </div>
  </div>
  <div class="buttons">
    <button @click="fetch">API</button>
    <button @click="reset">RESET</button>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  max-width: 800px;
  border: solid 10px;
  background-color: lightblue;
  padding: 20px;
  display: flex;

  .item {
    width: 50%;
  }

  .title {
    font-weight: bolder;
  }

  .child {
    background-color: lightcoral;
    padding-left: 20px;
  }
}
.buttons {
  display: flex;
  justify-content: space-evenly;

  button {
    background: cyan;
    padding: 10px 20px;
  //   border-radius: 5px;
  //   border: 0;
  }
}
</style>
