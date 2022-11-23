import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
  }
`;

const tabs= () => (
<div>
  <GlobalStyles/>
    <section className='jumbotron breadcumb no-bg'>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <h1>Tabs</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="container">
      <div className="row">
            
        <div className='col-md-6 mt-3'>
          <h3>Tab Style 1</h3>
          <div id="tabs1">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                  <div>
                  <p>Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div>
                  <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa 
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo est 
                  sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate 
                  exercitation cillum id incididunt elit sunt. Qui minim sit magna 
                  Lorem id et dolore velit Lorem amet exercitation duis deserunt. 
                  Anim id labore elit adipisicing ut in id occaecat pariatur ut 
                  ullamco ea tempor duis.</p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <div>
                  <p>Est quis nulla laborum officia ad nisi ex nostrud 
                  culpa Lorem excepteur aliquip dolor aliqua irure ex. 
                  Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit 
                  laborum veniam eu veniam. Eiusmod minim exercitation fugiat 
                  irure ex labore incididunt do fugiat commodo aliquip sit id 
                  deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur 
                  aute veniam incididunt mollit 
                  cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <h3>Tab Style 2</h3>
          <div id="tabs2">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                  <div>
                  <p>Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div>
                  <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa 
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo est 
                  sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate 
                  exercitation cillum id incididunt elit sunt. Qui minim sit magna 
                  Lorem id et dolore velit Lorem amet exercitation duis deserunt. 
                  Anim id labore elit adipisicing ut in id occaecat pariatur ut 
                  ullamco ea tempor duis.</p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <div>
                  <p>Est quis nulla laborum officia ad nisi ex nostrud 
                  culpa Lorem excepteur aliquip dolor aliqua irure ex. 
                  Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit 
                  laborum veniam eu veniam. Eiusmod minim exercitation fugiat 
                  irure ex labore incididunt do fugiat commodo aliquip sit id 
                  deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur 
                  aute veniam incididunt mollit 
                  cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>

         <div className='col-md-6 mt-3'>
          <h3>Tab Style 3</h3>
          <div id="tabs3">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                  <div>
                  <p>Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div>
                  <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa 
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo est 
                  sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate 
                  exercitation cillum id incididunt elit sunt. Qui minim sit magna 
                  Lorem id et dolore velit Lorem amet exercitation duis deserunt. 
                  Anim id labore elit adipisicing ut in id occaecat pariatur ut 
                  ullamco ea tempor duis.</p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <div>
                  <p>Est quis nulla laborum officia ad nisi ex nostrud 
                  culpa Lorem excepteur aliquip dolor aliqua irure ex. 
                  Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit 
                  laborum veniam eu veniam. Eiusmod minim exercitation fugiat 
                  irure ex labore incididunt do fugiat commodo aliquip sit id 
                  deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur 
                  aute veniam incididunt mollit 
                  cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <h3>Tab Style 4</h3>
          <div id="tabs4">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                  <div>
                  <p>Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div>
                  <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa 
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo est 
                  sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate 
                  exercitation cillum id incididunt elit sunt. Qui minim sit magna 
                  Lorem id et dolore velit Lorem amet exercitation duis deserunt. 
                  Anim id labore elit adipisicing ut in id occaecat pariatur ut 
                  ullamco ea tempor duis.</p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <div>
                  <p>Est quis nulla laborum officia ad nisi ex nostrud 
                  culpa Lorem excepteur aliquip dolor aliqua irure ex. 
                  Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit 
                  laborum veniam eu veniam. Eiusmod minim exercitation fugiat 
                  irure ex labore incididunt do fugiat commodo aliquip sit id 
                  deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur 
                  aute veniam incididunt mollit 
                  cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>
           

        </div>
    </section>


  <Footer />
</div>

);
export default tabs;