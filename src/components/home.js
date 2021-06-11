import React from "react";
import Slide from 'react-elastic-carousel';
import styled from 'styled-components'
import {ReactComponent as SocialBank} from './images/social-bank.svg';
import {ReactComponent as IcDeposit} from './Icons/ic-marketing/ic-deposit.svg';
import Header from './images/bg-header.jpg'
import Middle from './images/img-app-card.png'
import {ReactComponent as IcTransfer} from './Icons/ic-marketing/ic-transfer.svg';
import {ReactComponent as IcCash} from './Icons/ic-marketing/ic-cash_out.svg';
import {ReactComponent as IcPay} from './Icons/ic-marketing/ic-pay.svg';
import Bottom from './images/bg-companies.jpg'
import {ReactComponent as IcLogo} from './images/institucional-logo-sistema-b.svg'
import {ReactComponent as IcBlog} from './Icons/ic-social/ic-blog.svg';
import {ReactComponent as IcFace} from './Icons/ic-social/ic-facebook.svg';
import {ReactComponent as IcInsta} from './Icons/ic-social/ic-instagram.svg';
import {ReactComponent as IcLink} from './Icons/ic-social/ic-linkedin.svg';
import {ReactComponent as IcMed} from './Icons/ic-social/ic-medium.svg';
import {ReactComponent as IcTwi} from './Icons/ic-social/ic-twitter.svg';
import {ReactComponent as IcYou} from './Icons/ic-social/ic-youtube.svg';

import './home.css'
import Card from "./cards";


// AQUI SE INICIA A DECISAO DE NAO USAR OS STYLED COMPONENTS POR MEDO DE ME COMPLICAR 

const Checkbox = props => (
    <input type="checkbox" {...props} />
  )

  

