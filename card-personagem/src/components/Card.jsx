//próximos passos: galeria de cars, passar images, rotacionar

import { CardBackContainer, CardInfoContainer, CardCenter, Container } from "./Card.styles"
import character_rey from '../assets/character-rey.svg'

export function Card(){
    new Atropos({
        el: ".atropos"
    })


    return(
        <>
            <Container className="atropos">
                <div className="cards">
                    <CardBackContainer>
                        <h1>FINN</h1>
                    </CardBackContainer>

                    <CardCenter>
                        <div class="atropos-scale">
                            {/* <!-- rotate container (required) --> */}
                            <div class="atropos-rotate">
                                {/* <!-- inner container (required) --> */}
                                <div class="atropos-inner">
                                    <CardInfoContainer>
                                <header>
                                    <h2>Rey Skywalker</h2>
                                    <p>Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.</p>
                                </header>

                                <div className="character">
                                <img src={character_rey} alt="" data-atropos-offset="4"/>
                            </div>

                            <main>
                                <div className="info">
                                    <span>Filmes</span>
                                    <h4>The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny</h4>
                                </div>
                                <div className="info">
                                    <span>Espécie</span>
                                    <h4>Humana</h4>
                                </div>
                                <div className="info">
                                    <span>Altura</span>
                                    <h4>1,7m</h4>
                                </div>
                                <div className="info">
                                    <span>Localidade</span>
                                    <h4>Jakku</h4>
                                </div>
                                <div className="info">
                                    <span>Armas</span>
                                    <h4>Sabre de luz, Blaster, Quarterstaff</h4>
                                </div>
                            </main>
                                    </CardInfoContainer> 
                                </div>
                            </div>
                        </div>  
                    </CardCenter>

                    <CardBackContainer>
                        <h1>BB-8</h1>
                    </CardBackContainer>
                </div>
            </Container>
        </>
    )
}