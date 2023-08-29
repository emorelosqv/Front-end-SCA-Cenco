<template>
    <input type="file" @change="onChangeFile" name="file" />
</template>
  
<script setup>
methods: {
    onChangeFile(event) {
        this.$emit('update:modelValue', event.target.files[0])
    }
</script>
  
  //Your component made in Vue 3
  <MyInputFileComponent v-model="file" />
  