function Home() {
  return (
    <>
   
        <div className="container">
                    <SocialBank/>
        </div>            
            <div className="header">
                <img src={Header}/>
            </div>
            <div className="containerdesk">
                 <div className="text1">
                     Soluções completas para sua empresa
                </div>
            
                <div className="text2" id="middle">
                    Preencha as informações da sua empresa para que o nosso time comercial entre em contato.
                </div>    
{/* AQUI EU JA ESTAVA ARREPENDIDO MAS AINDA UMPOCO INSEGURO ENTAO CONTINUEI */}
                <form className="formao">
                    <div className="form" >
                        <input ClassName="nome" type="text" placeholder="Nome Completo"/>
                        
                    </div>
                    <div className="linha1"></div>
                    

                    <div className="form2">
                        <input name="empresa" type="text" placeholder="Nome da Empresa"/>
                        
                    </div>
                    <div className="linha2"></div>

                    <div className="form3">
                        <input  name="cargo" type="text" placeholder="Cargo"/>
                        
                    </div>
                    <div className="linha3"></div>


                    <div className="form4" >
                        <input name="email" type="text" placeholder="E-mail"/>
                        
                    </div>
                    <div className="linha4"></div>

                    
                    <div className="form5">
                        <input classname="telefone" type="text" placeholder="Telefone"/>
                        
                    </div>
                    <div className="linha5"></div>



                    <div className="form6">
                        <input name="cnpj" type="text" placeholder="CNPJ"/>
                        
                    </div>
                    <div className="linha6"></div>

               

                    <div className="checkb">
                        
                        <label className="teste">
                            
                        <Checkbox/>

                        </label>
                            <span>
                                Eu aceito receber comunicações do Social Bank e declaro que ao enviar minhas informações,
                                entendo as condições de tratamento dos meus dados pessoais e dou meu consentimento, 
                                quando aplicável, de acordo com o que está descrito nesta política de privacidade e nesse termo de uso.
                            </span>
                     </div>  


                </form> 

                <div className="btn">
                    <a href="#middle"><button className="btn1">Solicitar uma proposta</button></a>
                </div>

                </div>    

            <div className="container2">
            
                <div className="header2">
                     Tudo pelo nosso Internet Banking


                   
                        <div className="slider">
                        <Slide >
                        
                            <Card text="Depósito fácil"></Card>
                            <Card text="Transferências"/>
                            <Card text="Saques"/>
                            <Card text="Pagamentos"/>

                        </Slide>
                        </div>

                </div>
                <div className="btn">
                <a href="#middle">  <button className="btn2">Solicitar uma proposta</button></a>
                </div>
                
                </div>

                <div className="text3">
                     E para seus colaboradores, conta digital Social Bank com aplicativo gratuito
                </div> 


                <div className="imager">
                    <img src={Middle}/>
                </div> 
                    

                <div className="bic">
                        <spam>Depósito fácil</spam>
                        
                </div>
                <div className="bic2">
                        <spam>DOC/TED de qualquer banco.</spam>
                        
                </div>

{/* MEU DEUS NAO DA PRA VOLTAR A TRAS */}
                
                <div className="icc">
                    <IcDeposit/>
                </div>
                    

                <div className="bit">
                        <spam>Transferências</spam>
                        
                </div>
                <div className="bit2">
                        <spam>Rápidas para qualquer conta.</spam>
                        
                </div>
                <div className="ict">
                    <IcTransfer/>
                </div>

                <div className="bid">
                        <spam>Saques em Banco24horas</spam>
                        
                </div>
                <div className="bid2">
                        <spam>São mais de 23 mil pelo Brasil.</spam>
                        
                </div>
                <div className="icd">
                    <IcCash/>
                </div>


                <div className="bif">
                        <spam>Pagamento de contas</spam>
                        
                </div>
                <div className="bif2">
                        <spam>Sem estresse, tudo pelo app.</spam>
                        
                </div>
                <div className="icf">
                    <IcPay/>
                </div>

                <div className="btn">
                <a href="#middle">   <button className="btn3">Solicitar uma proposta</button></a>
                </div>

                
                <div className="imager2">
                    <img src={Bottom}/>
                </div>

                <div className="bottomdiv">
                    <div className="textbottom">A plataforma para todos os tipos de empresas</div>
                    <div className="textbottom2">Microempreendedor Individual ou grandes empresas, nós temos a solução certa para você. </div>
                        <div className="btn">
                        <a href="#middle">  <button className="btn4">Solicitar uma proposta</button></a>
                        </div>

                </div>

                <div className="finalcont">
                    <div className="sbbottom">Social Bank</div>
                    <div className="sbbottom2">Para você</div>
                    <div className="sbbottom3">Para seu negócio</div>
                    <div className="sbbottom4">Blog</div>
                    <div className="sbbottom5">Transparência</div>
                    <div className="sbbottom6">Tarifas</div>
                    <div className="sbbottomm">Políticas de Privacidade</div>
                    <div className="sbbottom7">Termos de Uso</div>

                    <div className="sbbottom8">Fale Conosco</div>

                    <div className="sbbottom9">(11) 4003-3595</div>
                    <div className="sbbottom10">São paulo e região</div>
                    <div className="sbbottom11">0800 772 9773</div>
                    <div className="sbbottom12">Outras localidades</div>
                    <div className="sbbottom13">atendimento@socialbank.com.br</div>
                    <div className="sbbottom14">
                        Rua Carajás, 384 - Uberlândia, Minas Gerais - Brasil
                        Social Bank S.A. - CNPJ: 23.757.411/0001-21
                        Copyright © Social Bank Todos os Direitos Reservados.
                    </div>


                    <div className="bline"></div>

                    <div className="logob"><IcLogo/></div>

                    <div className="sbbottom15">Continue com a gente</div>
                    <div className="may">
                    <div className="blog"><IcBlog/></div>
                    <div className="insta"><IcInsta/></div>
                    <div className="link"><IcLink/></div>
                    <div className="face"><IcFace/></div>
                    <div className="yt"><IcYou/></div>
                    <div className="twi"><IcTwi/></div>
                    <div className="med"><IcMed/></div>
                    </div>
                </div>
    </>
  );
}
// É.... EU DEVIA TER USADO O STYLED COMPONENTS
export default Home;
