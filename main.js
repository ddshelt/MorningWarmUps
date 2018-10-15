let app = new Vue({

    el: "#app",

    data: {
        show: 'grid',
        apiRequest: new XMLHttpRequest(),
        cats: {}
    },

    computed: {

        showGrid: function () {
            return this.show == 'grid';
        },

        showList: function () {
            return this.show == 'list';
        }

    },

    created: function () {

        // Format a url
        // let url = 'https://api.thecatapi.com/v1/images/search?limit=24';
        let url = 'https://api.giphy.com/v1/gifs/search?api_key=Gnwu3fywTWyo2znbet6U8Dx7CSdyS41j&q=cats&limit=24'

        // Fetch from the url
        this.apiRequest.onload = this.onSuccess;
        this.apiRequest.onerror = this.onError;
        this.apiRequest.open('get', url, true);
        // this.apiRequest.setRequestHeader('x-api-key', "Gnwu3fywTWyo2znbet6U8Dx7CSdyS41j");
        this.apiRequest.send();

    },

    methods: {

        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        },

        onError: function () {
            console.log("oops!");
        },

        onSuccess: function () {

            if (this.apiRequest.status == "200") {
                this.cats = JSON.parse(this.apiRequest.responseText);
                this.cats = this.cats.data;
                // console.log(this.cats)
            }
            else {
                this.onError();
            }

        }

    }

});
