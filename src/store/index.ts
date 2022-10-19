import { defineStore } from "pinia";
import {ref, Ref} from 'vue'
export const useStore = defineStore("store", {
  state: () => {
    return {
        showBlock : <boolean>false,
        task :ref<object>({})
    };
  },
  actions:{
    setValue (val :boolean): void{
        this.showBlock = val
    },
    addTask (val :object):void{
              this.task = val
          }
  }
});
