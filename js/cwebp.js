const converter = require('webp-converter');
let fs = require('fs');
let img = fs.readdirSync('img');
let webp = fs.readdirSync('img/webp');

webp.forEach (image => {
   fs.unlinkSync(`img/webp/${image}`);
});
img.forEach(element => {
   
   if (element != "webp") {
      let imagename = element.split('.');
      console.log(imagename[0]);
      let result = converter.cwebp(`img/${element}`,`img/webp/${imagename[0]}.webp`,"-lossless", "-exact",logging="-v");
      result.then((response) => {
         console.log(response);
      });
   };
   console.log(element);
});

//////////////////////////////////////////////////////////////////////////
//pass input image(.jpeg,.pnp .....) path ,output image(give path where ||
// to save and image file name with .webp extension)                    ||
//pass option(read  documentation for options)                          ||
//                                                                      ||
//cwebp(input,output,option)                                            ||
//                                                                      ||
// const result = webp.cwebp("img/*","img/webp","-q 80",logging="-v");  ||
// result.then((response) => {                                          ||
//   console.log(response);                                             ||
// });                                                                  ||
//////////////////////////////////////////////////////////////////////////