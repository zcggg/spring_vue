import Vue from "vue";
import Router from "vue-router";
import UserSiderbar from "./views/sidebar/UserSidebar";
import UserPage from "./views/page/UserPage";
import InvSiderbar from "./views/sidebar/InvSidebar";
import InvPage from "./views/page/InvPage";
import TaskSidebar from "./views/sidebar/TaskSidebar";
import TaskPage from "./views/page/TaskPage";
import MySiderbar from "./views/sidebar/MySiderbar";
import MyPage from "./views/page/MyPage";
import NoticePage from "./views/page/NoticePage";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Login",
      props: true,
      component: () => import("../login/main")
    },
    {
      path: "/",
      props: true,
      component: () => import("./views/page/MainPage")
    },
    {
      path: "/MainPage",
      props: true,
      component: () => import("./views/page/MainPage")
    },
    {
      path: "/UserPage",
      props: true,
      components: {
        default: UserPage,
        side: UserSiderbar
      }
    },
    {
      path: "/UserAdd",
      props: true,
      components: {
        default: () => import("./views/admOprate/UserAdd"),
        side: UserSiderbar
      }
    },
    {
      path: "/UserDelete",
      props: true,
      components: {
        default: () => import("./views/admOprate/UserDelete"),
        side: UserSiderbar
      }
    },
    {
      path: "/UserAlter",
      props: true,
      components: {
        default: () => import("./views/admOprate/UserAlter"),
        side: UserSiderbar
      }
    },
    {
      path: "/InvPage",
      props: true,
      components: {
        default: InvPage,
        side: InvSiderbar
      }
    },
    {
      path: "/InvAdd",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvAdd"),
        side: InvSiderbar
      }
    },
    {
      path: "/InvDelete",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvDelete"),
        side: InvSiderbar
      }
    },
    {
      path: "/InvAlter",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvAlter"),
        side: InvSiderbar
      }
    },
    {
      path: "/InvDistributeAdd",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvDistributeAdd"),
        side: InvSiderbar
      }
    },
    {
      path: "/InvDistributeDelete",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvDistributeDelete"),
        side: InvSiderbar
      }
    },
    {
      path: "/InvDistributeAlter",
      props: true,
      components: {
        default: () => import("./views/admOprate/InvDistributeAlter"),
        side: InvSiderbar
      }
    },
    {
      path: "/TaskPage",
      props: true,
      components: {
        default: TaskPage,
        side: TaskSidebar
      }
    },
    {
      path: "/TaskAdd",
      props: true,
      components: {
        default: () => import("./views/admOprate/TaskAdd"),
        side: TaskSidebar
      }
    },
    {
      path: "/TaskDelete",
      props: true,
      components: {
        default: () => import("./views/admOprate/TaskDelete"),
        side: TaskSidebar
      }
    },
    {
      path: "/TaskAlter",
      props: true,
      components: {
        default: () => import("./views/admOprate/TaskAlter"),
        side: TaskSidebar
      }
    },
    {
      path: "/TaskRecordAdd",
      props: true,
      components: {
        default: () => import("./views/admOprate/TaskRecordAdd"),
        side: TaskSidebar
      }
    },
    {
      path: "/TaskRecordDelete",
      props: true,
      components: {
        default: () => import("./views/admOprate/TaskRecordDelete"),
        side: TaskSidebar
      }
    },
    {
      path: "/MyPage",
      props: true,
      components: {
        default: MyPage,
        side: MySiderbar
      }
    },
    {
      path: "/MyPageAlter",
      props: true,
      components: {
        default: () => import("./views/page/MyPageAlter"),
        side: MySiderbar
      }
    },
    {
      path: "/MyPageInvDistribute",
      props: true,
      component: {
        default: () => import("./views/page/MyPageInvDistribute"),
        side: MySiderbar
      }
    },
    {
      path: "/MyPageTaskRecord",
      props: true,
      component: {
        default: () => import("./views/page/MyPageTaskRecord"),
        side: MySiderbar
      }
    },
    {
      path: "/NoticePage",
      props: true,
      component: NoticePage
    }
  ]
});
