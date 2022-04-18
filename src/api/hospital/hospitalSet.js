import request from '@/utils/request'

// const api_name = '/admin/hospital/hospitalSet'
// 根据的我的配置进行修改
const api_name = '/admin/hosp/HospitalSet'

export default {
  // 分页条件查询
  getPageList(current, limit, searchObj) {
    return request({
      url: `${api_name}/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 删除
  delete(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },

  // 批量删除
  batchDelete(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 锁定和取消锁定
  lock(id, status) {
    return request({
      url: `${api_name}/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },

  // 新增
  insert(record) {
    return request({
      url: `${api_name}/saveHospitalSet`,
      method: 'post',
      data: record
    })
  },
  // 根据id获取医院设置
  get(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },

  // 修改医院设置
  update(hospitalSet) {
    return request ({
      url: `${api_name}/updateHospitalSet`,
      method: 'put',
      data: hospitalSet
    })
  }


}
