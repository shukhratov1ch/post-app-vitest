<script setup lang="ts">
import { defineProps } from 'vue'
import BaseBtn from './baseBtn.vue';
import {useStore} from '../store'
const store = useStore()
defineProps({
    title: {
        type: String
    },
    body :{
        type : String
    }
})
const emit =defineEmits(['edit'])
function editTask(){
    emit('edit')
    store.setValue(true)
}
</script>
<template>
        <div class="w-[800px] mt-[10px]">
            <div class="flex justify-between items-center p-[20px] w-full bg-gray-100">
                <div>
                    <p>{{title}}</p>
                </div>
                <div>
                    <BaseBtn @click="editTask" class="bg-sky-400 mr-3">Edit</BaseBtn>
                    <BaseBtn class="bg-red-600">Delete</BaseBtn>
                </div>
            </div>
            <div class="flex items-center p-[20px] w-full bg-gray-200">
                <p>{{body}}</p>
            </div>
        </div>
</template>