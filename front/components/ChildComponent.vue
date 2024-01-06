<script setup lang="ts">
const message = ref('Hi!')
const message_1 = useMessage()
const message_2 = useMessage()
const { message: message_3, setMessage: set3message} = useMessage()
const refMessage_1 = useRefMessage()
const refMessage_2 = useRefMessage()
const outRef_1 = useOuntRefMessage()
const outRef_2 = useOuntRefMessage()

console.log(message_1)
</script>
<template>
  <div>
    <p>[index.vue]{{ message }}</p>
    <p>[useMessage_1(useState)]{{ message_1.message }}</p>
    <p>[useMessage_2(useState)]{{ message_2.message }}</p>
    <p>[useMessage(useState)分割代入]{{ message_3 }}</p>
    <p>[useRefMessage_1(ref)]{{ refMessage_1.message }}</p>
    <p>[useRefMessage_2(ref)]{{ refMessage_2.message }}</p>
    <p>[outref_1(exportの外)]{{ outRef_1.message }}</p>
    <p>[outref_2(exportの外)]{{ outRef_2.message }}</p>
  </div>
</template>
