<template>
    <div>
        <el-container class="content-row">
            <div class="input-tip">商品名称：</div>
            <div class="input-field">
                <el-input v-model="queryParams.name"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">商品简介：</div>
            <div class="input-field">
                <el-input type="textarea" :rows="3" v-model="queryParams.desc"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">商品封面：</div>
            <el-upload :auto-upload="false" :limit="5" list-type="picture-card" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <el-icon class="el-icon-plus avatar-uploader-icon"></el-icon>
            </el-upload>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">列表图片：</div>
            <el-upload :auto-upload="false" :limit="5" list-type="picture-card" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">上架日期：</div>
            <div class="input-field">
                <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="queryParams.timeRange"></el-date-picker>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">商品分类</div>
            <div class="input-field">
                <el-select v-model="queryParams.category">
                    <el-option key="0" label="男装" :value="0"></el-option>
                    <el-option key="1" label="男装" :value="1"></el-option>
                    <el-option key="2" label="围巾" :value="2"></el-option>
                </el-select>
            </div>
            <div style="margin-top:6px">
                <el-button type="primary" size="mini" round>
                    添加分类
                </el-button>
            </div>
        </el-container>
        <el-contianer class="content-row">
            <el-button type="success" plain @click="submit">提交</el-button>
            <span style="margin-left:40px"></span>
            <el-button type="warning" plain @click="cancel">取消</el-button>
        </el-contianer>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                queryParams:{
                    name: "",
                    desc: "",
                    timeRange: "",
                    category: 0
                }
            }
        },
        methods:{
            cancel(){
                this.$router.go(-1)
            },
            submit(){
                this.$message({
                    type: 'success',
                    message: '设置商品基本属性:' + JSON.stringify(this.queryParams)
                })
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>