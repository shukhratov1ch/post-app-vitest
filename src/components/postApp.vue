<script setup lang="ts">
import { ref } from 'vue'
import PostItem from "./postItem.vue";
import axios from 'axios'
import editModal from './editModal.vue'
import { useStore } from '../store'
const store = useStore()
let posts = ref<object[]>([])
axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then((res) => {
    posts.value = res.data
})
function logger(id: number) {
    const posst = <object>posts.value.at(id)
    store.addTask(posst)
    console.log(store.task);

}
</script>
<template>
    <div class="flex justify-center w-full relative">
        <div>
            <div>
                <div v-for="(post,i) in posts" :key="post.id">
                    <PostItem @edit="logger(i)" :title="post.title" :body="post.body"></PostItem>
                </div>
            </div>
            <div>
                <editModal></editModal>
            </div>
        </div>

    </div>
</template>