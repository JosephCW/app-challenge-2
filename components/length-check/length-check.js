const adder = new Vue({
    el: '#length-check',
    data: {
        userInput: 'Here is a random string'
    },
    computed: {
        result: function() {
            //return `Result is: ${parseInt(this.input1)}.`
            return `Remaining Characters available: ${250 - this.userInput.length}`
        }
    }
})