<template>
<div id="box">
        <div>
            <img :src="image.src" id="image"/>
            <div id="discription"><span id = "ff">{{image.discription}}</span></div>
        </div>
</div>
</template>

<script>
export default{
   props:['image'],
}</script>

<style>
#box{
padding :5px;
height : 300px;
}
#image{
height:176px;
width : 304px;
}
#discription{
height:124px;
text-align : center;
white-space: pre-wrap; 
max-width : 262px;
margin : 0 auto;
}
#ff{
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 120%;
/* or 26px */
text-align: center;
color: #000000;
}
</style>