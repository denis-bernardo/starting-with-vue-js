var hello = new Vue({
    el: '#hello',
    data: {
        msg: 'Hello Vue!',
        people: [
            {name: "Chaves"},
            {name: "Kiko"},
            {name: "Chiquinha"},
            {name: "Seu Madruga"},
            {name: "Senhor Barriga"}
        ],
        newElement: '',
        elements: [],
        objectA: {
            'font-size': '30px'
        },
        objectB: {
            'color': 'red'
        },
        myListForm: [

        ],
        myForm: {
            name: '',
            email: ''
        }
    },
    methods: {
        addElement: function() {
            var title = this.newElement.trim();
            if (title) {
                this.elements.push({title: title});
                this.newElement = "";
            }
        },
        removeElement: function (e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        },
        myClick: function () {
            alert('Click');
        },
        myKeyUp: function () {
            alert('keyUp');
        },
        addForm: function () {
            this.myListForm.push({name: this.myForm.name,  email: this.myForm.email});
            this.myForm.name = '';
            this.myForm.email = '';
        }
    }
});