
/*
 *
 * access_initiate()
 *
 * This function sets the appropriate variables and settings to run the 
 * EV3 table car project. 
 *
 */
function access_initiate()
{
    
    $.ajax({
        url: url+'?a={"command":"reset"}&b={"command":"reset"}&r={}',
        jsonp: "callback",
        dataType: "jsonp",
        success: function(data){}
    });    
    
}

/*
 *
 * function access_move( right, left, time )
 *
 * This function changes the speed of the two motors using the specified right 
 * and left values. The motors will run indefinately.
 *
 */
function access_move( right, left, time )
{
    
    /*
     *
     * The motors are upsidedown so the numbers need to be multipled by negative
     * one.
     *
     */
    right *= -1;
    left *= -1;
    
    if( !time )
    {
    
        console.log( 'Set motors to ' + right + ',' + left );
        
        $.ajax({
            url: url+'?a={"speed_sp":'+right+',"command":"run-forever"}&b={"speed_sp":'+left+',"command":"run-forever"}&r={}',
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data){}
        });
        
    }
    else
    {
        
        console.log( 'Set motors to ' + right + ',' + left + ' for ' + time + ' milliseconds' );
        
        $.ajax({
            url: url+'?a={"speed_sp":'+right+',"time_sp":'+time+',"command":"run-timed"}&b={"speed_sp":'+left+',"time_sp":'+time+',"command":"run-timed"}&r={}',
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data){}
        });
        
    }
    
}

function left(){ access_move( 0, 167, 2000 ); }
function right(){ access_move( 167, 0, 2000 ); }
function forward(){ access_move( 167, 167, 2000 ); }
function backward(){ access_move( -167, -167, 2000 ); }
function custom(right,left,time){ access_move( right, left, time ); }
