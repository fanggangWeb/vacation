import fetch from '@/utils/fetch'
import qs from 'qs'
import { getImgUrl } from '@/utils/operation' // 处理图片路径
// const HTTP = 'http://192.168.199.98:8086'
const HTTP = 'http://192.168.30.177:8086'
// 获取申请人的审批人
export function fetchApproval(taskType, lengthOfTime) {
  let data = {
    userLogicId: '1ebcd180195a45568628c9d72a7a4333',
    taskType,
    lengthOfTime
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/user/selectApprover`,
    method: 'post',
    data
  })
}
// 新增任务
export function addVacation(info) {
  let data = {
    applicantId: '1ebcd180195a45568628c9d72a7a4333',
    applicantName: '汪宇',
    tasktype: info.selectValue,
    beginTime: info.startTime,
    endTime: info.endTime,
    lengthOfTime: info.reason,
    cause: info.reason,
    outgoingLocation: info.area,
    taskPictureUrl: getImgUrl(info.uploadValue).join(',')
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/insertSelective`,
    method: 'post',
    data
  })
}
// 请假明细列表接口
export function fetchDetails () {
  let data = {
    applicantId: '3c8eaa6baf604bf5a21cb81edd1d3f54'
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveDetailedCount`,
    method: 'post',
    data
  })
}
// 我发起的请假单
export function sendoutleave (dataType) {
  let data = {
    id: '3c8eaa6baf604bf5a21cb81edd1d3f54',
    type: dataType.type,
    taskType: dataType.taskType
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveList`,
    method: 'post',
    data
  })
}
// 选择请假类型后查看请假次数及时间
export function recordVacation (taskType) {
  let data = {
    applicantId: '3c8eaa6baf604bf5a21cb81edd1d3f54',
    taskType
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveNumber`,
    method: 'post',
    data
  })
}
