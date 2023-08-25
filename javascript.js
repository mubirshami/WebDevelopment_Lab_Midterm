$(document).ready(function(){
	$(".display").hide();
	$("#submit").click(function(){
        var pname = $("#name").val();
        var p_age = $("#age").val();
        var pGender = $("#gender").val();
        var [imageObject] = document.getElementById("pic").files;
        var url = URL.createObjectURL(imageObject);
        var datebirth = $('#dob').val();
        var birthplace = $('#place').val();
        var m_marks = $('#matric').val();
        var i_marks = $('#inter').val();
        var m_result = $('#matric_res').val();
        var i_result = $('#inter_res').val();

        var result1 = (m_marks/1100)*100;
        
        if(result1>=90){
            m_result="Excellent";
        }
        else if(result1>=80 && result1<90){
            m_result="Very Good";
        }
        else if(result1>=75 && result1<80){
            m_result="Good";
        }
        else if(result1>=60 && result1<75){
            m_result="First Class";
        }
        else if(result1>=50 && result1<60){
            m_result="Second Class";
        }
        else if(result1>=40 && result1<50){
            m_result="Third Class";
        }
        else{
            m_result="Fail";
        }

        var result2 = (i_marks/1100)*100;
       
        if(result2>=90){
            i_result="Excellent";
        }
        else if(result2>=80 && result2<90){
            i_result="Very Good";
        }
        else if(result2>=75 && result2<80){
            i_result="Good";
        }
        else if(result2>=60 && result2<75){
            i_result="First Class";
        }
        else if(result2>=50 && result2<60){
            i_result="Second Class";
        }
        else if(result2>=40 && result2<50){
            i_result="Third Class";
        }
        else{
            i_result="Fail";
        }

        if(! (pname && p_age && pGender && datebirth && birthplace && m_marks && i_marks && url ) ){
            alert("Fields Cannot Be Empty");
            return;
        }else{
        	$(".PName").html(pname);
	        $(".PAge").html(p_age);
	        $(".PGender").html(pGender);
            document.getElementById("image").src= url;
            $(".DOB").html(datebirth);
            $(".POB").html(birthplace);
            $(".M_Marks").html(m_marks);
            $(".M_Result").html(m_result);
            $(".I_Marks").html(i_marks);
            $(".I_Result").html(i_result);


	        $(".display").show();
	   
        }
    });
});

