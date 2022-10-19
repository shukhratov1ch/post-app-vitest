<script setup lang="ts">
    import {useAttrs} from 'vue'
    const attrs = useAttrs()
</script>
<template>
    <button  v-bind="attrs" class="border-none outline-none hover:bg-opacity-80 rounded-md  bg-red-500 text-white px-2 py-1"><slot>Edit</slot> </button>
</template>