<template>
<div id="footer">
    <div>
        <span class='label_weigth'>Digital products design</span>
        <span class='label_normal' >Remote work</span>
        <span class='label_weigth'>UI design</span>
        <span class='label_normal'>Distribured teams</span>
        <span class='label_weigth'> Creativity</span>
        <span class='label_normal'> Strategy</span>
        <span class='label_weigth'> suspense</span>
        <span class='label_normal'> growth</span> 
    </div>
    <div class='footer_info'>
        <h1 >Nordic rose</h1>
        <blockquote class="some_text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.</blockquote>
    <div class='contacts'>
        <a class='contact'>Twitter</a>
        <a class='contact'>LinkedIn</a>
        <a class='contact'>Rss</a>
    </div>
    <div class='inc'>
        © 2012–2020 Nordic Rose Co. All rights reserved.
    </div>
</div >
</div>

</template>

<style>
#footer{
    height: 464px;
    background: #000000;
    position:relative;
    top:-20px;
width : 100%;
}
.label_normal{
font-family: SF Pro Text;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
padding:4px;
/* identical to box height, or 140% */

letter-spacing: 0.1em;
text-transform: uppercase;

color: #FFFFFF;
}
.label_weigth{
    font-family: SF Pro Text;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 28px;
/* identical to box height, or 140% */
padding:4px;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #FFFFFF;
}
.footer_info{
    width :488px;
    height : 300px;
    position : relative;
    top : 50%;
    left : 50%;
    transform:translate(-50%,-50%);
    background-color :black;
}
.footer_info h1{
    color : white;
}
.some_text{
font-family: New York Small;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
/* or 22px */

text-align: center;

color: #FFFFFF;
}
.contacts{
    justify-content:space-around;
    color:white;
}
.contact{
    text-decoration: underline;
    padding:10px;
}
.inc{
    font-family: SF Pro Text;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 140%;
/* or 17px */
text-align: center;
color: #FFFFFF;
width : 159px;
margin : 0 auto;
margin-top : 100px;


}
</style>