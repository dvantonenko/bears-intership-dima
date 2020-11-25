<template>
<div id='container'>
    <Navigation/>

    <img id="main_image" src="../assets/image2.png"/>
    
    <div id="block_1" >
        <span id="main_text">A few words about this blog platform, Ghost, and how this site was made</span>
    </div>
    
    <div id="block_2">
     <span id="question_text">Why Ghost (& Figma) instead of Medium, WordPress or other options? </span>
     <hr/>
    </div>

    <p id='articles'>All articles</p>
    
    <div id="cards_container" >
    <CardsList v-bind:images="images"/>
    </div>
<Footer/>
</div>

</template>

<script>
import Navigation from './Navigation'
import CardsList from './CardsList'
import Footer from './Footer'
export default {
    components :{
     Navigation,
     CardsList,
     Footer
    }   ,
    data(){
        return {
            images :[{
                        src:require("../assets/Rectangle 12.png"),
                        discription : "Here are some things you should know regarding how we work"},
                    {
                        src :require("../assets/Rectangle 13.png"),
                        discription : "Granny gives everyone the finger, and other tips from OFFF Barcelona"
                    },
                    {
                        src:require("../assets/Rectangle 14.png"), 
                        discription : "Hello world, or, in other words, why this blog exists",
                    },  
                    {
                        src:require("../assets/Rectangle 15.png"), 
                        discription : "Hello world, or, in other words, why this blog exists",
                    },  
                    {
                        src:require("../assets/Rectangle 16.png"),
                        discription : "Hello world, or, in other words, why this blog exists",
                    },
                    {
                        src:require("../assets/Rectangle 17.png"), 
                        discription : "Hello world, or, in other words, why this blog exists",
                    },
                    {
                        src:require("../assets/Rectangle 18.png"),
                        discription : "Hello world, or, in other words, why this blog exists",
                    },  
                    {
                        src:require("../assets/Rectangle 19.png"),
                        discription : "Hello world, or, in other words, why this blog exists",
                    },  
                    {
                        src:require("../assets/Rectangle 20.png"), 
                        discription : "Hello world, or, in other words, why this blog exists",
                    },
                    {
                        src:require("../assets/Rectangle 21.png"), 
                        discription : "Hello world, or, in other words, why this blog exists",
                    },
                    {
                        src:require("../assets/Rectangle 22.png"),
                        discription : "Hello world, or, in other words, why this blog exists",
                    },
                         {
                        src:require("../assets/Rectangle 23.png"),
                        discription : "Hello world, or, in other words, why this blog exists",
                    }
         ],
        }
    },
    methods:{
        getImgUrl(pic){
                return require(pic)
        }
    },
    
}
</script>

<style scoped>

#container{
    height:100%;
    overflow : scroll;
}

#main_image{
margin-top : 70px;
}

#block_1{
width : 854px;
margin :0 auto;
padding-top:44px;
}
#main_text{
font-family: New York Extra Large;
font-style: normal;
font-weight: bold;
font-size: 54px;
line-height: 100%;
/* or 54px */
text-align: center;
color: #000000;
}


#block_2{
width: 592px;
padding-top:22px;
margin :0 auto;
color: #000000;
}
#question_text{
font-family: SF Mono;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 170%;
/* or 34px */
text-align: center;
color: #000000;
}

#articles{
width: 225px;
height: 53px;
margin : 0 auto;
padding-top : 50px;
font-family: New York Extra Large;
font-style: normal;
font-weight: bold;
font-size: 44px;
line-height: 53px;
/* identical to box height */
text-align: center;
color: #000000;
}

#cards_container{
width : 52%;
margin: 0 auto;
height : 200px;
}
</style>