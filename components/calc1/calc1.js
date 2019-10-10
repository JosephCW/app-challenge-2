const adder = new Vue({
    el: '#calc1',
    data: {
        input1: 1,
        input2: 2
    },
    computed: {
        result: function() {
            //return `Result is: ${parseInt(this.input1)}.`
            return `Result is: ${this.input1 + this.input2}`
        }
    }
})