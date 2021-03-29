/*
 * @Author: Miya
 * @Date: 2021-03-29 11:21:35
 * @LastEditTime: 2021-03-29 11:21:51
 * @LastEditors: Miya
 * @Description: install page
 * @FilePath: \Single-Search-Front\src\page\Install.tsx
 * @Version: 1.0
 */
import { defineComponent,reactive } from 'vue'

const data = reactive({})

const Install = defineComponent({
    setup(){
      data;
      return{ data }
    },

    render(){
        return(<div class="install">TODO</div>)
    }
});

export default Install;