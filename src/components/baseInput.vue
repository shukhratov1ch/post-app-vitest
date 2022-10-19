<script setup lang="ts">
 import {useAttrs} from 'vue'
 defineProps(["modelValue"])
 defineEmits(['update:modelValue'])
 const attrs = useAttrs()

</script>
<template>
    <input type="text" v-bind="$attrs"
    :value="modelValue" 
    @input="$emit('update:modelValue',$event.target.value)">
</template>