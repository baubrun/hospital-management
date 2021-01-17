import Heap from "./heap"


class MaxHeap extends Heap {
  
    bubbleDown() {
        let index = 0
        console.log('this.items[index].care_level', this.items[index].care_level)
        console.log()
        console.log('this.leftChild(index).care_level', this.leftChild(index) && this.leftChild(index).care_level)
        console.log()
        while (
            this.leftChild(index) &&
            this.leftChild(index).care_level > this.items[index].care_level ||

            this.rightChild(index) &&
            this.rightChild(index).care_level > this.items[index].care_level
        ) {
            let biggerIndex = this.leftChildIndex(index)
            if (
                this.rightChild(index) &&
                this.rightChild(index) > this.items[biggerIndex]) {
                biggerIndex = this.rightChildIndex(index)
            }
            this.swap(biggerIndex, index)
            index = biggerIndex
        }
    }


    bubbleUp() {
        let index = this.items.length - 1
        while (
            this.parent(index) &&
            this.parent(index).care_level < this.items[index].care_level
        ) {
            this.swap(this.parentIndex(index), index)
            index = this.parentIndex(index)
        }
    }


    add(items) {
       items.forEach(item => {
        this.items[this.items.length] = item
        this.bubbleUp()
       })
    }

    poll() {
        let item = this.items[0]
        this.items[0] = this.items[this.items.length - 1]
        this.items.pop()
        this.bubbleDown()
        return item
    }


}


export default MaxHeap