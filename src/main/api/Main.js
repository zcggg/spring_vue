import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function getMain() {
  axios.get("/MainPage").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.user, response.data.invigilationList);
      bus.$emit(bus.user, response.data.tsakList);
    }, 1000);
  });
}
export function getUser() {
  axios.get("/UserPage/ListAll").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.user, response.data.userList);
    }, 1000);
  });
}
export function getUserByName(data) {
  axios.get(`/UserPage/findUserByName/${data.name}`).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.user, response.data.user);
    }, 1000);
  });
}
export function postUserAdd(data) {
  axios.post("/UserPage/Admin/addUser", data.user);
}
export function postUserDelete(data) {
  axios.post("/UserPage/Admin/deleteUser", data.user);
}
export function postUserAlter(data) {
  axios.post("/UserPage/Admin/updateUser", data.user);
}

export function getInv() {
  axios.get("/InvPage/ListAll").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.inv, response.data.invigilationList);
    }, 1000);
  });
}
export function getInvDistribute() {
  axios.get("/InvPage/ListAllDis").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.distribute, response.data.distributionList);
    }, 1000);
  });
}
export function getInvByName(data) {
  axios.get(`/InvPage/findInvigilationBy/${data.course}`).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.inv, response.data.invigilation);
    }, 1000);
  });
}
export function postInvAdd(data) {
  axios.post("/InvPage/Admin/addInv", data.invigilation);
}
export function postInvDistributeAdd(data) {
  axios.post("/InvPage/Admin/addDis", data.distribution);
}
export function postInvDelete(data) {
  axios.post("/UserPage/Admin/deleteUser", data.invigilation);
}
export function postInvDistributeDelete(data) {
  axios.post("/InvPage/Admin/deleteDis", data.distribution);
}
export function postInvAlter(data) {
  axios.post("/InvPage/Admin/updateInv", data.invigilation);
}
export function postInvDistributeAlter(data) {
  axios.post("/InvPage/Admin/updateDis", data.distribution);
}

export function getTask() {
  axios.get("/TaskPage/ListAll").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.task, response.data.taskList);
    }, 1000);
  });
}
export function getTaskRecord() {
  axios.get("/TaskPage/ListAllTaskRecord").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.taskRecord, response.data.taskRecordList);
    }, 1000);
  });
}
export function getTaskById(data) {
  axios.get(`/TaskPage/find/${data.task.id}`).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.task, response.data.task);
    }, 1000);
  });
}
export function postTaskAdd(data) {
  axios.post("/TaskPage/Admin/addTask", data.task);
}
export function postTaskRecordAdd(data) {
  axios.post("/TaskPage/Admin/addTaskRecord", data.taskRecord);
}
export function postTaskDelete(data) {
  axios.post("/TaskPage/Admin/deleteTask", data.task);
}
export function postTaskRecordDelete(data) {
  axios.post("/TaskPage/Admin/deleteTaskRecord", data.taskRecord);
}
export function postTaskAlter(data) {
  axios.post("/TaskPage/Admin/updateTask", data.task);
}

export function getNotice() {
  axios.get("/MyPage/Notify").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.task, response.data.noticeList);
    }, 1000);
  });
}

export function getMy() {
  axios.get("/MyPage/user").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.taskRecord, response.data.user);
    }, 1000);
  });
}
export function postMyAlter(data) {
  axios.post("/MyPage/updateUser", data.user);
}
export function getMyInvDistribute() {
  axios.get("MyPage/Distribution").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.distribute, response.data.distribution);
    }, 1000);
  });
}
export function getMyTaskRecord() {
  axios.get("/MyPage/TaskRecord").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.taskRecord, response.data.taskRecord);
    }, 1000);
  });
}
