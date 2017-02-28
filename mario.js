
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 hi there
 */
function printPyramid(height) {
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    var space = " ".repeat(height - 1);
    var hash = "#";
    for (count = 0; count <= height - 1; count += 1){
      console.log(space + hash);
	    space = space.replace(" ", "");
      hash += "#";
    } 
}
