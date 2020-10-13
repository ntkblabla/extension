<template>
  <div id="message"
       style="display:flex; height:100%;">
      <div class="left_content">
        <div class="status ">
          <span>Online status</span>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
        <div class="search">
          <form>
            <input type="text" name="search" placeholder="Search..">
          </form>
          <div class="search_text">
            <div class="advance_search"><a href="#" @click="[on = 4]">advance search</a></div>
            <div class="filter">filter by</div>
          </div>
        </div>
        <div class="notification">
          <div class="bell"><a href="#" @click="[on = 5]"><i class="far fa-bell"></i></a></div>
        </div>
        <div v-if="on===5" class="notification_content"></div>
        <div class="list_customer">
          <div class="list row">
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item"
                 :class="{ active: index == currentIndex }"
                  v-for="(exambank, index) in exambanks"
                 :key="exambank.title"
                 @click="setActiveQuestion(exambank, index)">
                 {{ exambank.title }}
                </li>
             </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mid_content" style="width:559px;box-sizing: border-box;border: 1px solid;border-bottom: none;">
        <div class="chatbox">
          <div class="store_title" style="border: 1px solid;">
            <div class="store_title_content" style="display: inline-block;
    margin-right: 225px;">
              <div><span>domain.myshopify.com store name</span></div>
              <div><span>Store name</span></div>
            </div>
            <div class="option" style="display:flex;">
              <div><i class="fas fa-ellipsis-v"></i></div>
              <div><i class="fas fa-user"></i>You</div>
              <div><i class="far fa-star"></i></div>
              <div><i class="far fa-clock"></i></div>
              <div><i class="fas fa-check"></i></div>
            </div>
          </div>
          <div class="chat_body"></div>
          <div class="chat_form">
            <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
          </div>
        </div>
        <div v-if="on===4" class="advance_search_interface">
          <span>Ticket Advance search</span>
          <div class="ticket_search">
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
            <form>
              <input type="text" name="search" placeholder="Search..">
            </form>
          </div>
        </div>
      </div>
      <div class="right_content">
        <div class="right_title">
          <div class="information"><a href="#" @click="[on = 1]">Shop information</a></div>
          <div class="case_note"><a href="#" @click="[on = 2]">Customer Case note</a></div>
          <div class="reversed"><a href="#" @click="[on = 3]">reversed</a></div>
        </div>
        <div v-if="(on===1)" class="information_content">
          <span>domain.myshopify.com </span>
          <br>
          <span>store name</span>
          <br>
          <br>
          <span>PLAN</span>
          <br>
          <br>
          <span>HISTORY</span>
          <br><br>
          <ul>
            <span>customer health</span>
            <li>Info</li>
            <li>Info</li>
            <li>Info</li>
            <li>Info</li>
            <li>Info</li>
          </ul>
          <br>
          <br>
          <span>THIS TICKET NOTE</span>
        </div>
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
.right_content{
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid #ececec;
}
.right_title{
  display: flex;
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
.option{
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  height: 35px;
  box-sizing: border-box;
}
.chat_form{
  position: fixed;
  top: 80%;
}
.type_msg {position: relative;width: 300px;}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
</style>
