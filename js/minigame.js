canvas{
    position:absolute;
    top:0px; left:0px;
  }
  #stats {
    color:white;
    background-color:rgba(255, 255, 255, 0.3);
    font-size:20px;
    padding:40px;
    position:absolute;
    top:0px; left:0px;
  }
  #rules{
    opacity:0;
    color:white;
    background-color:rgba(255, 255, 255, 0.1);
    font-size : 20px;
    position:absolute;
    text-align:center;
    top:40vh;
    width:96vw;
    left:0px;
    padding:2vw;
    
    -webkit-animation:disappear 4s linear;
  }
  @-webkit-keyframes disappear{
    from{
      opacity:1;
    }
    70%{
      opacity:1;
    }
    100%{
      opacity:0;
    }
  }