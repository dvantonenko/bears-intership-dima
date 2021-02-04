<template>
  <div class="container">
    <div class="header">
      <input
        @keyup.enter="addNewColumn"
        placeholder="Enter column"
        class="input_add_column"
        v-model="newColumn"
      />
      <button class="add_column_button add_button_style" @click="addNewColumn">
        Add column
      </button>
    </div>

    <draggable
      class="columns_block"
      :list="arrColumns"
      group="columns"
      :options="{ animation: 150 }"
    >
      <div class="column_elem" v-for="column of arrColumns" :key="column.name">
        <img
          class="cancel_icon"
          src="../assets/icons/cancel.svg"
          @click="deleteColumn"
          :id="column.id"
        />
        <h2>
          {{ column.name }}
        </h2>

        <draggable
          class="drag_n_drop_task"
          :list="column.tasks"
          group="tasks"
          :options="{ animation: 150 }"
        >
          <div class="task_elem" v-for="element in column.tasks" :key="element.name">
            {{ element.name }}
            <transition name="fade">
              <div v-if="showUpdateInput" class="update_modal">
                <div class="update_block">
                  <img
                    src="../assets/icons/cancel.svg"
                    class="close_update"
                    @click="closeModalUpdate"
                  />
                  <label class="label_input" for="update"><h2>Update Card</h2></label>
                  <div style="height: 70px">
                    <input
                      class="update_input"
                      v-model="toUpdateText"
                      type="text"
                      id="update"
                    />
                  </div>

                  <button class="save_button add_button_style" @click="saveUpdate">
                    Save
                  </button>
                </div>
              </div>
            </transition>

            <img
              class="update_icon"
              src="../assets/icons/refresh-ccw.svg"
              @click="updateCard"
              :name="element.name"
              :id="column.id"
            />
            <button class="trash_icon">
              <img
                src="../assets/icons/trash-2.svg"
                v-on:click="deleteCard"
                :name="element.name"
                :id="column.id"
              />
            </button>

            <div v-if="!column.tasks.length" style="height: 300px"></div>
          </div>
        </draggable>
        <div>
          <transition name="fade">
            <input
              v-if="arrColumns.find((item) => item.id === column.id).newTaskWindow"
              @keyup.enter="addNewTask"
              placeholder="Enter Task"
              class="input_add_task"
              v-model="arrColumns.find((item) => item.id === column.id).text"
              :id="column.id"
              @click="addNewTask"
            />
          </transition>
        </div>
        <transition name="fade">
          <img
            :src="
              arrColumns.find((item) => item.id === column.id).newTaskWindow
                ? xSquare
                : plus
            "
            class="add_task_icon"
            :id="column.id"
            @click="newTasksInput"
          />
        </transition>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import plus from "../assets/icons/plus.svg";
