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
    <van-button 
      @click="handleActive" 
      :loading="isLoading" 
      class="active-btn" 
      :disabled="!email||!activeCode||isLoading" 
      color="#58cc02">
        激活会员
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent,ref } from 'vue';
import bird from '@/assets/images/bird.svg'
import { fetchVerify } from '../../api/index'
import { showNotify, showToast, showSuccessToast } from 'vant';

defineComponent({
  name:'HomeCom'
})

const email = ref('')
const activeCode = ref('')
const isLoading = ref(false)

const handleActive = async () => {
  isLoading.value = true
  //change params
  const params = {
    email: email.value,
    code: activeCode.value
  }
  try {
    const {data,code,msg} = await fetchVerify(params)
    console.log('data', data);
    isLoading.value = false
  
    if (code === 1) {
      showToast({
        type: 'success',
        message: '激活成功',
        duration: 5000
      })
      showNotify(
        {
          type: 'success',
          message: '激活成功',
          position: 'bottom',
          duration: 5000
        }
      );
    } else {
      showNotify(
        {
          type: 'danger',
          message: msg,
          position: 'bottom',
          duration: 5000
        }
      )
      showToast({
        type: 'fail',
        message: '激活失败',
        duration: 5000
      })
    }
    
  } catch (error) {
    showToast({
      type: 'fail',
      message: '激活失败',
      duration: 5000
    })
    showNotify({
      type: 'danger',
      message: error,
      position: 'bottom',
      duration: 5000
    })
    
    isLoading.value = false
    
  }
  
  
}

</script>

<style lang="scss" scoped>
.app-container{
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
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

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}


</style>