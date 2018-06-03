//テンプレートの設定


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>This is a todo</li>'
});





Vue.component('button-counter', {

    props: ['kintama'],
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} , {{kintama}} times.</button>'
  });
var template =  '<todo-item></todo-item>';

var Message = {
    data: function () {
        return {
          kintama: "いやっほ"
        }
      },
    template: '<button-counter v-bind:kintama="kintama"/>'
};

Vue.component('my-archives', {

    props: ['archives'],
    template: '#my-component'
});

var iOS = {
    data: function () {
        return {
            archives: iOSArchives
        }
      },
    template: '<my-archives v-bind:archives="archives"></my-archives>'
};


var Android = {
    data: function () {
        return {
            archives: androidArchives
        }
      },
    template: '<my-archives v-bind:archives="archives"></my-archives>'
};

var Company = { template:'<div class="page page--company"><p>Company</p></div>'};
var Work = { template:'<div class="page page--work"><p>Work</p></div>'};
var Culture = { template: '<div class="page page--culture"><p>Culture</p></div>'};
var Entry = { template: '<div class="page page--entry"><p>Entry</p></div>'};
var Home = { template: '<div class="page page--home"><p>Home</p></div>'};
  
//ルーティングの設定
var routes = [
    { path: '/ios', component: iOS,meta: { title: 'Message',desc: 'Messageの説明' }  },  
    { path: '/android', component: Android,meta: { title: 'Message',desc: 'Messageの説明' }  },  
  { path: '/message', component: Message,meta: { title: 'Message',desc: 'Messageの説明' } ,props:{unko:"kusai2"} },
  { path: '/company', component: Company,meta: { title: 'Company',desc: 'Companyの説明' }  },
  { path: '/work', component: Work,meta: { title: 'Work',desc: 'Workの説明' }  },
  { path: '/culture', component: Culture,meta: { title: 'Culture',desc: 'Cultureの説明' }  },
  { path: '/entry', component: Entry,meta: { title: 'Entry',desc: 'Entryの説明' }  },
  { path: '/', component: Home,meta: { title: 'Home',desc: 'Homeの説明' }  }
]

var router = new VueRouter({
  //mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

//titleとdescriptionを変更
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
//   document.getElementsByTagName("meta")["description"].setAttribute('content',to.meta.desc);  
  next();
});

var app = new Vue({
  router
}).$mount('#wrapper');