<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import {
  DISCOUNT
} from './_consts/routers'

import {
  updateProductApi,
  createProductApi,
  delProductApi
} from './api'

import tableCfgMaker from './_consts/tableCfgMaker'
import EditDialog from './_thumbs/EditDialog.vue'
import ReserveTimeDialog from './_thumbs/ReserveTimeDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'

let adding = false
export default {
  name: 'Banner',
  components: {
    EditDialog,
    ReserveTimeDialog,
    ImgZoom,
    SearchTable
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi

    return {
      productTypeList: [],
      searchKeyword: '',
      categoryId: '',
      multipleSelection: [],
      editDialogVisible: false,
      reverseInfoDialogVisible: false,
      editData: null,
      reverseInfoData: null,
      apiKeysMap: {
        name: {
          value: undefined
        },
        categoryId: {
          value: undefined
        }
      }
    }
  },
  created () {
    this.$_getProductTypeList().then(list => {
      this.productTypeList = list
    })
  },
  computed: {
  },
  watch: {
    editDialogVisible (val) {
      if (!val) {
        this.editData = null
        adding = false
      }
    }
  },
  methods: {
    // 搜索banner
    handleSearch (e) {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        name: {
          value: this.searchKeyword || undefined
        },
        categoryId: {
          value: this.categoryId || undefined
        }
      })
    },
    // 多选
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 打开编辑或新增弹框
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      this.editData = rowData
      adding = !!isAdd
    },
    openReserveInfoDialog (rowData) {
      this.reverseInfoDialogVisible = true
      this.reverseInfoData = rowData
    },
    // 删除单个banner
    delRow (ids) {
      this.$confirm('是否删除选中项目？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            delProductApi({ids}).then(res => {
              done()
              this.$message({
                type: 'success',
                message: '删除成功'
              })
              this.updated = true
              this.$refs.searchTable.getList()
            })
          } else {
            done()
          }
        }
      })
    },
    // 批量删除
    batchRemove () {
      this.delRow(this.multipleSelection.map(item => item.productId).join(','))
    },
    // 提交编辑或新增
    handleEditSubmit (data, respondCb) {
      let formData
      const uploadForm = (imageUrl) => {
        let sendData = {
          id: data.productId,
          name: data.name,
          description: data.description,
          images: imageUrl,
          categoryId: data.typeId,
          showPrice: data.showPrice,
          salesPrice: data.salesPrice
        }
        let requestFn = adding ? createProductApi : updateProductApi
        return requestFn(sendData).then(res => {
          this.$message({
            type: 'success',
            message: adding ? '添加成功' : '修改成功'
          })
          this.updated = true
          this.editDialogVisible = false
          this.$refs.searchTable.init()
          respondCb(true)
        }).catch(() => {
          respondCb()
        })
      }
      if (data.file) {
        formData = new FormData()
        formData.append('file', data.file)
        // 上传图片后获取地址再上传表单数据
        this.$uploadFile(formData).then(res => {
          uploadForm(res.content)
        })
      } else {
        uploadForm(data.cover)
      }
    },
    handleInfoEditSubmit () {
    },
    toDiscountLevel (rowData) {
      this.$router.push({
        name: DISCOUNT.name,
        params: {
          id: rowData.id
        }
      })
    }
  }
}
</script>

<template>
  <div id="page-product">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
        <div class="search-wrap flex--vcenter">
          <div class="tool-item">
            项目名称：
            <el-input 
              v-model="searchKeyword" 
              style="width: auto;"
              @keyup.enter.native="handleSearch" />
          </div>
          <div class="tool-item">
            分类名称：
            <el-select v-model="categoryId" placeholder="选择分类">
              <el-option
                v-for="item in productTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <el-button
            class="tool-item"
            type="primary"
            @click="handleSearch">搜索
          </el-button>
        </div>
        <div class="btn-wrap">
          <el-button
            class="btn--add"
            type="primary"
            @click="openEditDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
          <el-button
            :disabled="!multipleSelection.length"
            @click="batchRemove">
            批量删除
          </el-button>
        </div>
      </div>
      <el-table-column
        slot="column-cover"
        align="center"
        prop="cover"
        label="封面图"
        min-width="140">
        <template scope="scope">
          <img-zoom
            :src="scope.row.cover"
            style="width: 80px;height: 60px;">
          </img-zoom>
        </template>
      </el-table-column>
      <el-table-column
        slot="column-operate"
        align="center"
        label="操作"
        width="220">
        <template scope="scope">
          <div class="flex--center operate-items">
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="toDiscountLevel(scope.row)">
                规格
              </el-button>
            </span>
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="openEditDialog(scope.row)">
                编辑
              </el-button>
            </span>
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="delRow(scope.row.productId)">
                删除
              </el-button>
            </span>
          </div>     
        </template>
      </el-table-column>
    </search-table>
    <edit-dialog
      v-model="editDialogVisible"
      :typeList="productTypeList"
      :data="editData"
      @submit="handleEditSubmit">
    </edit-dialog>
    <!-- <reserve-info-dialog
      v-model="reverseInfoDialogVisible"
      :data="reverseInfoData"
      @submit="handleInfoEditSubmit">
    </reserve-info-dialog> -->
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #page-product {
    .display-num-control {
      margin-left: 60px;
      .label {
        color: $color3;
      }

      .el-icon-edit {
        color: #adb9ca;
        cursor: pointer;
      }
    }

    .table-tools {
      margin-top: 30px;
      justify-content: space-between;
    }
    .btn--del {
      background: $bg5;
      color: #fff;
      &:hover {
        border-color: transparent;
      }
    }

    .el-table {
      margin-top: 20px;
      td {
        height: 80px;
      }
    }
    .el-table__header {
      th:first-child {
        .cell {
          &:after {
            content: '全选';
            margin-left: 5px;
          }
        }
      }
    }
    .cover-img {
      vertical-align: middle;
      display: inline-block;
      background: $bg6;
    }
    .cover-noimg {
      background: $bg6 url('~@/assets/images/placeholder.png') center no-repeat;
      background-size: 40px 30px;
    }

    .operate-item {
      .el-switch {
        margin-right: 10px;
      }
    }
    .visible-switch {
      color: $color3;
      font-size: 14px;
    }

    .pagination-wrap {
      margin-top: 30px;
      text-align: right;
    }
  }
</style>
