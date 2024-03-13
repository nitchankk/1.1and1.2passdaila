//ลิฟ
class Elevator {
    constructor(maxFloor,minFloor) {
      this.maxFloor = maxFloor
      this.minFloor = minFloor 
      this.currentFloor = 0
    }
    goUp() {
      if(this.currentFloor < this.maxFloor){
        this.currentFloor++
      }
    }
    goDown() {
      if(this.currentFloor > this.minFloor){
        this.currentFloor--
      }
    }
    goToFloor(floor) {
      if(floor >= this.minFloor && floor <= this.maxFloor){
        this.currentFloor = floor

      }
    }
    displayFloor(){
    console.log(this.currentFloor)
    }

}
//6 test
const lip = new Elevator(10,0)

lip.goUp()
lip.displayFloor()
lip.goDown()
lip.displayFloor()
lip.goToFloor(8)
lip.displayFloor()