import xSquare from "../assets/icons/x-square.svg";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      colorRed: "red",
      newTask: "",
      newColumn: "",
      arrColumns: [
        {
          name: "Backlog",
          tasks: [{ name: "Code SignPage" }],
          id: 1,
          text: "",
          newTaskWindow: false,
        },
        {
          name: "In Process",
          tasks: [{ name: "Test DashBoard" }],
          id: 2,
          text: "",
          newTaskWindow: false,
        },
        {
          name: "Testing",
          tasks: [{ name: "Style Registration" }],
          id: 3,
          text: "",
          newTaskWindow: false,
        },
        {
          name: "Done",
          tasks: [{ name: "Help With Designs" }],
          id: 4,
          text: "",
          newTaskWindow: false,
        },
      ],
      showUpdateInput: false,
      toUpdateText: "",
      toSaveText: "",
      indexUpdate: null,
      plus,
      xSquare,
    };
  },
  methods: {
    addNewTask(e) {
      const index = this.arrColumns.findIndex((item) => item.id === Number(e.target.id));
      let createTask = this.arrColumns[index];
      if (createTask.text) {
        createTask.tasks.push({ name: createTask.text });
        createTask.text = "";
        this.arrColumns[index] = createTask;
      }
    },
    addNewColumn() {
      if (this.newColumn) {
        this.arrColumns.push({
          name: this.newColumn,
          tasks: [],
          id: this.arrColumns.length + 1,
          text: "",
          newTaskWindow: false,
        });
        this.newColumn = "";
      }
    },
    deleteColumn(e) {
      const index = this.arrColumns.findIndex((n) => n.id === Number(e.target.id));
      if (index !== -1) {
        this.arrColumns.splice(index, 1);
      }
    },
    deleteCard(e) {
      const findColumnTasks = this.arrColumns
        .find((item) => item.id === Number(e.target.id))
        .tasks.filter((item) => item.name != e.target.name);
      const index = this.arrColumns.findIndex((item) => item.id === Number(e.target.id));
      this.arrColumns[index].tasks = findColumnTasks;
    },
    updateCard(e) {
      this.toUpdateText = e.target.name;
      this.toSaveText = e.target.name;
      this.indexUpdate = e.target.id;
      this.showUpdateInput = true;
    },
    closeModalUpdate() {
      this.showUpdateInput = false;
      this.clearProps();
    },
    saveUpdate() {
      const res = this.arrColumns.find((item) => item.id === Number(this.indexUpdate));
      res.tasks.forEach((item) => {
        if (item.name === this.toSaveText && this.toUpdateText.length !== 0) {
          item.name = this.toUpdateText;
          this.clearProps();
        }
      });
    },
    clearProps() {
      this.indexUpdate = null;
      this.toUpdateText = "";
      this.toSaveText = "";
      this.showUpdateInput = false;
    },
    newTasksInput(e) {
      console.log(e);
      this.arrColumns.find(
        (item) => item.id === Number(e.target.id)
      ).newTaskWindow = !this.arrColumns.find((item) => item.id === Number(e.target.id))
        .newTaskWindow;
    },
  },
  watch: {
    arrColumns() {
      console.log(this.arrColumns);
    },
  },
};
</script>
<style scoped>
.container {
  overflow: scroll;
}
.header {
  display: flex;
  margin: 0 auto;
  text-align: center;
}
.input_add_column {
  border: 2px solid transparent;
  border-bottom: 2px solid grey;
  margin: 10px;
  padding: 10px;
  height: 20px;
  outline: none;
  float: left;
  color: black;
  font-size: 16px;
}
.input_add_task {
  border: 2px solid transparent;
  border-bottom: 2px solid white;
  margin: 20px auto;
  padding: 12px;
  height: 42px;
  outline: none;
  background: none;
  box-sizing: border-box;
  width: 230px;
  font-size: 20px;
}
input.input_add_task::placeholder {
  color: rgb(0, 0, 0);
}
.input_add_task:focus {
  border: 2px solid grey;
  background: white;
}
.add_column_button {
  width: 80px;
  height: 42px;
  font-size: 16px;
  margin: 10px 0;
}
.add_column_button:hover {
  box-shadow: 0px 0px 13px -1px #000000;
}
.add_task_button {
  height: 42px;
  width: 60px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  background-color: rgb(52, 189, 70);
}
.columns_block {
  display: flex;
}
.column_elem {
  position: relative;
  float: left;
  min-width: 280px;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 5px;
  background-color: #a9ee29e3;
  height: fit-content;
}

.task_elem {
  position: relative;
  height: 40px;
  border: 1px solid rgb(187, 187, 187);
  background-color: white;
  margin: 0 10px;
  line-height: 40px;
  cursor: pointer;
}
.drag_n_drop_task {
  min-height: 100px;
}
.cancel_icon {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.trash_icon {
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
.update_icon {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.update_modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.update_block {
  position: relative;
  width: 500px;
  height: 200px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 20px;
}
.update_input {
  margin: 20px auto;
  border: none;
  border-bottom: 4px solid rgba(0, 194, 178, 0.733);
  padding: 10px;
  color: black;
  font-size: 16px;
  transform: translateY(-50%);
  text-align: center;
  height: 40px;
  width: 30%;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
}
.update_input:focus {
  border-bottom: 4px solid rgba(0, 194, 16, 0.733);
  width: 70%;
}
.save_button {
  width: 80px;
  height: 40px;
}

.save_button:hover {
  box-shadow: 0px 0px 13px -1px #000000;
}
.label_input {
  line-height: 50px;
  cursor: pointer;
}
.close_update {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.add_task_icon {
  width: 30px;
  height: 30px;
  transition: all 1s ease-in;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 620px) {
  .columns_block {
    flex-wrap: wrap;
  }
  .column_elem {
    margin: 5px auto;
  }
  .header {
    display: inline-block;
    margin: 0 auto;
  }
}
</style>
