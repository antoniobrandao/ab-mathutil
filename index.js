// 'use strict';

/*
* Math Utils by Antonio Brandao (http://antoniobrandao.com/)
* 
* Licensed under the MIT License
* http://choosealicense.com/licenses/mit
*/

module.exports = {

   calculateAspectRatioFit: function(srcWidth, srcHeight, maxWidth, maxHeight)
   {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

      return { width: Math.floor(srcWidth*ratio), height: Math.floor(srcHeight*ratio) };  
   }
}
