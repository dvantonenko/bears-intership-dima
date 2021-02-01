<template>
  <div class="container">
    <div class="header">
      <input
        @keyup.enter="addNewColumn"
        placeholder="Enter column"
        class="input_add_column"
        v-model="newColumn"
      />
      <button class="add_column_button" @click="addNewColumn">Add column</button>
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
        <div style="padding: 2px">
          <!-- <input
            @keyup.enter="addNewTask"
            placeholder="Enter Task"
            class="input_add_task"
            v-model="arrColumns[column.id - 1].text"
            :id="column.id"
            @click="addNewTask"
          /> -->
          <h2>{{ column.name }}</h2>

          <draggable
            class="drag_n_drop_task"
            :list="column.tasks"
            group="tasks"
            :options="{ animation: 150 }"
          >
            <div class="task_elem" v-for="element in column.tasks" :key="element.name">
              {{ element.name }}
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
        </div>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      newTask: "",
      newColumn: "",
      arrColumns: [
        { name: "Backlog", tasks: [{ name: "Code SignPage" }], id: 1 },
        {
          name: "In Process",
          tasks: [{ name: "Test DashBoard" }],
          id: 2,
          text: "",
        },
        {
          name: "Testing",
          tasks: [{ name: "Style Registration" }],
          id: 3,
          text: "",
        },
        {
          name: "Done",
          tasks: [{ name: "Help With Designs" }],
          id: 4,
          text: "",
        },
      ],
    };
  },
  methods: {
    addNewTask(e) {
      console.log();
      const text = this.arrColumns[e.target.id - 1].text;
      if (text) {
        this.arrColumns[e.target.id - 1].tasks.push({ name: text });
      }
    },
    addNewColumn() {
      if (this.newColumn) {
        this.arrColumns.push({
          name: this.newColumn,
          tasks: [],
          id: this.arrColumns.length + 1,
          text: "",
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
      const index = this.arrColumns[e.target.id - 1].tasks.findIndex(
        (n) => n.name === e.target.name
      );
      if (index !== -1) {
        this.arrColumns[e.target.id - 1].tasks.splice(index, 1);
      }
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
.header {
  display: flex;
}
.input_add_column {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  height: 20px;
  outline: none;
  float: left;
}
.input_add_task {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  height: 20px;
  outline: none;
}
.add_column_button {
  height: 42px;
  width: 60px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  background-color: rgb(52, 52, 189);
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
  flex-wrap: wrap;
  justify-content: center;
}
.column_elem {
  position: relative;
  float: left;
  width: 20%;
  border: 1px solid grey;
  border-radius: 20px;
  min-height: 300px;
  margin: 5px;
  background-color: #00408538;
}
.task_elem {
  position: relative;
  height: 40px;
  border: 1px solid rgb(187, 187, 187);
  background-color: white;
  margin: 0 10px;
  line-height: 40px;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.drag_n_drop_task {
  min-height: 300px;
}
.cancel_icon {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
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
</style>
