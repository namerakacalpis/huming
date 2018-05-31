var app = new Vue({
  el: '#app',
  data: {

    
    items: [
        { message: 'Foo' },
        { message: 'Bar' }
    ],

    archives: [
        {
            version: "1.9.3",
            releaseNote: "note",
            updatedAt: "2018/05/29 12:00:00",
            apps: [
                {
                    name: "k1",
                    src: "k1",
                }
            ]
        }
    ]
  }
})