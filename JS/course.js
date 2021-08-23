//course controller
var courseController=(function(){
  var Data =function(name,course,author){
    this.name=name;
    this.course=course;
    this.author=author;
  }
  var data={
    allItems:{
      items:[],
    },
  }
  return{
    addItem:function(name,course,author){
      var newItem;
      newItem= new Data(name,course,author);
      data.allItems.items.push(newItem);
      return newItem;
    },
    test:function(){
      console.log(data);
    }
  }
})();
var UIController =(function(){
    var DOMString ={
      name:'.name',
      course:'.course',
      author:'.author',
      btn:'.btn',
      customer:'.customer-list',
      loading:'.loading',
    }
    
    return {
      getDOM:function(){
        return DOMString;
      },

      getInputValue:function(){
      return{
         name:document.querySelector(DOMString.name).value,
         course:document.querySelector(DOMString.course).value,
         author:document.querySelector(DOMString.author).value,
         customer:document.querySelector(DOMString.customer),
         loading:document.querySelector(DOMString.loading),
      }
      
     },
     
    
    }
})();

var controller=(function(courseCtrl,UICtrl){
     var DOM,input,newItem;
     DOM=UICtrl.getDOM();
     var controllAddItem =function(){    
         input=UICtrl.getInputValue();
         newItem=courseCtrl.addItem(input.name,input.course,input.author); 
         (input.loading).classList.add('showItem');
         setTimeout(function(){
          addListItem(newItem);
          (input.loading).classList.remove('showItem');
         },2000)
         courseCtrl.test();
      
      }
     var setUpEventListener = function(){

         document.querySelector(DOM.btn).addEventListener('click',controllAddItem);
         document.addEventListener('keypress',function(event){
         if (event.keyCode===13 || event.which===13) {
          ctrlAddItem();
            }
         })
       }

      var addListItem=function(obj){
     
      var div=document.createElement("div");
      div.classList.add('col-11', 'mx-auto' ,'col-md-6', 'col-lg-4', 'my-3');
      div.innerHTML= `<div class="card text-left">
     <img src="Image/sukyi.jpg" class="card-img-top" alt="">
     <div class="card-body">
      <!-- customer name -->
      <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${obj.name}</span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
        ${obj.course}
       </span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${obj.author}</span></h6>
      <!-- end of customer name -->
     </div>
    </div>`;
      input.customer.appendChild(div);
     
     } 
    return{
      init:function(){
        setUpEventListener();
      }
    }
})(courseController,UIController);
controller.init();