var mainApp = new Vue({
    el: '#app',
    components: {
        home: home,
        pictures: pictures
    },
    data: {
        drawer: false,
        items: [
            { icon: 'home', title: 'Home', link: 'home' },
            { icon: 'golf_course', title: 'Goals', link: 'goal' },
            { icon: 'comment', title: 'Reviews', link: 'reviews' },
            { icon: 'call_split', title: 'Comparison', link: 'comparison' },
            { icon: 'memory', title: 'Technical Challenges', link: 'challenges' },
            { icon: 'photo_library', title: 'Pictures', link: 'pictures' }
        ],
        miniVariant: false,
        title: 'Planning Application',
        currentPage: "home"
    },
    methods: {
        onLinkClicked: function (item) {
            this.currentPage = item.link;
            this.drawer = false;
        }
    }
})