
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

    testing thangs.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints conversion tables." 
                   +  "\n Type a letter to select a conversion table  "
				   +  "\n m - miles to kilometers "
				   +  "\n k - kilometers to miles "
				   +  "\n p - pounds to kilograms "
				   +  "\n x - exit the program \n" ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.


   var user_selection = String( input_from_user ).charAt( 0 ) ;

   var distance_in_miles = 10 ;

   var distance_in_kilometers ;
   
   var pounds = 10 ;
   
   var kilos ;
   
   var dist_mil2 ;
   
   var dist_km2 = 10   
   
   //These things below are the different selections available.
   
   if ( user_selection == 'x' || user_selection == 'X' )
   {
	   process.exit()
   }
   else if ( user_selection == 'm' || user_selection == 'M' )
   {
   process.stdout.write( "\n  Miles	 Kilometers \n" ) ;
   
   
   while ( distance_in_miles < 120.00 )
   {
	   distance_in_kilometers = 1.6093 * distance_in_miles
	   
	   tools.printf( "\n %10.2f %10.2f ", 
	     distance_in_miles, distance_in_kilometers ) ;
						
		 distance_in_miles = distance_in_miles + 10 ;
     }
   }
   

   
   if ( user_selection == 'k' || user_selection == 'K' )
   {
     process.stdout.write( "\n\n  Kilometers	 Miles \n" ) ;	   
   while ( dist_km2 < 120.00 )
   {
     dist_mil2 = 0.62137 * dist_km2  
	   tools.printf( "\n %10.2f %10.2f", 
	     dist_km2, dist_mil2 ) ;						
		 dist_km2 = dist_km2 + 10 ;
  }
}

   if ( user_selection == 'p' || user_selection == 'P' )
   {
   process.stdout.write( "\n   Pounds 	Kilograms " )
   while ( pounds < 120.00 )
   {
     kilos = 0.4536 * pounds	   
	   tools.printf( "\n %10.2f %10.2f", pounds, kilos ) ;
	   pounds = pounds + 10 ;
  }
}
   process.stdout.write( "\n\n   Try another one if you'd like."
					   + "\n   x - Exit the program \n" ) ;
} ) ;





