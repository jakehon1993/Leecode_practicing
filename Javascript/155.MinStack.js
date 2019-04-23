/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = {};
    this.size = 0;
    
    // min value index
    this.mvIndex = {};
    this.mvSize = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.size) {
        this.mvIndex[++this.mvSize] = 1;
    } else if(x <= this.stack[this.mvIndex[this.mvSize]]) {
        this.mvIndex[++this.mvSize] = this.size + 1;
    }
    this.stack[++this.size] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.size) {
        if (this.size === this.mvIndex[this.mvSize]) {
            delete this.mvIndex[this.mvSize--];
        }
        delete this.stack[this.size--];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.size];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.mvIndex[this.mvSize]];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */