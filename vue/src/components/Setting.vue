<template>
  <div id="setting"
       style="display:flex; height:100%;">
      <div class="left_content">
        <div class="status ">
          <span>Online status</span>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
        <div class="text"><span style="font-size:15px;">SETTINGS</span></div>
        <div class="notification">
          <div class="bell"><a href="#" @click="[on = 5]"><i class="far fa-bell"></i></a></div>
        </div>
        <div v-if="on===5" class="notification_content"></div>
        <div class="list_team">
          <div class="list row">
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item"
                 :class="{ active: index == currentIndex }"
                  v-for="(exambank, index) in exambanks"
                 :key="exambank.title"
                 >
                 {{ exambank.title }}
                </li>
             </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mid_content" style="width:559px; box-sizing: border-box;">
        <div class="header" style="display:flex;" >
            <div class="infor"><a href="#" @click="[on = 1]">User information</a></div>
            <div class="statistic"><a href="#" @click="[on = 2]">Statistic</a></div>
            <div class="activities"><a href="#" @click="[on = 3]">User Activities</a></div>
        </div>
        <div v-if="on===1" class="infor_content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro repellendus asperiores vero officia ratione placeat quaerat totam, veritatis aliquam ex fuga cum distinctio minima ea tempore earum consectetur nulla? Magni!</div>
        <div v-if="on===2" class="statistic_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla vitae sed quo neque sequi. Modi eligendi laboriosam sapiente, dicta obcaecati adipisci quod. Hic exercitationem voluptas maxime sit aperiam accusantium!</div>
        <div v-if="on===3" class="activities_content"></div>
      </div>
  </div>
</template>
<script>
import ExamBankDataService from "../services/data";
export default {
  name:"exambanks",
  data() {
    return {
      exambanks: [],
      currentQuestion: null,
      currentIndex: -1,
      title: "",
      on : 1,
      turn_on: null
    };
  },
  methods: {
    retrieveQuestion() {
      ExamBankDataService.getAll()
        .then(response => {
          this.exambanks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveQuestion();
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1008px;
  height: 619px;
}
.left_content{
  width: 190px;
  box-sizing: border-box;
}
.status{
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-bottom: 0px;
  margin-left: 8px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
input[type=text] {
  margin-top: 5px;
  width: 160px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  background-image: url('https://www.w3schools.com/howto/searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.search_text{
  display: flex;
  margin-top: 5px;
  font-size: 10px;
}
.advance_search{
  margin-right: auto;
}
.filter{
  margin-left: auto;
}
.bell{
  align-items: left;
}
.ticket_search{
    margin-top: 25px;
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 450px;
}
.ticket_search input{
  margin-left: 25px;
}
.notification_content{
  width: 240px;
  height: 237px;
  border: 1px solid #ececec;
  position: absolute;
  top: 100px;
  left: 250px;
  z-index: 20;
}
</style>
