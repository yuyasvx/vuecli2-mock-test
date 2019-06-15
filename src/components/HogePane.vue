<template>
  <div class="hoge-pane">
    <el-button @click="exec" id="hoge-button">Do</el-button>

    <el-dialog title="Info" :visible.sync="dialogVisible">
      <span>API Executed: {{ aaa }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import hogeApi from '../api/hoge'
export default {
  data() {
    return {
      dialogVisible: false,
      aaa: null
    }
  },
  methods: {
    async exec() {
      this.aaa = await hogeApi.executeApi('aaa')
      this.dialogVisible = true
    }
  }
}
</script>

<style></style>
