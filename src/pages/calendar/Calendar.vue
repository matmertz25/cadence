<template>
  <div>
    <FullCalendar id="full-calendar" :options="calendarOptions" />

    <el-dialog :visible.sync="eventDetailVisible" width="30%">
      <span slot="title"
        >{{
          activeEvent && activeEvent.activity_type
            ? activeEvent.activity_type.toUpperCase()
            : ""
        }}
        -
        {{ activeEvent ? formatDateStr(activeEvent.startStr) : "" }}
      </span>
      <p>{{ activeEvent ? activeEvent.title : "" }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="eventDetailVisible = false">Cancel</el-button>
        <el-button type="primary" @click="eventDetailVisible = false">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="addWorkoutVisible" width="30%">
      <span slot="title"
        >Add Workout - {{ activeDate ? formatDateStr(activeDate.dateStr) : "" }}
      </span>
      <el-form label-position="left" label-width="100px">
        <el-form-item label="Title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Activity Type">
          <el-select v-model="form.activity_type" placeholder="Select type">
            <el-option
              v-for="item in activityTypes"
              :key="item.type"
              :label="item.label"
              :value="item.type"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Description">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="Provide description"
            v-model="form.description"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addWorkoutVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createNewEvent">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import moment from "moment";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  mounted() {
    let draggableEl = document.getElementById("draggable-workouts");
    this.calendar = document.getElementById("full-calendar");

    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
    });
  },
  data() {
    return {
      calendar: null,
      form: {
        title: "",
        activity_type: "",
        description: "",
      },
      eventDetailVisible: false,
      activeDate: null,
      activeEvent: null,
      addWorkoutVisible: false,
      activityTypes: [
        { type: "swim", label: "Swim", color: "#1989fa" },
        { type: "bike", label: "Bike", color: "#10B981" },
        { type: "run", label: "Run", color: "#F59E0B" },
        { type: "brick", label: "Brick", color: "#F59E0B" },
        { type: "strength", label: "Strength", color: "#6366F1" },
        { type: "cardio", label: "Cardio", color: "#EF4444" },
        { type: "custom", label: "Custom", color: "#909399" },
        { type: "event", label: "Event", color: "#909399" },
        { type: "goal", label: "Goal", color: "#909399" },
        { type: "note", label: "Note", color: "#909399" },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridWeek",
        expandRows: true,
        droppable: true,
        dayMaxEventRows: true,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,listWeek",
        },
        // initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        editable: true,
        selectable: true,
        selectMirror: true,
        events: [
          { title: "event 1", date: "2021-01-10" },
          { title: "event 2", date: "2021-01-22" },
        ],
        // drop: function () {
        //   //   console.log(dropInfo);
        //   //   let draggedEl = dropInfo.draggedEl;
        //   //   console.log(draggedEl.dataset.event);
        // },
        eventReceive: function (dropInfo) {
          console.log(dropInfo);
          //   let draggedEl = dropInfo.draggedEl;
          //   console.log(draggedEl.dataset.event);
        },
        eventDrop: function (eventDropInfo) {
          console.log(eventDropInfo);
          //   if (isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
          //     $("#calendar").fullCalendar("removeEvents", event._id);
          //     var el = $("<div class='fc-event'>")
          //       .appendTo("#external-events-listing")
          //       .text(event.title);
          //     el.draggable({
          //       zIndex: 999,
          //       revert: true,
          //       revertDuration: 0,
          //     });
          //     el.data("event", { title: event.title, id: event.id, stick: true });
          //   }
        },
      },
    };
  },
  methods: {
    createNewEvent() {
      this.addWorkoutVisible = false;

      let newEvent = {
        activity_type: this.form.activity_type,
        description: this.form.description,
        title: this.form.title,
        start: this.activeDate.dateStr,
        timed: false,
      };

      this.calendarOptions.events.push(newEvent);
    },
    formatDateStr(date) {
      return moment(date).format("dddd, MMMM Do, YYYY");
    },
    handleDateClick: function (arg) {
      console.log(arg);
      this.addWorkoutVisible = true;
      this.activeDate = arg;
    },
    handleEventClick: function (info) {
      console.log(info);
      console.log(info.event.title);
      this.activeEvent = info.event;
      this.eventDetailVisible = true;
    },
  },
};
</script>
