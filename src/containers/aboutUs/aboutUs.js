import React from 'react'
import Navbar from '../../components/navbar/navbar';
import { Row, Col, Container } from 'react-bootstrap';
import './aboutUs.scss'
import logo from '../../assets/github.png';
import diagram from '../../assets/diagram.png';

const AboutUsContainer = () => {
    return (
        <div className="AboutUs">
            <Navbar/>
            <div className="Title">About our project</div>
            {/* TODO Rework this into components */}
            {/* TODO Improve visuals*/}
            <Container >
                <Row>
                    <Col>
                        <h2 className='Subtitle'>What is it?</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor turpis, imperdiet a dapibus quis, aliquam eu nisi. In ac convallis est. Aliquam rhoncus enim ac ex hendrerit, sed mollis urna tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit, nunc vitae mollis laoreet, ipsum orci hendrerit augue, sit amet rutrum tellus augue vel tellus. Suspendisse consectetur sem nec pulvinar auctor. Praesent iaculis dignissim neque tincidunt dapibus. Phasellus sem ex, aliquam sed hendrerit ac, suscipit eget massa. Mauris sollicitudin vehicula enim et fermentum. Donec faucibus pretium mi, sodales aliquet leo feugiat eget. Sed a luctus ligula. Vivamus dolor dui, cursus convallis mauris et, congue cursus metus. Aenean vel est sapien. Morbi aliquam maximus leo nec euismod. Pellentesque vitae magna sit amet ipsum malesuada euismod non ac erat. Vestibulum consectetur fermentum facilisis. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='Subtitle'>How it works?</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor turpis, imperdiet a dapibus quis, aliquam eu nisi. In ac convallis est. Aliquam rhoncus enim ac ex hendrerit, sed mollis urna tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit, nunc vitae mollis laoreet, ipsum orci hendrerit augue, sit amet rutrum tellus augue vel tellus. Suspendisse consectetur sem nec pulvinar auctor. Praesent iaculis dignissim neque tincidunt dapibus. Phasellus sem ex, aliquam sed hendrerit ac, suscipit eget massa. Mauris sollicitudin vehicula enim et fermentum. Donec faucibus pretium mi, sodales aliquet leo feugiat eget. Sed a luctus ligula. Vivamus dolor dui, cursus convallis mauris et, congue cursus metus. Aenean vel est sapien. Morbi aliquam maximus leo nec euismod. Pellentesque vitae magna sit amet ipsum malesuada euismod non ac erat. Vestibulum consectetur fermentum facilisis. </p>
                    </Col>
                    <Col>
                        <h2 className='Subtitle'>Diagram</h2>
                        <div className="Diagram">
                            <img src={diagram} alt='diagram.PNG'  width="1000" height="650"></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='Subtitle'>Collaborators</h2>
                        <Row>
                            <Col>
                                <Row>
                                    <h3>Software development</h3>        
                                </Row>
                                <Row>
                                    <div className="Collaborator">
                                    <a href="https://github.com/alfonso46674" target="_blank" rel="noreferrer"><img src={logo} alt='GITHUB.PNG' width="30" height="30"></img></a>
                                    <p>Alfonso Ramirez</p>    
                                    </div>
                                </Row>
                                <Row>
                                    <div className="Collaborator">
                                    <a href="https://github.com/JPRR44" target="_blank" rel="noreferrer"><img src={logo} alt='GITHUB.PNG' width="30" height="30"></img></a>
                                        <p>Juan Pablo Ramos</p>
                                    </div>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <h3>Hardware development</h3>
                                </Row>  
                                <Row>
                                    <div className="Collaborator">
                                        <a href="https://github.com/Luisman1" target="_blank" rel="noreferrer"><img src={logo} alt='GITHUB.PNG' width="30" height="30"></img></a>
                                        <p> Luis Enrique Manzano</p>
                                    </div>
                                </Row>
                                <Row>
                                </Row>
                                    <div className="Collaborator">
                                        <a href="https://github.com/fernandofranco07" target="_blank" rel="noreferrer"><img src={logo} alt='GITHUB.PNG' width="30" height="30"></img></a>
                                        <p> Fernando Franco</p>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h2 className='Subtitle'>Technology used</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor turpis, imperdiet a dapibus quis, aliquam eu nisi. In ac convallis est. Aliquam rhoncus enim ac ex hendrerit, sed mollis urna tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit, nunc vitae mollis laoreet, ipsum orci hendrerit augue, sit amet rutrum tellus augue vel tellus. Suspendisse consectetur sem nec pulvinar auctor. Praesent iaculis dignissim neque tincidunt dapibus. Phasellus sem ex, aliquam sed hendrerit ac, suscipit eget massa. Mauris sollicitudin vehicula enim et fermentum. Donec faucibus pretium mi, sodales aliquet leo feugiat eget. Sed a luctus ligula. Vivamus dolor dui, cursus convallis mauris et, congue cursus metus. Aenean vel est sapien. Morbi aliquam maximus leo nec euismod. Pellentesque vitae magna sit amet ipsum malesuada euismod non ac erat. Vestibulum consectetur fermentum facilisis. </p>
                    </Col>
                </Row>
                
            </Container>
            
        </div>
    )
}

export default AboutUsContainer;