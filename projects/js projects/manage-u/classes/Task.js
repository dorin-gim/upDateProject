    class Task{
            constructor(description){
                this.id=Math.floor(Math.random()*1000);
                this.description= description;
                this.completed=false;
                this.favTask=false;
            }
        }

        export default Task;