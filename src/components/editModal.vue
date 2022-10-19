<script setup lang="ts">
import BaseBtn from './baseBtn.vue';
import { useStore } from '../store'
import BaseInput from './baseInput.vue';
import { ref } from 'vue';
const store = useStore()
let title = ref<string>('')
let body = ref<string>('')
console.log(store.$state.showBlock);
console.log(store.task);
if (store.$state.showBlock) {
    title.value = store.task.title
    body.value = store.task.body
   
    
}
function Cancel():void{
    store.setValue(false)
    title.value = ''
    body.value = ''
}
</script>
<template>
    <div v-show="store.showBlock" @click.self="store.setValue(false)"
        class="bg-black bg-opacity-30 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full">
        <div class="rounded-md p-[20px] bg-gray-100 ">
            <div>
                <div>
                    <label for="title" class="block">title:</label>
                    <BaseInput v-model="title" class="mb-5 border-b-2 outline-none p-1 w-full" id="title" />
                </div>
                <div>
                    <label for="body" class="block">body:</label>
                    <textarea v-model="body" name="" id="body" cols="70" rows="5" class="outline-none p-1"></textarea>
                </div>
                <div class="float-right mt-3">
                    <BaseBtn @click="Cancel" class="bg-gray-200 text-black mr-3">Cancel</BaseBtn>
                    <BaseBtn class="bg-sky-400">Edit</BaseBtn>
                </div>
            </div>
        </div>
    </div>
</template>
<div>
  
</div>