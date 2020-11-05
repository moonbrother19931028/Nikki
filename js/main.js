var vm = new Vue({
  el:'#app',
  data:{
    writeBtn:true,
    seeBtn:false,
    submitBtn:false,
    showContent:false,
    dairy:[
      {title:'未来の自分に聞きたいこと',detail:'何をしていますか？',opendate:'2021/01/01',content:false,registar:'2020/09/01'},
    ],
    addTitle:'',
    addDetail:'',
    openkey:0,
  },
  watch:{
    dairy:function(){
      localStorage.setItem('dairy',JSON.stringify(this.dairy));
      // alert('Data saved!');
    }
  },
  mounted:function(){
    this.dairy=JSON.parse(localStorage.getItem('dairy')) || [];
  },
  methods:{
    writtingBook:function(){
      this.writeBtn = !this.writeBtn;
    },
    seeingBook:function(){
      this.seeBtn = !this.seeBtn;
    },
    addItem:function(){
      if(this.addDetail.length === 0){
        return;
      }
      if(this.addTitle.length === 0){
        this.addTitle = "未入力";
      }
      const startTime=new Date();
      var y=startTime.getFullYear();
      var M=startTime.getMonth()+1;
      var D=startTime.getDate();
      var Today=`${y}/${M}/${D}`;
      var items={
        title:this.addTitle,
        detail:this.addDetail,
        opendate:this.openkey,
        registar:Today,
      };
      this.dairy.push(items);
      this.addTitle='';
      
    },
    openContent:function(index){
      this.dairy.content = !this.dairy.content;
    },
    closeContent:function(){
      this.showContent=false;
    },
    deleteBtn:function(index){
      this.dairy.splice(index,1);
      alert('really?')
    }
  },
});