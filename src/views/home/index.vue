<template>
  <div class="app-container">
    <div class="logo"></div>
    <div class="text-container">
      <img :src="bird" alt="pic">
      激活Super

    </div>
    <div class="input-container">
      <van-cell-group inset>
        <van-field
          v-model="email"
          class="input-item"
          required
          border
          placeholder="请输入多邻国邮箱"
        />
        <van-field
          v-model="activeCode"
          border
          class="input-item"
          required
          placeholder="请输入激活码"
        />
      </van-cell-group>

    </div>
    <van-button @click="handleActive" class="active-btn" color="#58cc02">激活会员</van-button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent,ref } from 'vue';
import bird from '@/assets/images/bird.svg'
import { fetchVerify } from '../../api/index'
import { showNotify } from 'vant';

defineComponent({
  name:'HomeCom'
})

const email = ref('')
const activeCode = ref('')

const handleActive = async () => {
  const params = {
    email: email.value,
    secret: activeCode.value
  }
  const {data,code,message} = await fetchVerify(params)
  console.log('data', data);
  if (code === 0) {
    showNotify({ type: 'success', message: '激活成功' });
  } else {
    showNotify({type:'danger',message:message})
  }
  
}

</script>

<style lang="scss" scoped>
.app-container{
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo{
    width: 154px;
    height: 36px;
    background: url('../../assets/images/logo.svg') 50% 50% no-repeat;
  }
  .text-container{
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #58cc02;
    font-size: 40px;
    img{
      width: 225px;
      height: 228px;
      margin-bottom: 24px;

    }
  }
}
.input-item{
  width: 311px;
  border: 1px solid #a1a1a1;
  border-radius: 12px;
  margin-bottom: 16px;
}
.active-btn{
  width: 311px;
  height:40px;
  line-height: 40px;
  font-size: 20px;
  border-radius: 8px;
}

</style>