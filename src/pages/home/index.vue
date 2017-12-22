<template>
  <div class="homepage">
    <div class="home-menu1">
      <a class="scroll" href="#/blogs">
        <div class="home-menu-but1">
          <div class="home-menu-text1">Blogs</div>
        </div>
        <div class="hi-icon-wrap1 hi-icon-effect-1">
          <div class="hi-icon1 hi-icon-bolt">Blogs</div>
        </div>
      </a>
    </div>
    <div class="home-menu2">
      <a class="scroll" href="#works">
        <div class="home-menu-but2">
          <div class="home-menu-text2">Works</div>
        </div>
        <div class="hi-icon-wrap2 hi-icon-effect-2">
          <div class="hi-icon2 hi-icon-pen">Works</div>
        </div>
      </a>
    </div>
    <div class="home-menu3">
      <a class="scroll" href="#/blogs">
        <div class="home-menu-but3">
          <div class="home-menu-text3">Blogs</div>
        </div>
        <div class="hi-icon-wrap3 hi-icon-effect-3">
          <div class="hi-icon3 hi-icon-cog">Blogs</div>
        </div>
      </a>
    </div>
    <div class="home-menu4">
      <a class="scroll" href="#contact">
        <div class="home-menu-but4">
          <div class="home-menu-text4">About me</div>
        </div>
        <div class="hi-icon-wrap4 hi-icon-effect-4">
          <div class="hi-icon4 hi-icon-glo">About me</div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.homepage {
  height: 100%;
  width: 100%;
}

/* section 1 */

.home-menu1 {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
}

.home-menu1 .home-menu-but1 {
  position: absolute;
  overflow: hidden;
  bottom: 2px;
  right: 2px;
  background: #eb767e;
  width: 150px;
  height: 150px;
  z-index: 10;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu-text1 {
  font-family: "OpenSans-Light-webfont";
  font-weight: 100;
  width: 100%;
  height: 20px;
  font-size: 26px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-top: 115px;
  margin-left: 10px;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.hi-icon-wrap1 {
  position: absolute;
  bottom: 2px;
  right: 2px;
  z-index: 1000;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu1 .hi-icon1 {
  display: block;
  font-size: 0px;
  cursor: pointer;
  width: 150px;
  height: 150px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1001;
  color: rgba(255, 255, 255, 0.3);
}

.home-menu1 .hi-icon1:before {
  font-family: "FontAwesome";
  speak: none;
  font-size: 100px;
  line-height: 150px;
  margin-top: -40px;
  margin-right: -60px;
  font-weight: 100;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.home-menu1 .hi-icon1:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: -40px;
  margin-right: -60px;
  border-radius: 50%;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.home-menu1:hover .home-menu-but1 {
  box-shadow: 0 0 0 5px rgba(91, 96, 115, 0.5);
  z-index: 1001;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

/* section 2 */
.home-menu2 {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
}

.home-menu2 .home-menu-but2 {
  position: absolute;
  overflow: hidden;
  bottom: 2px;
  left: 2px;
  background: #ffa979;
  width: 150px;
  height: 150px;
  z-index: 10;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu-text2 {
  font-family: "OpenSans-Light-webfont";
  font-weight: 100;
  width: 100%;
  height: 20px;
  font-size: 26px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-top: 115px;
  margin-left: 10px;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.hi-icon-wrap2 {
  position: absolute;
  bottom: 2px;
  left: 2px;
  z-index: 1000;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu2 .hi-icon2 {
  display: block;
  font-size: 0px;
  cursor: pointer;
  width: 150px;
  height: 150px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1001;
  color: rgba(255, 255, 255, 0.3);
}

.home-menu2 .hi-icon2:before {
  font-family: "FontAwesome";
  speak: none;
  font-size: 120px;
  line-height: 150px;
  margin-top: -40px;
  margin-right: -80px;
  font-weight: 100;
  border-bottom-left-radius: 50%;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.home-menu2 .hi-icon2:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: -40px;
  margin-right: -80px;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.home-menu2:hover .home-menu-but2 {
  box-shadow: 0 0 0 5px rgba(91, 96, 115, 0.5);
  z-index: 1001;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

/* section 3 */

.home-menu3 {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
}

.home-menu3 .home-menu-but3 {
  position: absolute;
  overflow: hidden;
  top: 2px;
  right: 2px;
  background: #b687e3;
  width: 150px;
  height: 150px;
  z-index: 10;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu-text3 {
  font-family: "OpenSans-Light-webfont";
  font-weight: 100;
  width: 100%;
  height: 20px;
  font-size: 26px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-top: 115px;
  margin-left: 10px;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.hi-icon-wrap3 {
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 1000;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu3 .hi-icon3 {
  display: block;
  font-size: 0px;
  cursor: pointer;
  width: 160px;
  height: 160px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1001;
  color: rgba(255, 255, 255, 0.3);
}

.home-menu3 .hi-icon3:before {
  font-family: "FontAwesome";
  speak: none;
  font-size: 130px;
  line-height: 160px;
  margin-top: -50px;
  margin-right: -70px;
  font-weight: 100;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.home-menu3 .hi-icon3:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: -50px;
  margin-right: -70px;
  border-radius: 50%;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.home-menu3:hover .home-menu-but3 {
  box-shadow: 0 0 0 5px rgba(91, 96, 115, 0.5);
  z-index: 1001;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

/* section 4 */

.home-menu4 {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
}

.home-menu4 .home-menu-but4 {
  position: absolute;
  overflow: hidden;
  top: 2px;
  left: 2px;
  background: #41c9a5;
  width: 150px;
  height: 150px;
  z-index: 10;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu-text4 {
  font-family: "OpenSans-Light-webfont";
  font-weight: 100;
  width: 100%;
  height: 20px;
  font-size: 26px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-top: 115px;
  margin-left: 10px;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.hi-icon-wrap4 {
  position: absolute;
  top: 2px;
  left: -8px;
  z-index: 1000;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.home-menu4 .hi-icon4 {
  display: block;
  font-size: 0px;
  cursor: pointer;
  width: 160px;
  height: 160px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1001;
  color: rgba(255, 255, 255, 0.3);
}

.home-menu4 .hi-icon4:before {
  font-family: "FontAwesome";
  speak: none;
  font-size: 130px;
  line-height: 160px;
  margin-top: -50px;
  margin-right: -70px;
  font-weight: 100;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.home-menu4 .hi-icon4:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: -50px;
  margin-right: -70px;
  border-radius: 50%;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.home-menu4:hover .home-menu-but4 {
  box-shadow: 0 0 0 5px rgba(91, 96, 115, 0.5);
  z-index: 1001;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


