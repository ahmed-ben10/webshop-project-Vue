<template>
    <div id="winkelwagen-container" >
        <div id="titel"><h2>Shoping cart</h2></div>
        <div id="winkelwagen" v-if="winkelwagen.length">
            <winkelwagen  :winkelwagen="winkelwagen"/>
            <div id="winkelwagen-container-bottom">
              <coupon />
              <bestel-order :winkelwagen="winkelwagen"/>
            </div>        
        </div>
        <div id="winkelwagen-leeg" v-else>
            <p>There are no items in the shopping cart</p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import winkelwagen from './components/winkelwagen.components';
import coupon from './components/coupon.components.vue';
import bestelOrder from './components/bestel_order.components.vue';

export default {
    components:{
        winkelwagen,
        coupon,
        bestelOrder
    },
    computed:{
        ...mapState([
            'winkelwagen'
        ])
    },
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>
#winkelwagen-container{
    width: 900px;
    padding:1%;
    margin: auto;
}
#titel{
  width: 100%;
  height:70px ;
  background-color: #a4ae9c;
  border-radius:20pt; 
}

#titel h2{
  margin-top: 2%;
  line-height: 70px;
  text-align: center;
}

table {
  margin-top: 2%;
  width: 100%;
  background-color: #c0cbb7;
  color: #2c3e50;
}

table thead {
   background-color: #a4ae9c;
}
table td, table th {
  font-size: 17pt;
  padding: 11px;
  text-align: left;
  width: 225px;
  font-weight: 100;
}

#albumname{
    line-height: 200px;
    font-size: 30pt;
}

#albumimage{
    width: 100%;
    border-radius: .5rem;
    font-size: 90pt;
    float: left;
    margin-right: 1%;
  }

  #selectNumber{
      width: 50px;
      border-radius: 10%;
      padding: .5rem;
      text-align: center;
  }
#couponcode{
  float: left;
  width: 50%;
}
#bestel-total{
  float: right;
  width: 40%;
}
  #bestellen{
    margin-left: 1%;
    background-color: #a4ae9c;
    color: white;
    width: 95%;
    height: 40px;
    cursor: pointer;
    margin-top: 1%;
  }
  
  #total-container{
    float: left;
    margin-right: 33%;
    margin-bottom: 1%;
  }

 #total{
    color: white;
    display: table-caption;
  }

  #winkelwagen-container-bottom, #winkelwagen-leeg{
   background-color: #a4ae9c;
   margin-top: 1%;
   padding: 1%;
   height: 103px;
  }
 #korting {
  padding: 1%;
   
 }
  #code {
   float: left;
   width: 59%;
   padding: 3%;
  }
  #korting {
    background-color: #a4ae9c;
     color: white;
     width: 31%;
     padding: 3%;
     cursor: pointer;
     margin-bottom: 6%;
  }
</style>
