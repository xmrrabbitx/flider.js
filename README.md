# Flider.Js 

A Free Carousel Slider Maker for Javascript. It is a lightweight library for JavaScript. This library has many flexibilities for creating different sliders. In contrast to other slider makers, this library has many different modes for assigning CSS and all other cool stuff. You, as a programmer, can make a professional slider in the minimum amount of time and still make it better if you so desire.


## Demos

You can check all demos via this link: https://xmrrabbitx.github.io/demos_fliderjs/


## install via git
```javascript
git clone https://github.com/xmrrabbitx/flider.js.git
```


## install via npm
```javascript
npm install fliderjs
```

## Quick start

First of all, include `flider_style.css` in the head of html:

```html
<link  rel="stylesheet" href="./fliderjs/css/flider_style.css">
```

Second, import `flider.js` as a module:

```html
<script type="module">

        import {fliderjs} from "./fliderjs/flider.js";

</script>
```


Third, import `jquery.js`:

```html
<script type="text/javascript" src="./fliderjs/jquery.js"></script>
```


Now Call `fliderjs` function and define the necessary options:

```javascript

import {fliderjs} from "./fliderjs/flider.js";

fliderjs({

        area: "full", /* container option ( string:"full" or array:[x%,y%] )  */
        id: "flider", /* define parent element  */
        pics: ["1.jpg","2.jpg","3.jpg","4.jpg"], /*  names of the pictures you want to put  */
        src_pics: "pics/", /*  src_pics is the path to your pictures ex: pics/  */
        slideToshow: 1,    /* numbers of slide you want to show */


});
```

Just remember when you define `parent element`, it must be an empty html tag in the body. define the id as you want like flider or flider 1 or anything you desire:

```html
<div id="flider"></div>
```

Flider.Js Initialization with full options:

```javascript

import {fliderjs} from "./fliderjs/flider.js";

/* Load main function  */

fliderjs( {

    area: [1000,500], /* container option ( string:"full" or array:[x%,y%] )  */
    id: "flider", /* parent element option  */
    pics: ["1.jpg","2.jpg","3.jpg","4.jpg"], /*  names of the pictures you want to put  */
    src_pics: "pics/", /*  src_pics is the path to your pictures ex: pics/  */
    duration: 2000,  /* in milliseconds */
    infinite: true,  /*  true or false , default is true */
    slideToshow: 1,  /* numbers of slide you want to show */
    auto: true,   /* true , false  */
    auto_delay: 2000, /* in milliseconds */
    auto_duration:  3000,  /* in milliseconds */
    auto_direction: "right", /* "left" direction or "right" direction */
    dots: true,  /* true or false for dots option */

    optional:{
        
        arrows: true, /* true , false , "hover", "pale" */
    
        css:{"arrow-left":{"background":"","border-radius":"8px","margin-left":"20px","padding":"1% 1%"}, // arrow left style
            "arrow-right":{"border-radius":"8px","margin-right":"20px","padding":"1% 1%"}, // arrow right style 
            "container":{"border-radius":"48% 52% 51% 49% / 29% 29% 71% 71% "}, // container of slider

            }
        

                    }
});
```



## Browser support

flider.js have tested on 3 browser: `Firefox, Google chrome and Brave` and its full responsive.



## License

Copyright (c) 2022 xmrrabbitx

Licensed under the MIT license.

feel free to use it and i hope you enjoy it ...