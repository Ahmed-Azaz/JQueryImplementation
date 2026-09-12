$(function () {
    let i = 1;
    var next = $("img").eq(2)
    var prev = $("img").eq(0)
    let img = $("img").eq(1);
    let sevbtn = $("#ser").eq(0);
    let lastBtnClicked= " "
    
        
    function hideAll() {
        $(".container").hide();
    }
    hideAll()
    sevbtn.click(function () {
        if (lastBtnClicked !== "ser") { 
            hideAll()
            $(".container").eq(0).show()
            lastBtnClicked="ser"
        }
        
        
        else { 
            $(".dropdown").slideToggle()
            lastBtnClicked = "ser"
        }
        
    })
    $("#abt").click(function () {
        hideAll()
        $("#abt_cn").show()
        lastBtnClicked="abt"
    })
    $("#gal").click(function () {
        hideAll()
        $("#gal_cn").show()
        lastBtnClicked="gal"
    })
    $("#comp").click(function () {
        hideAll()
        $("#comp_cn").show()
        lastBtnClicked="comp"
    })
    $("#sendBtn").click(function () {

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $("#pName").text("Your Name is: " + name);
        $("#pEmail").text("Your Email is: " + email);
        $("#pMessage").text("Your Complain is: " + message);

        $("#comp_cn_subcn").hide();
        $(".preview").show();
    });

    $("#editBtn").click(function () {
        $(".preview").hide();
        $("#comp_cn_subcn").show();
    });
    next.click(function () {
        
        i++;
        if (i > 8) {
            i = 8;
        }
        img.attr({ src: "./images/"+i+".jpg" });
        
    })

    prev.click(function () {
      
        i--;
        if (i < 1) {
            i = 1;
        }
        img.attr({ src: "./images/" + i + ".jpg" });
        
    })
});


