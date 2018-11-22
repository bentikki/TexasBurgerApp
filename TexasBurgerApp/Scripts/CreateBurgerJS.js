$(document).ready(function () {

    var Burger = {
        Table: {
            TableNumber: null,
            CustName: null
        },
        Bun: {
            ID: null,
            Name: null
        },
        Meat: {
            ID: null,
            Name: null
        },
        Cheese: {
            ID: null,
            Name: null
        },
        Green: {
            ID: null,
            Name: null
        },
        Dressing: {
            ID: null,
            Name: null
        }
    };

    //Set Start items BUN
    var DisplayItem = $('.bunDisplay').first();
    $("#selected-heading").html($(DisplayItem).data('ing-name'));
    $("#selected-price").html($(DisplayItem).data('ing-price'));
    var srcString = "/Content/ingridients-images/" + $(DisplayItem).data('ing-id') + "_" + $(DisplayItem).data('ing-name') + ".png";
    $("#selected-image").attr("src", srcString);
    $("#selected-btn").attr("data-ing-id", $(DisplayItem).data('ing-id'));
    $("#selected-btn").attr("data-ing-name", $(DisplayItem).data('ing-name'));


    //Set Start items Meat
    DisplayItem = $('.meatDisplay').first();
    $("#selected-heading-meat").html($(DisplayItem).data('meat-ing-name'));
    $("#selected-price-meat").html($(DisplayItem).data('meat-ing-price'));
    srcString = "/Content/ingridients-images/" + $(DisplayItem).data('meat-ing-id') + "_" + $(DisplayItem).data('meat-ing-name') + ".png";
    $("#selected-image-meat").attr("src", srcString);
    $("#selected-meat-btn").attr("data-meat-ing-id", $(DisplayItem).data('meat-ing-id'));
    $("#selected-meat-btn").attr("data-meat-ing-name", $(DisplayItem).data('meat-ing-name'));

    //Set Start items Cheese
    DisplayItem = $('.cheeseDisplay').first();
    $("#selected-heading-cheese").html($(DisplayItem).data('cheese-ing-name'));
    $("#selected-price-cheese").html($(DisplayItem).data('cheese-ing-price'));
    srcString = "/Content/ingridients-images/" + $(DisplayItem).data('cheese-ing-id') + "_" + $(DisplayItem).data('cheese-ing-name') + ".png";
    $("#selected-image-cheese").attr("src", srcString);
    $("#selected-cheese-btn").attr("data-cheese-ing-id", $(DisplayItem).data('cheese-ing-id'));
    $("#selected-cheese-btn").attr("data-cheese-ing-name", $(DisplayItem).data('cheese-ing-name'));

    //Set Start items Green
    DisplayItem = $('.greenDisplay').first();
    $("#selected-heading-green").html($(DisplayItem).data('green-ing-name'));
    $("#selected-price-green").html($(DisplayItem).data('green-ing-price'));
    srcString = "/Content/ingridients-images/" + $(DisplayItem).data('green-ing-id') + "_" + $(DisplayItem).data('green-ing-name') + ".png";
    $("#selected-image-green").attr("src", srcString);
    $("#selected-green-btn").attr("data-green-ing-id", $(DisplayItem).data('green-ing-id'));
    $("#selected-green-btn").attr("data-green-ing-name", $(DisplayItem).data('green-ing-name'));

    //Set Start items Dressing
    DisplayItem = $('.dressingDisplay').first();
    $("#selected-heading-dressing").html($(DisplayItem).data('dressing-ing-name'));
    $("#selected-price-dressing").html($(DisplayItem).data('dressing-ing-price'));
    srcString = "/Content/ingridients-images/" + $(DisplayItem).data('dressing-ing-id') + "_" + $(DisplayItem).data('dressing-ing-name') + ".png";
    $("#selected-image-dressing").attr("src", srcString);
    $("#selected-green-btn").attr("data-dressing-ing-id", $(DisplayItem).data('dressing-ing-id'));
    $("#selected-green-btn").attr("data-dressing-ing-name", $(DisplayItem).data('dressing-ing-name'));

    //Change selected based on click
    $('.bunDisplay').on('click', function (e) {
        e.preventDefault();

        $("#selected-heading").html($(this).data('ing-name'));
        $("#selected-price").html($(this).data('ing-price'));
        var srcString = "/Content/ingridients-images/" + $(this).data('ing-id') + "_" + $(this).data('ing-name') + ".png";
        $("#selected-image").attr("src", srcString);
        $("#selected-btn").attr("data-ing-id", $(this).data('ing-id'));
        $("#selected-btn").attr("data-ing-name", $(this).data('ing-name'));

        if (Burger.Bun.ID == $(this).data('ing-id')) {
            $("#unselect-btn").removeClass('btn-secondary disabled');
        } else {
            $("#unselect-btn").addClass('btn-secondary disabled').html("- Fjern");
        }
    });

    var bunInt = 0;
    //Add selected to burger array based on btn click
    $('#selected-btn').on('click', function (e) {
        e.preventDefault();

        var bunID = $(this).attr("data-ing-id");
        var bunName = $(this).attr("data-ing-name");

        Burger.Bun.ID = bunID;
        Burger.Bun.Name = bunName;

        bunInt = 1;
        $("div[data-ing-id='" + bunID + "']").addClass("selected-bun");

        $('#bun-counter').html(bunInt);

        $(this).addClass("d-none");
        $("#unselect-btn").removeClass("d-none").removeClass("btn-secondary disabled");
        console.log(Burger);
    });
    //Remove selected from burger array based on btn click
    $('body').on('click', '#unselect-btn', function (e) {
        e.preventDefault();
        if (bunInt == 1) {
            $('.bun-item').remove();
        }
        bunInt = 0;
        $("div[data-ing-id='" + Burger.Bun.ID + "']").removeClass("selected-bun");

        $('#bun-counter').html(bunInt);

        $(this).addClass("d-none");
        $("#selected-btn").removeClass("d-none");

        Burger.Bun.ID = null;
        Burger.Bun.Name = null;
        console.log(Burger);
    });




    /*Meat Section*/
    //Change selected based on click
    $('.meatDisplay').on('click', function (e) {
        e.preventDefault();

        $("#selected-heading-meat").html($(this).data('meat-ing-name'));
        $("#selected-price-meat").html($(this).data('meat-ing-price'));
        var srcString = "/Content/ingridients-images/" + $(this).data('meat-ing-id') + "_" + $(this).data('meat-ing-name') + ".png";
        $("#selected-image-meat").attr("src", srcString);
        $("#selected-meat-btn").attr("data-meat-ing-id", $(this).data('meat-ing-id'));
        $("#selected-meat-btn").attr("data-meat-ing-name", $(this).data('meat-ing-name'));

        if (Burger.Meat.ID == $(this).data('meat-ing-id')) {
            $("#unselect-meat-btn").removeClass('btn-secondary disabled');
        } else {
            $("#unselect-meat-btn").addClass('btn-secondary disabled').html("- Fjern");
        }
    });

    var meatInt = 0;
    //Add selected to burger array based on btn click
    $('#selected-meat-btn').on('click', function (e) {
        e.preventDefault();

        var meatID = $(this).attr("data-meat-ing-id");
        var meatName = $(this).attr("data-meat-ing-name");

        Burger.Meat.ID = meatID;
        Burger.Meat.Name = meatName;

        meatInt = 1;
        $("div[data-meat-ing-id='" + meatID + "']").addClass("selected-bun");

        $('#meat-counter').html(meatInt);

        $(this).addClass("d-none");
        $("#unselect-meat-btn").removeClass("d-none").removeClass("btn-secondary disabled");
        console.log(Burger);
    });
    //Remove selected from burger array based on btn click
    $('body').on('click', '#unselect-meat-btn', function (e) {
        e.preventDefault();

        meatInt = 0;
        $("div[data-meat-ing-id='" + Burger.Meat.ID + "']").removeClass("selected-bun");

        $('#meat-counter').html(meatInt);

        $(this).addClass("d-none");
        $("#selected-meat-btn").removeClass("d-none");

        Burger.Meat.ID = null;
        Burger.Meat.Name = null;
        console.log(Burger);
    });



    /*Cheese Section*/
    //Change selected based on click
    $('.cheeseDisplay').on('click', function (e) {
        e.preventDefault();

        $("#selected-heading-cheese").html($(this).data('cheese-ing-name'));
        $("#selected-price-cheese").html($(this).data('cheese-ing-price'));
        var srcString = "/Content/ingridients-images/" + $(this).data('cheese-ing-id') + "_" + $(this).data('cheese-ing-name') + ".png";
        $("#selected-image-cheese").attr("src", srcString);
        $("#selected-cheese-btn").attr("data-cheese-ing-id", $(this).data('cheese-ing-id'));
        $("#selected-cheese-btn").attr("data-cheese-ing-name", $(this).data('cheese-ing-name'));

        if (Burger.Cheese.ID == $(this).data('cheese-ing-id')) {
            $("#unselect-cheese-btn").removeClass('btn-secondary disabled');
        } else {
            $("#unselect-cheese-btn").addClass('btn-secondary disabled');
        }
    });

    var cheeseInt = 0;
    //Add selected to burger array based on btn click
    $('#selected-cheese-btn').on('click', function (e) {
        e.preventDefault();

        var cheeseID = $(this).attr("data-cheese-ing-id");
        var cheeseName = $(this).attr("data-cheese-ing-name");

        Burger.Cheese.ID = cheeseID;
        Burger.Cheese.Name = cheeseName;

        cheeseInt = 1;
        $("div[data-cheese-ing-id='" + Burger.Cheese.ID + "']").addClass("selected-bun");

        $('#cheese-counter').html(cheeseInt);

        $(this).addClass("d-none");
        $("#unselect-cheese-btn").removeClass("d-none").removeClass("btn-secondary disabled");
        console.log(Burger);
    });
    //Remove selected from burger array based on btn click
    $('body').on('click', '#unselect-cheese-btn', function (e) {
        e.preventDefault();

        cheeseInt = 0;
        $("div[data-cheese-ing-id='" + Burger.Cheese.ID + "']").removeClass("selected-bun");

        $('#cheese-counter').html(cheeseInt);

        $(this).addClass("d-none");
        $("#selected-cheese-btn").removeClass("d-none");

        Burger.Cheese.ID = null;
        Burger.Cheese.Name = null;
        console.log(Burger);
    });


    /*Green Section*/
    //Change selected based on click
    $('.greenDisplay').on('click', function (e) {
        e.preventDefault();

        $("#selected-heading-green").html($(this).data('green-ing-name'));
        $("#selected-price-green").html($(this).data('green-ing-price'));
        var srcString = "/Content/ingridients-images/" + $(this).data('green-ing-id') + "_" + $(this).data('green-ing-name') + ".png";
        $("#selected-image-green").attr("src", srcString);
        $("#selected-green-btn").attr("data-green-ing-id", $(this).data('green-ing-id'));
        $("#selected-green-btn").attr("data-green-ing-name", $(this).data('green-ing-name'));

        if (Burger.Green.ID == $(this).data('green-ing-id')) {
            $("#unselect-green-btn").removeClass('btn-secondary disabled');
        } else {
            $("#unselect-green-btn").addClass('btn-secondary disabled');
        }
    });

    var greenint = 0;
    //Add selected to burger array based on btn click
    $('#selected-green-btn').on('click', function (e) {
        e.preventDefault();

        var greenID = $(this).attr("data-green-ing-id");
        var greenName = $(this).attr("data-green-ing-name");

        Burger.Green.ID = greenID;
        Burger.Green.Name = greenName;

        greenInt = 1;
        $("div[data-green-ing-id='" + Burger.Green.ID + "']").addClass("selected-bun");

        $('#green-counter').html(greenInt);

        $(this).addClass("d-none");
        $("#unselect-green-btn").removeClass("d-none").removeClass("btn-secondary disabled");
        console.log(Burger);
    });
    //Remove selected from burger array based on btn click
    $('body').on('click', '#unselect-green-btn', function (e) {
        e.preventDefault();

        greenInt = 0;
        $("div[data-green-ing-id='" + Burger.Green.ID + "']").removeClass("selected-bun");

        $('#green-counter').html(greenint);

        $(this).addClass("d-none");
        $("#selected-green-btn").removeClass("d-none");

        Burger.Green.ID = null;
        Burger.Green.Name = null;
        console.log(Burger);
    });



    /*dressing Section*/
    //Change selected based on click
    $('.dressingDisplay').on('click', function (e) {
        e.preventDefault();

        $("#selected-heading-dressing").html($(this).data('dressing-ing-name'));
        $("#selected-price-dressing").html($(this).data('dressing-ing-price'));
        var srcString = "/Content/ingridients-images/" + $(this).data('dressing-ing-id') + "_" + $(this).data('dressing-ing-name') + ".png";
        $("#selected-image-dressing").attr("src", srcString);
        $("#selected-dressing-btn").attr("data-dressing-ing-id", $(this).data('dressing-ing-id'));
        $("#selected-dressing-btn").attr("data-dressing-ing-name", $(this).data('dressing-ing-name'));

        if (Burger.Dressing.ID == $(this).data('dressing-ing-id')) {
            $("#unselect-dressing-btn").removeClass('btn-secondary disabled');
        } else {
            $("#unselect-dressing-btn").addClass('btn-secondary disabled');
        }
    });

    var dressingint = 0;
    //Add selected to burger array based on btn click
    $('#selected-dressing-btn').on('click', function (e) {
        e.preventDefault();

        var dressingID = $(this).attr("data-dressing-ing-id");
        var dressingName = $(this).attr("data-dressing-ing-name");

        Burger.Dressing.ID = dressingID;
        Burger.Dressing.Name = dressingName;

        drissingInt = 1;
        $("div[data-dressing-ing-id='" + Burger.Dressing.ID + "']").addClass("selected-bun");

        $('#dressing-counter').html(dressingInt);

        $(this).addClass("d-none");
        $("#unselect-dressing-btn").removeClass("d-none").removeClass("btn-secondary disabled");
        console.log(Burger);
    });
    //Remove selected from burger array based on btn click
    $('body').on('click', '#unselect-dressing-btn', function (e) {
        e.preventDefault();

        drissingInt = 0;
        $("div[data-dressing-ing-id='" + Burger.Dressing.ID + "']").removeClass("selected-bun");

        $('#dressing-counter').html(dressingint);

        $(this).addClass("d-none");
        $("#selected-dressing-btn").removeClass("d-none");

        Burger.Dressing.ID = null;
        Burger.Dressing.Name = null;
        console.log(Burger);
    });



    //Finish Burger Functionality
    $('.finish-burger-btn').on('click', function (e) {
        e.preventDefault();

        if (Burger.Bun.ID == null || Burger.Meat.ID == null) {
            $('.error-alert').show();
        }
        else
        {
            $('#confirmModal .order-ul').empty();
            $('#confirmModal .order-ul').append('<li class="order-list-heading">Bord: ' + Burger.Table.TableNumber + '</li > ');
            $('#confirmModal .order-ul').append('<li class="order-list-heading">Navn: ' + Burger.Table.CustName + '</li > ');
            $('#confirmModal .order-ul').append('<li class="order-list-heading">Bolle:</li><li>' + Burger.Bun.Name + '</li>');
            $('#confirmModal .order-ul').append('<li class="order-list-heading">B&oslashf:</li><li>' + Burger.Meat.Name + '</li>');

            if (Burger.Cheese.ID != null) {
                $('#confirmModal .order-ul').append('<li class="order-list-heading">Ost:</li><li>' + Burger.Cheese.Name + '</li>');
            }

            if (Burger.Green.ID != null) {
                $('#confirmModal .order-ul').append('<li class="order-list-heading">Gr&oslashnt:</li><li>' + Burger.Green.Name + '</li>');
            }

            if (Burger.Dressing.ID != null) {
                $('#confirmModal .order-ul').append('<li class="order-list-heading">Dressing:</li><li>' + Burger.Dressing.Name + '</li>');
            }

            $('#confirmModal').modal('show');

        }
    });


    //Confirmation menu
    $('body').on('click', '#modal-confirm-btn', function (e) {
        e.preventDefault();
        if (Burger.Bun.ID != null || Burger.Meat.ID != null || Burger.Table.CustName != null || Burger.Table.TableNumber != null) {

            var hrefURL = "/AddBurger/";
            hrefURL += Burger.Table.CustName + "/";
            hrefURL += Burger.Table.TableNumber + "/";
            hrefURL += Burger.Bun.ID + "/";
            hrefURL += Burger.Meat.ID + "/";
            hrefURL += ((Burger.Cheese.ID != null) ? Burger.Cheese.ID + "/": "");
            hrefURL += ((Burger.Green.ID != null) ? Burger.Green.ID + "/" : "");
            hrefURL += ((Burger.Dressing.ID != null) ? Burger.Dressing.ID + "/" : "");
            
            alert("Din bestilling er blevet sendt videre!");

            window.location.href = hrefURL; 
            
        }

    });



    //Remove alert
    $('body').on('click', '.close-alert', function (e) {
        e.preventDefault();
        $('.error-alert').hide();
    });


    
    $('#tableModal').modal('show');

    //Table Input Validation
    $("#tableNumber").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) )
        {
            e.preventDefault();
        }
    });

    $('body').on('click', '#table-btn', function (e) {
        e.preventDefault();

        var custName = $('#custName');
        var tableNumber = $('#tableNumber');

        var error = 0;
        if (custName.val() == "") {
            $(custName).parent('.form-group').addClass("has-error");
            error++;
        }
        if (tableNumber.val() == "") {
            $(tableNumber).parent('.form-group').addClass("has-error");
            error++;
        }

        if (error == 0) {
            Burger.Table.CustName = custName.val();
            Burger.Table.TableNumber = tableNumber.val();

            $('#tableModal').modal('hide');
            console.log(Burger);
        }

    });
    

});