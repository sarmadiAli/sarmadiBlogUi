
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="sides">
                    <a href="#" className="logo">BLOG</a>
                </div>
                <div className="sides"> <a href="#" className="menu"></a></div>
                <div className="info">
                    <h4><a href="#category">UI DESIGN</a></h4>
                    <h1>ANIMATED HEADERS ARE THE BEST</h1>
                    <div className="meta">
                        <a href="https://twitter.com/nodws" target="_b" className="author"></a><br />
                        By <a href="https://twitter.com/nodws" target="_b">James Nodws</a> on May 30, 2017
                    </div>
                </div>
                <div className="contectToMe">
                    a
                </div>
                <style jsx>{
                    `
   .contectToMe{
    position:absolute; 
    bottom:0;
    height:50px;
    width:100%;
    Background:transparent;
    color:#fff
   }
    .header{
      z-index:1000;
      position:relative;
      overflow:hidden;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      height:80vh;
      min-height:400px;
      max-height:80vh;
      min-width:300px;
      color:#212121;
    }
    .header:after{
      content:"";
      width:100%;
      height:40%;
      position:absolute;
      bottom:0;
      left:0;
      z-index:-1;
     background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(27,32,48,1) 100%);
    }
    .header:before{
      content:"";
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateZ(0) scale(1.0, 1.0);
        transform: translateZ(0);
      background:#1B2030 url(images/backHeader1.jpg) top center no-repeat;
      background-size:cover;
      background-attachment:fixed;
      animation: grow 60s  linear 10ms infinite;
      transition:all 0.2s ease-in-out;
      z-index:-2
    }
    .header a{
      color:#eee
    }
    .menu{
      display:block;
      width:30px;
      height:30px;
      border:2px solid #fff;
      border-radius:3px;
      position:absolute;
      right:20px;
      top:20px;
      text-decoration:none
    }
    .menu:after{
  
    }
    .logo{
      border:2px solid #fff;
      border-radius:3px;
      text-decoration:none;
      display:inline-block;
      margin:20px;
      padding:5px 10px;
      font-weight:600;
      font-size:1.2em;
      box-sizing:border-box
    }
    .sides, .info{
      flex: 0 0 auto;
      width:50%
    }
    .info{
      width:100%;
      padding:15% 10% 0 10%;
      text-align:center;
      text-shadow:0 2px 3px rgba(0,0,0,0.2)
    }
    .author{
      display:inline-block;
      width:50px;
      height:50px;
      border-radius:50%;
      background-size:cover;
      box-shadow:0 2px 3px rgba(0,0,0,0.3);
      margin-bottom:3px
    }
    .info h4, .meta{
      font-size:0.7em
    }
    .meta{
      font-style:italic;
    }
    @keyframes grow{
      0% { transform:scale(1)}
      50% { transform:scale(1.2)}
    }
    .content{  
      padding:5% 10%;
      text-align:justify
    }
    .btn{
      color:#333;
      border:2px solid;
      border-radius:3px;
      text-decoration:none;
      display:inline-block;
      padding:5px 10px;
      font-weight:600
    }
    
    .twtr{
      margin-top:100px
    }
    
    `
                }

                </style>

            </div>
        </>

    )
}

