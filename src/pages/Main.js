import './Instagramm Api';

const Main = () => {
    return(
        <div class="App">        
            <header class="App-header"> 
                <div class="top-App-header">
                    <a href="/test" class="Logo">NELLY</a>
                    <a href="/" class="Logo-bottom">crystal</a>
                </div>
                <div class="bottom-App-header">
                    <div class="left">
                        <a href="/" class="link">Броши</a>
                        <a href="/" class="link">Ук. в волосы</a>
                        <a href="/" class="link">Ожерелья</a>
                        <a href="/" class="link">Браслет</a>
                    </div>
                    <div class="right">
                        <a href="/" class="link">Поиск</a>
                        <a href="/" class="link">Корзина</a>
                    </div>
                </div>         
            </header>

            <main class='content'>
                <section class="about">
                    <div class="background"></div>
                    <div class="about-content">
                        <img class="foto1" src="./foto/1.jpg" alt="Первое фото"/>
                        <img class="foto2" src="./foto/2.png" alt="Второе фото"/>
                        <img class="foto3" src="./foto/3.JPG" alt="Третье фото"/>
                        <div class="text1">
                            <h1>ABOUT US</h1>
                            <p>testtesttesttesttesttestettesttesttestetestettesttest</p>
                            <p>test testtesttesttesttestettesttesttestetestettesttesttest</p>
                            <p>Подпись заказчика</p>
                        </div>
                    </div>            
                </section>

                <section class="shop">
                    <div class="Block">
                        <div class="material">
                        </div>                  
                        <div class="tovar">  
                            <i>SHOP</i>                                    
                        </div>
                        <div class="material">
                        </div>
                    </div>
                    <div class="block">
                        <div class="material">
                            <h1>Bronze</h1>
                        </div>                  
                        <div class="tovar bordered"> 
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>  
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>       
                        </div>
                        <div class="material bordered"></div>
                    </div>
                    <div class="block">
                        <div class="material bordered">
                            <h1>Нень</h1>
                            <h1>Vlasovdap dolinsky</h1>
                        </div>
                        <div class="tovar bordered"> 
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>  
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>                     
                        </div>
                        <div class="material"></div>
                    </div>
                    <div class="block">
                        <div class="material">
                            <h1>Sperky</h1>
                        </div>               
                        <div class="tovar">  
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>  
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater1.png" alt="Первый материал"/></a>                   
                        </div>
                        <div class="material"></div>
                    </div>
                    <div class="block">
                        <div class="material">
                        </div>               
                        <div class="tovar"> 
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>  
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>
                            <a href="/"><img class="tovarFoto" src="./foto/mater2.png" alt="Первый материал"/></a>                    
                        </div>
                        <div class="material"></div>
                    </div>            
                    <button class="shopButton"> VICE </button>                    
                </section>

                <section className="insta">
                </section>

                <section class="deliver">
                    
                </section>
            </main>

            <footer class='footers'>
                <i class="contact">Контакawdawт my</i>
                <p class="questions">SKIBIDWDADWAFAGAWGAGWIPAPAPAP TEST TESTTEST?</p>
                <p class="textMassage">send us a message you can here</p>
                <div class="fieldBlock">
                    <p>Name</p>
                    <input class="inpField"></input>
                    <p>Email</p>
                    <input class="inpField"></input>
                    <p>Phone</p>
                    <input class="inpField"></input>
                    <p>Mesage</p>
                    <textarea class="message"></textarea>
                </div>
                <button class="send">Send</button>
            </footer>
        </div>
    )
}


export {Main}